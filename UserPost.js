function userp() {
    let dataArray = [];
    var author_mail = firebase.auth().currentUser;
    if (author_mail != null) {
        firebase.database().ref().child('UserPost').orderByChild('Provider_email').equalTo(author_mail.email).on("value", function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                var childData = childSnapshot.val();
                dataArray.push(childData);
            });
        });
    }
    else {
        console.log("Null get");
    }
    var len = dataArray.length;
    var i = 0;
    for (i = 0; i < len; i++) {
        document.getElementById("userpost").innerHTML += "<p>" + "<b>Post_time :</b> " + dataArray[i].Post_time + "</p>";
        document.getElementById("userpost").innerHTML += "<p>" + "<b>Provider_email :</b> " + dataArray[i].Provider_email + "</p>";
        document.getElementById("userpost").innerHTML += "<p>" + "<b>Provider_Name :</b> " + dataArray[i].Provider_Name + "</p>";
        document.getElementById("userpost").innerHTML += "<p>" + "<b>Post :</b> " + dataArray[i].Post + "</p>";
        document.getElementById("userpost").innerHTML += "<p>" + "<b>Organization_Name :</b> " + dataArray[i].Organization_Name + "</p>";
        document.getElementById("userpost").innerHTML += "<p>" + "<b>Requirement_for_the_post :</b> " + dataArray[i].Requirement_for_the_post + "</p>";
        document.getElementById("userpost").innerHTML += "<p>" + "<b>Join_Time :</b> " + dataArray[i].Join_Time + "</p>";
        document.getElementById("userpost").innerHTML += "<p>" + "<b>Description :</b> " + dataArray[i].Description  + "</p>";
        document.getElementById("userpost").innerHTML += "<p>" + "<b>Salary_per_month :</b> " + dataArray[i].salary_per_month  + "</p>";
        document.getElementById("userpost").innerHTML += "<p>" + "<b><hr></b>"  + "</p>";
        document.getElementById("userpost").innerHTML += "<p>" + "<b><hr></b>"  + "</p>";
    }


}



