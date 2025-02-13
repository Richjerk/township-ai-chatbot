import streamlit as st

st.title("User Registration")

with st.form("user_form"):
    username = st.text_input("Username")
    email = st.text_input("Email")
    phone = st.text_input("Phone")
    geo_tracking = st.checkbox("Enable Geo-tracking")
    submit = st.form_submit_button("Register")

if submit:
    st.success(f"Welcome {username}, you have registered successfully!")

