from sqlalchemy.sql.sqltypes import TIMESTAMP
from init import Base
from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
import datetime


class OrderDetail(Base):
    __tablename__ = "OrderDetail"

    _id = Column(Integer, primary_key=True, auto_increment=True)
    _orderId = Column(Integer, nullable=False)
    _tourDetailID = Column(Integer, nullable = False)
    _quantiny = Column(Integer, unique=False)
    _createTime = Column(TIMESTAMP, unique=False, default=datetime.datetime.utcnow)
    _removeTime = Column(TIMESTAMP, unique=False)
    