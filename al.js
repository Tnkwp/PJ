const menuItems = document.querySelectorAll('.menu ul li');

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        console.log(`Clicked on: ${item.innerText}`);
    });
});
