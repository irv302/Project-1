// alert("Tardis Landing")

$.ajax({
    URL: "https://phoenixjaymes.com/lab/r-doctorwho-api/doctors",
    jsonp: "callback",
    datatype:'jsonp',
    data: {

    }
})

const URL = "https://phoenixjaymes.com/lab/r-doctorwho-api/doctors"

const $Doctor = $('#name')
const $form = $('form')
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
    
    })
    }