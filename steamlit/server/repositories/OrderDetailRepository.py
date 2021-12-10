from datetime import datetime
from sqlalchemy.orm import Session
from entities.OrderDetail import OrderDetail
from validate import schema
from common.common import check_datetime
from common.convertDB import to_dict
import traceback

class OrderDetailRepository():

    def get_OrderDetail_byOrderId(self, db: Session, orderId: int, skip:int = 0, limit:int = 100):
        return db.query(OrderDetail).filter(OrderDetail._orderId == orderId).skip(skip).limit(limit).all()
    
    def get_OrderDetail_byOrderDetailId(self, db: Session, orderDetailId : int):
        return db.query(OrderDetail).filter(OrderDetail._id == orderDetailId).first()

    def delete_OrderDetail(self, db: Session, orderDetailId):
        try:
            db_TourDetail = self.get_OrderDetail_byOrderDetailId(orderDetailId)
            db.delete(db_TourDetail)
            db.commit()
            return True
        except:
            return False

    