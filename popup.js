document.addEventListener('DOMContentLoaded', function() {

    // var html = document.documentElement.innerHTML;

    //dyslexia
    var checkPageButton = document.getElementById('dyslexia');
    checkPageButton.addEventListener('click', function(e) {

    }, true);

    //enlarge
    var enlargeButton = document.getElementById('enlarge');
    enlargeButton.addEventListener('click', function(e) {
        // var x = document.getElementByTagName('P');
        alert("here");
        var x = $('p');
        var i;
        for (i = 0; i < x.length; i++) {
            x[i].style.backgroundColor = "red";
        }
        console.log(11);
        document.getElementsByTagName('P').innerHTML = x;
        console.log(6+6);
        alert("there");
    }, true);

    //greyscale
    var greyscaleButton = document.getElementById('greyscale');
    greyscaleButton.addEventListener('click', function(e) {

    }, true);

    //paraphrase
    var paraphraseButton = document.getElementById('paraphrase');
    paraphraseButton.addEventListener('click', function(e) {

    }, true);

}, true);