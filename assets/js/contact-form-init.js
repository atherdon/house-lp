$(document).ready(function() {
    
    // 'Введите данные в поля формы'

    // 'Введите свое имя'
    // 'Введите контактный телефон'
    // 'Введите дату',
    // 'Выберите месяц',
    // 'Введите время'

    // 'Введите email адрес'
    // 'Введите контактный телефон'
    /* Contact Form */
    if($('#contactForm').length) {

        var error = $('#contactForm div.error');


        $("#contactForm").validate({

            rules: {
                name:  "required", //{required:true, minlength:3}
                phone: "required",
                date:  "required",
                month: "required",
                time:  "required"

            },
            messages: {
                name:  'Введите свое имя',
                phone: 'Введите контактный телефон',
                date:  'Введите дату',
                month: 'Выберите месяц',
                time:  'Введите время'
            },


            // invalidHandler: function(event, validator) {
            //   // 'this' refers to the form
            //   var errors = validator.numberOfInvalids();
            //   console.log( validator );
            //   if (errors) {

            //     console.log(errors);

            //     // var message = errors == 1
            //       // ? 'You missed 1 field. It has been highlighted'
            //       // : 'You missed ' + errors + ' fields. They have been highlighted';

                
            //     // error.html(message);
            //     error.html(errors);
            //     error.fadeIn();

            //   } else {

            //     error.hide();
                
            //   }
            // },
            // showErrors: false,
            

            errorPlacement: function(error,element) {
                // return true;

                $("#contactForm .error.main-wrapper").css('display','block');
                console.log($("#contactForm .error.main-wrapper"));    
                error.appendTo("#contactForm .error.main-wrapper");
            },
            submitHandler: function(form) { 


                

                jQuery(form).ajaxSubmit({

                    url: 'process.php', 
                    success: function() {

                        // var message = 'Thank\'s for your message. We\'ll answer as soon as possible.';

                        // error.html(message);
                        // error.fadeIn();

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



        var form  = $("#FormModal1");
        var error2 = $("#FormModal1").find('.error'); 

        $("#FormModal1").validate({

            rules: {
                name:  "required",
                phone: "required",
                date:  "required",
                month: "required",
                time:  "required"

            },
            messages: {
                name:  'Введите свое имя',
                phone: 'Введите контактный телефон',
                date:  'Введите дату',
                month: 'Выберите месяц',
                time:  'Введите время'
            },

            // invalidHandler: function(event, validator) {
            //   // 'this' refers to the form
            //   var errors = validator.numberOfInvalids();
            //   console.log( validator );

            //   if (errors) {
              
            //     console.log('dd', element.attr("name"));

            //     // if (element.attr("name") == "client_city") {
            //         error.appendTo("#FormModal .error.main-wrapper");
            //     // } else {
            //         // error.insertAfter(element)
            //     // }

                
            //     // var message = errors == 1
            //       // ? 'You missed 1 field. It has been highlighted'
            //       // : 'You missed ' + errors + ' fields. They have been highlighted';

            //     // error2.html(message);
            //     error2.html(errors);
            //     error2.fadeIn();  
                

            //   } else {

            //     error2.hide();

            //   }
            // },
            showErrors: false,
            errorPlacement: function(error, element) {

                // console.log('dd', element.attr("name"));

                // if (element.attr("name") == "client_city") {
                $("#FormModal .error.main-wrapper").css('display','block');
                console.log($("#FormModal .error.main-wrapper"));    
                error.appendTo("#FormModal .error.main-wrapper");


                // return true;
            },
            submitHandler: function(form) {             
                // return false;
                jQuery(form).ajaxSubmit({

                    url: 'process.php', 
                    success: function() {

                        // var message = 'Thank\'s for your message. We\'ll answer as soon as possible.';
                        
                        // error2.html(message);
                        // error2.fadeIn();
                        
                    },
                    error: function() {

                        alert('Something`s wrong.');

                    }
                });
                $("#FormModal .error.main-wrapper").css('display','none');
                return false;
            }
        
        });
    }

    /* Modal2 */
    if($('#FormModal21').length) {

        var error3 = $("#FormModal21").find('.error'); 

        $("#FormModal21").validate({

            rules: {
                name:  "required",
                phone: "required",
                date:  "required",
                month: "required",
                time:  "required"

            },
            messages: {
                name:  'Введите свое имя',
                phone: 'Введите контактный телефон',
                date:  'Введите дату',
                month: 'Выберите месяц',
                time:  'Введите время'
            },

            // invalidHandler: function(event, validator) {
            //   // 'this' refers to the form
            //   var errors = validator.numberOfInvalids();
            //   console.log( validator );
            //   if (errors) {
                
            //     console.log(errors);
            //     // var message = errors == 1
            //       // ? 'You missed 1 field. It has been highlighted'
            //       // : 'You missed ' + errors + ' fields. They have been highlighted';

            //     // error3.html(message);
            //     error3.html(errors);
            //     error3.fadeIn();
                
            //   } else {
            //     error3.hide();
                
            //   }
            // },
            showErrors: false,
            errorPlacement: function(error, element) {

                $("#FormModal21 .error.main-wrapper").css('display','block');
                console.log($("#FormModal21 .error.main-wrapper"));    
                error.appendTo("#FormModal21 .error.main-wrapper");

            },
            submitHandler: function(form) { 
                
                jQuery(form).ajaxSubmit({

                    url: 'process.php', 
                    success: function() {

                        // var message = 'Thank\'s for your message. We\'ll answer as soon as possible.';
                        // error3.html(message);
                        // error3.fadeIn();

                        // $("div.error").html(message);
                        // $("div.error").fadeIn();

                    },
                    error: function() {

                        alert('Something`s wrong.');

                    }
                });
                $("#FormModal21 .error.main-wrapper").css('display','none');
                return false;
            }
        
        });
    }    


    /* Modal3 */
    if($('#FormModal31').length) {

        var error4 = $("#FormModal31").find('.error'); 

        $("#FormModal31").validate({

            rules: {
                email:  "required",
                phone:  "required"

            },
            messages: {
                email:  'Введите email адрес',
                phone:  'Введите контактный телефон',
               
            },

            // invalidHandler: function(event, validator) {
            //   // 'this' refers to the form
            //   var errors = validator.numberOfInvalids();

            //   console.log( validator );

            //   if (errors) {
                
            //     console.log(errors);
            //     // var message = errors == 1
            //       // ? 'You missed 1 field. It has been highlighted'
            //       // : 'You missed ' + errors + ' fields. They have been highlighted';

            //     error4.html(errors);
            //     // error4.html(message);
            //     error4.fadeIn();
                
            //   } else {
            //     error4.hide();
                
            //   }
            // },
            showErrors: false,
            errorPlacement: function(error, element) {
                
                $("#FormModal31 .error.main-wrapper").css('display','block');
                console.log($("#FormModal31 .error.main-wrapper"));    
                error.appendTo("#FormModal31 .error.main-wrapper");
            },
            submitHandler: function(form) { 
                
                jQuery(form).ajaxSubmit({

                    url: 'process.php', 
                    success: function() {

                        // var message = 'Thank\'s for your message. We\'ll answer as soon as possible.';
                        // error4.html(message);
                        // error4.fadeIn();

                        
                    },
                    error: function() {

                        alert('Something`s wrong.');

                    }
                });
                $("#FormModal31 .error.main-wrapper").css('display','none');
                return false;
            }
        
        });
    }    


});