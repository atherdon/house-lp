$(document).ready(function() {

    if($('.formvalidation').length) {
        $(".formvalidation").validate({
            invalidHandler: function(event, validator) {
              // 'this' refers to the form
              var errors = validator.numberOfInvalids();
              if (errors) {
                var message = errors == 1
                  ? 'You missed 1 field. It has been highlighted'
                  : 'You missed ' + errors + ' fields. They have been highlighted';
                $("div.error").html(message);
                $("div.error").fadeIn();
              } else {
                $("div.error").hide();
              }
            },
            showErrors: false,
            errorPlacement: function(error,element) {
                return true;
            },
            submitHandler: function(form) { 
                jQuery(form).ajaxSubmit({
                    url: 'process.php', 
                    success: function() {
                        var message = 'Thank\'s for your message. We\'ll answer as soon as possible.';
                        $("div.error").html(message);
                        $("div.error").fadeIn();
                    },
                    error: function() {
                        alert('Something`s wrong.');
                    }
                });
            }
        
        });
    }
});
