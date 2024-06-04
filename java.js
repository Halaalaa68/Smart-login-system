let userEmail = document.getElementById("userEmail")
let userPassword = document.getElementById("userPassword")
let userName = document.getElementById("userName")
let sign = document.getElementById("signup")
let log = document.getElementById("login")
let usersData = []
if (localStorage.getItem("Data")) {
    usersData = JSON.parse(localStorage.getItem("Data"))
}
sign.addEventListener('click', signUp)
// log.addEventListener('click', login)
// function openPage(name){
//     window.open(welcome.html)
//     document.getElementById("hi").innerHTML=`Hello ${name}`;
// }
let regexEmail= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
let regexPass= /^[a-zA-Z0-9!@#$%^&*]{6,16}$/
function signUp() {
    document.getElementById("congrats").classList.replace("d-block", "d-none")
    if(regexEmail.test(userEmail.value))
        {
            document.getElementById("valide").classList.replace("d-block", "d-none")
            if(regexPass.test(userPassword.value))
                {
                    document.getElementById("validp").classList.replace("d-block", "d-none")
                    let data = {
                        email: userEmail.value,
                        password: userPassword.value,
                        name: userName.value
                    }
                    let newData= usersData.find((item) => {
                        return item.email == userEmail.value
                    }
                    )
                    if(newData) document.getElementById("exist").classList.replace("d-none", "d-block")
                    else{
                        document.getElementById("exist").classList.replace("d-block", "d-none")
                        usersData.push(data)
                        localStorage.setItem("Data", JSON.stringify(usersData))
                        document.getElementById("congrats").classList.replace("d-none", "d-block")
                        
                        // console.log(usersData)
                    }
                }
            else{
                document.getElementById("validp").classList.replace("d-none", "d-block")
            }
        }
    else{
            document.getElementById("valide").classList.replace("d-none", "d-block")
        }
    
}
// function login(){
//     let data = {
//         email: userEmail.value,
//         password: userPassword.value,
//     }
//     let newData= usersData.find((item,index) => {
//         return item.email == userEmail.value
//     }
//     )
//     if(newData)
//         {
//             // let checkPass= usersData.find((item) => {
//             //     return item.password == userPassword.value
//             // }
//             // )
//             if(usersData[index].password==userPassword.value)
//                 {
//                     // openPage(obj.name)
//                     console.log("Hi")
//                 }
//             else
//             {
//                 document.getElementById("wrong-pass").classList.replace("d-none", "d-block")
//             }
//         }
//     else{
//         document.getElementById("noaccount").classList.replace("d-none", "d-block")
//     }
// }