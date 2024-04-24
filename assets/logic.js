
// javascript for light/mode and dark mode for landing page

document.addEventListener('DOMContentLoaded', function () {
    const checkbox = document.querySelector('input[type="checkbox"]');
    checkbox.addEventListener('change', function () {
        if (this.checked) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }    
    });
});
// why does the page snap up to the top when i toggle light/dark?

// ======================================================

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('blogForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission behavior

        // Get form data
        const username = document.getElementById('username').value;
        const title = document.getElementById('postSubject').value;
        const content = document.getElementById('postContent').value;

        // Store data to localStorage
        const postData = {
            username: username,
            title: title,
            content: content,
        };

        // Retrieve existing posts from localStorage or initialize an empty array
        let existingPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

        // Add new post to existing posts array
        existingPosts.push(postData);

        // Store updated posts array in localStorage
        localStorage.setItem('blogPosts', JSON.stringify(existingPosts));

        // Redirect to posts page with query parameter
        window.location.href = 'blog.html?submitted=true';
    });
});

// ======================================================


// Retrieve user preference from localStorage
const isDarkMode = JSON.parse(localStorage.getItem('isDarkMode'));

// Set initial mode based on user preference
if (isDarkMode) {
    document.body.classList.add('dark-mode');
    document.querySelector('input[type="checkbox"]').checked = true;
}

// Update user preference when mode is toggled
document.addEventListener('DOMContentLoaded', function () {
    const checkbox = document.querySelector('input[type="checkbox"]');
    checkbox.addEventListener('change', function () {
        if (this.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('isDarkMode', true);
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('isDarkMode', false);
        }    
    });
});

