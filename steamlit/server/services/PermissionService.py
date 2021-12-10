from typing import Tuple
from entities import Users
from repositories import UserRepository
from middlewares.securities import Security
from validate import schema
from config.configs import config_model
from api import UserSession, SessionMap
from sqlalchemy.orm import Session
from repositories.PermisionRepository import PermissionRepository
from common.convertDB import to_dict
import traceback

class PermissionService():

    permissionRepository = PermissionRepository()

    def getPermissionById(self,db, permissionId):
        try:
            print("permissionId ii : -----> ", permissionId)
            check, ListAction = self.permissionRepository.get_permission_byId(db, permissionId)
            if check:
                print("ListAction : -----> ", ListAction)
                return True, ListAction

            else:
                return False, ListAction

        except:
            return False, None
    
    def filterPermissionByName(self, name):
        try:
            permission = self.permissionRepository.get_permission_byName(name)
            return True, permission
        except:
            return False, None

    def getPermission(self, db, skip = 0, limit = 100):
        try:
            action = self.permissionRepository.get_permissions(db)
            return True, action
        except:
            return False, None

    def createPermission(self, db, permission : schema.PermissionCreate):
        try:
            self.permissionRepository.create_permission(db, permission)
            return True
        except:
            tb = traceback.print_exc()
            print(tb)
            return False

    def deletePermission(self, db, permission: schema.PermissionDelete):
        try:
            permissionObject = self.permissionRepository.get_permission_byName(db, permission.name)
            self.permissionRepository.DeletePermission(db, permissionObject)
            return True

        except:
            return False

            