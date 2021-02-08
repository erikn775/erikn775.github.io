const conButton = document.getElementById("contact");
const form = document.getElementById("popupContact");
const xButton = document.getElementById("close");
const about = document.getElementById("about");
const gitButton = document.getElementsByClassName("fa fa-github")[0];
const linkedIn = document.getElementsByClassName("fa fa-linkedin")[0];
const repoButton = document.getElementById("here_link");
const projectsWindow = document.getElementsByClassName("grid-item-1")[0];
const blogWindow = document.getElementsByClassName("grid-item-2")[0];
const projects = document.getElementsByClassName("grid-item-1")[0];
const blog = document.getElementsByClassName("grid-item-2")[0];
const newBlogs = document.getElementsByClassName('grid-list-2')[0];
const newProjects = document.getElementsByClassName('grid-list-1')[0];
const projectsHeader = document.getElementById("projects-header")
const blogHeader = document.getElementById("blogs-header")
const blog1 = document.getElementById("button-6")
const blog2 = document.getElementById("button-7")

href="https://github.com/erikn775/my_website"
function div_show() {
    document.getElementById('popupContact').style.display = "block";
}

function div_hide() {
    document.getElementById('popupContact').style.display = "none";
}

function divHideProjects() {
    newProjects.style.display = "none";
}

function divShowProjects() {
    newProjects.style.display = "block";
}

function divHideBlogs() {
    let newBlogs = document.getElementsByClassName('grid-list-2')[0];
    newBlogs.style.display = "none";
}

function divShowBlogs() {
    newBlogs.style.display = "block";
    
}

function moreOpacity() {
    let image = document.getElementById("scroll-image");
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

function paramsHash() {
    location.replace("https://medium.com/@erikn775/what-is-params-in-sinatra-rails-fd2b67d5ae7e")
}

function eachValidator() {
    location.replace("https://medium.com/@erikn775/rails-eachvalidator-7ce96abe2c5")
}

blog1.addEventListener('click', function() {
    paramsHash();
})

blog2.addEventListener('click', function() {
    eachValidator();
})

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

projectsWindow.addEventListener('mouseover', function() {
    divShowProjects();

})

blogWindow.addEventListener('mouseover', function() {
    divShowBlogs();
})


projectsHeader.addEventListener('click', function() {
    divHideProjects();
})

blogHeader.addEventListener('click', function() {
    divHideBlogs();
})

