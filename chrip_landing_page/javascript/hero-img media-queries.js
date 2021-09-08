// Javascript Media Queries with one image
let imgDesktop = document.getElementById('desktop');
let imgTablet = document.getElementById('tablet');

let mediaQuery700Up = window.matchMedia("(min-width: 600px)");
let mediaQuery700Down = window.matchMedia("(max-width: 600px)");

let mediaQuery900Up = window.matchMedia("(min-width: 900px)");
let mediaQuery900Down = window.matchMedia("(max-width: 900px)");

tablet(mediaQuery700Up);
mediaQuery700Up.addListener(tablet);

mobile(mediaQuery700Down);
mediaQuery700Down.addListener(mobile);

desktop(mediaQuery900Up);
mediaQuery900Up.addListener(desktop);

tablet(mediaQuery900Down);
mediaQuery900Down.addListener(tablet);

function mobile(e) {
    if (e.matches) {
        console.log("matches");
        imgDesktop.classList.remove('d_none');
        imgTablet.classList.add('d_none');
    }
}

function tablet(e) {
    if (e.matches) {
        console.log("matches");
        imgDesktop.classList.add('d_none');
        imgTablet.classList.remove('d_none');
    }
}

function desktop(e) {
    if (e.matches) {
        console.log("mathces 900");
        imgTablet.classList.add('d_none');
        imgDesktop.classList.remove('d_none');
    }
}