from init import Base
from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, TIMESTAMP
from common.convertDB import to_list

class UserPermision(Base):
    __tablename__ = "UserPermission"

    _id = Column(Integer ,primary_key=True ,auto_increment=True)
    _userId = Column(Integer ,unique=False)
    _permissionId = Column(Integer ,unique=False)
    _timeCreate = Column(TIMESTAMP , unique=False)

    @staticmethod
    def transformObject(value):
        data = to_list(value)
        for entity in data:
            userPermision = UserPermision()
            userPermision._id = entity['_id']
            userPermision._userId = entity['_userId']
            userPermision._timeCreate = entity['_timeCreate']
        return userPermision
