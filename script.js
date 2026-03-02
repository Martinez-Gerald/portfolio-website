// --- Typing Effect Logic ---
// The text we want to type out
const textToType = "In an era of evolving digital threats, I don't just troubleshoot systems. I fortify them."; // [cite: 7]

// The speed of the typing (in milliseconds per character)
const typingSpeed = 40; 

let i = 0;

function typeWriterEffect() {
    const targetElement = document.getElementById("typewriter-hook");
    
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