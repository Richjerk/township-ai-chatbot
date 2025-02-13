import streamlit as st
import requests

st.title("AI Business Finder Chatbot")

user_message = st.text_input("Ask about businesses...")
if st.button("Send"):
    response = requests.post("http://127.0.0.1:5000/api/chatbot", json={"message": user_message}).json()
    st.write(f"🤖: {response['response']}")

