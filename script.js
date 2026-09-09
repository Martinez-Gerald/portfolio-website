// --- Typing Effect Logic ---
// The text we want to type out
const textToType = "In an age of overwhelming data, I don't just collect numbers. I turn them into decisions.";

// The speed of the typing (in milliseconds per character)
const typingSpeed = 40; 

let i = 0;

function typeWriterEffect() {
    const targetElement = document.getElementById("typewriter-hook");
    if (!targetElement) return;

    // Check if there are still characters left to type
    if (i < textToType.length) {
        targetElement.innerHTML += textToType.charAt(i);
        i++;
        // Recursively call the function after a short delay
        setTimeout(typeWriterEffect, typingSpeed);
    }
}

// Trigger the animation as soon as the window loads
window.onload = () => {
    typeWriterEffect();
    initContactForm();
};


// --- Folder Animation & Navigation Logic ---
// Function to handle the folder click animation and page routing
function pullFile(folderElement, destinationUrl) {
    // 1. Add the CSS class that triggers the file pulling out
    folderElement.classList.add('extract-file'); /* [cite: 24, 31] */
    
    // 2. Wait exactly 600 milliseconds for the CSS animation to finish
    setTimeout(() => {
        // 3. Redirect to the new page
        window.location.href = destinationUrl;
        
        // Optional: Remove the class shortly after routing in case the user clicks the 'Back' button
        setTimeout(() => {
            folderElement.classList.remove('extract-file');
        }, 100);
        
    }, 600);
}


// --- Contact Form Handling ---
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const statusEl = document.getElementById('form-status');
    const submitBtn = form.querySelector('.submit-btn');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        submitBtn.disabled = true;
        submitBtn.textContent = 'Transmitting...';

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                form.reset();
                statusEl.textContent = "Message transmitted successfully. I'll be in touch soon.";
                statusEl.className = 'form-status form-status--success';
            } else {
                statusEl.textContent = 'Transmission failed. Please try again or email me directly.';
                statusEl.className = 'form-status form-status--error';
            }
        } catch (error) {
            statusEl.textContent = 'Transmission failed. Please check your connection and try again.';
            statusEl.className = 'form-status form-status--error';
        }

        statusEl.hidden = false;
        submitBtn.disabled = false;
        submitBtn.textContent = 'Transmit Message';
    });
}
