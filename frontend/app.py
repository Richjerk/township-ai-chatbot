import streamlit as st

st.title("Township Business Directory")
st.write("Welcome to the Township Small Business Finder!")

# Sample business listing
businesses = [
    {"name": "Loxion Bakery", "description": "Freshly baked bread daily.", "phone": "012-345-6789"},
    {"name": "Kwena Mechanics", "description": "Car repairs and maintenance.", "phone": "098-765-4321"}
]

st.subheader("Businesses Listed:")
for business in businesses:
    st.write(f"**{business['name']}** - {business['description']} ({business['phone']})")

st.subheader("Chatbot")
st.write("Ask the AI chatbot about local businesses!")

