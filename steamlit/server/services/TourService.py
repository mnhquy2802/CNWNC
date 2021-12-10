from entities import Users
from repositories import UserRepository
from middlewares.securities import Security
from validate import schema
from config.configs import config_model
from api import UserSession, SessionMap
from repositories.TourRepository import TourRepository, TourDetaiRepository
from services import TourDetailService
from common.convertDB import to_list

class TourService():
    security = Security(config_model)

    tourRepository = TourRepository()

    # tourDetailService = TourDetailService()

    def getTour(self, db, skip : int = 0, limit : int = 100):
        listTour = to_list(self.tourRepository.get_Tours(db, skip, limit))
        return listTour


    def find_tour(self, tourname):
        try:
            listTour = self.tourRepository.get_Tour_byName(tourname)
            return True, listTour

        except:
            return False, list()

    def create_tour(self, db, tour):
        try:
            self.tourRepository.create_Tour(db, tour)
            return True
            
        except:
            return False

    def delete_tour(self, db, tour :schema.TourDelete):
        try:
            check, tourObject = self.find_tour(db, tour.name)
            if check:
                self.delete_tour(tourObject)
            return True
        except:
            return False