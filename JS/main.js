$(document).ready(function () {
    populateMain()
    populateNav()
})



function populateMain() {
    $("#main-content").append('<div class="jumbotron"><h1 class="display-4">A dream is just a goal with a plan</h1><p class="lead">This is where I will document my journet to achieve my dreams</p><hr class="my-4"><p>Let me show you some of my favorite accomplishments</p>')
}

function populateNav() {
    $("#nav").append('<nav class="navbar navbar-expand-lg navbar-dark" style="background: rgba(0,0,0,0)"><a class="navbar-brand" href="#"><i class="fas fa-dharmachakra"></i></a><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarSupportedContent"><ul class="navbar-nav mr-auto"><li class="nav-item active"><a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a></li><li class="nav-item"><a class="nav-link" href="https://www.github.com/serjykalstryke">Github</a></li><li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Portfolio Sample</a><div class="dropdown-menu" aria-labelledby="navbarDropdown"><a class="dropdown-item" href="#">Pitch</a><a class="dropdown-item" href="#">weatherBot1.0</a><a class="dropdown-item" href="#">Quiz Application</a></div></li><li class="nav-item"></nav>')

}