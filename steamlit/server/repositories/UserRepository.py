from sqlalchemy.orm import Session
from entities.Users import Users
from validate import schema
from common.convertDB import to_list, to_dict
import traceback

class UserRepository():
    def get_user_byId(self, db: Session, user_id: int):
        return db.query(Users).filter(Users._id == user_id).first()

    def get_user_by_username_password(self, db: Session, username: str, password: str):
        return db.query(Users).filter(Users._username == username, Users._password == password).first()

    def get_user_by_username(self, db: Session, username: str):
        return db.query(Users).filter(Users._username == username).first()

    def get_users(self, db: Session, skip: int = 0, limit: int = 100):
        try:
            return db.query(Users).offset(skip).limit(limit).all()
        except:
            return None

    def create_user(self, db: Session, user: schema.UserCreate):
        try:
            fake_hashed_password = user.password + "_notreallyhashed"
            db_user = Users(_username=user.username, _password=fake_hashed_password, roleName = True)
            db.add(db_user)
            db.commit()
            db.refresh(db_user)
            return True

        except:
            tb= traceback.print_exc()
            print(tb)
            return False

    def create_user_client(self, db: Session, user: schema.UserCreate):
        try:
            fake_hashed_password = user.password + "_notreallyhashed"
            db_user = Users(_username=user.username, _password=fake_hashed_password, roleName = False)
            db.add(db_user)
            db.commit()
            db.refresh(db_user)
            return True

        except:
            tb= traceback.print_exc()
            print(tb)
            return False

    def delete_user(self, db: Session, user):
        try:
            db_user = user
            db.delete(db_user)
            db.commit()
            return True
        except:
            tb = traceback.print_exc()
            print(tb)
            return False
