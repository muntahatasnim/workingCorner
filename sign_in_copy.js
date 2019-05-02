var attempt=3;
function login(){
  var userEmail = document.getElementsByName("email")[0].value;
  var userPassword = document.getElementsByName("password")[0].value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).then(function(user) {
      var user = firebase.auth().currentUser;
      window.location = "homepage.html";
  },function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      if(attempt==0)
      {
               window.alert("You have "+attempt+" attempt available. You can't access now,use forget password");
        document.getElementById("email").disabled=true;
        document.getElementById("password").disabled=true;
       return false;
  
    
      }
      attempt--;
      window.alert("You have "+attempt+" attempt available");
      //window.alert("Error Code: " + errorCode);
      //window.alert("Error Message: " + errorMessage);   
  }); 
}
