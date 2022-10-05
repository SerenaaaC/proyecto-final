from pymongo import MongoClient

conn = MongoClient("mongodb+srv://admin:123@cluster0.lsrb1yg.mongodb.net/?retryWrites=true&w=majority")
db = conn.coach


