function test()
{
     var UserName = document.getElementById('Input').value;
     var Email = document.getElementById('Input1').value;
     var Phone_no = document.getElementById('Input2').value;

    

     let user_record= new Array();
     user_record=JSON.parse(localStorage.getItem("Users"))?JSON.parse(localStorage.getItem("users")):[]

     user_record.push({
        "Username":UserName,
        "Email": Email,
        "Phone_no": Phone_no

     })

     localStorage.setItem(Email,JSON.stringify(user_record));
}