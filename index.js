function main() {
    var linkTemp = '';
    var linkBright = '';
    var linkPerson = '';

    //Receive temperature from url
    setInterval(function() {
        $.ajax({
            url: linkTemp
        }).done(function(data) {
            $('#tempbox').val(data);
        }).fail(function() {
            console.error('Fail to receive temperature');
        });
    }, 1000);

    //Receive Brightness from url
    setInterval(function() {
        $.ajax({
            url: linkBright
        }).done(function(data) {
            $('#lightbox').val(data);
        }).fail(function() {
            console.error('Fail to receive Brightness');
        });
    }, 1000);

    //Receive Person from url
    setInterval(function() {
        $.ajax({
            url: linkPerson
        }).done(function(data) {
            $('#personbox').val(data);
        }).fail(function() {
            console.error('Fail to receive Person');
        });
    }, 1000);
}
$(document).ready(main)
