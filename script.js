//------------------------email send----------------------//



function sendEmail(){

    var fullName  = document.getElementById('name').value;
    var email  = document.getElementById('email').value;
    var subject  = document.getElementById('subject').value;
    var message  = document.getElementById('message').value;

    var bodyMessage = "Name: " + fullName + "<br/> Email: " + email + "<br/> Message: " + message;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "subhrat9928@gmail.com",
        Password : "23224DD9A9E07B873348D9FC93891075E141",
        To : 'subhrat9928@gmail.com',
        From : "subhrat9928@gmail.com",
        Subject : subject,
        Body : bodyMessage
    }).then(
      message => {
        if(message=='OK'){
            Swal.fire({
                title: "E-mail sent!",
                text: "I'll get back to you soon!",
                icon: "success"
              });
        }
      }
    );
}

// form.addEventListener("submit", (e) => {
//     e.preventDefault();
    
//     sendEmail();
// });

//----------------------toggle icon navbar-----------------------------//
let menuIcon = document.querySelector('#menu-icon');

let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

//-----------------------scroll section active link-----------------------//

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            //active navbar links
            navlinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });


    //remove toggle icon and navbar when links clicked
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


//-----------------------scroll reveal----------------------------//
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.image-container', { origin: 'bottom' });
ScrollReveal().reveal('.about-img', { origin: 'left' });
ScrollReveal().reveal('.about-content', { origin: 'right' });
ScrollReveal().reveal('.skills-content .progress .bar span', { origin: 'left' });


//----------------------typed js for multiple text--------------------//
const typed = new Typed('.multiple-text', {
    strings: ['Aspiring Software Engineer','Frontend Developer'],  //add  multiple texts
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});

//--------------------read more popup------------------------//
function createPopup(id){
    let popupNode = document.querySelector(id);
    let overlay = popupNode.querySelector(".overlay");
    let closeBtn = popupNode.querySelector(".close-btn");

    function openPopup(){
        popupNode.classList.add("active");
    }
    function closePopup(){
        popupNode.classList.remove("active");
    }
    overlay.addEventListener("click", closePopup);
    closeBtn.addEventListener("click", closePopup);
    return openPopup;
}

let popup = createPopup("#popup");
document.querySelector("#open-popup").addEventListener("click",popup);




