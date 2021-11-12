// ### Aanmelden flow ### //

function isEmpty(val) {
    return val === undefined || val.length === 0;
}

function valid(step) {

    if (step === 1) {
        if (isEmpty($("input[name='voornaam']").val()))
            return false;
        if (isEmpty($("input[name='achternaam']").val()))
            return false;
        if (isEmpty($("input[name='email']").val()))
            return false;
        if (isEmpty($("input[name='plaats']").val()))
            return false;
        if (isEmpty($("input[name='telefoon']").val()))
            return false;
        if (isEmpty($("select[name='toestel']").val()))
            return false;
    }

    if (step === 2) {
        if (isEmpty($("select[name='uren']").val()))
            return false;
    }

    if ((step === 3) && isEmpty($("input[name='leeftijd']").val())) {
        return false;
    }
  

    if ((step === 4) && isEmpty($("input[name='Ochtend']").val())) {
        return false;
    }

    if ((step === 5) && isEmpty($("input[name='Avonden']").val())) {
        return false;
    }

    if (step === 6)  {

        var type1 = isEmpty($("input[name='Racefiets']").val());
        var type2 = isEmpty($("input[name='Elektrische bakfiets']").val());
        var type3 = isEmpty($("input[name='Stint']").val());

        if(type1 && type2 && type3){
            alert();
            return false;
        }
    }

    if(step === 7){
        if(isEmpty($("textarea[name='Waarom']").val())){
            return false;
        }
    }

    return true;
}

function submitStep(step, next) {
    console.log("Submitting step " + step);

    $.cookie('step-' + step, $('.register-form').serialize());

    if (valid(step)) {
        window.location.assign("/aanmelden-" + next + ".html");
    }
}


function restoreStep(step) {
    var data = $.cookie('step-' + step);
    console.log(data);
    $('.register-form').deserialize(data);
}

function sendData() {

    var data = $.cookie('step-1');
    data += '&' + $.cookie('step-2');
    data += '&' + $.cookie('step-3');
    data += '&' + $.cookie('step-4');
    data += '&' + $.cookie('step-5');
    data += '&' + $.cookie('step-6');
    data += '&' + $.cookie('step-7');
//    data += '&' + $.cookie('step-8');

    $.ajax({
            type: "POST",
            url: "/api/send-email",
            headers: { 
                "ClientType" : "TRINGTRING_SITE"
            },
            data: data
        })
        .success(function (result) {
            $('#aanmelden-busy').hide();
            $('#aanmelden-success').show();
        })
        .fail(function (error) {
            $('#aanmelden-busy').hide();
            $('#aanmelden-error').show();
        });
}