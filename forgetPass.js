function forgetpass()
{
  var userEmail = document.getElementsByName("email")[0].value;
    console.log(userEmail);
  firebase.database().ref().child('users').orderByChild('Email').equalTo(userEmail).on("value", function(snapshot) {
   snapshot.forEach(function (childSnapshot) {  
  var data1=childSnapshot.val();
    console.log(data1.Password);
   firebase.auth().sendPasswordResetEmail(userEmail);
   alert("A mail sent to your inbox,please check to reset password");
   console.log("mail sent");
});
});
}

