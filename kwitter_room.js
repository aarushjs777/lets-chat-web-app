
//ADD YOUR FIREBASE LINKS HERE

//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDldCDsoZxg01yQoc2waJpgp1tM5yhhIgk",
      authDomain: "kwitter-54901.firebaseapp.com",
      databaseURL: "https://kwitter-54901-default-rtdb.firebaseio.com",
      projectId: "kwitter-54901",
      storageBucket: "kwitter-54901.appspot.com",
      messagingSenderId: "228898669891",
      appId: "1:228898669891:web:17cceae7e4a1ea94181bf6"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig)
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "     +user_name +"!";
    function addRoom(){
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
    }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name-"+ Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
     


