let userEmail = document.getElementById("userEmail")
let userPassword = document.getElementById("userPassword")
let log = document.getElementById("login")
let usersData = []
if (localStorage.getItem("Data")) {
    usersData = JSON.parse(localStorage.getItem("Data"))
}
log.addEventListener('click', login)
function openPage(name){
    let user={
        Name: name
    }
    localStorage.setItem("currentUser", JSON.stringify(user))
    // window.open("welcome.html")
    window.location.href = "welcome.html"
}
function login(){
    // let data = {
    //     email: userEmail.value,
    //     password: userPassword.value,
    // }
    let newData= usersData.find((item) => {
        return item.email == userEmail.value
    }
    )
    if(newData)
        {
            document.getElementById("noaccount").classList.replace("d-block", "d-none")
            // let checkPass= usersData.find((item) => {
                //     return item.password == userPassword.value
                // }
                // )
                // console.log(newData)
                if(newData.password==userPassword.value)
                {
                    openPage(newData.name)
                    // console.log("Hi")
                    // console.log(usersData)
                }
            else
            {
                document.getElementById("wrong-pass").classList.replace("d-none", "d-block")
                // console.log(usersData)
            }
        }
    else{
        document.getElementById("noaccount").classList.replace("d-none", "d-block")
        // console.log(usersData)
    }
}