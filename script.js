function setLanguage(lang) {
    document.documentElement.lang = lang;
    localStorage.setItem('preferredLanguage', lang);
    updateMetaTags(lang);
}

document.addEventListener('DOMContentLoaded', () => {
    const preferredLanguage = localStorage.getItem('preferredLanguage') || 'uk';
    setLanguage(preferredLanguage);
});

function updateMetaTags(lang) {
    let description, keywords, title;
    if (lang === 'uk') {
        title = 'Вгадай деталь автомобіля - Захоплива гра для автоентузіастів';
        description = 'Вгадай деталь автомобіля - захоплива гра для автоентузіастів. Відгадуйте марки та деталі автомобілів та покращуйте свої знання про авто. Завантажте гру з Google Play!';
        keywords = 'Вгадай деталь автомобіля, гра про автомобілі, автоентузіаст, автомобільні деталі, гра на Google Play, гра для смартфона, автомобільні марки';
    } else if (lang === 'en') {
        title = 'Guess the Car Part - Exciting Game for Car Enthusiasts';
        description = 'Guess the Car Part - an exciting game for car enthusiasts. Guess the brands and parts of cars and improve your car knowledge. Download the game from Google Play!';
        keywords = 'Guess the Car Part, car game, car enthusiast, car parts, game on Google Play, smartphone game, car brands';
    }
    document.querySelector('meta[name="description"]').setAttribute('content', description);
    document.querySelector('meta[name="keywords"]').setAttribute('content', keywords);
    document.title = title;
}
