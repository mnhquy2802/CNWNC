from init import Base
from sqlalchemy import Boolean, Column, ForeignKey, Integer, String


class Permision(Base):
    __tablename__ = "Permission"

    _id = Column(Integer, primary_key=True, auto_increment=True)
    _name = Column(String(50), unique=False)
    _method = Column(String(50), unique=False)
