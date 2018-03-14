
var $form = $('form#test-form'),
    // url = 'https://script.google.com/macros/s/abcdefghijklmnopqrstuvwxyz1234567890/exec'

    url = 'https://script.google.com/macros/s/AKfycbz2nbUgn-lL1Lyv3Xe4KPOc2HdFqAzt2SknyFIEiUlkoq-RILXs/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})