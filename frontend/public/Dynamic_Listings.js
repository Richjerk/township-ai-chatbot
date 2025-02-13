// Mock database for storing businesses
const businesses = [];

// Handle business form submission
document.getElementById('business-form').addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent page reload

  // Collect form data
  const name = document.getElementById('business-name').value;
  const description = document.getElementById('business-description').value;
  const address = document.getElementById('business-address').value;
  const phone = document.getElementById('business-phone').value;

  // Add to the businesses array
  businesses.push({ name, description, address, phone });

  // Update business listings UI
  updateBusinessListings();

  // Clear form fields
  event.target.reset();
});

// Update business listings UI
function updateBusinessListings() {
  const businessList = document.getElementById('business-list');
  businessList.innerHTML = ''; // Clear current listings

  if (businesses.length === 0) {
    businessList.innerHTML = '<p>No businesses listed yet.</p>';
    return;
  }

  businesses.forEach((business) => {
    const businessDiv = document.createElement('div');
    businessDiv.className = 'business-card'; // Apply a class for styling
    businessDiv.innerHTML = `
      <h3>${business.name}</h3>
      <p>${business.description}</p>
      <p><strong>Address:</strong> ${business.address}</p>
      <p><strong>Phone:</strong> ${business.phone}</p>
      <hr>
    `;
    businessList.appendChild(businessDiv);
  });
}

