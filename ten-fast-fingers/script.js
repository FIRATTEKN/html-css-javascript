let input = document.getElementById("txtTaskName");


let counter = 0;
var trueWords = 0;
var falseWords = 0;
var startTime = 59;
const letters = ["ali", "ahmet", "ağıt", "anne", "ahşap", "akıl", "ak", "azınlık", "ahmak", "ağaç", "bilgisayar", "belge", "buz", "bali", "baza", "bor", "bisküvi", "bal", "baz", "bakkal", "bel"
    , "bikini", "bamaya", "cetvel", "cunta", "caiz", "cariye", "can", "casus", "cenabet", "cezir", "ciro", "cıva", "cömert", "cönk", "coğrafya", "cünüp", "cüz", "cümle", "cürüm", "cüsse"
    , "defter", "darbe", "dayanışma", "dadaş", "demokrasi", "devlet", "deprem", "deccal", "dış", "diş", "direnç", "dizanteri", "dürzü", "düşünce", "dünya", "dümbük", "dogma", "dominant"
    , "döviz", "dönence", "döl", "faşist", "fatiha", "faşizm", "farfara", "fent", "feminizm", "fes", "fenomen", "felsefe", "fıkra", "fıkıh", "fıtık", "fıtrat", "fitre", "fiil", "fosil"
    , "formasyon", "forum", "fotosentez", "fon", "fötr", "fön", "futbol", "fuhuş", "füzyon", "fütürist", "galaksi", "gastrit", "gastronomi", "gabari", "gezegen", "gerilla", "gerdek"
    , "geyşa", "gıybet", "gıpta", "gıcık", "gıcır", "girdap", "gurme", "guatr", "gudubet", "güneş", "gün", "güruh", "gotik", "gökçe", "göbel", "görümce", "hadım", "hacamat", "havale"
    , "handikap", "heteroseksüel", "hematoloji", "hercai", "hıra", "hınzır", "hısım", "hı", "himmet", "hizmet", "hipotez", "huda", "hukuk", "hücre", "hümanist", "hükümet", "hoşgörü"
    , "homojen", "hödük", "höt", "höyük", "kayyum", "kapitalizm", "kamuoyu", "kadir", "kefir", "kehribar", "kefaret", "ketum", "kıdem", "kızılay", "kıro", "kzılık", "kist", "kinaye"
    , "kibir", "kozmik", "komünist", "kortizon", "kök", "köy", "körfez", "kuran", "kültür", "külliye", "kült", "lan", "laiklik", "lavman", "laktoz", "lezyon", "lezbiyen", "leyla"
    , "lıkır", "lisans", "libido", "liberal", "liyakat", "lügat", "lüpmen", "lütuf", "lümen", "loş", "lojistik", "logo", "lökosit", "mason", "masa", "marjinal", "mazoşist", "mey"
    , "mekruh", "mezcup", "mezcup", "mısra", "mıknatıs", "miraç", "miyop", "migren", "mukabele", "mükellef", "mütevazı", "müşteki", "müşteki", "monarşi", "moruk", "molla", "molekül"
    , "mösyö", "mönü", "möble", "nato", "naif", "namaz", "naçizane", "nevrıtik", "nefroloji", "nısıf", "nışadır", "nirvana", "nicel", "nisa", "nice", "nutuk", "nur", "nüans", "nükte"
    , "nüsha", "norm", "nöron", "nötr", "nöbet", "nöroloji"];



shuffleArray(letters);
refreshletters();


document.getElementById("timer").innerHTML = "01:00"


input.addEventListener("keyup", evetnHandler);
function evetnHandler(event) {


    if (event.code == "Space") {
        if (document.getElementById("timer").innerHTML == "01:00") {
            const myTimer = setInterval(function () {
                console.log(event.code);
                console.log(startTime);
                if (startTime < 0) {
                    clearInterval(myTimer);
                    showResult();
                } else if (startTime < 10) {
                    document.getElementById("timer").innerHTML = "00:0" + startTime;
                } else {
                    document.getElementById("timer").innerHTML = "00:" + startTime;
                }

                startTime--;

            }, 1000);
            console.log("başarılı")
        }

        if (event.code == "Space") {

            if (comparetion()) {
                trueWords++;
            } else {
                falseWords++;
            }

            console.log(document.getElementById("txtTaskName").value);
            console.log(letters[counter]);
            counter++;
            input.value = "";

            console.log("true words : " + trueWords + "\nfalse wrods : " + falseWords)

        }

    }
    refreshletters();

    console.log(event.code)

};



function comparetion() {
    let userLetter = document.getElementById("txtTaskName").value;
    return userLetter.trim() == letters[counter];
}






///// new game
function refresh() {
    shuffleArray(letters);
    refreshletters();
    trueWords = 0;
    falseWords = 0;
    counter = 0;
    document.getElementById("timer").innerHTML = "01:00";
    startTime = 59;
    stop("myTimer");
    document.getElementById("resultBody").remove();
};

function stop(aaa) {
    clearInterval(aaa);
    console.log("stop function is execute")
}

function showResult() {
    var totalWords = trueWords + falseWords;

    const resultBody = document.createElement("div");
    resultBody.classList = "card-body";
    resultBody.id = "resultBody";

    const resultTitle = document.createElement("h3");
    resultTitle.classList = "ml-5";
    resultTitle.innerHTML = "Result"

    const resultUl = document.createElement("ul");
    resultUl.classList = "list-grup";
    resultUl.id = "resultList";

    const resultLi = document.createElement("li");
    resultLi.classList = "list-group-item list-group-item-secondary";


    document.getElementById("resultCard").appendChild(resultBody);
    document.getElementById("resultBody").appendChild(resultTitle);
    document.getElementById("resultBody").appendChild(resultUl);
    document.getElementById("resultList").appendChild(resultLi);


    resultLi.innerText = "True words : " + trueWords
        + "\nFalse words : " + falseWords
        + "\nTotal words : " + totalWords;
}
function refreshletters() {
    let cardLetters = document.getElementById("topCard");
    cardLetters.innerHTML = letters[counter] + "&emsp;" + letters[counter + 1] + "&emsp;" + letters[counter + 2] + "&emsp;" + letters[counter + 3]
        + "&emsp;" + letters[counter + 4] + "&emsp;" + letters[counter + 5] + "&emsp;" + letters[counter + 6] + "&emsp;" + letters[counter + 7]
        + "&emsp;" + letters[counter + 8] + "&emsp;" + letters[counter + 9] + "&emsp;" + letters[counter + 10] + "&emsp;" + letters[counter + 11]
        + "&emsp;" + letters[counter + 12] + "&emsp;" + letters[counter + 13] + "&emsp;" + letters[counter + 14] + "&emsp;" + letters[counter + 15]
        + "&emsp;" + letters[counter + 16] + "&emsp;" + letters[counter + 17] + "&emsp;" + letters[counter + 18];
}
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
};
