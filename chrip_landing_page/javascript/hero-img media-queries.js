let imgDesktop = document.getElementById('desktop');
let imgTablet = document.getElementById('tablet');

let a = window.matchMedia("(max-width: 700px)");
a.addListener(mobile);
mobile(a);

let b = window.matchMedia("(min-width: 700px) and (max-width: 900px)");
b.addListener(tablet);
tablet(b);


let c = window.matchMedia("(min-width: 900px)");
c.addListener(desktop);
desktop(c);

function mobile(e) {
    if (e.matches) {
        console.log('Matches for MOBILE (a)');
        imgDesktop.classList.remove('d_none');
        imgTablet.classList.add('d_none');
    }
}

function tablet(e) {
    if (e.matches) {
        console.log('Matches for TABLET (b)');
        imgDesktop.classList.add('d_none');
        imgTablet.classList.remove('d_none');
    }
}

function desktop(e) {
    if (e.matches) {
        console.log('Matches for DESKTOP (c)');
        imgDesktop.classList.remove('d_none');
        imgTablet.classList.add('d_none');
    }
}
