import firebase_admin
from firebase_admin import credentials, firestore
import datetime as dt

cred = credentials.Certificate("firebase-key.json")

firebase_admin.initialize_app(cred)
firestore_db = firestore.client()

collectionName = "logs"
now = dt.datetime.utcnow() + dt.timedelta(hours=7)
print(now)
firestore_db.collection(collectionName).add({'label':'Untitled', 'sound':'file', 'datetime': str(now), 'favorite':False, 'checked':False})
