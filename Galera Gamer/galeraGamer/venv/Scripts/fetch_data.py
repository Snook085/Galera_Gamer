from PIL import Image
from io import BytesIO
import base64
import re
import os
import requests
from bs4 import BeautifulSoup

# Função para salvar imagem a partir da URL base64
def save_image_from_data_url(data_url, image_name):
    match = re.match(r'^data:image/(?P<format>.+?);base64,(?P<data>.+)$', data_url)
    if match:
        image_format = match.group('format')
        image_data = match.group('data')
        image_bytes = base64.b64decode(image_data)
        image = Image.open(BytesIO(image_bytes))
        
        # Salvar imagem
        image_path = os.path.join(image_data, f'{image_name}.{image_format}')
        image.save(image_path, format=image_format.upper())
        
        return image_path
    return None
