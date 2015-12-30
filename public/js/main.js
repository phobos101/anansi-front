$(start);

function start() {
  $(".hide-menu-link").on("click", function() {
    event.preventDefault();
    $("#wrapper").toggleClass("toggled");
  });
};
