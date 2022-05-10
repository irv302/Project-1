// alert("Tardis Landing")
function fetch()

$.ajax({
    URL: "https://phoenixjaymes.com/lab/r-doctorwho-api/doctors",
    dataType:'jsonp',
    crossDomain:true,
    success: function(data){
        $('#name').html($(data).html)
        var src = $(data).html();
        alert(src);
        return false;
    }
    });

const URL = "https://phoenixjaymes.com/lab/r-doctorwho-api/doctors"

const $Doctor = $('#name');
const $form = $('form');
const $input = $('input[type="text"]');

$form.on('submit',handleGetData)

function handleGetData(event){

    event.preventDefault();
    const userInput = $input.val();

    $.ajax(URL + userInput).then(function(data){
        console.log(data)
        $Doctor.name(data.name)
    },  function(console) {
        console.log('The Daleks are Here!')
        console.log(error)
    });
    }
