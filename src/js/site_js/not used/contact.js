function submitContactUs(){
	 $('#contact_us_submit').text("Submitting...");
	
	var name = $('#contact_name').val();
	var email = $('#contact_email').val();
	var message = $('#contact_message').val();
	if(name =="" || email=="" || message==""){
		$('#success_error').text("Sorry! The inputs cannot be empty.");
		$('#success_error').addClass("alert-danger");
		$('#success_error').removeClass("hidden");  // make it display
		$('#contact_us_submit').text("SUBMIT");		
	}
	else{ // if the inputs are okay
	$('#contactForm input, button, textarea').prop('disabled',true);
	  $.ajax({  
			url:"../php_scripts/contact_us_check.php",
			method:"POST",
			data:{nameSent:name, emailSent:email, messageSent:message},
			success:function(data){
				if(data.trim()=="success"){
					$('#contactForm').trigger('reset');
					$('#success_error').text("Your message has been sent successfully!");
					$('#success_error').addClass("alert-success");
					$('#success_error').removeClass("alert-danger");  
					$('#success_error').removeClass("hidden");  // make it display
					alert(data);
				}
				else{
					$('#success_error').text("Your message could not be sent. Please try again!");
					$('#success_error').addClass("alert-danger");
					$('#success_error').removeClass("alert-success");  
					$('#success_error').removeClass("hidden");  // make it display
					alert(data);
				}
					$('#contactForm input, button, textarea').prop('disabled',false);
					$('#contact_us_submit').text("SUBMIT");
					
					// alert(data);
			}			
		}); 
	}	
}