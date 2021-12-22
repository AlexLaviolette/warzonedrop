$(window).on("load", function() {
  // Menu toggling/hiding
  $(".menu").click(function() {
    $(".dropdown-menu").toggle();
  });

  $(".click").click(function() {
    $(".dropdown-menu").hide();
  });
});
