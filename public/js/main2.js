jQuery(document).ready(function() {
    
    /*
	    Modals
	*/
	$('.launch-modal').on('click', function(e){
		e.preventDefault();
		$( '#' + $(this).data('modal-id') ).modal();
	});
    
    /*
        Form validation
    */
	$('.login-form input[type="text"], .login-form input[type="password"], .login-form textarea').on('focus', function() {
    	$(this).removeClass('input-error');
    });
    
    $('.login-form').on('submit', function(e) {
    	
    	$(this).find('input[type="text"], input[type="password"], textarea').each(function(){
    		if( $(this).val() == "" ) {
    			e.preventDefault();
    			$(this).addClass('input-error');
    		}
    		else {
    			$(this).removeClass('input-error');
    		}
    	});
    	
    });
    
    
});


/* 

Template 2089 Meteor

http://www.tooplate.com/view/2089-meteor

*/

jQuery(document).ready(function($) {

	'use strict';


        $('.counter').each(function() {
          var $this = $(this),
              countTo = $this.attr('data-count');
          
          $({ countNum: $this.text()}).animate({
            countNum: countTo
          },

          {

            duration: 8000,
            easing:'linear',
            step: function() {
              $this.text(Math.floor(this.countNum));
            },
            complete: function() {
              $this.text(this.countNum);
              //alert('finished');
            }

          });  
          
        });



        $(".b1").click(function () {
            $(".pop").fadeIn(300);
            
        });
		
		$(".b2").click(function () {
            $(".pop2").fadeIn(300);
            
        });
		
		$(".b3").click(function () {
            $(".pop3").fadeIn(300);
            
        });
    
        $(".b4").click(function () {
            $(".pop4").fadeIn(300);
            
        });
    
        $(".b5").click(function () {
            $(".pop5").fadeIn(300);
            
        });
		
		$(".b6").click(function () {
            $(".pop6").fadeIn(300);
            
        });
		
		$(".b7").click(function () {
            $(".pop7").fadeIn(300);
            
        });
    
        $(".b8").click(function () {
            $(".pop8").fadeIn(300);
            
        });

        $(".pop > span, .pop").click(function () {
            $(".pop").fadeOut(300);
        });
		
		$(".pop2 > span, .pop2").click(function () {
            $(".pop2").fadeOut(300);
        });
		
		$(".pop3 > span, .pop3").click(function () {
            $(".pop3").fadeOut(300);
        });
    
        $(".pop4 > span, .pop4").click(function () {
            $(".pop4").fadeOut(300);
        });
    
        $(".pop5 > span, .pop5").click(function () {
            $(".pop5").fadeOut(300);
        });
		
		$(".pop6 > span, .pop6").click(function () {
            $(".pop6").fadeOut(300);
        });
		
		$(".pop7 > span, .pop7").click(function () {
            $(".pop7").fadeOut(300);
        });
    
        $(".pop8 > span, .pop8").click(function () {
            $(".pop8").fadeOut(300);
        });


        $(window).on("scroll", function() {
            if($(window).scrollTop() > 100) {
                $(".header").addClass("active");
            } else {
                //remove the background property so it comes transparent again (defined in your css)
               $(".header").removeClass("active");
            }
        });


	/************** Mixitup (Filter Projects) *********************/
    	$('.projects-holder').mixitup({
            effects: ['fade','grayscale'],
            easing: 'snap',
            transitionSpeed: 400
        });

});