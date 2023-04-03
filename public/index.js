const showmenu = () => {
  var menu = document.getElementById("sidemenu");
  var overlay = document.getElementById("nav-ov");
  overlay.classList.toggle("nav-overlay");
  menu.classList.toggle("menu-open");
  menu.classList.toggle("menu-close");
};
