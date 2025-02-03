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

// for preloader activation


//to do:


// var preloader = document.getElementById("preloader");
// var loader = document.getElementById("loader");

// window.onload = function () { loaderDeactive() };

// function loaderDeactive() {
//     preloader.style.display = "none";
//     loader.style.display = "none";
//     window.alert("All item loaded");
// }

// loaderDeactive();