const user_pwd=document.getElementById('user_pwd');
const user_confirm_pwd=document.getElementById('user_confirm_pwd');
const pwd_errors=document.querySelectorAll('#pwd_error');

function confirmPassword() {
    if (user_pwd.value == user_confirm_pwd.value) {
        for (let pwd_error of pwd_errors){
            pwd_error.classList.add("clear");
            pwd_error.classList.remove("error");
        }
    } else {
        for (let pwd_error of pwd_errors){
            pwd_error.classList.add("error");
            pwd_error.classList.remove("clear");
        }
    }
    console.log(pwd_error)
}

document.getElementById("user_confirm_pwd").addEventListener("change", confirmPassword);