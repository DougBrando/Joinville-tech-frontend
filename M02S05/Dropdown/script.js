const dropdown = document.getElementsByClassName('dropdown-toggle')[0];
const dropdownMenu = document.getElementsByClassName('dropdown-menu')[0];

dropdown.addEventListener('click', (event) => {
    dropdownMenu.classList.toggle('mystyle');
});

document.addEventListener('click', () => {
    if (!dropdown.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.classList.remove('mystyle');
        dropdown.setAttribute('aria-expanded', 'false');
    }
});
