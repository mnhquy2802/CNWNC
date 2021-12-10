import traceback
from typing import Tuple
from entities import Users
from repositories import UserRepository
from middlewares.securities import Security
from server.common.convertDB import to_list
from validate import schema
from config.configs import config_model
from api import UserSession, SessionMap
from repositories.ActionRepository import ActionRepository
from common.convertDB import to_dict

class ActionService():

    actionRepository = ActionRepository()

    def getActionById(self, actionId):
        try:
            ListAction = self.actionRepository.get_actions_byId(actionId)
            return True, ListAction
        except:
            return False, None
    
    def filterActionByName(self, name):
        try:
            action = self.actionRepository.get_actions_byName(name)
            return True, action
        except:
            return False, None

    def getActions(self, db, skip = 0, limit = 100):
        try:
            action = self.actionRepository.get_actions(db, skip, limit)
            return True, action
        except:
            return False, None

    def createAction(self, db, action : schema.ActionCreate):
        try:
            print("action : --------> ", action)
            self.actionRepository.create_action(db, action)
            return True
        except:
            tb = traceback.print_exc()
            print(tb)
            return False

    def deleteAction(self, db, action: schema.ActionDelete):
        try:
            actionObject = self.actionRepository.get_actions_byName(db, action.name)
            print(actionObject)
            self.actionRepository.delete_actions(db, actionObject)
            return True

        except:
            return False

            