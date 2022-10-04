//Writes texts in the message text area.
 const timer = ms => new Promise(res => setTimeout(res, ms));
 var messages = ["Hello, we would like to hire you....", "I just wanna say hi...", "I want to collaborate with you on a project...", "Nice job!!!", "I need help on a project....", "You have a bug in one of your projects...."];
 var msgBox = document.getElementById("messageBox");

 async function load() {
     for (var i in messages) {
         let curMsg = messages[i];
         msgBox.placeholder = "";
         for (var eachChar in curMsg) {
             let msg = curMsg[eachChar];
             msgBox.placeholder += msg;
             await timer(100);
         }
         await timer(3000);
     }
     load();
 };
 load();

 document.querySelectorAll(".arrow-right-btn").forEach((element) => {
     element.onclick = (e) => {
         let parent = element.parentElement;
         let img = parent.querySelector("img.active");
         if (img.nextElementSibling !== null) {
             img.classList.remove("active");
             img.nextElementSibling.classList.add("active");
         }
     }
 });

 document.querySelectorAll(".arrow-left-btn").forEach((element) => {
     element.onclick = (e) => {
         let parent = element.parentElement;
         let img = parent.querySelector("img.active");
         if (img.previousElementSibling.tagName.toLocaleLowerCase() == "img") {
             img.classList.remove("active");
             img.previousElementSibling.classList.add("active");
         }
     }
 });

 document.querySelectorAll(".profile-container,.view-panel,.side-container,.col").forEach((element) => {
     let observer = new IntersectionObserver((entries, observer)=>{
         entries.forEach((entry)=>{
             if(entry.isIntersecting){
                 entry.target.classList.add("animate");
                 observer.unobserve(entry.target);
             }
         });
     });
     observer.observe(element);
 });

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