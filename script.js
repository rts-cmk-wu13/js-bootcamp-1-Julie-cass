let quotes = [
    "Accept what people offer. Drink their milkshakes. Take their love.",
    "I think high self-esteem is overrated. A little low self-esteem is actually quite good…Maybe you're not the best, so you should work a little harder.",
    "An opinion should be the result of thought, not a substitute for it.",
    "Don't make use of another's mouth unless it has been lent to you.",
    "Eternity is a mere moment, just long enough for a joke.",
    "Silence is a text easy to misread.",
    "Life is tough, and if you have the ability to laugh at it you have the ability to enjoy it.",
    "Gratitude can sometimes be as annoying as whininess.",
    "Now and then an innocent man is sent to the legislature.",
    "To be ignorant of one's ignorance is the malady of the ignorant"
];

let quoteListElm = document.querySelector(".siteFooter__quote blockquote");
let i = 0;

/* let random = Math.floor(Math.random()*quoteListElm.length);
console.log(random, quoteListElm[random]);
 */

var randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
document.getElementById('blockquote').innerHTML = randomQuote;
console.log(quotes[randomQuote]);
console.log(quoteListElm);