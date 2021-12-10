import traceback
import requests
import json
import numpy as np 
import base64
import re
import os
from datetime import datetime

def getHeader():
    """
        Input: headerCheck
        Action: Pass full object to headers if headerCheck is full
        Ouput: Return headers pass to API
    """
    headers = {'Accept': '*/*', 'Content-Type': 'application/json'}
    return headers


def send_request( urlsend, data , status_code = False , type_request = None ):
    """
        Input: url, data, headerCheck, type of response you want to get
        Action:
            - Load json data
            - Send post request
        Output: Check type response to get response or status code
    """   

    global content
    global cookie
    global url_signin
    headers = getHeader() 

    # data = json.loads(data) if type(data) != type(dict()) else data    
    if str(type_request).lower() in ['post', 'none']:  
        response = requests.post(url = urlsend, json = data , headers = headers)
        
    elif str(type_request).lower() ==  'get':
        response = requests.get(url = urlsend, params = data , headers = headers)

    elif str(type_request).lower() ==  'put':
        response = requests.put(url = urlsend, json = data , headers = headers)

    try:
        if response.content is not None :
            content = json.loads(response.content)
    except Exception:
        content = response.content
        content = json.loads(content)

    if status_code == False:
        return content
    else:
        return content, response.status_code    


def get_type_file(path):
    file_component = path.split(".")
    if len(file_component) > 1:
        return file_component[len(file_component) -1 ] 
    return None

def read_image_color(image_path, percent = None, dim = None):
    img = cv2.imread(image_path, cv2.IMREAD_COLOR)
    if percent != None or dim != None:
        img = resize_image_down(img, percent = percent, dim = dim)
    return img

        
def resize_image_down(img, percent = None, dim = None):
    if percent != None:
        percent = 60 # percent of original size
        width_resize = int(img.shape[1] * percent / 100)
        height_resize = int(img.shape[0] * percent / 100)
        dim = (width_resize, height_resize)
    # resize image
        resized = cv2.resize(img, dim, interpolation = cv2.INTER_AREA)

    elif dim != None:
        resized = cv2.resize(img, dim, interpolation = cv2.INTER_AREA)

    # elif height != None:
    #     percent = int(100 * height / img.shape[1])
    #     # width_resize = int(img.shape[1] * percent / 100)
    #     height_resize = int(img.shape[0] * percent / 100)
    #     dim = (width_resize, height_resize)
    #     resized = cv2.resize(img, dim, interpolation = cv2.INTER_AREA)

    return resized

def decode_upload_image(contents):
    nparr = np.fromstring(contents, np.uint8)
    img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
    print("image : ------> ", img)
    # return_img = processImage(img)

    img = resize_image_down(img, dim = (480, 360) )
    print("image : ------> ", img.shape)


    return img

def NoneToStr(value):
    print("value : ----> ", value)
    for i in value:
        if isinstance(value[i], dict):
            value[i] = NoneToStr(value[i])
        
        if isinstance(value[i], str):
            print("value string : ------> ", value[i])
            h = re.sub(r"(?<!\\)(\\\\)*\\n|\n", "", value[i])
            value[i] = h
        if value[i] == None:
            value[i] = "Null"
        
    return value


def filestore(path):
    component = path.split("static/")
    print("component", len(component))
    if len(component) > 0 :
        print("component 1 : ", component[1])
        return component[1]

    else:
        return path        


def encode_base64(message):
    message_bytes = message.encode('ascii')
    base64_bytes = base64.b64encode(message_bytes)
    return base64_bytes

def decode_base64(message):
    message_bytes = base64.b64decode(message)
    message = message_bytes.decode('ascii')
    return message

def check_datetime(dd):
    try:
        format = "%Y-%m-%d"
        dt = datetime.strptime(dd, format)
        return dt
    except:
        tb = traceback.print_exc()
        print(tb)
        raise Exception("Wrong format datetime!")
