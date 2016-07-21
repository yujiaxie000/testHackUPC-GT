document.addEventListener('DOMContentLoaded', function() {

    var html = document.documentElement.innerHTML;

    //dyslexia
    var checkPageButton = document.getElementById('dyslexia');
    checkPageButton.addEventListener('click', function() {

    });

    //enlarge
    var enlargeButton = document.getElementById('enlarge');
    enlargeButton.addEventListener('click', function() {
        var x = document.getElementByTagName('P');
        var i;
        for (i = 0; i < x.length; i++) {
            x[i].style.backgroundColor = "red";
        }
    });

    //greyscale
    var greyscaleButton = document.getElementById('greyscale');
    greyscaleButton.addEventListener('click', function() {

    });

    //paraphrase
    var paraphraseButton = document.getElementById('paraphrase');
    paraphraseButton.addEventListener('click', function() {

    });

});