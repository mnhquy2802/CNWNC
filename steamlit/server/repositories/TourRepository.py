from datetime import datetime
from sqlalchemy.orm import Session
from sqlalchemy.sql.sqltypes import DATETIME, TIME
from entities.Tour import Tours
from validate import schema
from common.convertDB import to_dict

class TourRepository():

    def get_Tour_byName(self, db: Session, tourname: str):
        return db.query(Tours).filter(Tours._tourName == tourname).all()

    def filter_Tour(self, db: Session, tour : schema.TourFilter):
        return db.query(Tours).filter(Tours._tourName == tour.name)

    def get_Tours(self, db: Session, skip = 0, limit=100):
        return db.query(Tours).offset(skip).limit(limit).all()

    def filter_Tour_byCreateTime(self, db: Session, createTime: DATETIME, skip : int = 0, limit: int = 100):
        return db.query(Tours).filter(Tours._createTime == createTime).offset(skip).limit(limit).all()

    def get_Tour_byId(self, db: Session, tourId: int):
        return db.query(Tours).filter(Tours._id == tourId).first()

    def create_Tour(self, db: Session, tour: schema.TourCreate):
        try:
            db_Tour = Tours(
                _tourName=tour.tourname, 
                _description = tour.description, 
                _createTime = datetime.now(),
                _RemoveTime = None
                )
            db.add(db_Tour)
            db.commit()
            db.refresh(db_Tour)
            return True
        except:
            print("Error !")
            return False

    def delete_tour(self, db: Session, tourId):
        try:
            tour = self.get_Tour_byId(tourId= tourId)
            db_tour = tour
            db.delete(db_tour)
            db.commit()
            db.refresh()
            return True

        except:
            return False

    