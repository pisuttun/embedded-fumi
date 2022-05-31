import os
from flask import Flask
import flask_cors
import firebase_admin
from firebase_admin import credentials, firestore
import datetime as dt
import dotenv

dotenv.load_dotenv()

cred = credentials.Certificate("firebase-key.json")

firebase_admin.initialize_app(cred)
firestore_db = firestore.client()

app = Flask('')
flask_cors.CORS(app)

@app.route('/')
def main():
	print("/ called")
	return "Test"

@app.route('/door', methods=['GET'])
def door():
    print("/door called")
    now = dt.datetime.utcnow() + dt.timedelta(hours=7)
    firestore_db.collection('logs').add({'label':'Untitled', 'type':'door opened!', 'datetime': str(now), 'favorite':False, 'checked':False})
    return "TEST"
  
@app.route('/sound', methods=['GET'])
def sound():
    print("/sound called")
    now = dt.datetime.utcnow() + dt.timedelta(hours=7)
    firestore_db.collection('logs').add({'label':'Untitled', 'type':'sound detected!', 'datetime': str(now), 'favorite':False, 'checked':False})
    return "TEST"

def run():
    if(os.getenv("env") == "dev"):
        app.run(debug=True, port=8000)
    else:
        app.run(host='0.0.0.0', port=8000)

run()