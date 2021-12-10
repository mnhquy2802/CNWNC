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
from common.convertDB import to_dict, to_list
from api import get_db
from middlewares.authenicate import authenicate
from services.CustomerOrderService import CustomerOrderService
# from services.OrderDetailService import OrderDetailService
from . import SessionMap, UserSession
router = APIRouter()

customerOrderService = CustomerOrderService()

# orderDetailService = OrderDetailService()

@router.get("/get-orderCustomer/")
def get_actions(request: Request, skip:int, limit:int, db: Session =  Depends(get_db)):
    jwtToken = request.headers.get('x_access_token')
    SessionId =  SessionMap[jwtToken]
    user = UserSession[SessionId]['user']
    check, orders = customerOrderService.getCustomerOrders(db,user._id, skip, limit)
    if not check:
        raise HTTPException(status_code=400, detail="Not Found Action!")
    return {"data" : to_list(orders)}


@router.get("/findtour")
def get_actions(orderId : int, db: Session = Depends(get_db)):
    check, actions = customerOrderService.get_OrderDetail_byOrderId(db, orderId)
    if not check:
        raise HTTPException(status_code=400, detail="Not Found Action!")
    return {"data" : to_list(actions)}


@router.post("/create-order")
def create_action(request: Request, order: schema.OrderCreate, db: Session = Depends(get_db)):
    jwtToken = request.headers.get('x_access_token')
    SessionId =  SessionMap[jwtToken]
    user = UserSession[SessionId]['user']
    print("Id : ---------> ", user._id)
    check = customerOrderService.createOrder(db, user._id, order)
    if not check:
        raise HTTPException(status_code=400, detail="Order Existed!")
    return {"data" : "Success!"}


@router.post('/delete-order')
def delete_user(order: schema.OrderDelete ,db : Session = Depends(get_db)):
    check =  customerOrderService.deleteOrder(db, order)
    if not check:
        raise HTTPException(status_code=400, detail="Action not exist!")
    return {"data" : "Success!"}
