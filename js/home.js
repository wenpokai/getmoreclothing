$(document).ready(function(){
	$('#register').click(function(){
		$('#logInModal').modal('toggle');
		$('#signUpModal').modal('toggle');
	});	

	$('#logIn').click(function(){
		$('#signUpModal').modal('toggle');
		$('#logInModal').modal('toggle');
	});
});
