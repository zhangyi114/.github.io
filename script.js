document.addEventListener('DOMContentLoaded', function () {
    const nav = document.querySelector('nav');
    const navToggle = document.createElement('button');
    navToggle.className = 'btn btn-secondary d-md-none';
    navToggle.innerText = '菜单';
    nav.parentNode.insertBefore(navToggle, nav);

    navToggle.addEventListener('click', function () {
        nav.classList.toggle('show');
    });
});