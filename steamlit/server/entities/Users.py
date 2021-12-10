import os
import sys
sys.path.append("..")
print(sys.path)
from init import Base
from sqlalchemy import Boolean, Column, ForeignKey, Integer, String


class Users(Base):
    __tablename__ = "Users"

    _id = Column(Integer, primary_key=True, auto_increment=True)
    _username = Column( String(50), unique=True )
    _password = Column( String(50), unique=False )
    roleName = Column( Boolean , unique=False, nullable=False)
    name = Column(String(50), unique=False)
    phoneNumber = Column(Integer, unique=False)
    _address = Column( String(200), unique=False)
