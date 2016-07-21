document.addEventListener('DOMContentLoaded', function() {

    // var html = document.documentElement.innerHTML;

    //dyslexia
    var checkPageButton = document.getElementById('dyslexia');
    checkPageButton.addEventListener('click', function() {
        // var html = document.documentElement.innerHTML;
        // var newURL = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname;

    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
        var myWindow = window.open("", "newWin", "width = 200, height = 100");

        var url = tabs[0].url;

        // $.get(url, function(my_html) {

        // });
        console.log(11);
        myWindow.document.write("<p>This window's name is: " + url + "</p>");
        // myWindow.document.write("<p>This window's name is: " + my_html + "</p>");


    });


    }, false);

    //enlarge
    var enlargeButton = document.getElementById('enlarge');
    enlargeButton.addEventListener('click', function() {
        // var x = document.getElementsByTagName('P');
        alert("here");
        // var x = $('p');
        // var i;
        // for (i = 0; i < x.length; i++) {
        //     x[i].style.backgroundColor = "red";
        // }
        // console.log(11);
        // console.log(6+6);
        // alert("there");
    }, false);

    //greyscale
    var greyscaleButton = document.getElementById('greyscale');
    greyscaleButton.addEventListener('click', function() {

    }, false);

    //paraphrase
    var paraphraseButton = document.getElementById('paraphrase');
    paraphraseButton.addEventListener('click', function() {

    }, false);

}, false);