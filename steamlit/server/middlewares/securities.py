import string
import random
import base64
import jwt

class Security():
    def __init__(self, config):
        self.secret = config.load_secretKey()

    def jwt_encode(self, value):
        encoded = jwt.encode(value, self.secret, algorithm='HS256')
        return encoded

    def jwt_decode(self, value):
        decoded = jwt.decode(value, self.secret, algorithm='HS256')
        return decoded

    def create_security(self, value):
        N = 30
        random_string = ''.join(random.choice(string.ascii_uppercase + string.digits) for _ in range(N))
        x_access_token = jwt.encode(value, self.secret, algorithm='HS256')
        return x_access_token
    
    def create_x_access_token(self, value):
        N = 30
        random_string = ''.join(random.choice(string.ascii_uppercase + string.digits) for _ in range(N))
        x_access_token = jwt.encode(value, self.secret, algorithm='HS256')
        return x_access_token
