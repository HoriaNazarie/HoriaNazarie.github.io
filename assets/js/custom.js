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

// Avatar popup
document.addEventListener("DOMContentLoaded", () => {
    const avatar = document.querySelector(".image.avatar img");
    const body = document.body;
  
    // Create a modal container
    const modal = document.createElement("div");
    modal.style.position = "fixed";
    modal.style.top = "0";
    modal.style.left = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.background = "rgba(0, 0, 0, 0.7)";
    modal.style.display = "none";
    modal.style.justifyContent = "center";
    modal.style.alignItems = "center";
    modal.style.zIndex = "1000";
  
    // Create an enlarged image element
    const enlargedImage = document.createElement("img");
    enlargedImage.style.maxWidth = "300px"; // Limit width
    enlargedImage.style.maxHeight = "300px"; // Limit height
    enlargedImage.style.border = "5px solid white";
    enlargedImage.style.borderRadius = "50%"; // Make the image circular
    enlargedImage.style.objectFit = "cover"; // Ensure proper scaling inside the circle
    modal.appendChild(enlargedImage);
  
    // Add modal to the body
    body.appendChild(modal);
  
    // Click event to show modal
    avatar.addEventListener("click", () => {
      enlargedImage.src = avatar.src; // Use the same source as the avatar
      modal.style.display = "flex";
  
      // Add a blur to everything except the modal
      body.style.overflow = "hidden"; // Prevent scrolling
      body.querySelector("#header").style.filter = "blur(5px)";
    });
  
    // Click event to close modal
    modal.addEventListener("click", () => {
      modal.style.display = "none";
  
      // Remove blur and restore scroll
      body.style.overflow = "auto";
      body.querySelector("#header").style.filter = "none";
    });
  });
  