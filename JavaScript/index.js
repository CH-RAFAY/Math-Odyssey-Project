document.addEventListener('DOMContentLoaded', function() {
    const carLicensePopupBtn = document.getElementById("carLicensePopupBtn");
    const carLicensePopupOverlay = document.getElementById("carLicensePopupOverlay");
    const carLicenseCloseBtn = document.getElementById("carLicenseCloseBtn");
    let carLicenseScrollTimer;
    let carLicenseLastScrollTop = 0;
    let carLicenseIsScrolling = false;

    const carLicenseShowButton = () => {
        carLicensePopupBtn.classList.add('car-visible');
    };

    const carLicenseHideButton = () => {
        carLicensePopupBtn.classList.remove('car-visible');
    };

    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > carLicenseLastScrollTop && !carLicenseIsScrolling) {
            carLicenseIsScrolling = true;
            carLicenseShowButton();
        }
        carLicenseLastScrollTop = scrollTop;
        clearTimeout(carLicenseScrollTimer);
        carLicenseScrollTimer = setTimeout(() => {
            carLicenseIsScrolling = false;
            carLicenseHideButton();
        }, 100); 
    });

    carLicensePopupBtn.addEventListener("click", () => {
        carLicensePopupOverlay.classList.add("car-license-show-popup");
    });

    carLicenseCloseBtn.addEventListener("click", () => {
        carLicensePopupOverlay.classList.remove("car-license-show-popup");
    });

    carLicensePopupOverlay.addEventListener("click", (event) => {
        if (event.target === carLicensePopupOverlay) {
            carLicensePopupOverlay.classList.remove("car-license-show-popup");
        }
    });
});