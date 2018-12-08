function testfirstname() {
    var firstname = document.getElementById("username").value;

    var invalid = "false";
    for (var i = 0; i < firstname.length; i = i + 1) {
        if (firstname[i] == " ") {
            invalid = "true";

        }
    }
    if (invalid == "true") {

        //   var message="invalid user";

        return 0;
    } else {
        //message="valid user";
        return 1;
    }


}

function testemail() {
    var testemail = "false";
    var email = document.getElementById("email").value;

    for (var i = 0; i < email.length; i = i + 1) {
        if (email[i] == "@") {
            (email[i] == ".")
            {
                testemail = "true";
                console.log(testemail);
            }
        }

    }


    if (testemail == "true") {
        return 1;
        // console.log("email valid");
    } else {
        return 0;
        //  console.log("email non valid");
    }
}

function getNombre(str) {
    var m = str.match(/[1-9]/g);
    if (m === null) {
        return 0;
    }
    return m.length;
}

function getCarSpec(str) {
    var m = str.match(/[!@#$%^&*(),.?":{}|<>]/g);
    if (m === null) {
        return 0;
    }
    return m.length;
}

function getUppercase(str) {
    var m = str.match(/[A-Z]/g);
    if (m === null) {
        return 0;
    }
    return m.length;
}

function getLowercase(str) {
    var m = str.match(/[a-z]/g);
    if (m === null) {
        return 0;
    }
    return m.length;
}

function testmdp() {


    var mdp = document.getElementById("pdp").value;
    var nbre = getNombre(mdp);
    var spec = getCarSpec(mdp);
    var uppercase = getUppercase(mdp);
    var lowercase = getLowercase(mdp);
    console.log("nombre  " + getNombre(mdp));
    console.log("special  " + getCarSpec(mdp));
    console.log("Uppercase  " + getUppercase(mdp));
    console.log("lowercase  " + getLowercase(mdp));
    var n = mdp.length;

    if (n >= 8) {
        if (nbre != 0 && spec != 0 && uppercase != 0 && lowercase != 0)

        {
            console.log("fort");
            //alert("mot de passe  fort");
            return 3;
        } else
        if (((nbre != 0 && spec != 0) || (uppercase != 0 && lowercase != 0)) ||
            ((nbre != 0 && uppercase != 0) || (spec != 0 && lowercase != 0)) ||
            ((nbre != 0 && lowercase != 0) || (spec != 0 && uppercase != 0)))


        {
            console.log("moyen");
            //alert("mot de passe moyen");
            return 2;
        } else {
            console.log("faible");
            //  alert("mot de passe faible");
            return 1;

        }
    } else {
        //alert("mot de passe invalid");
        return -1;
    }

}

function testdate() {
    var date = document.getElementById("date").value;
    /* console.log("date"+date);
  var birthday = new Date(date);
    console.log("date"+birthday);
    var today = new Date();
    console.log("date"+today);
    var years = today.getFullYear() - birthday.getFullYear();

// Reset birthday to the current year.
    birthday.setFullYear(today.getFullYear());

// If the user's birthday has not occurred yet this year, subtract 1.
    if (today < birthday)
    {
        years--;
    }
    document.write("You are " + years + " years old.");*/


    var birthday = new Date(date);
    var birthMsec = birthday.getTime();
    var today = new Date();
    var todayMsec = today.getTime();

    var agedec = (todayMsec - birthMsec) / 31557600000;


    var age = parseInt(agedec);
    /*  if(age>=18)
      {
          //alert("age valid");
          return 1 ;
      }
      else
      {
         // alert("age non valid");

          return 0 ;
      }
        console.log(age);*/
    return age;
}
// 3 - store a message for a contact
function storeUsers(users, user){

    var currentUsers = localStorage.getItem('users');
    if(currentUsers == null){
        var newList = new Array();
        newList.push(user);
        currentUsers = JSON.stringify(newList);
    }
    else
    {
        var currentList =JSON.parse(currentUsers);
        currentList.push(user);
        currentUsers = JSON.stringify(currentList);
    }
    localStorage.setItem('users', currentUsers);
}
function controle() {
    var firstname = document.getElementById("username").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var pdp = document.getElementById("pdp").value;
    if (testdate() >= 18) {
        alert("test age valide");
    } else {
        alert("test age non valide");
    }

    if (testmdp() == -1) {
        alert("mot de passe invalid")
    } else if (testmdp() == 3) {
        alert("mot de passe  fort");
    }
    if (testmdp() == 2) {
        alert("mot de passe  moyen");
    }
    if (testmdp() == 1) {
        alert("mot de passe  faible");
    }
    if (testfirstname() == 1) {
        var message = "firstaname valid";
        alert(message);

    } else {
        var message = "firstaname invalid";
        alert(message);

    }

    if (testemail() == 1) {
        alert("email valid");
    } else {
        alert("email invalid");
    }
    document.getElementById("resultat").innerHTML = message;
    var age = testdate();
    var tabUsers = [];
    var user = {
        "username": "",
        "lastname": "",
        "email": "",
        "age": "",
        "mdp": ""
    }

    if (((testdate() >= 18) && ((testmdp() == 3) || (testmdp() == 2))) && (testfirstname() == 1) && (testemail() == 1)) {

        user.username = firstname;
        user.lastname = lastname;
        user.email = email;
        user.age = age;
        user.mdp = pdp;
     storeUsers(tabUsers, user);


    }
}


