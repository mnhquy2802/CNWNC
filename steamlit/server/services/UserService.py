from typing import Tuple
from entities import Users
from repositories.UserRepository import UserRepository
from middlewares.securities import Security
from validate import schema
from config.configs import config_model
from api import UserSession, SessionMap
from repositories.UserPermissionRepository import UserPermissionRepository
from repositories.PermisionRepository import PermissionRepository
from services.UserPermissionService import UserPermissionService
from services.PermissionService import PermissionService
from common.convertDB import to_list, to_dict, encrypt_password 
import traceback

class UserService():
    security = Security(config_model)

    userPermissionService = UserPermissionService()

    permissionService = PermissionService()

    userRepository = UserRepository()

    def getRolePermission(self, db, userId):
        listPermissionId = self.userPermissionService.get_listPermissionId_byUserId(db, userId)
        get_Permission = lambda x : self.permissionService.getPermissionById(db, x)[1]
        listPermission = [ to_dict(get_Permission(PermissionId)) for PermissionId in listPermissionId ]
        print("listPermissionsss : -------> ", listPermission)
        return listPermission

    def login_client(self, db, user: schema.UserLogin):
        try:
            password  = encrypt_password(user.password)
            print("password : --->" ,password)
            userExist = self.userRepository.get_user_by_username_password(db, user.username, password)
            print("userExist : ------->",userExist)
            if userExist:
                userObject = to_dict(userExist)
                print("userObject : ---> ", userObject)
                print("userObject : -----> ", userObject)
                sessionId = self.security.create_security(user.dict())
                x_access_token = self.security.create_x_access_token(user.dict())
                print("x_access_token : --> ", x_access_token)
                SessionMap[x_access_token] = sessionId
                try:
                    list_role = self.getRolePermission(db, userObject['_id'])

                except:
                    list_role = []
                rolesReturn = dict()
                UserSession[sessionId] = {"user" : user, "role" :[ (item['_name'], item['_method']) for item in list_role]}#, "action" : list_action}
                for item in UserSession[sessionId]['role']:
                    if isinstance(item[0], str):
                        print("item 1  : -----> ", item[0])
                        tableAcess = item[0].split('-')[1]
                        if tableAcess in rolesReturn:
                            rolesReturn[tableAcess].append(item[1])
                        else:
                            rolesReturn[tableAcess] = list()
                            rolesReturn[tableAcess].append(item[1])
                print("rolesReturn : --------> " , rolesReturn)
                return True , x_access_token, rolesReturn
            else:
                tb = traceback.print_exc()
                print(tb)
                return False, None, None

        except:
            tb = traceback.print_exc()
            print(tb)
            return False, None, None

    def check_login(self, db, user: schema.UserLogin):
        try:
            password  = encrypt_password(user.password)
            print("password : --->" ,password)
            userExist = self.userRepository.get_user_by_username_password(db, user.username, password)
            print("userExist : ------->",userExist)
            if userExist:
                userObject = to_dict(userExist)
                print("userObject : ---> ", userObject)
                if userObject['roleName'] is True:
                    print("userObject : -----> ", userObject)
                    sessionId = self.security.create_security(user.dict())
                    x_access_token = self.security.create_x_access_token(user.dict())
                    print("x_access_token : --> ", x_access_token)
                    SessionMap[x_access_token] = sessionId
                    try:
                        list_role = self.getRolePermission(db, userObject['_id'])

                    except:
                        list_role = []
                    rolesReturn = dict()
                    UserSession[sessionId] = {"user" : user, "role" :[ (item['_name'], item['_method']) for item in list_role]}#, "action" : list_action}
                    for item in UserSession[sessionId]['role']:
                        if isinstance(item[0], str):
                            print("item 1  : -----> ", item[0])
                            tableAcess = item[0].split('-')[1]
                            if tableAcess in rolesReturn:
                                rolesReturn[tableAcess].append(item[1])
                            else:
                                rolesReturn[tableAcess] = list()
                                rolesReturn[tableAcess].append(item[1])
                    print("rolesReturn : --------> " , rolesReturn)
                    return True , x_access_token, rolesReturn
            else:
                tb = traceback.print_exc()
                print(tb)
                return False, None, None

        except:
            tb = traceback.print_exc()
            print(tb)
            return False, None, None

    def check_login_client(self, db, user: schema.UserLogin):
        try:
            password  = encrypt_password(user.password)
            print("password : --->" , password)
            userExist = self.userRepository.get_user_by_username_password(db, user.username, password)
            print("userExist : ------->", userExist)
            if userExist:
                userObject = to_dict(userExist)
                print("userObject : ---> ", userObject)
                print("userObject : -----> ", userObject)
                sessionId = self.security.create_security(user.dict())
                x_access_token = self.security.create_x_access_token(user.dict())
                print("x_access_token : --> ", x_access_token)
                SessionMap[x_access_token] = sessionId
                try:
                    list_role = self.getRolePermission(db, userObject['_id'])

                except:
                    list_role = []
                rolesReturn = dict()
                UserSession[sessionId] = {"user" : userExist, "role" :[ (item['_name'], item['_method']) for item in list_role]}#, "action" : list_action}
                for item in UserSession[sessionId]['role']:
                    if isinstance(item[0], str):
                        print("item 1  : -----> ", item[0])
                        tableAcess = item[0].split('-')[1]
                        if tableAcess in rolesReturn:
                            rolesReturn[tableAcess].append(item[1])
                        else:
                            rolesReturn[tableAcess] = list()
                            rolesReturn[tableAcess].append(item[1])
                print("rolesReturn : --------> " , rolesReturn)
                return True , x_access_token, rolesReturn
            else:
                tb = traceback.print_exc()
                print(tb)
                return False, None, None

        except:
            tb = traceback.print_exc()
            print(tb)
            return False, None, None

    def get_user(self, db):
        try:
            db_user = to_list(self.userRepository.get_users(db))
            print("db_user : -------> ", db_user)
            check = True
        except:
            db_user = None
            check = False

        return check, db_user

    def filter_user(self, db, username:str):
        try:
            db_user = to_dict(self.userRepository.get_user_by_username(db, username))
            check = True
        except:
            db_user = None
            check = False
        return check, db_user

    def create_user(self, db, user: schema.UserCreate):
        check = self.userRepository.create_user(db, user)
        return check
    
    def create_user_client(self, db, user: schema.UserCreate):
        check = self.userRepository.create_user_client(db, user)
        return check

    def delete_user(self, db, user: schema.DeleteUser):
        try:        
            db_user =  self.userRepository.get_user_by_username(db, user.username)
            self.userRepository.delete_user(db, db_user)
            return True
        except:
            return False
