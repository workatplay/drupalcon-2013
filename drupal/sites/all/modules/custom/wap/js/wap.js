(function ($) {
  Drupal.behaviors.wapCommon = {};
  Drupal.behaviors.wapCommon.attach = function (context) {
    
    $('form', context).each(function () { // check for empty required fields
      var form = $(this);
      form.submit(function () {
        var setError = function () {
          $('#messages').remove();
          form.prepend("<div class='messages error'><ul><li>One or more required fields are empty.</li></ul></div>");
          return false;
        };
        var ecnt = 0;
        var required = $('.required', form);
        // reset
        $('.messages.error', form).remove();
        $('.error', form).removeClass('error');
        
        if (required.length) {
          required.each(function (i,e) {
            if (e.value == '') {
              $(e).addClass('error');
              ecnt++;
            }
          });
        }
        form.find('.form-radios').each(function () {
          var options = $(this).find('.form-radio');
          var hasChecked = options.length==0;
          options.each(function() {
            if ($(this).attr('checked')) {
              hasChecked = true;
            }
          });
          if (!hasChecked) {
            ecnt++;
          }
        });
        
        if (ecnt) {
          return setError();
        }
        return true;
      });
    })
  };
})(jQuery);