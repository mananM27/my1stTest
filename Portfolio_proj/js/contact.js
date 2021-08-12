var a = [];
function submitf() { 
    let nameu = document.forms['myform']['namec'].value;
    let mail = document.forms['myform']['email'].value;
    let fb = document.forms['myform']['fb'].value;    
    sessionStorage.setItem('Name', `${nameu}`);
    sessionStorage.setItem('Email', `${mail}`);
    sessionStorage.setItem('Feed Back', `${fb}`);    
    function ValidateEmail() 
    {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (mail.match(mailformat))
        {
            return true;
        }
        else {
            document.getElementById('err').style.color = 'red';
            document.getElementById('err').innerHTML = "You have entered an invalid email address formate!";            
            event.preventDefault();
            return false;           
        }
    }    
    ValidateEmail(); 
}
a.push({ sessionStorage });
console.log(a[0].sessionStorage);
var lastKnownScrollPosition;
var nvc = document.getElementById('bgnav');
document.addEventListener('scroll', function (e) {
    lastKnownScrollPosition = window.scrollY;
    if (lastKnownScrollPosition > 40) {
        nvc.style.backgroundColor = "rgb(82, 0, 72) ";
    }
    else if (lastKnownScrollPosition <= 40) {
        nvc.style.backgroundColor = "rgb(126, 6, 112)";
    }
});