import streamlit as st
import requests

st.title("Township Business Directory")
st.write("Find businesses in your area")

response = requests.get("http://127.0.0.1:5000/api/businesses").json()
for business in response.get("businesses", []):
    st.subheader(business["Business Name"])
    st.write(business["Business Description"])

