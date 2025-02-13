# Copyright (c) 2024 Your Name

"""Main entry point for the Township Small Business Directory Streamlit app."""

import streamlit as st
from frontend.pages import home, business_form, user_form, chatbot_ui

def main():
    """Run the main Streamlit app."""
    st.set_page_config(page_title="Township Small Business Directory", page_icon="🏢")
    st.title("Welcome to the Township Small Business Directory")
    st.sidebar.title("Navigation")
    page = st.sidebar.radio("Select a page:", ["Home", "Register Business", "User Registration", "Chatbot"])

    if page == "Home":
        home.display()
    elif page == "Register Business":
        business_form.display()
    elif page == "User Registration":
        user_form.display()
    elif page == "Chatbot":
        chatbot_ui.display()

if __name__ == "__main__":
    main()

