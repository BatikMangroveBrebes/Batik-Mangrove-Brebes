// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const burger = document.getElementById('burger');
    const navMenu = document.getElementById('nav-menu');

    if (burger && navMenu) {
        burger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
});


/*POP UP PRODUK*/
document.addEventListener('DOMContentLoaded', function() {
    var popupElements = document.querySelectorAll('.produk-image');
    var closeElements = document.querySelectorAll('.popup-close');
    var popups = document.querySelectorAll('.popup');
    var overlay = document.getElementById('overlay');

    function showPopup(popupId) {
        var popup = document.getElementById(popupId);
        if (popup) {
            popup.style.display = 'block';
            overlay.style.display = 'block';
        }
    }

    function hidePopup() {
        popups.forEach(function(popup) {
            popup.style.display = 'none';
        });
        overlay.style.display = 'none';
    }

    popupElements.forEach(function(element) {
        element.addEventListener('click', function() {
            var popupId = element.getAttribute('data-id');
            showPopup(popupId);
        });
    });

    closeElements.forEach(function(element) {
        element.addEventListener('click', function() {
            hidePopup();
        });
    });

    window.addEventListener('click', function(event) {
        if (event.target === overlay) {
            hidePopup();
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(function(item) {
        var questionButton = item.querySelector('.faq-question');

        questionButton.addEventListener('click', function() {
            var isActive = item.classList.contains('active');
            
            faqItems.forEach(function(i) {
                i.classList.remove('active');
            });

            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
});



  