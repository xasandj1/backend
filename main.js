const menuIcons = document.getElementById('menu-icon')
const slideoutMenu = document.getElementById('slideout-menu')
const searchIcon = document.getElementById('search-icons')
const searchBox = document.getElementById('searchbox')

console.log(searchIcon)
searchIcon.addEventListener('click', function () {
  if (searchBox.style.top == '72px') {
    searchBox.style.top == '24px';
    searchBox.style.pointerEvents = 'none'
  }else{
    searchBox.style.top = '72px';
    searchBox.style.pointerEvents = 'auto'
  }
});
console.log(slideoutMenu);
menuIcons.addEventListener('click', function () {
  if (slideoutMenu.style.opacity == "1") {
    slideoutMenu.style.opacity = '0'
    slideoutMenu.style.pointerEvents = 'none'
  }else{
    slideoutMenu.style.opacity = '1'
    slideoutMenu.style.pointerEvents = 'auto'
  }
})