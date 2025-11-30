if (typeof translations === 'undefined') {
    console.error("Error: translations object not found.");
}

function getCurrentLanguage() {
    return localStorage.getItem('lang') || 'th';
}

function getTranslation(key) {
    const lang = getCurrentLanguage();

    if (!translations[key]) {
        return key;
    }

    if (!translations[key][lang]) {
        return translations[key]['th'] || key;
    }

    return translations[key][lang];
}

function setLanguage(lang) {
    if (lang !== 'th' && lang !== 'en') return;

    localStorage.setItem('lang', lang);
    translatePage();

    if (typeof updateLangSwitcherUI === 'function') updateLangSwitcherUI();
    if (typeof renderTimeline === 'function') renderTimeline();
}

function translatePage() {
    const lang = getCurrentLanguage();
    document.documentElement.lang = lang;

    const elements = document.querySelectorAll('[data-lang-key]');

    elements.forEach(el => {
        const key = el.getAttribute('data-lang-key');
        const translation = getTranslation(key);

        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            if (el.type === 'submit' || el.type === 'button') {
                el.value = translation;
            } else {
                el.placeholder = translation;
            }
        } else if (el.tagName === 'IMG') {
            el.alt = translation;
        } else {
            el.innerHTML = translation;
        }
    });

    const titleElement = document.querySelector('title[data-lang-key]');
    if (titleElement) {
        titleElement.innerText = getTranslation(titleElement.getAttribute('data-lang-key'));
    }

    updateLangSwitcherUI();
}

function updateLangSwitcherUI() {
    const lang = getCurrentLanguage();
    const thBtn = document.getElementById('lang-th');
    const enBtn = document.getElementById('lang-en');

    if (thBtn) thBtn.classList.toggle('active', lang === 'th');
    if (enBtn) enBtn.classList.toggle('active', lang === 'en');
}