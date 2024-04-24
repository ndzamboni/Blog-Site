const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.querySelector('#username').value;
    const title = document.querySelector('#postSubject').value;
    const content = document.querySelector('#postContent').value;

    if (!username || !title || !content) {
        alert('Please complete the form before submitting.');
        event.stopImmediatePropagation();
    } else {
        form.submit();
        
    }
});

