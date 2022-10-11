var nom = 0,
    prenom = 0,
    date = null,
    username = 0,
    mdp = 0,
    email = 0;

function verifFirstName(chaine) 
{
    var a = /^[a-zA-Z]+$/;
    if (a.test(chaine)) 
    {
        document.getElementById("firstname").style.color = "green";
        nom = 1;
    }
    else 
    {
        document.getElementById("firstname").style.color = "red";
        nom = 0;
    }
    
}

function verifLastName(chaine) 
{
    var a = /^[a-zA-Z]+$/;

    if (a.test(chaine)) 
    {
        document.getElementById("lastname").style.color = "green";
        prenom = 1;
    } 
    else 
    {
        document.getElementById("lastname").style.color = "red";
        prenom = 0;
    }

}

function verifDate(chaine) 
{
    var a = /^(0?[1-9]|[12][0-9]|3[01])[/-](0?[1-9]|1[012])[/-](19[0-9][0-9]|20[01][0-9]|2022)$/;

    if (chaine.length == 0) 
    {
        date = null;
    }
    if (a.test(chaine)) 
    {
        document.getElementById("birthdate").style.color = "green";
        date = 1;
    } 
    else 
    {
        document.getElementById("birthdate").style.color = "red";
        date = 0;
    }
}

function verifUserName(chaine) 
{
    var a = /([-+!$@%_\w]{6,})$/;
    if (a.test(chaine)) 
    {
        document.getElementById("username").style.color = "green";
        username = 1;
    } 
    else 
    {
        document.getElementById("username").style.color = "red";
        username = 0;
    }
}

function verifEmail(chaine) 
{
    var a = /^([\w-\.]+@[\w-\.]+\.{1}[A-Za-z-\.]{2,})$/;
    if (a.test(chaine)) {
        document.getElementById("useremail").style.color = "green";
        email = 1;
    } else {
        document.getElementById("useremail").style.color = "red";
        email = 0;
    }
}

function verifpwd(chaine) 
{
    var a = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])([-+!$@%_\w]{8,})$/;
    if (a.test(chaine))
    {
        document.getElementById("userpwd").style.color = "green";
        mdp = 1;
    } 
    else 
    {
        document.getElementById("userpwd").style.color = "red";
        mdp = 0;
    }
}

function valideFormulaire(event) 
{
    if (nom == 0 || prenom == 0 || username == 0 || mdp == 0 || email == 0 || date == 0) 
    {
        event.preventDefault();
        document.getElementById("error").style.display = "flex";
        return false;
    }
}