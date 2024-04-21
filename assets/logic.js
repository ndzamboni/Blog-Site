
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
        const postSubject = document.getElementById('postSubject').value;
        const postContent = document.getElementById('postContent').value;

        // Store data to localStorage
        const postData = {
            username: username,
            title: postSubject,
            content: postContent,
        };
        localStorage.setItem('blogPost', JSON.stringify(postData));

        // Redirect to posts page
        window.location.href = 'blog.html';
    });
});

// ======================================================

