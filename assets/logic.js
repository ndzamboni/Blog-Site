

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

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('blogForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); 

        const username = document.getElementById('username').value;
        const title = document.getElementById('postSubject').value;
        const content = document.getElementById('postContent').value;

        const postData = {
            username: username,
            title: title,
            content: content,
        };

        let existingPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

        existingPosts.push(postData);

        localStorage.setItem('blogPosts', JSON.stringify(existingPosts));

        window.location.href = 'blog.html?submitted=true';
    });
});

// ======================================================


const isDarkMode = JSON.parse(localStorage.getItem('isDarkMode'));

if (isDarkMode) {
    document.body.classList.add('dark-mode');
    document.querySelector('input[type="checkbox"]').checked = true;
}

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

