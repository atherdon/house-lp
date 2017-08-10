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

        var error = $('#contactForm div.error');


        $("#contactForm").validate({
            invalidHandler: function(event, validator) {
              // 'this' refers to the form
              var errors = validator.numberOfInvalids();
              if (errors) {

                var message = errors == 1
                  ? 'You missed 1 field. It has been highlighted'
                  : 'You missed ' + errors + ' fields. They have been highlighted';

                
                error.html(message);
                error.fadeIn();

              } else {

                error.hide();
                
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
                        error.html(message);
                        error.fadeIn();
                        // $("div.error").html(message);
                        // $("div.error").fadeIn();
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
        var error2 = $("#FormModal1").find('.error'); 

        $("#FormModal1").validate({
            invalidHandler: function(event, validator) {
              // 'this' refers to the form
              var errors = validator.numberOfInvalids();
              if (errors) {
                
                var message = errors == 1
                  ? 'You missed 1 field. It has been highlighted'
                  : 'You missed ' + errors + ' fields. They have been highlighted';

                error2.html(message);
                error2.fadeIn();  
                

              } else {

                error2.hide();

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
                        
                        error2.html(message);
                        error2.fadeIn();
                        
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

        var error3 = $("#FormModal21").find('.error'); 

        $("#FormModal21").validate({
            invalidHandler: function(event, validator) {
              // 'this' refers to the form
              var errors = validator.numberOfInvalids();
              if (errors) {
                
                var message = errors == 1
                  ? 'You missed 1 field. It has been highlighted'
                  : 'You missed ' + errors + ' fields. They have been highlighted';

                error3.html(message);
                error3.fadeIn();
                
              } else {
                error3.hide();
                
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

        var error4 = $("#FormModal31").find('.error'); 

        $("#FormModal31").validate({
            invalidHandler: function(event, validator) {
              // 'this' refers to the form
              var errors = validator.numberOfInvalids();
              if (errors) {
                
                var message = errors == 1
                  ? 'You missed 1 field. It has been highlighted'
                  : 'You missed ' + errors + ' fields. They have been highlighted';

                error4.html(message);
                error4.fadeIn();
                
              } else {
                error4.hide();
                
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
                        error4.html(message);
                        error4.fadeIn();
                        
                    },
                    error: function() {
                        alert('Something`s wrong.');
                    }
                });
            }
        
        });
    }    


});
