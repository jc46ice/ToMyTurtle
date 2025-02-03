let getshowmenu = document.getElementsByClassName('showmenu')[0];
let gethidemenu = document.getElementsByClassName('hidemenu')[0];
let getnav = document.getElementsByTagName('nav')[0];
getshowmenu.addEventListener('click', function () {
    getnav.classList.add('active');
    getnav.style.opacity = '1';
    gethidemenu.style.opacity = '1';
    gethidemenu.style.visibility = 'visible';
});
gethidemenu.addEventListener('click', function () {
    getnav.classList.remove('active');
    getnav.style.opacity = '0';
    gethidemenu.style.opacity = '0';
    gethidemenu.style.visibility = 'hidden';
});

function scollevent() {
    var getheaderelement = document.getElementsByTagName('header')[0].classList;
    if (document.documentElement.scrollTop > 100) {
        getheaderelement.add('fixed');
    } else {
        getheaderelement.remove('fixed');
    }
}
window.onscroll = scollevent;
document.getElementById('footeryear').textContent = new Date().getFullYear();

function loaderActivation() {
    if (document.readyState !== "complete") {
        document.getElementById("home").style.visibility = "hidden";
        document.getElementById("loader").style.visibility = "visible";
    } else {
        document.getElementById("loader").style.visibility = "hidden";
        document.getElementById("body").style.visibility = "visible";
    }
}

document.onreadystatechange = loaderActivation();