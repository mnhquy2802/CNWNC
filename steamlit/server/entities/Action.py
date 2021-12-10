from init import Base
from sqlalchemy import Boolean, Column, ForeignKey, Integer, String


class Actions(Base):
    __tablename__ = "Actions"

    _id = Column(Integer, primary_key=True, auto_increment=True)
    _name = Column(String(50), unique=False)
