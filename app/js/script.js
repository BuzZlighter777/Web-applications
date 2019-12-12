let menu = document.getElementById('header-button');
let popWindow = document.getElementById('pop-menu');
let main = document.getElementById('main-content');

menu.onclick = () => {
  let isMenuDisplayed = checkIfMenuDisplayed();

  if (isMenuDisplayed) {
    popWindow.style.width = '0';
    popWindow.style.display = 'none';
    main.style.width = '100%';
  } else {
    popWindow.style.width = '350px';
    popWindow.style.display = 'block';
    main.style.width = 'calc(100% - 350px)';
  }
};

function checkIfMenuDisplayed() {
  if (popWindow.style.width == '350px') {
    return true;
  } else{
    return false;
  }
}
