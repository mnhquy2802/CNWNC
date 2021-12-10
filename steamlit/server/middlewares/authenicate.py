from functools import wraps
from api import SessionMap, UserSession
import jwt
from fastapi import FastAPI, Request
from config.configs import config_model

def authenicate(jwtToken, url, method):
    if jwtToken is None:
        return False, {"success": False, "message": "Missing token on request."}
        
    elif jwtToken in SessionMap:
        sessionId =  SessionMap[jwtToken]
        dataUser =  UserSession[sessionId] 
        userRole = dataUser['role']
        url = "/" + url
        print(userRole)
        print("url : ---> ", url)
        for role in userRole:
            print("role : -------> ", role)
            print("(url,method) : ------->" , (url,method))
            if (url,method) == role:
                return True, None
            else:
                return False, {"success": False, "message": f"not have permission for {url}!"}
    else:
        return False, {"success": False, "message": "Incorrect token."}


def authenicate_required():
    def _authenicate(f):
        @wraps(f)
        def __authenicate(*args, **kwargs):
            jwtToken = request.headers.get("x-access-token")
            if jwtToken is None:
                return {"success": False, "message": "Missing token on request."}
                
            elif jwtToken in SessionMap:
                sessionId =  SessionMap[x_access_token]
                dataUser =  UserSession[sessionId] #= {"user" : user, "role" : list_role}
                userRole = dataUser['role']
                pass

            else:
                return {"success": True, "message": "Incorrect token."}

            return f(*args, **kwargs)

        return __authenicate

    return _authenicate

