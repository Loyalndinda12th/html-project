const contactForm = document.querySelector('.contact-form');
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    // Basic validation
    if (name.trim() === '') {
        alert('Please enter your name.');
        return; // Stop further processing
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
    return;
}
if (message.trim() === '') {
    alert('Please enter a message.');
    return;
  }

  // Create a simple object to hold the data
  const formData = {
    name: name,
    email: email,
    message: message
  };
  alert(`Thank you for your message, ${name}! We'll get back to you soon.`);

  // Clear the form fields
  contactForm.reset();
});

// Simple email validation function
function validateEmail(email) {
  // You can use a more robust regex if needed
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}
