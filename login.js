function loginCheck() {
    var login=document.getElementById('username').value;
    var mdp=document.getElementById('mdp').value;

    var currentUsers = localStorage.getItem('users')||[];
    var testusername="false";
    var testmdp="false";
    var test="false";
    if(currentUsers == null){
        var newList = new Array();

    }
    var users = JSON.parse(currentUsers);
    for (var i=0;i<users.length;i++)
    {//console.log(users[i].username);
            if((users[i].username==login) && (users[i].mdp==mdp))
        {
        alert("1");
          //  window.location="home.html";
           testusername ="true";
             testmdp ="true";
             test="true";

        }
        else if((users[i].username == login)&&(users[i].mdp!=mdp))
        {
            alert("2");
            testusername ="true";
        }

        else if((users[i].username != login)&&(users[i].mdp==mdp))
            { alert("3");
                testmdp ="true";
            }

    }
if((test=="true")&&(testusername =="true")&&(testmdp =="true"))
{
   window.location="home.html";
  // alert("hello");
}
else if ((test=="false")&&(testusername =="true")&&(testmdp =="true"))
{

    alert("user name et mot de passe invalid");
}
else if((testusername =="true")||(testmdp =="true"))
{
    if ((testusername =="true")&&(testmdp =="false"))
    {
        alert("mot de passe invalid ");
    }
    else if ((testusername =="false")&&(testmdp =="true"))
    {
        alert("username invalid ");
    }
}
else if((testusername =="false")&&(testmdp =="false"))
{
    alert("username  et mot de passe invalid ");
}
else if((testusername =="false")||(testmdp =="false"))
{
    if(testusername =="false")
    {
        alert("username invalid ");
    }
    else if(testmdp =="false")
    {
        alert("mot de passe invalid ");
    }
}

}