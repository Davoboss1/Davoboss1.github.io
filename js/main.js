//Writes texts in the message text area.
 const texttimer = ms => new Promise(res => setTimeout(res, ms));
 var messages = ["Hello, we would like to hire you....", "I just wanna say hi...", "I want to collaborate with you on a project...", "Nice job!!!", "I need help on a project....", "You have a bug in one of your projects...."];
 var msgBox = document.getElementById("messageBox");

 async function load() {
     for (var i in messages) {
         let curMsg = messages[i];
         msgBox.placeholder = "";
         for (var eachChar in curMsg) {
             let msg = curMsg[eachChar];
             msgBox.placeholder += msg;
             await texttimer(100);
         }
         await texttimer(3000);
     }
     load();
 };
 load();


 //Email Js initialization
(function () {
    emailjs.init("user_HY74JtWfk84A10578DiQn");
})();

//Sends email using emailJS
(function () {
    // https://dashboard.emailjs.com/admin/integration
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        let form = this;
        let submit_btn = document.getElementById("submit-btn");
        submit_btn.textContent = "Sending...";
        submit_btn.disabled = true;
        emailjs.sendForm("service_0f6kh4j", "template_yv0ne2e", this).then(function (response) {
            submit_btn.textContent = "Message Sent.";
            submit_btn.disabled = false;
            form.reset();
        }, function (error) {
            submit_btn.textContent = "Failed.";
            submit_btn.disabled = false;
        });
    });
})();

var background_images = [
    "images/bg.gif",
    "images/bg1.gif",
    "images/bg2.gif",
    "images/bg3.gif",
]
var bg_image = background_images[Math.floor(Math.random() * background_images.length)];
document.querySelector("body").style.backgroundImage = `url(${bg_image})`;

var projects = [
    {
        images: ['images/id.png','images/id1.png'],
        title: "Interior Design Website",
        description: 'A design clone of an interior design website',
        github_link: 'https://github.com/Davoboss1/InteriorDesign',
        preview_link: 'http://interno.infinityfreeapp.com'
    },
    {
        images: ['images/hms.png','images/hms1.png','images/hms2.png'],
        title: "Hospital Management System",
        description: 'A web application that handles activities of a hospital.',
        github_link: '',
        preview_link: ''
    },
    {
        images: ['images/schooled.png'],
        title: "Schooled",
        description: "A school management website. That allows you to manage the information and data of schools, parents, teachers, admins and students.",
        github_link: 'https://github.com/Davoboss1/Schooled',
        preview_link: 'http://schooled.pythonanywhere.com'
    },
    {
        images: ['images/fm.png','images/fm1.png'],
        title: "Fetch Mail",
        description: "Read and scan some personal information directly from your gmail attachment.",
        github_link: '',
        preview_link: ''
    },
    {
        images: ['images/mf.jpg','images/mf1.jpg','images/mf2.jpg','images/mf3.jpg'],
        title: "MediaFindzz",
        description: "A cross-platform mobile application that lets you download varieties of media e.g movies, tv shows, music e.t.c for free from different sources.",
        github_link: 'https://github.com/Davoboss1/Mediafindzz',
        preview_link: ''
    },
];

document.addEventListener('alpine:init', function(){
    Alpine.data('main', (_projects = projects) => ({
        projects: _projects
    }))
});