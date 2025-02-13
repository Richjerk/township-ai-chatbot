# Copyright (c) 2025 Mafisa Tech Affiliate Pty Ltd

"""Main entry point for the Township Small Business Directory Streamlit app."""

import streamlit as st
import re
from frontend.pages import home, business_form, user_form, chatbot_ui

# Set the page configuration
st.set_page_config(page_title="Township Small Business Directory", page_icon="🏢")

def is_valid_github_py_url(url):
    """Validate if the provided URL is a valid GitHub URL pointing to a .py file."""
    pattern = r'^https://github\.com/[^/]+/[^/]+/blob/.+\.py$'
    return re.match(pattern, url) is not None

def main():
    """Run the main Streamlit app."""
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

    # Input field for GitHub URL
    github_url = st.text_input("Enter the GitHub URL pointing to a .py file:")

    # Validate the input URL
    if github_url:
        if is_valid_github_py_url(github_url):
            st.success("Valid GitHub URL.")
            # Proceed with further processing
        else:
            st.error("Invalid URL. Please enter a valid GitHub URL pointing to a .py file.")

if __name__ == "__main__":
    main()

