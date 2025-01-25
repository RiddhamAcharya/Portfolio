var n1 = document.getElementById('n1');
var n2 = document.getElementById('n2');
var n3 = document.getElementById('n3');
var n4 = document.getElementById('n4');

var home = document.getElementById('home')
var about = document.getElementById('about')
var projects = document.getElementById('projects')
var contact = document.getElementById('contact');

n1.addEventListener("click", () => {
    home.scrollIntoView({ behavior: "smooth" });
})
n2.addEventListener("click", () => {
    about.scrollIntoView({ behavior: "smooth" });
})
n3.addEventListener("click", () => {
    projects.scrollIntoView({ behavior: "smooth" });
})
n4.addEventListener("click", () => {
    contact.scrollIntoView({ behavior: "smooth" });
})