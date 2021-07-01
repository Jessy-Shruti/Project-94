var firebaseConfig = {
    apiKey: "AIzaSyAVuAJHtufpB7Y23JfC_pZfWzdj9FhLzMo",
    authDomain: "doctor-and-patient2.firebaseapp.com",
    databaseURL: "https://doctor-and-patient2-default-rtdb.firebaseio.com",
    projectId: "doctor-and-patient2",
    storageBucket: "doctor-and-patient2.appspot.com",
    messagingSenderId: "745014693629",
    appId: "1:745014693629:web:185526f5a6afd0ad69f894",
    measurementId: "G-FPTX8EL1KG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

user_name = localStorage.getItem("user_naaame");

document.getElementById("user_naaame").innerHTML = "Welcome " + user_name + "!";

function addoom() {
    room_name = document.getElementById("romm_ame").value;
  firebase.database().ref("/").child(room_name).update({

      purpose: "adding roomname"
  });
  localStorage.setItem("romm_ame", room_name);
  window.localStorage = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div> <hr>";
document.getElementById("output").innerHTML += row;
    //End code
    });
});
}
getData();

function redirectToRoomName(name) {
    localStorage.setItem("romm_ame", name);
    window.localStorage = "kwit_ter_pa_ge.html";
}


function Sign_Log_Out() {
    localStorage.removeItem("user_naaame");
    localStorage.removeItem("romm_ame");

    window.location = "kwit_ter.html";
}