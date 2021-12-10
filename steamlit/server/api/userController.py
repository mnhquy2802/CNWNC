from os import stat
from flask.json import jsonify
from pydantic.networks import HttpUrl
from sqlalchemy.sql.sqltypes import Integer
from starlette.requests import HTTPConnection
from fastapi import APIRouter, File, UploadFile ,Depends , Request
from sqlalchemy.orm import Session
from common.convertDB import to_list
from fastapi import HTTPException
from repositories.UserRepository import UserRepository
from validate import schema
from api import get_db, SessionMap, UserSession
from middlewares.authenicate import authenicate
from middlewares.securities import Security
from services.UserService import UserService

router = APIRouter()

userService = UserService()

listUserOnline = list()

@router.post("/login")
async def login(user : schema.UserLogin, db: Session =  Depends(get_db)):
    check_login, x_access_token, role =  userService.check_login(db, user)
    print("x_access_token : ", x_access_token)
    if check_login:
        listUserOnline.append(user.username)
        return {"status_code" : 200, "message" : "connected!", "x_access_token": x_access_token, "role" : role, "username": user.username }
    else:
        return HTTPException(status_code=400, detail="Wrong id or password!")

@router.post("/loginclient")
async def login(user : schema.UserLogin, db: Session =  Depends(get_db)):
    check_login, x_access_token, role =  userService.check_login_client(db, user)
    if check_login:
        listUserOnline.append(user.username)
        return {"status_code" : 200, "message" : "connected!", "x_access_token": x_access_token, "role" : role, "username": user.username }
    
    else:
        return HTTPException(status_code=400, detail = "Wrong id or password!")

@router.post("/logout")
# @authenicate()
async def logout(user : schema.UserLogout):
    try:
        sessionId = SessionMap[user.token]
        if sessionId:
            del UserSession[sessionId]
            return {"data" : "Success!"}
        
    except:
        raise HTTPException(status_code=400, detail="Some wrong when logout")

@router.post("/register")
async def create_user(user: schema.UserCreate ,db: Session = Depends(get_db)):
    check = userService.create_user(db, user)
    if not check:
        raise HTTPException(status_code=400, detail="Username created!")
    return {"data" : "Success!"}

@router.post("/registerclient")
async def create_user(user: schema.UserCreate ,db: Session = Depends(get_db)):
    check = userService.create_user_client(db, user)
    if not check:
        raise HTTPException(status_code=400, detail="Username created!")
    return {"data" : "Success!"}

@router.get('/filter-user/{username}')
async def get_user(username : str,db: Session = Depends(get_db)):
    print(username)
    check, db_user = userService.filter_user(db, username)
    print(check)
    if not check:
        raise HTTPException(status_code=400, detail="Not found user!")
    return {"data" : db_user}

@router.get('/get-users')
async def get_user(request : Request, db: Session = Depends(get_db)):
    jwtToken = request.headers.get('x_access_token')
    print("jwttoken have", jwtToken)
    checkauth, message = authenicate(jwtToken, 'get-users', 'get')
    if checkauth:
        check, db_user = userService.get_user(db)
        for item in db_user:
            print("item : ----------> ", item)
            if item['_username'] in listUserOnline:
                item['status'] = True
            else:
                item['status'] = False
    else:
        return message
    if not check:
        raise HTTPException(status_code=400, detail="Email already registered!")
    return {"data" : db_user}

@router.post('/delete-user')
async def delete_user(request: Request ,user: schema.DeleteUser ,db : Session = Depends(get_db)):
    jwtToken = request.headers.get('x_access_token')
    checkauth, message = authenicate(jwtToken ,"delete-user",'post')
    if checkauth:
        check = userService.delete_user(db, user)
    else:
        return message

    if not check:
        raise HTTPException(status_code=400, detail="User not exist!")
    return {"data" : "success!"}
