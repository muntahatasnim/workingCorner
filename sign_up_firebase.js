function signup()
{
   var name=document.getElementsByName("username")[0].value;
   var email=document.getElementsByName("Email")[0].value;
	 var pass=document.getElementsByName("pass")[0].value;
	 if(name==""||email==""||pass=="")
	 {
		 window.alert("Please enter name ,email, password.");
		 return false;
	 }

 firebase.auth().createUserWithEmailAndPassword(email, pass).then(function(user) {
	    var user = firebase.auth().currentUser;
	    var userId = user.uid;

	    user.updateProfile({
		  displayName: name
		}).then(function() {
		  // Update successful.
		}).catch(function(error) {
		  // An error happened.
		});

		firebase.database().ref('users/' + userId).set({
			Name: name,
			Email : email,
            Password:pass,
			UserID : userId
		})
		.then(function() {
			//firebase.auth().signOut();
			window.location = "sign_in.html";
		})
		.catch(function(error) {
			var errorCode = error.code;
			var errorMessage = error.message;
			window.alert("Error Code: " + errorCode);
			window.alert("Error Message: " + errorMessage);
		});
	}, function(error) {
	 	var errorCode = error.code;
		var errorMessage = error.message;
	  	window.alert("Error Code: " + errorCode);
	  	window.alert("Error Message: " + errorMessage);		
	});	
}

