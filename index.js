function main() {
    var linkTemp = 'http://158.108.165.223/data/5910503758/temperature';
    var linkBright = 'http://158.108.165.223/data/5910503758/bright';
    var linkPerson = '';
    var linkDoor = 'http://158.108.165.223/data/5910500520/door';
    var linkAir = '';

      $('#switch').click(function(){
        console.log($('#switch').val());
        if($('#switch').val()===true){
          $(autobox).val('Only Manual');
        }
        else{
          $(autobox).val('Automatical');
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
            $('#lightbox').val('Brightness : ' + data);
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
            if (data == 1 || data == 2) {
                $('#doorbox').val('Door : Open');
                $('#doorbutton').val('open');
            } else {
                $('#doorbox').val('Door : Close');
                $('#doorbutton').val('close');
            }
        }).fail(function() {
            console.error('Fail to receive Door');
        });
    }, 400);

    //set the door to close or open
    $('#doorbutton').click(function() {
        var msg
        if ($('#doorbutton').val() === 'open') {
            msg = 0;
            // $("#doorbutton").prop('value', 'Save');
            $("#doorbutton").val("close");
            $("#doorbutton").text('Open the Door');
        } else {
            msg = 1;
            // $("#doorbutton").prop('value', 'Save');
            $("#doorbutton").val('open');
            $("#doorbutton").text('Close the Door');
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
        if ($('#doorbutton').val() === 'open') {
            msg = 0;
            // $("#doorbutton").prop('value', 'Save');
            $("#doorbutton").val("close");
            $("#doorbutton").text('Open the Air');
        } else {
            msg = 1;
            // $("#doorbutton").prop('value', 'Save');
            $("#doorbutton").val('open');
            $("#doorbutton").text('Close the Air');
        }
        $.ajax({
            url: linkDoor + '/set/' + msg
        }).done(function() {
            console.log('sent air action complete');

        }).fail(function() {
            console.error('Fail to sent air action');
        });
    });
}
$(document).ready(main)
