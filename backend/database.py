import pymongo
import os
from dotenv import load_dotenv

load_dotenv()

client = pymongo.MongoClient(os.getenv("MONGO_URI"))
db = client["mongodb+srv://puseletso55:Daniel@9615@townshipbusinesschatbot.awtrt6h.mongodb.net/?retryWrites=true&w=majority&appName=TownshipBusinessChatbot"]


