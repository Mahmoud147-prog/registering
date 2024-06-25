var tested_email_index = document.querySelector('#tested_email')
var tested_password_index = document.querySelector('#tested_password')

var log_in_btn = document.querySelector('#log_in_button')
var ID_email;
var ID_password;
var users_list = [];
if (JSON.parse(localStorage.getItem("users_list")) != null) {
    users_list = JSON.parse(localStorage.getItem("users_list"))
}

function make_user() {
    user_object = {
        user_email: tested_email_index.value,
        user_password: tested_password_index.value
    }
    return user_object
}
function search_email() {
    for (var i = 0; i < users_list.length; i++) {
        if (make_user().user_email == users_list[i].user_email) {
            ID_email = i;

            return true
        }
    }
    return false

}

function search_password() {

    for (var i = 0; i < users_list.length; i++) {
        if (make_user().user_password == users_list[i].user_password) {
            {
                ID_password = i
                return true
            }

        }
    }
    return false

}
function search() {
    if (search_email() && search_password() && ID_email == ID_password) { return true }
    else { return false }
}
function not_found_user() {
    tested_password_index.nextElementSibling.innerHTML = 'the user does not exist'
    tested_password_index.nextElementSibling.classList.add('green_color')
    tested_password_index.nextElementSibling.classList.remove('text_danger')
}

function error_message() {
    tested_password_index.nextElementSibling.innerHTML = 'either the email or password is wrong'
    tested_password_index.nextElementSibling.classList.remove('green_color')
    tested_password_index.nextElementSibling.classList.add('text_danger')

}
function is_empty() {
    if (tested_email_index.value == ''
        || tested_password_index.value == ''

    ) { return true }
    else { return false }
}
function empty_error() {
    tested_password_index.nextElementSibling.innerHTML = 'please fill the inputs'
    tested_password_index.nextElementSibling.classList.remove('green_color')
    tested_password_index.nextElementSibling.classList.add('text_danger')
}

function log_in_func() {
    if (is_empty() == false) {
        if (search()) {
            localStorage.setItem("ID", JSON.stringify(ID_email))
            location = 'page_log_in.html'
        }
        else if ((search_email() && search_password() == false)
            || (search_email() == false && search_password())) {
            error_message()
        }
        else not_found_user()
    }
    else empty_error()

}



log_in_btn.addEventListener('click', function () {
    log_in_func()

})
