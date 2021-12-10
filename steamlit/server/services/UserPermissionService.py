from entities import Users
from repositories import UserRepository
from middlewares.securities import Security
from validate import schema
from config.configs import config_model
from api import UserSession, SessionMap
from repositories.UserPermissionRepository import UserPermissionRepository
from services.PermissionService import PermissionService
from entities.UserPermission import UserPermision
# from log import SysLog
from typing import List
from common.convertDB import to_dict

class UserPermissionService():
    security = Security(config_model)

    userPermissionRepo = UserPermissionRepository()

    permissionService = PermissionService()

    def get_UserPermission(self, db, userId : int):
        userPermission = self.userPermissionRepo.get_userPermission_byUserId(db, userId)
        # userPermission = UserPermision.transformObject(userPermission)
        return userPermission


    def get_listPermissionId_byUserId(self, db, userId : str) -> List[str]:
        print("userID : -----> ", userId)
        listPermissionId = set(to_dict(userPermission)['_permissionId'] for userPermission in self.get_UserPermission(db, userId))
        print("listPermissionId : ------->" , listPermissionId)
        return listPermissionId