function initContactPage() {
  // Initialize FAQ functionality
  initFAQ();

  // Initialize contact form
  initContactForm();

  // Initialize chatbot (reusing from app.js)
  if (typeof window.initChatbot === 'function') {
    window.initChatbot();
  }
}

window.initContactPage = initContactPage;

function runOnReady(callback) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', callback, { once: true });
  } else {
    callback();
  }
}

runOnReady(initContactPage);

// Initialize FAQ accordions
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
      // Toggle active class on current item
      item.classList.toggle('active');

      // Optional: Close other items when one is opened
      faqItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
        }
      });
    });
  });
}

// Initialize contact form
function initContactForm() {
  const contactForm = document.getElementById('contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', handleContactFormSubmit);
  }
}

// Handle contact form submission
function handleContactFormSubmit(event) {
  event.preventDefault();

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  // Validate form (additional validation could be added)
  if (!name || !email || !subject || !message) {
    alert('Please fill in all fields.');
    return;
  }

  submitContactMessage({ name, email, subject, message });
}

async function submitContactMessage(payload) {
  const apiUrl = window.buildApiUrl
    ? window.buildApiUrl('/contact.php')
    : '/contact.php';

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error('Contact request failed');
    }

    const data = await response.json();
    if (!data.success) {
      throw new Error(data.error || 'Contact request failed');
    }

    showContactSuccess(payload.name);
  } catch (error) {
    alert('Sorry, we could not send your message right now. Please try again.');
  }
}

function showContactSuccess(name) {
  const formContainer = document.querySelector('.contact-form');
  if (!formContainer) return;

  const successMessage = document.createElement('div');
  successMessage.style.backgroundColor = '#e1f7e1';
  successMessage.style.color = '#28a745';
  successMessage.style.padding = '1rem';
  successMessage.style.borderRadius = '5px';
  successMessage.style.marginBottom = '1rem';
  successMessage.style.textAlign = 'center';
  successMessage.innerHTML = `
    <i class="fas fa-check-circle" style="margin-right: 0.5rem;"></i>
    Thank you, ${name}! Your message has been sent successfully. We'll get back to you soon.
  `;

  formContainer.innerHTML = '';
  formContainer.appendChild(successMessage);
}

// Subscribe to newsletter
function subscribeToNewsletter(email) {
  // In a real app, this would send a request to a server to add the email to a newsletter list
  if (!email || !validateEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  // For demo purposes, just show a success message
  alert(`Thank you for subscribing to our newsletter with email: ${email}`);
}

// Validate email format
function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}
