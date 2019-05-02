function postoffer() {
    //console.log(firebase.auth().currentUser);
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
    var author_mail = firebase.auth().currentUser.email;
        console.log(author_mail);
        var category = document.getElementsByName("category")[0].value;
        console.log(category);
    var author = firebase.auth().currentUser.displayName;
    var post = document.getElementsByName("post_name")[0].value;
    var orgname = document.getElementsByName("Organization_name")[0].value;
    var j_time = document.getElementsByName("Join_time")[0].value;
    var sal = document.getElementsByName("salary")[0].value;
    var req = document.getElementsByName("Requirement")[0].value;
    var des = document.getElementsByName("Description")[0].value;
    var contact = document.getElementsByName("Contact")[0].value;
    var time = new Date();
    var po_time = time.toString();
    var newPostKey = firebase.database().ref().child('UserPost').push().key;
    //console.log("hehe");

        firebase.database().ref('/UserPost/' + newPostKey).set({
            Category                 : category,
            Provider_Name            : author,
            Provider_email           : author_mail,
            Contact_info             : contact,
            Post                     : post,
            Organization_Name        : orgname,
            Join_Time                : j_time,
            salary_per_month         : sal,
            Requirement_for_the_post : req,
            Description              : des,
            Post_time                : po_time

        }
    ).then(function () {
        window.location = "homepage.html";
    });	
}
else 
console.log("Not");
});
}
