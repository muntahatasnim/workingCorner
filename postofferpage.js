function postofferpage() {
   // var userEmail = document.getElementsByName("email")[0].value;
    //console.log(userEmail);
    console.log(firebase.auth().currentUser.Email);
    window.location = "post-offer.html";
}
