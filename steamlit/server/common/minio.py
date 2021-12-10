import sys
print(sys.path)
from tempfile import NamedTemporaryFile
# from minio.error import S3Error
# from minio import Minio
import numpy as np
import traceback

class MinioModel():
    bucket_name = "lending-flatform"

    def __init__(self, Host, access_key, secret_key, miniosecure):
        # self.client = Minio(
        #         Host,
        #         access_key=access_key,
        #         secret_key=secret_key,
        #         secure=miniosecure
        #     )
        # found = self.client.bucket_exists(self.bucket_name)
        # if not found:
        #     self.client.make_bucket(self.bucket_name)
        return None


    def put_object(self, Minio_store, file_store):
        #Define direct store.
        try:
            self.client.fput_object(self.bucket_name, Minio_store, file_store)
            return True

        except:
            tb = traceback.print_exc()
            return False
        ## get image from storage and read
    

    def get_object(self, file_dir):
        try:
            response = self.client.get_object(self.bucket_name, file_dir)
            # numpy array image
            return response.data

        # required to release resource
        finally:
            # response.close()
            response.release_conn()


    def get_object_image(self, file_dir):
        try:
            response = self.client.get_object(self.bucket_name, file_dir)
            # numpy array image
            image = cv2.imdecode(np.frombuffer(response.data, np.uint8), -1)
            nump = np.frombuffer(response.data, np.uint8)
            return image    

        # required to release resource
        finally:
            response.close()
            response.release_conn()


    def copy_object(self, source, dest):
        result = self.client.copy_object(
            self.bucket_name,
            source,
            CopySource(self.bucket_name, dest),
        )
        return result


    def get_list_object(self, prefix):
        objects = self.client.list_objects(self.bucket_name, prefix= prefix)

        list_obj = list()

        try:
            for obj in objects:
                list_obj.append(obj)

        finally:
            objects.close()

        return list_obj


    def get_client(self):
        return self.client

