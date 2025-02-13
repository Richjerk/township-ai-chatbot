import streamlit as st
import requests

st.title("Register Your Business")

with st.form("business_form"):
    name = st.text_input("Business Name")
    description = st.text_area("Description")
    address = st.text_input("Address")
    phone = st.text_input("Phone")
    image_url = st.text_input("Image URL")
    submit = st.form_submit_button("Submit")

if submit:
    payload = {"Business Name": name, "Business Description": description, "Business Address": address, "Business Phone": phone, "Business Image": image_url}
    response = requests.post("http://127.0.0.1:5000/api/businesses", json=payload)
    st.success("Business added successfully!")

