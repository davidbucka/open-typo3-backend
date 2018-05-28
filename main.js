(function(id){
    console.log(id);
    var location = window.location.pathname;
    var substring = "typo3";
    if ( location.indexOf(substring) === -1 ) {
        window.location.pathname = "/typo3";
    }
})()