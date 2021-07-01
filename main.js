function adduser() {

    user_name = document.getElementById("userName").value;

    localStorage.setItem("userName", user_name);

    window.location = "kwit_ter_ro_om.html";
}