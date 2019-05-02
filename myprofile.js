var flag = 0;
function show_profile() {
    let dataArray = [];
 
    var author_mail = firebase.auth().currentUser;
    if (author_mail != null) {
        firebase.database().ref().child('UserPost').orderByChild('Provider_email').equalTo(author_mail.email).on("value", function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                var childData = childSnapshot.val();
                dataArray.push(childData);
            });
        });

        firebase.database().ref().child('users').orderByChild('Email').equalTo(author_mail.email).on("value", function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                var childData = childSnapshot.val();
                var len = dataArray.length;
                len--;
                if (flag == 0) {
                    document.getElementById("profile").style.visibility = "visible";
                    // document.getElementById("Profile").style.textAlign="center";
                    document.getElementById("profile").innerHTML += "<p>" + "<b>Total Post :</b> " + len + "</p>";
                    document.getElementById("profile").innerHTML += "<p>" + "<b>Last post time :</b> " + dataArray[len].Post_time + "</p>";
                    document.getElementById("profile").innerHTML += "<p>" + "<b>User Name :</b> " + childData.Name + "</p>";
                    document.getElementById("profile").innerHTML += "<p>" + "<b>User Email:</b> " + childData.Email + "</p>";
                    document.getElementById("profile").innerHTML += "<p>" + "<b>Password :</b> " + childData.Password + "</p>";
                    document.getElementById("profile").innerHTML += "<p>" + "<b>UserID :</b> " + childData.UserID + "</p>";
                    flag = 1;
                }
            });
        });
    }
    else {
        console.log("Null get");
    }
        
}



