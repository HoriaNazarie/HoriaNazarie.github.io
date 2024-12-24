// Email click and copy to clipboard
document.addEventListener('DOMContentLoaded', () => {
    const emailLink = document.getElementById('email-link');
    const copyMessage = document.getElementById('copy-message');

    emailLink.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default anchor click behavior

        // Copy email to clipboard
        const email = emailLink.textContent;
        navigator.clipboard.writeText(email).then(() => {
            // Show success message
            copyMessage.style.display = 'inline';

            // Hide the message after 3 seconds
            setTimeout(() => {
                copyMessage.style.display = 'none';
            }, 3000);
        }).catch(err => {
            console.error('Failed to copy email:', err);
        });
    });
});
