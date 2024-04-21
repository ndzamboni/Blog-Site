// javascript for light/mode and dark mode for blog page

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

// ======================================================

// Retrieve stored data from localStorage
const storedPosts = JSON.parse(localStorage.getItem('blogPosts'));

// Function to display all posts
function displayAllPosts() {
    const postsDiv = document.getElementById('posts');

    if (storedPosts) {
        storedPosts.forEach(postData => {
            const postDiv = document.createElement('div');
            postDiv.classList.add('post-container');
            postDiv.innerHTML = `
                <h3>Username: ${postData.username}</h3>
                <h2>${postData.title}</h2>
                <p>${postData.content}</p>
            `;
            postsDiv.appendChild(postDiv);
        });
    }
}

// Call the function to display all posts when the page loads
displayAllPosts();

// Function to navigate back to the landing page (index.html)
function goBack() {
    window.history.back();
}