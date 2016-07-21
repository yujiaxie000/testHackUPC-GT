document.addEventListener('DOMContentLoaded', function() {

    // var html = document.documentElement.innerHTML;

    //dyslexia
    var checkPageButton = document.getElementById('dyslexia');
    checkPageButton.addEventListener('click', function() {

    }, true);

    //enlarge
    var enlargeButton = document.getElementById('enlarge');
    enlargeButton.addEventListener('click', function() {
        var x = document.getElementsByTagName('P');
        alert("here");
        // var x = $('p');
        var i;
        for (i = 0; i < x.length; i++) {
            x[i].style.backgroundColor = "red";
        }
        console.log(11);
        console.log(6+6);
        alert("there");
    }, true);

    //greyscale
    var greyscaleButton = document.getElementById('greyscale');
    greyscaleButton.addEventListener('click', function() {

    }, true);

    //paraphrase
    var paraphraseButton = document.getElementById('paraphrase');
    paraphraseButton.addEventListener('click', function() {

    }, true);

}, true);