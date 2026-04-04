if (localStorage.getItem("currentUser")){
    location.href = "./index.html"
}

let form = document.querySelector("form")

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if(!localStorage.getItem("users")){
        alert("User not found")
    } else {
        let users = JSON.parse(localStorage.getItem("users"))

        let email = document.getElementById("email").value.trim()
        let password = document.getElementById("password").value.trim()

        let exitingUser = users.find(
            (index) => 
                index.email == email
                && 
                index.password == password 
        )

        if (exitingUser) {
            localStorage.setItem("currentUser", JSON.stringify(exitingUser))

            location.href = "/index.html"
        } else {
            alert("Email or Password is incorrect")
        }
    }

})