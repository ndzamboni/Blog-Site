
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

const storedPosts = JSON.parse(localStorage.getItem('blogPosts'));

function displayAllPosts() {
    const postsDiv = document.getElementById('posts');

    if (storedPosts) {
        storedPosts.forEach(postData => {
            const postDiv = document.createElement('div');
            postDiv.classList.add('post');
            postDiv.innerHTML = `
                <h3>Username: ${postData.username}</h3>
                <h2>${postData.title}</h2>
                <p>${postData.content}</p>
            `;
            postsDiv.appendChild(postDiv);
        });
    }
}

displayAllPosts();

function goBack() {
    window.location.href = 'index.html';
}


// ======================================================

