(function ($) {
  var checkFormError = function (form) {
    var ecnt = 0;
    var required = $('.required', form);
    // reset
    $('.messages.error', form).remove();
    $('.error', form).removeClass('error');

    // check any required fields
    if (required.length) {
      required.each(function (i,e) {
        if (e.value == '') {
          $(e).addClass('error');
          ecnt++;
        }
      });
    }
    // check radios, they should be required but have
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
      $('#messages').remove();
      form.prepend("<div class='messages error'><ul><li>One or more required fields are empty.</li></ul></div>");
      return false;
    }
    return true;
  };

  /**
   * Uncomment Drupal behaviors lines below when within a Drupal site
   **/
  //Drupal.behaviors.wapCommon = {};
  //Drupal.behaviors.wapCommon.attach = function (context) {
    $('.calc').each(function () {
      var form = $(this);
      var calculator = new Calculator();
      var calculate = function () {        
        var x = form.find('[name="x"]').val();
        var y = form.find('[name="y"]').val();
        var op = form.find('[name="op"]').val();
        var z = calculator.set(x,y).calculate(op);
        form.find('[name="z"]').val(z).fadeTo('fast', 0.3).fadeTo('fast', 1.0);
        form.trigger('calculated', [z]);
        return false;
      };
      form.on('submit', calculate).find('input,select').on('change', calculate);
    });
    
    $('form').submit(function () { // check for empty required fields
      return checkFormError($(this));
    })
    
  //};
})(jQuery);