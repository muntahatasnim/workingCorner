function sign_out() {
    firebase.auth().signOut();
    var user = firebase.auth().currentUser.displayName;
    console.log(user);
    window.location = "sign_in.html";
}
