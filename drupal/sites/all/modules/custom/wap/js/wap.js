
(function ($) {
  Drupal.behaviors.wapCommon = {};
  Drupal.behaviors.wapCommon.attach = function (context) {
    
    $('form', context).each(function () { // check for empty required fields
      var form = $(this);
      form.submit(function () {
        var required = $('.required', form);
        // reset
        $('.messages.error', form).remove();
        $('.error', form).removeClass('error');
        if (required.length) {
          var ecnt = 0;
          required.each(function (i,e) {
            if (e.value == '') {
              $(e).addClass('error');
              ecnt++;
            }
          });
          if (ecnt) {
            $('#messages').remove();
            form.prepend("<div class='messages error'><ul><li>One or more required fields are empty.</li></ul></div>");
            return false;
          }
        }
      });
    })
  };
})(jQuery);