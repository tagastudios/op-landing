document.addEventListener("DOMContentLoaded", function () {
  // SideNav Init
  var elems = document.querySelectorAll(".sidenav");
  var instances = M.Sidenav.init(elems);

  // Slider Init
  var elems = document.querySelectorAll(".slider");
  var instances = M.Slider.init(elems);

  // Tabs Differents
  var elems = document.querySelectorAll(".tabs");
  var instance = M.Tabs.init(elems);

  var elems = document.querySelectorAll(".modal");
  var instances = M.Modal.init(elems);
});
