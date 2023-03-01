function signIn(){
    if(login.value == 'admin' && password.value == '1111'){
        localStorage.setItem('admin', 'logged')
        location.href = 'admin.html'
    }else{
        alertText.classList.add('alertShow')
    }
}