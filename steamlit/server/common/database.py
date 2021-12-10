import time
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String,  create_engine
from sqlalchemy.orm import scoped_session, sessionmaker

class Database():
    Base = declarative_base()
    DBSession = scoped_session(sessionmaker())
    engine = None

    def init_sqlalchemy(self, dbname='sqlite:///sqlalchemy.db'):
        global engine
        engine = create_engine(dbname, echo=False)
        self.DBSession.remove()
        self.DBSession.configure(bind=engine, autoflush=False, expire_on_commit=False)
        self.Base.metadata.drop_all(engine)
        self.Base.metadata.create_all(engine)

    def deactivate_database():
        return None
    
