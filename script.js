function openBars() {
    document.querySelector('.menu-list').style.right = '0';
    document.querySelector('.bars-btn').style.display = 'none';
    document.querySelector('.times-btn').style.right = '3px';
}
function closeBars() {
    document.querySelector('.menu-list').style.right = '-100px';
    document.querySelector('.bars-btn').style.display = 'block';
    document.querySelector('.times-btn').style.right = '-400px';
}