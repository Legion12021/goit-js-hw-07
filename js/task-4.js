
document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.querySelector('.login-form');

  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = event.target.elements.email.value.trim();
    const password = event.target.elements.password.value.trim();

    if (email === '' || password === '') {
      alert('Please enter both email and password');
    } else {
      alert(`Login successful!\nEmail: ${email}\nPassword: ${password}`);
      
    }
  });
});
