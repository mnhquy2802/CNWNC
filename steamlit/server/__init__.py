from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from common.bcolor import BCOLOR
from config.configs import config_model

SQLALCHEMY_DATABASE_URL = config_model.database_url

try:
    engine = create_engine(
        SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False}
    )
    SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

except:
    BCOLOR.FAIL("can't connect database")

Base = declarative_base()