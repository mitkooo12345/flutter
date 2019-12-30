const passSpecialChars = ["!", "@", "#", "$", "%", "^", "&"];

function authButtonClicked(fromRegisterForm) {

    if (validateForm(fromRegisterForm)) {
        //TODO: call register()
    }
}

function validateForm(fromRegisterForm) {
    let error = document.getElementById("errors");
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;

    if (fromRegisterForm && name.length <= 0) {
        error.innerHTML = "Please enter username!";
        return false;
    }

    if (email.length <= 0
        || !email.includes("@")
        || !email.includes(".")
        || email.length < 5) {
        error.innerHTML = "Please enter valid email!";
        return false;
    }

    if (pass.length < 6 || !hasUpperCase(pass) || !hasNumber(pass) || !hasSpecialSymbols(pass, passSpecialChars)) {
        error.innerHTML = "The passwords must be at least 6 characters long, including one uppercase, one number, one of !,@,#,$,%,^,&";
        return false;
    }


    error.innerHTML = "";
    return true;
}

function hasUpperCase(str) {
    return str.toLowerCase() != str;
}

function hasNumber(str) {
    return /\d/.test(str);
}

function hasSpecialSymbols(str, charArray) {
    for (i = 0; i < charArray.length - 1; i++) {
        if (str.includes(passSpecialChars[i])) {
            return true;
        }
    }

    return false;
}