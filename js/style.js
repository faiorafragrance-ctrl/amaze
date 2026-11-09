document.addEventListener('DOMContentLoaded', function () {

    // ===== Smooth Scroll for Anchor Links =====
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var targetId = this.getAttribute('href');
            var target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu if open
                document.getElementById('navLinks').classList.remove('active');
            }
        });
    });

    // ===== Mobile Menu Toggle =====
    var menuToggle = document.getElementById('menuToggle');
    var navLinks = document.getElementById('navLinks');

    menuToggle.addEventListener('click', function () {
        navLinks.classList.toggle('active');
        var icon = menuToggle.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // ===== Navbar Scroll Effect =====
    var header = document.getElementById('header');
    var heroSection = document.querySelector('.hero');

    function handleScroll() {
        if (window.pageYOffset > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleScroll);

    // ===== Active Nav Link on Scroll =====
    var sections = document.querySelectorAll('section[id]');

    function updateActiveLink() {
        var scrollPos = window.pageYOffset + 150;
        sections.forEach(function (section) {
            var top = section.offsetTop;
            var height = section.offsetHeight;
            var id = section.getAttribute('id');
            var link = document.querySelector('.nav-links a[href="#' + id + '"]');

            if (scrollPos >= top && scrollPos < top + height) {
                document.querySelectorAll('.nav-links a').forEach(function (a) {
                    a.classList.remove('active');
                });
                if (link) link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink);

    // ===== Scroll Fade-In Animations =====
    var animateElements = document.querySelectorAll('.service-card, .project-card, .why-card, .section-header, .why-choose-header');

    animateElements.forEach(function (el) {
        el.classList.add('fade-in');
    });

    var observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animateElements.forEach(function (el) {
        observer.observe(el);
    });

    // ===== Project Card Hover Enhancement =====
    document.querySelectorAll('.project-card').forEach(function (card) {
        card.addEventListener('mouseenter', function () {
            this.querySelector('.project-title').style.background = 'rgba(232, 76, 61, 0.9)';
        });
        card.addEventListener('mouseleave', function () {
            this.querySelector('.project-title').style.background = 'rgba(0,0,0,0.8)';
        });
    });

});