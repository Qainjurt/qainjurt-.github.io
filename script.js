function changeLanguage() {
    const lang = document.getElementById("language").value;
    const texts = {
        kk: {
            welcome: "Қош келдіңіз, Qain Jurt-қа!",
            welcome_desc: "Дәстүрлі қазақ тағамдары мен жайлы атмосфера сізді күтуде.",
            menu: "Мәзір",
            beshbarmak: "Бешбармақ – 2500 теңге",
            baursak: "Баурсақ – 800 теңге",
            kymyz: "Қымыз – 600 теңге",
            gallery: "Галерея",
            payment: "Төлем",
            payment_desc: "Біз қолма-қол ақша, Kaspi және банк картасын қабылдаймыз.",
            contact: "Байланыс",
            contact_address: "Мекенжай: Астана, Сарыарқа даңғылы 12"
        },
        ru: {
            welcome: "Добро пожаловать в Qain Jurt!",
            welcome_desc: "Традиционные казахские блюда и уютная атмосфера ждут вас.",
            menu: "Меню",
            beshbarmak: "Бешбармак – 2500 тенге",
            baursak: "Баурсаки – 800 тенге",
            kymyz: "Кумыс – 600 тенге",
            gallery: "Галерея",
            payment: "Оплата",
            payment_desc: "Мы принимаем наличные, Kaspi и банковские карты.",
            contact: "Контакты",
            contact_address: "Астана, проспект Сарыарка 12"
        },
        en: {
            welcome: "Welcome to Qain Jurt!",
            welcome_desc: "Traditional Kazakh cuisine and a cozy atmosphere await you.",
            menu: "Menu",
            beshbarmak: "Beshbarmak – 2500 KZT",
            baursak: "Baursak – 800 KZT",
            kymyz: "Kumys – 600 KZT",
            gallery: "Gallery",
            payment: "Payment",
            payment_desc: "We accept cash, Kaspi, and bank cards.",
            contact: "Contact",
            contact_address: "Astana, Saryarka Avenue 12"
        }
    };

    // ID арқылы мәтіндерді ауыстыру
    document.getElementById("welcome-text") && (document.getElementById("welcome-text").innerText = texts[lang].welcome);
    document.getElementById("welcome-desc") && (document.getElementById("welcome-desc").innerText = texts[lang].welcome_desc);
    document.getElementById("menu-title") && (document.getElementById("menu-title").innerText = texts[lang].menu);
    document.getElementById("beshbarmak-price") && (document.getElementById("beshbarmak-price").innerText = texts[lang].beshbarmak);
    document.getElementById("baursak-price") && (document.getElementById("baursak-price").innerText = texts[lang].baursak);
    document.getElementById("kymyz-price") && (document.getElementById("kymyz-price").innerText = texts[lang].kymyz);
    document.getElementById("gallery-title") && (document.getElementById("gallery-title").innerText = texts[lang].gallery);
    document.getElementById("payment-title") && (document.getElementById("payment-title").innerText = texts[lang].payment);
    document.getElementById("payment-desc") && (document.getElementById("payment-desc").innerText = texts[lang].payment_desc);
    document.getElementById("contact-title") && (document.getElementById("contact-title").innerText = texts[lang].contact);
    document.getElementById("contact-address") && (document.getElementById("contact-address").innerText = texts[lang].contact_address);
}