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
from server.validate.schema import UserBase
from validate import schema
from common.convertDB import to_dict, to_list
from api import get_db
from middlewares.authenicate import authenicate
from services.ActionService import ActionService

router = APIRouter()

actionService = ActionService()

@router.get("/get-actions")
def get_actions(db: Session =  Depends(get_db)):
    check, actions =  actionService.getActions(db)
    if not check:
        raise HTTPException(status_code=400, detail="Not Found Action!")
    return {"data" : to_list(actions)}


@router.get('/get-action/{name}')
# @authenicate()
def get_action_byName(action : schema.FilterAction,db: Session = Depends(get_db)):
    check, db_action = actionService.filterActionByName(db, action.name)
    if not check:
        raise HTTPException(status_code=400, detail="Not found user!")
    return {"data" : to_dict(db_action)}


@router.post("/create-action")
def create_action(action: schema.ActionCreate ,db: Session = Depends(get_db)):
    print("action create : -----> ", action.name)
    check = actionService.createAction(db, action)
    if not check:
        raise HTTPException(status_code=400, detail="Action Existed!")
    return {"data" : "Success!"}


@router.post('/delete-action')
def delete_user(action: schema.ActionDelete ,db : Session = Depends(get_db)):
    check =  actionService.deleteAction(db, action)
    if not check:
        raise HTTPException(status_code=400, detail="Action not exist!")
    return {"data" : "Success!"}

