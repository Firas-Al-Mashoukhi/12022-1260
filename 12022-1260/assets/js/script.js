document.addEventListener('DOMContentLoaded', function () {
    const mobileMenu = document.getElementById('mobile-menu');
    const navbar = document.getElementById('navbar');

    mobileMenu.addEventListener('click', function () {
        navbar.classList.toggle('active');

        const icon = this.querySelector('i');
        if (navbar.classList.contains('active')) {
            icon.classList.remove('bx-menu');
            icon.classList.add('bx-x');
        } else {
            icon.classList.remove('bx-x');
            icon.classList.add('bx-menu');
        }
    });

    document.querySelectorAll('.navbar a').forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
            document.querySelector('.menu-toggle i').classList.remove('bx-x');
            document.querySelector('.menu-toggle i').classList.add('bx-menu');
        });
    });
    // --- تبديل الثيم (الوضع المظلم/الفاتح) ---
    const themeToggle = document.getElementById('theme-toggle');

    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.body.classList.add(currentTheme);
        updateIcon(currentTheme);
    }

    themeToggle.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');

        let theme = 'light';
        if (document.body.classList.contains('dark-mode')) {
            theme = 'dark';
        }

        localStorage.setItem('theme', theme);
        updateIcon(theme);
    });

    function updateIcon(theme) {
        const icon = themeToggle.querySelector('i');
        if (theme === 'dark') {

            icon.classList.remove('bx-moon');
            icon.classList.add('bx-sun');
        } else {
            icon.classList.remove('bx-sun');
            icon.classList.add('bx-moon');
        }
    }

    // --- زر العودة للأعلى ---
    const scrollTopBtn = document.getElementById('scroll-top');

    // ظهر الزر فقط عندما يتم التمرير لأسفل
    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 300) {
            scrollTopBtn.style.display = 'flex';
            setTimeout(() => {
                scrollTopBtn.style.opacity = '1';
            }, 10);
        } else {
            scrollTopBtn.style.opacity = '0';
            setTimeout(() => {
                scrollTopBtn.style.display = 'none';
            }, 300);
        }
    });

    scrollTopBtn.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // التأكد من ظهور الزر إذا كانت الصفحة طويلة
    checkScrollPosition();

    function checkScrollPosition() {
        if (window.pageYOffset > 300) {
            scrollTopBtn.style.display = 'flex';
            scrollTopBtn.style.opacity = '1';
        }
    }
});