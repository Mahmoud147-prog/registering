var registering_user_name = document.querySelector('#user_inputted_name')
var registering_user_email = document.querySelector('#user_inputted_email')
var registering_user_password = document.querySelector('#user_inputted_password')
var sign_in_span=document.querySelector('#sign_in_span')
var users_list=[];
if(JSON.parse(localStorage.getItem("list"))!=null){
    users_list=JSON.parse(localStorage.getItem("list"))
}
var sign_up_btn = document.querySelector('#sign_up_button')

function make_registering_user() {
    var registering_user = {
        user_name: registering_user_name.value,
        user_email: registering_user_email.value,
        user_password: registering_user_password.value
    }
    return registering_user
}

function add(){
    users_list.push(make_registering_user())
    localStorage.setItem('users_list',JSON.stringify(users_list))
    registering_user_password.nextElementSibling.innerHTML='succes'
    registering_user_password.nextElementSibling.classList.remove('text-danger')
    registering_user_password.nextElementSibling.classList.add('green_color')
}

function search_email(){
    if(JSON.parse(localStorage.getItem('users_list'))!=null){
users_list=JSON.parse(localStorage.getItem('users_list'))

    }
    else users_list=[]
for(var i=0;i<users_list.length;i++){
    if (make_registering_user().user_email==users_list[i].user_email){
        return true
    }

}
return false
}

function empty_error(){
    registering_user_password.nextElementSibling.innerHTML='please fill all the inputs'
    registering_user_password.nextElementSibling.classList.add('text_danger')
    registering_user_password.nextElementSibling.classList.remove('green_color')
}
function found_error(){
    registering_user_password.nextElementSibling.innerHTML='the user is already found'
    registering_user_password.nextElementSibling.classList.add('text-danger')
    registering_user_password.nextElementSibling.classList.remove('green_color')
}
function is_empty(){
    if(
        registering_user_name.value==''
        ||registering_user_email.value==''
        ||registering_user_password.value==''
    )
    {
       return true 
    }
    else {return false}
}
function sign_up_func() {
    if (is_empty()) {
        empty_error()
    }
    else if (search_email()) {
        found_error()
    }
    else {
        add()
    }
}
function get_sign_in_page(){
    location='index.html'
}



sign_up_btn.addEventListener('click', sign_up_func)
sign_in_span.addEventListener('click',get_sign_in_page)