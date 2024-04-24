// Get the form element
const form = document.querySelector('form');

// Add event listener for form submission
form.addEventListener('submit', (event) => {
    // Prevent the default form submission
    event.preventDefault();

    // Get the input values
    const username = document.querySelector('#username').value;
    const title = document.querySelector('#postSubject').value;
    const content = document.querySelector('#postContent').value;

    // Check if any of the fields are empty
    if (!username || !title || !content) {
        // Display an error message
        alert('Please complete the form before submitting.');
        event.stopImmediatePropagation();
    } else {
        // Submit the form
        form.submit();
        
    }
});

