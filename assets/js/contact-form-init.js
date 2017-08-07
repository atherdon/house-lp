$(document).ready(function() {
    
//  exampleFormModal
//  exampleFormModal2
//  exampleFormModal3
    
// FormModal
// input[name="name"]
// input[name="phone"]
//     input[name="date"]
//     input[name="month"]
//     input[name="time"]

// contactForm
//     input[name="name"]
//  input[name="email"]
// date
// month
// time

    /* Contact Form */
    if($('#contactForm').length) {

        $("#contactForm").validate({
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



    /* Modal1 */
    if($('#FormModal1').length) {

        // var messages = {
        //   'Время звонка не введено',
        //   'Время дату звонка',
        //   'Введите почту для связи',
        //   'Введите данные в поля формы'
        // };

        // $('#FormModal1 ').

        var form  = $("#FormModal1");
        var error = $("#FormModal1").find('.error'); 

        $("#FormModal1").validate({
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

    /* Modal2 */
    if($('#FormModal21').length) {

        $("#FormModal21").validate({
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


    /* Modal3 */
    if($('#FormModal31').length) {

        $("#FormModal31").validate({
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
