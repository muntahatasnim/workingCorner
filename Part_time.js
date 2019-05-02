
        firebase.database().ref().child('UserPost').orderByChild('Category').equalTo('Part Time').on("value", function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                var childData = childSnapshot.val();
        document.getElementById("part_time").innerHTML += "<p>" + "<b>Category :</b> " + childData.Category + "</p>";
        document.getElementById("part_time").innerHTML += "<p>" + "<b>Post_time :</b> " + childData.Post_time + "</p>";
        document.getElementById("part_time").innerHTML += "<p>" + "<b>Provider_email :</b> " + childData.Provider_email + "</p>";
        document.getElementById("part_time").innerHTML += "<p>" + "<b>Provider_Name :</b> " + childData.Provider_Name + "</p>";
        document.getElementById("part_time").innerHTML += "<p>" + "<b>Post :</b> " + childData.Post + "</p>";
        document.getElementById("part_time").innerHTML += "<p>" + "<b>Organization_Name :</b> " + childData.Organization_Name + "</p>";
        document.getElementById("part_time").innerHTML += "<p>" + "<b>Requirement_for_the_post :</b> " + childData.Requirement_for_the_post + "</p>";
        document.getElementById("part_time").innerHTML += "<p>" + "<b>Join_Time :</b> " + childData.Join_Time + "</p>";
        document.getElementById("part_time").innerHTML += "<p>" + "<b>Description :</b> " + childData.Description  + "</p>";
        document.getElementById("part_time").innerHTML += "<p>" + "<b>Salary_per_month :</b> " + childData.salary_per_month  + "</p>";
        document.getElementById("part_time").innerHTML += "<p>" + "<b><hr></b>"  + "</p>";
        document.getElementById("part_time").innerHTML += "<p>" + "<b><hr></b>"  + "</p>";

            });
        });




    

