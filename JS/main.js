$(document).ready(function () {
    populateMain()
    populateNav()
    portfolioCards()
    aboutMe()
})



function populateMain() {
    $("#mainContent").append('<br><br><div class="jumbotron text-center hoverable p-4" style="background-color: rgba(0,0,0,0)"><div class="row">' +
    '<div class="col-md-4 offset-md-1 mx-3 my-3">' + 
    '<div class="view overlay"><img src="./assets/0.jpeg" class="img-fluid"alt="" style="padding-top: 10%"><a><div class="mask rgba-white-slight">' +
    '</div>' +
    '</a></div>' +
    '</div>' + 
    '<div class="col-md-7 text-md-left ml-3 mt-3">' +
    '<a href="#!" class="green-text"></a><h4 class="h1 mb-4 jumboText">A goal is just a dream with a deadline</h4>'
    + '<p class="font-weight-normal jumboText">I am a coding student in the University of Richmond Coding Bootcamp, and this is where you can follow my journey to become a professional Web Developer</p></div></div></div>')
}

function populateNav() {
    $("#nav").append('<nav class="navbar navbar-expand-lg navbar-dark" style="background: rgba(0,0,0,0)">' +
    '<a class="navbar-brand" href="https://serjykalstryke.github.io"><i class="fas fa-dharmachakra"></i></a>' +
    '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">' + 
    '<span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarSupportedContent">' + 
    '<ul class="navbar-nav mr-auto">' +
    '<li class="nav-item active"><a class="nav-link" href="https://serjykalstryke.github.io">Home <span class="sr-only">(current)</span></a></li>' + 
    '<li class="nav-item"><a class="nav-link" href="https://www.github.com/serjykalstryke">Github</a></li>' +
    '<li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Portfolio Sample</a>' +
    '<div class="dropdown-menu" aria-labelledby="navbarDropdown">' + 
    '<a class="dropdown-item" href="https://serjykalstryke.github.io/deep-cuts/">Pitch</a>' + 
    '<a class="dropdown-item" href="https://serjykalstryke.github.io/Weather-App/">weatherBot1.0</a>' + 
    '<a class="dropdown-item" href="https://serjykalstryke.github.io/javascript-quiz/">Quiz Application</a><div class="dropdown-divider"></div>' + 
    '<a class="dropdown-item" href="aboutMe.html">About Me</a></div></li><li class="nav-item"></nav>')

}

function portfolioCards() {
    $("#portfolioCards").append('<div class="card-deck">' +
    '<div class="card" style="background: rgba(0,0,0,.25)">' +
      '<img class="card-img-top" src="../assets/Screenshot from 2020-10-08 12-52-45.png" alt="Card image cap">'+
      '<div class="card-body">' +
        '<h5 class="card-title jumboText">Pitch</h5>' +
        '<p class="card-text jumboText">Pitch is a musician search application that uses APIs to return relevant videos and information on user inputed artists. Uses Google\'s Youtube Data API, MusicBrainz and BandsinTown APIs</p>' + 
        '<div class="card-footer">' + 
        '<a href="https://serjykalstryke.github.io/deep-cuts/"><button class="btn btn-primary">View Deployed Application</button></a>' +
        '</div>' +
      '</div>' +
    '</div>' + 
    '<div class="card" style="background: rgba(0,0,0,.25)">' +
      '<img class="card-img-top" src="../assets/Screenshot from 2020-10-08 13-00-24.png" alt="Card image cap">' +
      '<div class="card-body">' +
        '<h5 class="card-title jumboText">weatherBot1.0</h5>' +
        '<p class="card-text jumboText">weatherBot is a basic weather application that uses the openweather API to show local weather information as well as weather at user inputed locations</p>' + '<br>' +
        '<div class="card-footer">' + 
        '<a href="https://serjykalstryke.github.io/Weather-App/"><button class="btn btn-primary">View Deployed Application</button></a>' +
        '</div>' +
      '</div>' +
    '</div>' +
    '<div class="card" style="background: rgba(0,0,0,.25)">' +
      '<img class="card-img-top" src="../assets/Screenshot from 2020-10-08 13-07-31.png" alt="Card image cap">' +
      '<div class="card-body">' +
        '<h5 class="card-title jumboText">Quiz Application</h5>' +
        '<p class="card-text jumboText">This is a basic quiz application built using javascript. It uses an array of questions, a timer function, and adds to user score for correct answers. Users can save high scores to local storage</p>'  +
        '<div class="card-footer">' + 
        '<a href="https://serjykalstryke.github.io/javascript-quiz/"><button class="btn btn-primary">View Deployed Application</button></a>' +
        '</div>' +
    '</div>' +
  '</div>')
}

function aboutMe() {
    $('#aboutMe').append(
        '<div class="jumbotron" style="background: rgba(0,0,0,.25)">' + '<div class="col-md-4 offset-md-1 mx-3 my-3"><div class="view overlay"><img src="./assets/0.jpeg" class="img-fluid"alt=""><a><div class="mask rgba-white-slight"></div></a></div></div>' +
  '<h1 class="display-4 jumboText">Hello, world!</h1>' +
  '<p class="lead jumboText">My name is David Stinnett, I am a husband and a father, and this is the primary focus of my life. Along with that, I am also a student at the University of Richmond\'s Coding Bootcamp. I am learning about HTML, CSS, Javascript, and various methodologies and libraries related to those technologies.</p>' +
  '<hr class="my-4">' +
  '<p class="jumboText">Please visit my Github page to view my deployed applications</p>' +
  '<a href="https://github.com/serjykalstryke"><button class="btn btn-primary">My Github</button></a>'
    )
}