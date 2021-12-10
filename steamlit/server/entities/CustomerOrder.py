from sqlalchemy.sql.sqltypes import TIMESTAMP
from init import Base
from sqlalchemy import Boolean, Column, ForeignKey, Integer, String


class CustomerOrder(Base):
    __tablename__ = "Order"

    _id = Column(Integer, primary_key=True, auto_increment=True)
    _quantiny = Column(Integer, unique=False)
    _totalPrice = Column(Integer, unique=False)
    _createTime = Column(TIMESTAMP, unique=False)
    _endTime = Column(TIMESTAMP, unique=False)
    _tourDetailID = Column(Integer, unique=False)
    _customerid = Column(Integer, unique=False)
    _removeTime = Column(TIMESTAMP, unique=False)
    name = Column(String(50))
    _address = Column(String(50))
    phoneNumber = Column(Integer)
 