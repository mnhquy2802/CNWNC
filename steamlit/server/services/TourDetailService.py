from typing import Tuple
from entities import Users
from repositories import UserRepository
from middlewares.securities import Security
from validate import schema
from config.configs import config_model
from api import UserSession, SessionMap
from sqlalchemy.orm import Session
from repositories.TourDetailRepository import TourDetailRepository
from common.convertDB import to_dict
import traceback

class TourDetailService():

    tourDetailRepository = TourDetailRepository()

    def getTourDetailByTourId(self, db, tourId: int):
        try:
            tourDetail= self.tourDetailRepository.get_TourDetail_byTourId(db, tourId)
            return True, tourDetail
        except:
            return False, None

    def getTourDetails(self, db):
        try:
            tourdetail = self.tourDetailRepository.get_TourDetails(db)
            print(tourdetail)
            return True, tourdetail
        except:
            return False, None

    def getTourDetailById(self, db, tourDetailID):
        try:
            ListTourDetail = self.tourDetailRepository.get_TourDetail_byId(db, tourDetailID)
            return True, ListTourDetail
        except:
            return False, None
    
    def filterToutDetail(self, db, tourDetail : schema.TourDetailFilter):
        try:
            TourDetail = self.tourDetailRepository.filter_TourDetail(db, tourDetail)
            return True, TourDetail
        except:
            return False, None

    def createTourDetail(self, db, tourDetail : schema.TourDetailUpdate):
        try:
            check = self.tourDetailRepository.create_TourDetail(db, tourDetail)
            if check:
                return True
            else:
                return False

        except:
            tb = traceback.print_exc()
            print(tb)
            return False

    def updateTourDetail(self, db, tourDetail: schema.TourDetailUpdate):
        try:
            tourDetailFilter = schema.TourDetailFilter()
            tourDetailFilter.quantiny = tourDetail.quantiny
            tourDetailFilter.price = tourDetail.price
            tourDetailFilter.startTime = tourDetail.startTime
            tourDetailFilter.endTime = tourDetail.endTime
            tourDetailFilter.categoryId = tourDetail.categoryId
            tourDetailFilter.tourId = tourDetail.tourId
            tourDetailFilter.totalPeople = tourDetail.totalPeople
            tourDetailObject = self.filterToutDetail(db, tourDetailFilter)
            self.deleteTourDetail(db, tourDetailObject)
            return True

        except:
            return False

    def deleteTourDetail(self, db, TourDetail: schema.TourDetailDelete):
        try:
            TourDetailObject = self.tourDetailRepository.get_TourDetail_byName(db, TourDetail.name)
            self.tourDetailRepository.DeleteTourDetail(db, TourDetailObject)
            return True

        except:
            return False

