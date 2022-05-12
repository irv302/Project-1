// alert("Tardis Landing")
// function fetch()

// $.ajax({
//     URL: "https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=multiple",
//     type:'GET',
//     dataType:'jsonp',
//     crossDomain:true,
//     success: function(data){
//         $('#name').html($(data).html)
//         var src = $(data).html();
//         alert(src);
//         return false;
//     }
//     });
// DUE TO MY PLAN A AND PLAN B NOT WORKING I WENT WITH C  SIMPLE TRIVIA GAME..

//will call API on a double click of the
window.ondblclick = handleSubmit;

// console.log($.ajax('https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=multiple'));

//
function handleSubmit() {
  const promise = $.ajax({
    url: `https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=multiple`,
  });

  promise.then(
    (data) => {
      console.log(data);

      render(data);
    },
    (error) => {
      console.log(error);
    }
  );
}
handleSubmit();

//lets render our data//
function render(data) {
  //will display the topic / category for the quiz
  document.querySelector(
    "#category"
  ).innerHTML = `Category: ${data.results[0].category}`;

  //will display the dificulty leve of the question
  document.querySelector(
    "#difficulty"
  ).innerHTML = `Difficulty: ${data.results[0].difficulty}`;

  //will provide the question
  document.querySelector(
    "#question"
  ).innerHTML = `Question: ${data.results[0].question}`;
  }