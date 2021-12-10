import config.configs as cf
from common.minio import MinioModel



class MinioService():
    def __init__(self):
        config_enviroment = cf.configModel()
        self._minio_local = MinioModel( cf.Host, cf.access_key, cf.secret_key, cf.secure )
        # client = self._minio_local.get_client()

    def get_minio(self):
        return self._minio_local