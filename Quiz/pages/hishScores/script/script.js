$(document).ready(function(){
    console.log("Hello World");
    let userData = JSON.parse(localStorage.getItem("userData"));
    console.log(userData);
})