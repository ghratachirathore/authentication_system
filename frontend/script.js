const registerForm = document.getElementById("registerForm")

if(registerForm){
    registerForm.addEventListener("submit", async (e) => {
        e.preventDefault()
        const name = document.getElementById("name").value
        const email = document.getElementById("email").value
        const password = document.getElementById("password").value

        const response = await fetch("http://localhost:8000/api/auth/register",
        {
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                email,
                password
                })
            }
        )

        const data = await response.json()
        alert(data.message)
        if(response.ok){
            window.location.href = "login.html"
        }
    })

}

const loginForm = document.getElementById("loginForm")
if(loginForm){
    loginForm.addEventListener("submit", async (e) => {
        e.preventDefault()
        const email = document.getElementById("loginEmail").value
        const password = document.getElementById("loginPassword").value
        const response = await fetch(
        "http://localhost:8000/api/auth/login",
        {
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        }
    )

const data = await response.json()
if(response.ok){
        localStorage.setItem(
            "token",
            data.token
        )
        window.location.href = "dashboard.html"
    }
else{
    alert(data.message)
    }
})
}

const logoutBtn = document.getElementById("logout")
if(logoutBtn){
    logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("token")
    window.location.href = "login.html"
})
}

const token = localStorage.getItem("token")
if(
    window.location.pathname.includes( "dashboard.html"
    )
    &&
    !token
){
window.location.href = "login.html"

}