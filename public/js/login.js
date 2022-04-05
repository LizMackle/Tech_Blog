//  login submission
const loginFormHandler = async (event) => {
  event.preventDefault();

  const loginUsername = document.querySelector('#username-login').value.trim();
  const loginPassword = document.querySelector('#password-login').value.trim();

  if (loginUsername && loginPassword) {
    const response = await fetch('/api/users/login', {
      method: 'post',
      body: JSON.stringify({
        username: loginUsername,
        password: loginPassword,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('#login-form')
  .addEventListener('submit', loginFormHandler);
