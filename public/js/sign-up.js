const signupFormHandler = async (event) => {
  event.preventDefault();

  const signupUsername = document
    .querySelector('#username-signup')
    .value.trim();
  // const email = document.querySelector('#email-signup').value.trim();
  const signupPassword = document
    .querySelector('#password-signup')
    .value.trim();

  if (signupUsername && signupPassword) {
    const response = await fetch('/api/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        username: signupUsername,
        password: signupPassword,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    console.log(response);
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('#signup-form')
  .addEventListener('submit', signupFormHandler);
