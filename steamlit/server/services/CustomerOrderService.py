from typing import Tuple
from entities import Users
from repositories import UserRepository
from middlewares.securities import Security
from validate import schema
from config.configs import config_model
from api import UserSession, SessionMap
from sqlalchemy.orm import Session
from repositories.CustomerOrderRepository import CustomerOrderRepository
from repositories.OrderDetailRepository import OrderDetailRepository
from common.convertDB import to_dict
import traceback

class CustomerOrderService():

    customerOrderRepository = CustomerOrderRepository()
    orderDetailRepo =  OrderDetailRepository()

    def getCustomerOrders(self, db: Session, userid:int, skip:int = 0, limit:int = 100):
        try:
            customerOrder = self.customerOrderRepository.get_CustomerOrders(db, userid, skip, limit)
            return True, customerOrder 

        except:
            return False, None

    def get_OrderDetail_byOrderId(self, db, orderId: int):
        try:
            order = self.customerOrderRepository.get_CustomerOrder_byId(db, orderId)
            return order
        except:
            return False, None

    def getOrderById(self, customerOrderId, skip, limit):
        try:
            customerOrder = self.customerOrderRepository.get_CustomerOrder_byUserId(customerOrderId, skip, limit)
            return True, customerOrder
        except:
            return False, None
    
    def filterCustomerOrderByUserId(self, userId):
        try:
            order = self.customerOrderRepository.get_CustomerOrder_byUserId(userId)
            return True, order
        except:
            return False, None


    def createOrder(self, db, customerid, order : schema.OrderCreate):
        try:
            result = self.customerOrderRepository.create_order(db, customerid, order)
            return result
        except:
            tb = traceback.print_exc()
            print(tb)
            return False

    def deleteOrder(self, db, order: schema.OrderDelete):
        try:
            result = self.customerOrderRepository.delete_customerorder(db, order.orderId)
            return result
        except:
            return False

    