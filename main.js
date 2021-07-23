const sideNav = document.querySelector('.sideNav');
const iconsSideNav = Array.from(document.getElementsByClassName('sideDiv'));



iconsSideNav.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.children[1].style.display = 'block';
    })
    item.addEventListener('mouseleave', () => {
        item.children[1].style.display = 'none';
    })
})