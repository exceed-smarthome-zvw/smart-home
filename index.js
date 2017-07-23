function main() {
    var linkTemp = 'http://158.108.165.223/data/5910503758/temperature';
    var linkBright = 'http://158.108.165.223/data/5910503758/bright';
    var linkPerson = '';
    var linkDoor = 'http://158.108.165.223/data/5910500520/door';
    var linkAir = 'http://158.108.165.223/data/5910503758/air';
    var linkLight = 'http://158.108.165.223/data/5910503758/light'
    var linkSetup = 'http://158.108.165.223/data/5910503758/setup';
    var toggle = 0;

    //set starter manual
    $('#airbutton').prop('disabled', false);
    $('#lightbutton').prop('disabled', false);
    $('#doorbutton').prop('disabled', false);

    //set auto or manual
    $('#switch').click(function() {
        if (toggle == 0) {
            toggle = 1;
            $('#autobox').text('Automatical');
            $.ajax({
                url: linkSetup + "/set/" + 'Auto'
            }).done(function() {
                console.log('done');
            }).fail(function() {
                console.error('something wrong');
            });
            $('#airbutton').prop('disabled', true);
            $('#lightbutton').prop('disabled', true);
            $('#doorbutton').prop('disabled', true);
        } else {
            toggle = 0;
            $(autobox).text('Only Manual');
            $.ajax({
                url: linkSetup + "/set/" + 'Manual'
            }).done(function() {
                console.log('done');
            }).fail(function() {
                console.error('something wrong');
            });
            $('#airbutton').prop('disabled', false);
            $('#lightbutton').prop('disabled', false);
            $('#doorbutton').prop('disabled', false);

        }
    })

    //Receive temperature from url
    setInterval(function() {
        $.ajax({
            url: linkTemp
        }).done(function(data) {
            $('#tempbox').val('Tempurature : ' + data);
        }).fail(function() {
            console.error('Fail to receive temperature');
        });
    }, 400);

    //Receive Brightness from url
    setInterval(function() {
        $.ajax({
            url: linkBright
        }).done(function(data) {
            $('#brightbox').val('Brightness : ' + data);
        }).fail(function() {
            console.error('Fail to receive Brightness');
        });
    }, 400);

    //Receive Person from url
    // setInterval(function() {
    //     $.ajax({
    //         url: linkPerson
    //     }).done(function(data) {
    //         $('#personbox').val(data);
    //     }).fail(function() {
    //         console.error('Fail to receive Person');
    //     });
    // }, 400);

    //Receive Door from url
    setInterval(function() {
        $.ajax({
            url: linkDoor
        }).done(function(data) {
            console.log('done');
            if (data == 1) {
                $('#doorbox').text('Door : Open');
        
                $('#doorbutton').val('open');
            } else {
                $('#doorbox').text('Door : Close');
                $('#doorbutton').val('close');
            }
        }).fail(function() {
            console.error('Fail to receive Door');
        });
    }, 400);

    //receive the light
    setInterval(function() {
        $.ajax({
            url: linkLight
        }).done(function(data) {
            console.log('done');
            if (data == 1) {
                $('#lightbox').val('Light : On');
                $('#lightbutton').val('open');
            } else {
                $('#lightbox').val('Light : Off');
                $('#lightbutton').val('close');
            }
        }).fail(function() {
            console.error('Fail to receive Light');
        });
    }, 400);


    //receive the air
    setInterval(function() {
        $.ajax({
            url: linkAir
        }).done(function(data) {
            console.log('done');
            if (data == 'ON') {
                $('#airbox').val('Air : On');
                $('#airbutton').val('open');
            } else {
                $('#airbox').val('Air : Off');
                $('#airbutton').val('close');
            }
        }).fail(function() {
            console.error('Fail to receive Door');
        });
    }, 400);
    //set the light on off
    $('#lightbutton').click(function() {
        var msg
        if ($('#lightbutton').val() === 'open') {
            msg = 'OFF';
            // $("#doorbutton").prop('value', 'Save');
            $("#lightbutton").val("close");
            $("#lightbox").val('Open the Light');
        } else {
            msg = 1;
            // $("#doorbutton").prop('value', 'Save');
            $("#lightbutton").val('open');
            $("#lightbox").val('Close the Light');
        }
        $.ajax({
            url: linkLight + '/set/' + msg
        }).done(function() {
            console.log('sent light action complete');

        }).fail(function() {
            console.error('Fail to sent light action');
        });
    });

    //set the door to close or open
    $('#doorbutton').click(function() {
        var msg
        if ($('#doorbutton').val() === 'open') {
            msg = 0;
            // $("#doorbutton").prop('value', 'Save');
            $("#doorbutton").val("close");
            $("#doorbox").text('Open the Door');
        } else {
            msg = 1;
            // $("#doorbutton").prop('value', 'Save');
            $("#doorbutton").val('open');
            $("#doorbox").text('Close the Door');
        }
        $.ajax({
            url: linkDoor + '/set/' + msg
        }).done(function() {
            console.log('sent door action complete');

        }).fail(function() {
            console.error('Fail to sent door action');
        });
    });

    //set the air
    $('#airbutton').click(function() {
        var msg
        if ($('#airbutton').val() === 'open') {
            msg = 'OFF';
            // $("#doorbutton").prop('value', 'Save');
            $("#airbutton").val("close");
            $("#airbox").text('Open the Air');
        } else {
            msg = 'ON';
            // $("#doorbutton").prop('value', 'Save');
            $("#airbutton").val('open');
            $("#airbox").text('Close the Air');
        }
        $.ajax({
            url: linkAir + '/set/' + msg
        }).done(function() {
            console.log('sent air action complete');

        }).fail(function() {
            console.error('Fail to sent air action');
        });
    });
}
$(document).ready(main)
