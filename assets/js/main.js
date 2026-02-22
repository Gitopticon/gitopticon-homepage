// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuClose = document.getElementById('mobile-menu-close');
const mobileMenuBackdrop = document.getElementById('mobile-menu-backdrop');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');

function openMobileMenu() {
    mobileMenu.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
    mobileMenu.classList.add('hidden');
    document.body.style.overflow = '';
}

if (mobileMenuButton) {
    mobileMenuButton.addEventListener('click', openMobileMenu);
}

if (mobileMenuClose) {
    mobileMenuClose.addEventListener('click', closeMobileMenu);
}

if (mobileMenuBackdrop) {
    mobileMenuBackdrop.addEventListener('click', closeMobileMenu);
}

// Close mobile menu when clicking on links
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
});

// Close mobile menu on Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
        closeMobileMenu();
    }
});

// Smooth scroll for anchor links with navbar offset
var navbarHeight = 64;
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = targetPosition - navbarHeight - 16; // 16px extra padding
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Cookie consent banner
(function() {
    var consent = localStorage.getItem('cookie_consent');
    var banner = document.getElementById('cookie-consent');
    var acceptBtn = document.getElementById('cookie-accept');
    var declineBtn = document.getElementById('cookie-decline');

    if (!consent && banner) {
        banner.classList.remove('hidden');
    }

    if (acceptBtn) {
        acceptBtn.addEventListener('click', function() {
            localStorage.setItem('cookie_consent', 'accepted');
            banner.classList.add('hidden');
        });
    }

    if (declineBtn) {
        declineBtn.addEventListener('click', function() {
            localStorage.setItem('cookie_consent', 'declined');
            banner.classList.add('hidden');
        });
    }
})();
