function changeLanguage() {
    const lang = document.getElementById("language").value;
    const texts = {
        kk: {
            home: "Қош келдіңіз, Qain Jurt-қа!",
            home_p: "Дәстүрлі қазақ тағамдары мен жайлы атмосфера сізді күтуде.",
            menu: "Мәзір",
            menu_item1: "Бешбармақ – 2500 теңге",
            menu_item2: "Баурсақ – 800 теңге",
            menu_item3: "Қымыз – 600 теңге",
            payment: "Төлем",
            payment_p: "Біз қолма-қол ақша, Kaspi және банк картасын қабылдаймыз.",
            contact: "Байланыс",
            contact_p: "Астана, Сарыарқа даңғылы 12"
        },
        ru: {
            home: "Добро пожаловать в Qain Jurt!",
            home_p: "Традиционные казахские блюда и уютная атмосфера ждут вас.",
            menu: "Меню",
            menu_item1: "Бешбармак – 2500 тенге",
            menu_item2: "Баурсаки – 800 тенге",
            menu_item3: "Кумыс – 600 тенге",
            payment: "Оплата",
            payment_p: "Мы принимаем наличные, Kaspi и банковские карты.",
            contact: "Контакты",
            contact_p: "Астана, проспект Сарыарка 12"
        },
        en: {
            home: "Welcome to Qain Jurt!",
            home_p: "Traditional Kazakh cuisine and a cozy atmosphere await you.",
            menu: "Menu",
            menu_item1: "Beshbarmak – 2500 KZT",
            menu_item2: "Baursak – 800 KZT",
            menu_item3: "Kumys – 600 KZT",
            payment: "Payment",
            payment_p: "We accept cash, Kaspi, and bank cards.",
            contact: "Contact",
            contact_p: "Astana, Saryarka Avenue 12"
        }
    };

    if (window.location.pathname.includes("index.html") || window.location.pathname === "/") {
        document.querySelector("h2").innerText = texts[lang].home;
        document.querySelector("p").innerText = texts[lang].home_p;
    } else if (window.location.pathname.includes("menu.html")) {
        document.querySelector("h2").innerText = texts[lang].menu;
        document.querySelectorAll(".menu-item p")[0].innerText = texts[lang].menu_item1;
        document.querySelectorAll(".menu-item p")[1].innerText = texts[lang].menu_item2;
        document.querySelectorAll(".menu-item p")[2].innerText = texts[lang].menu_item3;
    } else if (window.location.pathname.includes("payment.html")) {
        document.querySelector("h2").innerText = texts[lang].payment;
        document.querySelectorAll("p")[0].innerText = texts[lang].payment_p;
    } else if (window.location.pathname.includes("contact.html")) {
        document.querySelector("h2").innerText = texts[lang].contact;
        document.querySelectorAll("p")[0].innerText = texts[lang].contact_p;
    }
}