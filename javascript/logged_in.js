var log_out_btn=document.querySelector('#log_out_button')
var user_name=document.querySelector('#user_name')
users_list=JSON.parse(localStorage.getItem('users_list'))


function get_ID(){
    var ID=localStorage.getItem("ID")
    return ID
}
function set_name(){
    var user_object=users_list[get_ID()]
    var name =user_object.user_name;
    return name;
    
    
}
user_name.innerHTML=set_name()



function get_index_page(){
    location='index.html'
}




log_out_btn.addEventListener('click',get_index_page)