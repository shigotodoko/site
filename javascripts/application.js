$(document).ready(function() {

  App = {};

  App.displayProvinceName = $("#filter-by-province-name");

  App.SearchForm = {
    setDisplayText: function(provinceName) {
      var $label = $('span.province-name');
      $label.text(provinceName);
    },
    clearSelected: function() {
      var selecteds = document.querySelectorAll('.province-selected');

      $.each(selecteds, function(index, selected) {
        selected.classList.remove('province-selected');
      });
    }
  }

  var mouseOverHandler = function() {
    var provinceName  = $(this).data('province-name');
    var $label        = $('span.province-name');
    App.displayProvinceName.val(provinceName).selected;

    // search for all provinces with class 'province-selected' and remove its class.
    App.SearchForm.clearSelected();

    // Display the province name on bottom of map.
    // $label.text(provinceName);
    App.SearchForm.setDisplayText(provinceName);
  };

  var mouseOutHandler = function() {
    // do something
  };

  $("[id^='SVG']").each(function() {
    $(this).hover(mouseOverHandler, mouseOutHandler);
  });

  App.displayProvinceName.on('change', function() {
    var provinceName = $(this).val();
    // search for all provinces with class 'province-selected' and remove its class.
    App.SearchForm.clearSelected();

    // highlight the province block in map
    provinceMap = document.querySelector('[data-province-name="' + provinceName + '"]');
    provinceMap.setAttribute('class', 'province-selected');

    // Display the province selected name on label.
    App.SearchForm.setDisplayText(provinceName);
  });
});
