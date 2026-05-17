// --- ÇEVİRİ SÖZLÜĞÜ VE DİL YÖNETİMİ ---
const translations = {
    az: {
        headerTitle: "Şəki Tarix-Diyarşünaslıq Muzeyi",
        headerDesc: "Ziyarətinizi unudulmaz edin. Öz adınıza xüsusi xatirə biletinizi yaradın.",
        cardTitle: "Xatirə Biletiniz",
        inputPlaceholder: "Ad və Soyad daxil edin",
        btnText: "Biletinizi Yaradın",
        previewTitle: "Biletinizin Önizlənməsi",
        readyTitle: "Biletiniz Hazırdır!",
        instaDesc: "📸 İnstagram-da bizi <strong>@shekitarixdiyarshunasliqmuzeyi</strong> etiketləyərək paylaşmağı unutmayın!",
        copyTagText: "Etiketi Kopyala",
        copiedText: "Kopyalandı! ✅",
        shareNative: "Şəkil Kimi Paylaş",
        downloadPng: "Şəkil (PNG) Endir",
        downloadPdf: "Sənəd (PDF) Kimi Endir",
        footerText: "© 2026 Şəki Tarix-Diyarşünaslıq Muzeyi. Bütün hüquqlar qorunur.",
        ticketCounterText: "Toplam yaradılan bilet:",
        generating: "Hazırlanır...",
        errorShort: "Zəhmət olmasa düzgün ad daxil edin (minimum 3 simvol).",
        errorInvalidName: "Lütfən, yalnız hərflərdən və boşluqlardan istifadə edin.",
        errorLong: "Bilet yaradılarkən xəta baş verdi. Zəhmət olmasa yenidən yoxlayın.",
        shareTitle: "Şəki Muzeyi Xatirə Bileti",
        shareText: "Mən Şəki Tarix-Diyarşünaslıq Muzeyindən öz xatirə biletimi aldım! Bizi @shekitarixdiyarshunasliqmuzeyi etiketləməyi unutmayın.",
        shareError: "Cihazınız şəkli birbaşa paylaşmağı dəstəkləmir. Şəkli endirərək İnstagram-da paylaşa bilərsiniz.",
        adminAlert: "Yönetici Paneli: Sayğac aktiv edildi!"
    },
    tr: {
        headerTitle: "Şeki Tarih ve Diyarşünaslık Müzesi",
        headerDesc: "Ziyaretinizi unutulmaz kılın. Kendi adınıza özel hatıra biletinizi oluşturun.",
        cardTitle: "Hatıra Biletiniz",
        inputPlaceholder: "Ad ve Soyad giriniz",
        btnText: "Biletinizi Oluşturun",
        previewTitle: "Biletinizin Önizlemesi",
        readyTitle: "Biletiniz Hazır!",
        instaDesc: "📸 Instagram'da bizi <strong>@shekitarixdiyarshunasliqmuzeyi</strong> etiketleyerek paylaşmayı unutmayın!",
        copyTagText: "Etiketi Kopyala",
        copiedText: "Kopyalandı! ✅",
        shareNative: "Görsel Olarak Paylaş",
        downloadPng: "Görseli (PNG) İndir",
        downloadPdf: "Belge (PDF) Olarak İndir",
        footerText: "© 2026 Şeki Tarih ve Diyarşünaslık Müzesi. Tüm hakları saklıdır.",
        ticketCounterText: "Toplam oluşturulan bilet:",
        generating: "Hazırlanıyor...",
        errorShort: "Lütfen geçerli bir ad girin (minimum 3 karakter).",
        errorInvalidName: "Lütfen sadece harf ve boşluk kullanın.",
        errorLong: "Bilet oluşturulurken hata meydana geldi. Lütfen tekrar deneyin.",
        shareTitle: "Şeki Müzesi Hatıra Bileti",
        shareText: "Şeki Tarih ve Diyarşünaslık Müzesi'nden kendi hatıra biletimi aldım! Bizi @shekitarixdiyarshunasliqmuzeyi etiketlemeyi unutmayın.",
        shareError: "Cihazınız görseli doğrudan paylaşmayı desteklemiyor. Görseli indirerek Instagram'da paylaşabilirsiniz.",
        adminAlert: "Yönetici Paneli: Sayaç aktif edildi!"
    },
    en: {
        headerTitle: "Sheki History and Local Lore Museum",
        headerDesc: "Make your visit unforgettable. Create a custom souvenir ticket in your name.",
        cardTitle: "Your Souvenir Ticket",
        inputPlaceholder: "Enter your Name and Surname",
        btnText: "Create Your Ticket",
        previewTitle: "Ticket Preview",
        readyTitle: "Your Ticket is Ready!",
        instaDesc: "📸 Don't forget to share and tag us on Instagram <strong>@shekitarixdiyarshunasliqmuzeyi</strong>!",
        copyTagText: "Copy Tag",
        copiedText: "Copied! ✅",
        shareNative: "Share as Image",
        downloadPng: "Download Image (PNG)",
        downloadPdf: "Download Document (PDF)",
        footerText: "© 2026 Sheki History and Local Lore Museum. All rights reserved.",
        ticketCounterText: "Total tickets created:",
        generating: "Generating...",
        errorShort: "Please enter a valid name (minimum 3 characters).",
        errorInvalidName: "Please use letters and spaces only.",
        errorLong: "An error occurred while creating the ticket. Please try again.",
        shareTitle: "Sheki Museum Souvenir Ticket",
        shareText: "I got my custom souvenir ticket from the Sheki History and Local Lore Museum! Don't forget to tag @shekitarixdiyarshunasliqmuzeyi.",
        shareError: "Your device does not support native sharing. You can download the image and share it on Instagram.",
        adminAlert: "Admin Panel: Counter activated!"
    },
    ru: {
        headerTitle: "Шекинский историко-краеведческий музей",
        headerDesc: "Сделайте свой визит незабываемым. Создайте именной сувенирный билет.",
        cardTitle: "Ваш сувенирный билет",
        inputPlaceholder: "Введите Имя и Фамилию",
        btnText: "Создать Билет",
        previewTitle: "Предварительный просмотр",
        readyTitle: "Ваш билет готов!",
        instaDesc: "📸 Не забудьте поделиться и отметить нас в Instagram <strong>@shekitarixdiyarshunasliqmuzeyi</strong>!",
        copyTagText: "Копировать тег",
        copiedText: "Скопировано! ✅",
        shareNative: "Поделиться как фото",
        downloadPng: "Скачать фото (PNG)",
        downloadPdf: "Скачать документ (PDF)",
        footerText: "© 2026 Шекинский историко-краеведческий музей. Все права защищены.",
        ticketCounterText: "Всего создано билетов:",
        generating: "Создается...",
        errorShort: "Пожалуйста, введите правильное имя (минимум 3 символа).",
        errorInvalidName: "Пожалуйста, используйте только буквы и пробелы.",
        errorLong: "Произошла ошибка при создании билета. Пожалуйста, попробуйте еще раз.",
        shareTitle: "Сувенирный билет Шекинского музея",
        shareText: "Я получил свой сувенирный билет из Шекинского историко-краеведческого музея! Не забудьте отметить @shekitarixdiyarshunasliqmuzeyi.",
        shareError: "Ваше устройство не поддерживает прямой обмен. Вы можете скачать изображение и поделиться им в Instagram.",
        adminAlert: "Панель администратора: Счетчик активирован!"
    }
};

let currentLang = 'az';

function updateLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (el.tagName === 'INPUT') {
                el.placeholder = translations[lang][key];
            } else {
                el.innerHTML = translations[lang][key];
            }
        }
    });
}

const flagBtns = document.querySelectorAll('.flag-btn');
flagBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        flagBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const selectedLang = btn.getAttribute('data-lang');
        updateLanguage(selectedLang);
    });
});

// --- YÖNETİCİ GİZLİ GİRİŞİ (LOGO 5 TIK) ---
let logoClickCount = 0;
let clickTimer;
const adminLogo = document.getElementById('secretAdminLogo');
const adminCounterSection = document.getElementById('adminCounterSection');

adminLogo.addEventListener('click', () => {
    logoClickCount++;
    if (logoClickCount === 5) {
        adminCounterSection.style.display = 'block';
        alert(translations[currentLang].adminAlert);
    }
    clearTimeout(clickTimer);
    clickTimer = setTimeout(() => { logoClickCount = 0; }, 2000);
});

// --- SAYAÇ YÖNETİMİ ---
let totalTickets = localStorage.getItem('museumTotalTickets') ? parseInt(localStorage.getItem('museumTotalTickets')) : 0;
const counterElement = document.getElementById('ticketCounterNumber');
if (counterElement) counterElement.innerText = totalTickets;

// --- INSTAGRAM ETİKETİ KOPYALAMA ---
const copyTagBtn = document.getElementById('copyTagBtn');
copyTagBtn.addEventListener('click', async () => {
    try {
        await navigator.clipboard.writeText("@shekitarixdiyarshunasliqmuzeyi");
        const btnSpan = copyTagBtn.querySelector('span') || copyTagBtn;
        btnSpan.innerHTML = translations[currentLang].copiedText;
        copyTagBtn.classList.add('copied');
        setTimeout(() => {
            btnSpan.innerHTML = translations[currentLang].copyTagText;
            copyTagBtn.classList.remove('copied');
        }, 2000);
    } catch (err) {
        console.error('Kopyalama basarisiz', err);
    }
});

// --- PDF VƏ ŞƏKİL YARADILMASI ---
let globalPngFile = null;
let globalPngUri = null;
let globalPdfUri = null;
let globalCleanName = ""; // Dinamik dosya ismi icin global degisken

const generatePDF = async (name) => {
    const submitBtn = document.getElementById("submitBtn");
    const btnIcon = document.getElementById("btnIcon");
    const btnSpinner = document.getElementById("btnSpinner");
    const btnText = document.getElementById("btnText");
    
    // Spinner'ı aktif et, eski ikonu gizle
    btnIcon.classList.add("hidden");
    btnSpinner.classList.remove("hidden");
    btnText.innerHTML = translations[currentLang].generating;
    submitBtn.disabled = true;

    // Dosya ismi için kullanıcı ismini temizle (Boşlukları alt tire yap ve geçersiz karakterleri sil)
    globalCleanName = name.trim().replace(/\s+/g, '_').replace(/[^a-zA-Z0-9\u0400-\u04FFÇçĞğİıÖöŞşÜüƏə_-]/g, '');

    try {
        const { PDFDocument, rgb } = PDFLib;

        const exBytes = await fetch("./Ticket.pdf").then((res) => res.arrayBuffer());
        const exFont = await fetch("./FrancoisOne-jYgy.ttf").then((res) => res.arrayBuffer());

        const pdfDoc = await PDFDocument.load(exBytes);
        pdfDoc.registerFontkit(fontkit);

        const myFont = await pdfDoc.embedFont(exFont);
        const pages = pdfDoc.getPages();
        const firstPage = pages[0];

        firstPage.drawText(name, {
            x: 70,
            y: 125,
            size: 20,
            font: myFont,
            color: rgb(0, 0, 0),
        });

        const pdfBytes = await pdfDoc.save();
        globalPdfUri = await pdfDoc.saveAsBase64({ dataUri: true });

        const loadingTask = pdfjsLib.getDocument({ data: pdfBytes });
        const pdf = await loadingTask.promise;
        const page = await pdf.getPage(1);

        const scale = 3; 
        const viewport = page.getViewport({ scale: scale });

        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderContext = {
            canvasContext: context,
            viewport: viewport
        };
        await page.render(renderContext).promise;

        globalPngUri = canvas.toDataURL("image/png"); 
        
        const res = await fetch(globalPngUri);
        const blob = await res.blob();
        globalPngFile = new File([blob], `SekiMuzeyi_${globalCleanName}.png`, { type: "image/png" });

        const imgPreview = document.getElementById("myImagePreview");
        imgPreview.src = globalPngUri;
        document.getElementById("previewContainer").classList.remove("hidden");
        document.getElementById('shareSection').classList.remove('hidden');

        // Sayacı artır
        totalTickets++;
        localStorage.setItem('museumTotalTickets', totalTickets);
        if (counterElement) counterElement.innerText = totalTickets;

        confetti({
            particleCount: 150,
            spread: 80,
            origin: { y: 0.6 },
            colors: ['#B67352', '#ffffff', '#28a745', '#E1306C']
        });

    } catch (error) {
        console.error("Xəta baş verdi:", error);
        alert(translations[currentLang].errorLong); 
    } finally {
        // Butonu eski haline getir
        btnIcon.classList.remove("hidden");
        btnSpinner.classList.add("hidden");
        btnText.innerHTML = translations[currentLang].btnText; 
        submitBtn.disabled = false;
    }
};

const submitBtn = document.getElementById("submitBtn");
const inputValue = document.querySelector("#name");

submitBtn.addEventListener("click", () => {
    const val = inputValue.value.trim();
    
    // Gelişmiş Dil Validasyonu (Sadece harfler, Latin, Kiril ve boşluklar kabul edilir)
    const nameRegex = /^[a-zA-Z\u0400-\u04FFÇçĞğİıÖöŞşÜüƏə\s]+$/;

    if (!val || val.length < 3) {
        alert(translations[currentLang].errorShort);
    } else if (!nameRegex.test(val)) {
        alert(translations[currentLang].errorInvalidName);
    } else {
        generatePDF(val);
    }
});

// --- DİNAMİK DOSYA İSİMLİ ENDİRME BUTONLARI ---
document.getElementById('downloadPngBtn').addEventListener('click', () => {
    if (globalPngUri) {
        const fileName = globalCleanName ? `SekiMuzeyi_${globalCleanName}.png` : "XatireBileti.png";
        saveAs(globalPngUri, fileName);
    }
});

document.getElementById('downloadPdfBtn').addEventListener('click', () => {
    if (globalPdfUri) {
        const fileName = globalCleanName ? `SeyiMuzeyi_${globalCleanName}.pdf` : "XatireBileti.pdf";
        saveAs(globalPdfUri, fileName, { autoBom: true });
    }
});

document.getElementById('shareNativeBtn').addEventListener('click', async () => {
    if (!globalPngFile) return;

    if (navigator.canShare && navigator.canShare({ files: [globalPngFile] })) {
        try {
            await navigator.share({
                files: [globalPngFile],
                title: translations[currentLang].shareTitle,
                text: translations[currentLang].shareText
            });
        } catch (err) {
            console.log('Paylasim iptal edildi:', err);
        }
    } else {
        alert(translations[currentLang].shareError); 
    }
});