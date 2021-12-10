import os
from typing import Tuple, List
import redis
import base64
import hashlib
from fastapi_redis_cache.enums import RedisStatus
from datetime import timedelta
import datetime

class RedisComponent():
    def hash_value(self, value):
        hashed_value = hashlib.md5(value).hexdigest()
        return hashed_value

    def get_key(self, key):
        if isinstance(key, (str, int, float)):
            key =  base64.encode(key)
            return key
        
        else:
            raise Exception("can't hash key")

    def redis_connect(self, host_url: str) -> Tuple[RedisStatus, redis.client.Redis]:
        """Attempt to connect to `host_url` and return a Redis client instance if successful."""
        return self._connect(host_url) if os.environ.get("CACHE_ENV") != "TEST" else self._connect_fake()

    def _connect(self, host_url: str) -> Tuple[RedisStatus]:  # pragma: no cover
        try:
            self.redis_client = redis.from_url(host_url)
            if self.redis_client.ping():
                return (RedisStatus.CONNECTED)
            return (RedisStatus.CONN_ERROR)

        except redis.AuthenticationError:
            return (RedisStatus.AUTH_ERROR)

        except redis.ConnectionError:
            return (RedisStatus.CONN_ERROR)

    def _connect_fake(self) -> Tuple[RedisStatus, redis.client.Redis]:
        from fakeredis import FakeRedis

        return (RedisStatus.CONNECTED, FakeRedis())

    def put_data(self,name, key, value):  
        ttl = datetime.today() + timedelta(hours=72)  
        self.redis_client.hset(name=name, key=key, value=value)  
        self.redis_client.expire(name=name, time=ttl)

    def expire_time_data(self, name, time_expire):
        self.redis_client.expire(name=name, time=time_expire)

    def get_data(self, name, key):
        hash_name = self.hash_value(name)
        hash_key = self.hash_value(key)
        data = self.redis_client.get(name=hash_name, key=hash_key)
        return (data)
    

   