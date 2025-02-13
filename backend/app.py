from flask import Flask, request, jsonify
from flask_cors import CORS
from database import db
from chatbot import ai_response

app = Flask(__name__)
CORS(app)

@app.route('/api/businesses', methods=['POST'])
def add_business():
    data = request.json
    db.businesses.insert_one(data)
    return jsonify({"message": "Business added!"}), 201

@app.route('/api/chatbot', methods=['POST'])
def chatbot():
    user_message = request.json["message"]
    response = ai_response(user_message)
    return jsonify({"response": response})

if __name__ == '__main__':
    app.run(debug=True)

