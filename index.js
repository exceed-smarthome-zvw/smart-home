function main() {
    var linkTemp = '';
    var linkBright = '';
    var linkPerson = '';
    var linkDoor = 'http://158.108.165.223/data/5910500520/door';

    //Receive temperature from url
    // setInterval(function() {
    //     $.ajax({
    //         url: linkTemp
    //     }).done(function(data) {
    //         $('#tempbox').val(data);
    //     }).fail(function() {
    //         console.error('Fail to receive temperature');
    //     });
    // }, 1000);

    //Receive Brightness from url
    // setInterval(function() {
    //     $.ajax({
    //         url: linkBright
    //     }).done(function(data) {
    //         $('#lightbox').val(data);
    //     }).fail(function() {
    //         console.error('Fail to receive Brightness');
    //     });
    // }, 1000);

    //Receive Person from url
    // setInterval(function() {
    //     $.ajax({
    //         url: linkPerson
    //     }).done(function(data) {
    //         $('#personbox').val(data);
    //     }).fail(function() {
    //         console.error('Fail to receive Person');
    //     });
    // }, 1000);

    //Receive Door from url
    setInterval(function() {
        $.ajax({
            url: linkDoor
        }).done(function(data) {
            console.log('done');
            if (data == 1) {
                $('#doorbox').val('Door : Open');
            } else {
                $('#doorbox').val('Door : Close');
            }
        }).fail(function() {
            console.error('Fail to receive Door');
        });
    }, 1000);

    //set the door to close or open
    $('#doorbutton').click(function() {
        var msg
        if ($('#doorbutton').val() === 'open') {
            msg = 0;
            // $("#doorbutton").prop('value', 'Save');
            $( "#doorbutton" ).val(  "close" );
            $( "#doorbutton" ).text( 'Open the Door' );
        } else {
            msg = 1;
            // $("#doorbutton").prop('value', 'Save');
            $( "#doorbutton" ).val( 'open' );
            $( "#doorbutton" ).text( 'Close the Door' );
        }
        $.ajax({
            url: linkDoor + '/set/' + msg
        }).done(function() {
            console.log('sent door action complete');

        }).fail(function() {
            console.error('Fail to sent door action');
        });
    });
}
$(document).ready(main)
