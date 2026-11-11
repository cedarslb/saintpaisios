var options = { 
	beforeSubmit:  validate,  // pre-submit callback 
	success:       showResponse,  // post-submit callback 
	resetForm: true        // reset the form after successful submit 
}; 
				
$('#contactform').ajaxForm(options); 
				
function showResponse(responseText, statusText){
	$('#success').animate({ opacity: "show" }, "fast")
}
				
function validate(formData, jqForm, options) {
	$("p.error").animate({ opacity: "hide" }, "slow");
			 
	var nameValue = $('input[name=Name]').fieldValue(); 
	var emailValue = $('input[name=Email]').fieldValue();
	var messageValue = $('textarea[name=Message]').fieldValue(); 
	
	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	var correct = true;
	
	if (!nameValue[0]) {
		$("p.error.wrong_name").animate({ opacity: "show" }, "slow");
		correct = false;
	}
	
	if (!emailValue[0]) {
		$("p.error.wrong_email").animate({ opacity: "show" }, "slow");
		correct = false;
	} else if(!emailReg.test(emailValue[0])) {
		$("p.error.wrong_email").animate({ opacity: "show" }, "slow");
		correct = false;
	}
	
	if (!messageValue[0]) {
		$("p.error.wrong_message").animate({ opacity: "show" }, "slow");
		correct = false;
	}
	
	if (!correct) {return false;}
} 	

				
$("p#success").click( function () { 
	$(this).animate({ opacity: "hide" }, "slow"); 
});								 