$(document).ready(function() {

  App = new Object();
  App.displayProvinceName = $("#filter-by-province-name");

  var mouseOverHandler = function() {
    var provinceName = $(this).data('province-name');
    App.displayProvinceName.val(provinceName).selected;
  };

  var mouseOutHandler = function() {
    // do something
  };

  $("[id^='SVG']").each(function() {
    $(this).hover(mouseOverHandler, mouseOutHandler);
  });
});
