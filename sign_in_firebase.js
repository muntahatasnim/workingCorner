var attempt=3;
function login(){
    var email = document.getElementsByName("email")[0].value;
    var password = document.getElementById("Password").value;
firebase.database().ref().child("users").orderByChild("Email").equalTo(email).on("value",snapshot => {
    if (!snapshot.exists()){
      window.alert("You are not registered!Please Register Now");
      return false;
    }
    firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
      var user = firebase.auth().currentUser.email;
      console.log(user);
      window.location = "homepage.html";
      //var errorCode = error.code;
      //var errorMessage = error.message;
      if(attempt==0)
      {
               window.alert("Wrong Password!You have no more attempt available. You can't access now,use forget password");
        document.getElementById("email").disabled=true;
        document.getElementById("password").disabled=true;
       return false;
      }
      else{
      attempt--;
     // window.alert("Error Code: " + errorCode+"Error Message: " + errorMessage);
   if(attempt!=0)
      window.alert("You have "+attempt+" attempt available");
}
         
  }); 

});
}
