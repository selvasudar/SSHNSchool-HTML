$( document ).ready(function() {

	 $('.bxslider').bxSlider({
             mode: 'fade',
             auto: true,             
             captions: true,
             pagerCustom: '#bx-pager'               
             });//slider

     $.getJSON('js/details.json', function(data) {                          
        for(var i in data.details)
        {        	
          $('.results').append('<li><span>'+data.details[i].Name+'</span><span>'+data.details[i].Place+'</span><span>'+data.details[i].emailid+'</span><span>'+data.details[i].pnumber+'</span></li>');
        }   

        });    
   
    $( "#datepicker" ).datepicker();

    $("#sociourlsbmt").click(function(){        
        $("#sociopfl").fadeOut();        
    });

});

 function ValidateEmail(email) {
        var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        return expr.test(email);
    };