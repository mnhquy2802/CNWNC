# from typing import Tuple
# from entities import Users
# from repositories import UserRepository
# from middlewares.securities import Security
# from validate import schema
# from config.configs import config_model
# from api import UserSession, SessionMap
# from sqlalchemy.orm import Session
# from repositories.CustomerOrderRepository import CustomerOrderRepository
# from repositories.OrderDetailRepository import OrderDetailRepository
# from common.convertDB import to_dict
# import traceback

# class OrderDetailService():

#     orderDetailRepo =  OrderDetailRepository()

#     def getOrderDetails_byOrderId(self, db: Session, orderId : int):
#         try:
#             customerOrder = self.customerOrderRepository.get_CustomerOrder(db, orderId)
#             return True, customerOrder 

#         except:
#             return False, None


#     def getOrderById(self, customerOrderId):
#         try:
#             customerOrder = self.customerOrderRepository.get_CustomerOrder_byId(customerOrderId)
#             return True, customerOrder
#         except:
#             return False, None
    
#     def filterCustomerOrderByUserId(self, userId):
#         try:
#             order = self.customerOrderRepository.get_CustomerOrder_byUserId(userId)
#             return True, order
#         except:
#             return False, None


#     def createOrderDetail(self, db, order : schema.CustomerOrderCreate):
#         try:
#             self.customerOrderRepository.create_order(db, order)
#             return True
#         except:
#             tb = traceback.print_exc()
#             print(tb)
#             return False

#     def deleteOrderDetail(self, db, order: schema.OrderDetailDelete):
#         try:
#             self.customerOrderRepository.deleteOrder(db, order.orderId)
#             return True
#         except:
#             return False

    
#     def get_OrderDetail_byOrderId(self, db, orderCustomerId: int):
#         try:
#             orderDetail = self.orderDetailRepo.get_CustomerOrder_byId(db, orderCustomerId)
#         except:
#             return False, None