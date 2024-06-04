let out = document.getElementById("logout")
user={}
user = JSON.parse(localStorage.getItem("currentUser"))
document.getElementById("hi").innerHTML=`Hello ${user.Name}`;
out.addEventListener('click', logout)
function logout(){
    window.location.href = "index.html"
}