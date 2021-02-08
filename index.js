const conButton = document.getElementById("contact")
const form = document.getElementById("popupContact")
const xButton = document.getElementById("close")
const about = document.getElementById("about")
const gitButton = document.getElementsByClassName("fa fa-github")[0]
const linkedIn = document.getElementsByClassName("fa fa-linkedin")[0]
const repoButton = document.getElementById("here_link")
const projectsWindow = document.getElementsByClassName("grid-item-1")[0]
const blogWindow = document.getElementsByClassName("grid-item-2")[0]
const projects = document.getElementsByClassName("grid-item-1")[0]
const blog = document.getElementsByClassName("grid-item-2")[0]

href="https://github.com/erikn775/my_website"
function div_show() {
    document.getElementById('popupContact').style.display = "block";
}

function div_hide() {
    document.getElementById('popupContact').style.display = "none";
}

function moreOpacity() {
    let image = document.getElementById("scroll-image")
    image.style.opacity = "50%";
}

function lessOpacity() {
    let image = document.getElementById("scroll-image")
    image.style.opacity = "100%";
}

function gitRedirect() {
    location.replace("https://github.com/erikn775")
}

function linkedInRedirect() {
    location.replace("https://www.linkedin.com/in/erik-nielsen-18bb43205")
}

function gitRepoRedirect() {
    location.replace("https://github.com/erikn775/my_website")
}

conButton.addEventListener('click', function() {
    div_show();
    moreOpacity();
})

xButton.addEventListener('click', function() {
    div_hide();
    lessOpacity();
})

gitButton.addEventListener('click', function() {
    gitRedirect();
})

linkedIn.addEventListener('click', function() {
    linkedInRedirect();
})

repoButton.addEventListener('click', function() {
    gitRepoRedirect();
})

projectsWindow.addEventListener('mouseover', function(e) {
    e.target.style.gridRow = "2 / 7"
})

blogWindow.addEventListener('mouseover', function(e) {
    e.target.style.gridRow = "2 / 7"
})

projectsWindow.addEventListener('mouseout', function(e) {
    e.target.style.gridRow = "5 / 7"
})

blog.addEventListener('mouseout', function(e) {
    e.target.style.gridRow = "5 / 7"
})