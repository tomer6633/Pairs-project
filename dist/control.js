var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var dupicatedCards = __spreadArrays(cards, cards);
var shuffleArray = shuffle(dupicatedCards);
function shuffle(cards) {
    var _a;
    var currentIndex = cards.length, randomIndex;
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        // And swap it with the current element.
        _a = [
            cards[randomIndex],
            cards[currentIndex],
        ], cards[currentIndex] = _a[0], cards[randomIndex] = _a[1];
    }
    return cards;
}
function renderCard(cards, renderElenentId) {
}
