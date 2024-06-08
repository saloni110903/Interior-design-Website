document.addEventListener('DOMContentLoaded', () => {
    // Navigation links
    document.querySelectorAll('nav a').forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetSection = event.target.textContent.toLowerCase();
        document.querySelector(`.${targetSection}`).scrollIntoView({ behavior: 'smooth' });
      });
    });
  
    // Sign Up button
    document.querySelector('.sign-up-button').addEventListener('click', () => {
      alert('Sign Up button clicked!');
    });
  
    // Start Project button
    document.querySelector('.start-project-button').addEventListener('click', () => {
      alert('Start Project button clicked!');
    });
  
    // Subscription form
    const subscribeButton = document.querySelector('.subscribe-button');
    subscribeButton.addEventListener('click', (event) => {
      event.preventDefault();
      const emailInput = document.querySelector('.email-field .enter-your-email');
      const email = emailInput.textContent;
      if (email) {
        alert(`Subscribed with email: ${email}`);
        emailInput.textContent = ''; // Clear the input
      } else {
        alert('Please enter a valid email address');
      }
    });
  
    // Testimonials carousel
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    const testimonials = document.querySelectorAll('.testamonial-1, .testamonial-2');
    let currentTestimonial = 0;
  
    const showTestimonial = (index) => {
      testimonials.forEach((testimonial, i) => {
        testimonial.style.display = i === index ? 'block' : 'none';
      });
    };
  
    leftArrow.addEventListener('click', () => {
      currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
      showTestimonial(currentTestimonial);
    });
  
    rightArrow.addEventListener('click', () => {
      currentTestimonial = (currentTestimonial + 1) % testimonials.length;
      showTestimonial(currentTestimonial);
    });
  
    // Initialize first testimonial display
    showTestimonial(currentTestimonial);
  });
  