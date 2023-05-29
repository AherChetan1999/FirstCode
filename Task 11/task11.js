function test()
{
     var UserName = document.getElementById('Input').value;
     var Email = document.getElementById('Input1').value;
     var Password = document.getElementById('Input2').value;

     var uid= localStorage.setItem('UserName',UserName);
     var email= localStorage.setItem('Email', Email);
     var pass= localStorage.setItem('Password', Password);
}