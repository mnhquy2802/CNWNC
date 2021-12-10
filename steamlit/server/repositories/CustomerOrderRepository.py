import traceback
from sqlalchemy.orm import Session
from sqlalchemy.sql.sqltypes import DateTime
from entities.CustomerOrder import CustomerOrder
from validate import schema
import datetime


class CustomerOrderRepository():
    def get_CustomerOrders(self, db: Session, customerId: int, skip: int = 0, limit: int = 100):
        print("customerId : -------> ", customerId)
        result =  db.query(CustomerOrder).filter(CustomerOrder._customerid == customerId).offset(skip).limit(limit).all()
        print(result)
        return result
        
    def get_CustomerOrder_byId(self, db: Session, _id: int):
        return db.query(CustomerOrder).filter(CustomerOrder._id == _id).first()

    def filter_CustomerOrder(self, db: Session, customerOrder : schema.CustomerOrderFilter):
        return None

    def get_CustomerOrder_byUserId(self, db: Session, userId = int, price= int, createTime:DateTime = datetime.datetime.now(), endTime : DateTime=None):
        return db.query(CustomerOrder).filter(CustomerOrder._userId==userId, CustomerOrder._totalPrice==price, CustomerOrder._createTime==createTime, CustomerOrder._endTime==endTime).first()

    def create_order(self, db: Session, customerid, customerOrder: schema.OrderCreate):
        try:
            db_customerOrder = CustomerOrder( 
                _customerid = customerid,
                _quantiny = customerOrder.quantiny,
                _totalPrice = customerOrder.totalPrice, 
                _createTime = customerOrder.createTime, 
                _endTime = customerOrder.endTime,
                _tourDetailID = customerOrder.tourDetailID
                )
            print("CustomerOrder : ---> ", CustomerOrder._totalPrice)
            db.add(db_customerOrder)
            db.commit()
            db.refresh(db_customerOrder)
            return True
        except:
            tb = traceback.print_exc()
            print(tb)
            print("AAAAAAAAAAAAAAAAAAAAAAA")
            return False

    def update_customerOrder(self, db: Session, customerOrder: schema.CustomerOrderUpdate):
        try:
            db_customerOrder = CustomerOrder( 
                _userId = customerOrder.userid, 
                _totalPrice = customerOrder.totalPrice, 
                _createTime= customerOrder.createTime, 
                _endTime = customerOrder.endTime )
            db.add(db_customerOrder)
            db.commit()
            db.refresh(db_customerOrder)
            return True
        except:
            return False

    def delete_customerorder(self, db: Session, customerOrderId: int):
        try:
            db_customerOrder = self.get_CustomerOrder_byId(db, customerOrderId)
            db.delete(db_customerOrder)
            db.commit()
            return True
        except:
            tb = traceback.print_exc()
            print(tb)
            return False

