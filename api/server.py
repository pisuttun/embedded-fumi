import os
from flask import Flask
import flask_cors
import firebase_admin
from firebase_admin import credentials, firestore
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

@app.route('/score', methods=['GET'])
def score():
    return "TEST"

def run():
    if(os.getenv("env") == "dev"):
        app.run(debug=True, port=8000)
    else:
        app.run(host='0.0.0.0', debug=True, port=8000)
run()
