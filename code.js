let ratingcontainer = document.querySelector('.rating-container');
let thankyoucontainer = document.querySelector('.thank-you');
let numberchanger = document.querySelector('.thank-you-two-container>h2');
let selector = "";
let selector2 = "";
let checker;

function getting(number) {
    let numberv2 = number + 1;
    checker = numberv2;
    numberchanger.innerHTML = 'You selected ' + (numberv2) + ' out of 5';
}



function rating() {

    if (checker >= 1 || checker <= 5) {
        ratingcontainer.style.display = 'none';
        thankyoucontainer.style.display = 'grid';
    }

}