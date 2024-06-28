import requests
from PIL import Image

food_6 = Image.open("food_6.png")

url = 'http://localhost:4000/api/food/add'

data = {
    "name": "Peri Peri Rolls",
	"image": food_6,
    "price": 12,
    "description": "Food provides essential nutrients for overall health and well-being",
    "category": "Rolls"
}

x = requests.post(url,data = data)
print(x.text)