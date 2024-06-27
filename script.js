function setLanguage(language) {
    document.documentElement.lang = language;
    updateContent();
}

function updateContent() {
    const allLangElements = document.querySelectorAll('[data-lang]');
    allLangElements.forEach(element => {
        element.style.display = 'none';
    });

    const activeLang = document.documentElement.lang;
    const activeLangElements = document.querySelectorAll(`[data-lang="${activeLang}"]`);
    activeLangElements.forEach(element => {
        element.style.display = 'block';
    });
}

document.addEventListener('DOMContentLoaded', () => {
    updateContent();
});
