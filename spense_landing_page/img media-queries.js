const heroMobile = document.getElementById('heroMobile');
const heroTablet = document.getElementById('heroTablet');
const heroDesktop = document.getElementById('heroDesktop');


const a = window.matchMedia("(max-width: 700px)");
a.addListener(mobile);
mobile(a);

const b = window.matchMedia("(min-width: 700px) and (max-width: 1000px)");
b.addListener(tablet);
tablet(b);


let c = window.matchMedia("(min-width: 1000px)");
c.addListener(desktop);
desktop(c);

function mobile(e) {
    if (e.matches) {
        console.log('Matches for MOBILE (a)');
        heroMobile.classList.remove('d_none');
        heroTablet.classList.add('d_none');
        heroDesktop.classList.add('d_none');
    }
}

function tablet(e) {
    if (e.matches) {
        console.log('Matches for TABLET (b)');

        heroMobile.classList.add('d_none');
        heroTablet.classList.remove('d_none');
        heroDesktop.classList.add('d_none');
    }
}

function desktop(e) {
    if (e.matches) {
        console.log('Matches for DESKTOP (c)');

        heroMobile.classList.add('d_none');
        heroTablet.classList.add('d_none');
        heroDesktop.classList.remove('d_none');
    }
}