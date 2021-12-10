from datetime import datetime
from sqlalchemy.orm import Session
from entities.TourDetail import TourDetail
from validate import schema
from common.common import check_datetime
from common.convertDB import to_dict
import traceback

class TourDetailRepository():

    def get_TourDetail_byTourId(self, db: Session, tourid: int):
        return db.query(TourDetail).filter(TourDetail._tourId == tourid).all()
  
    def filter_TourDetail(self, db: Session, tourDetail : schema.TourDetailFilter, skip :int =0, limit : int = 100):
        return db.query(TourDetail).filter(TourDetail._quantiny >= tourDetail.quantiny, TourDetail._startTime >= tourDetail.startTime, TourDetail._endTime >= tourDetail.endTime, TourDetail._totalPeople == tourDetail.totalPeople).offset(skip).limit(limit).all()

    def get_TourDetail_byId(self, db: Session, tourdetailid: int):
        return db.query(TourDetail).filter(TourDetail._id == tourdetailid).first()

    def get_TourDetails(self, db: Session, skip : int = 0, limit : int = 100):
        return db.query(TourDetail).offset(skip).limit(limit).all()
    
    def create_TourDetail(self, db: Session, tourdetail: schema.TourDetailCreate):
        try:
            format = "%Y-%m-d"
            db_Tour = TourDetail(
                _quantiny = tourdetail.quantiny,
                _totalPeople = tourdetail.totalPeople,
                _startTime = check_datetime(tourdetail.startTime) ,
                _categoryId = tourdetail.categoryId,
                _endTime = check_datetime(tourdetail.endTime) ,
                _removeTime = None,
                _price =  tourdetail.price,
                _tourId =  tourdetail.tourId
                )
            db.add(db_Tour)
            db.commit()
            db.refresh(db_Tour)
            return True
        except:
            tb = traceback.print_exc()
            print(tb)
            return False

    def delete_tour(self, db: Session, tourId):
        try:
            db_TourDetail = self.get_Tour_byId(tourId= tourId)
            db.delete(db_TourDetail)
            db.commit()
            db.refresh()
            return True
        except:
            return False

    