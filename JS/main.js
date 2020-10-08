$(document).ready(function () {
    populateMain()
    populateNav()
    portfolioCards()
})



function populateMain() {
    $("#mainContent").append('<br><br><div class="jumbotron text-center hoverable p-4" style="background-color: rgba(0,0,0,0)"><div class="row"><div class="col-md-4 offset-md-1 mx-3 my-3"><div class="view overlay"><img src="https://mdbootstrap.com/img/Photos/Others/laptop-sm.jpg" class="img-fluid"alt="" style="padding-top: 10%"><a><div class="mask rgba-white-slight"></div></a></div></div><div class="col-md-7 text-md-left ml-3 mt-3"><a href="#!" class="green-text"></a><h4 class="h1 mb-4 jumboText">A goal is just a dream with a deadline</h4><p class="font-weight-normal jumboText">I am a coding student in the University of Richmond Coding Bootcamp, and this is where you can follow my journey to become a professional Web Developer</p></div></div></div>')
}

function populateNav() {
    $("#nav").append('<nav class="navbar navbar-expand-lg navbar-dark" style="background: rgba(0,0,0,0)"><a class="navbar-brand" href="#"><i class="fas fa-dharmachakra"></i></a><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarSupportedContent"><ul class="navbar-nav mr-auto"><li class="nav-item active"><a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a></li><li class="nav-item"><a class="nav-link" href="https://www.github.com/serjykalstryke">Github</a></li><li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Portfolio Sample</a><div class="dropdown-menu" aria-labelledby="navbarDropdown"><a class="dropdown-item" href="#">Pitch</a><a class="dropdown-item" href="#">weatherBot1.0</a><a class="dropdown-item" href="#">Quiz Application</a><div class="dropdown-divider"></div><a class="dropdown-item" href="#">About Me</a></div></li><li class="nav-item"></nav>')

}

function portfolioCards() {
    $("#portfolioCards").append('<div class="card-deck"><div class="card"><img src="..." class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">Card title</h5><p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p><p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p></div></div><div class="card"><img src="..." class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">Card title</h5><p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p><p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p></div></div><div class="card"><img src="..." class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">Card title</h5><p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p><p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p></div></div></div>')
}