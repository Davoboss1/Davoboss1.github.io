if (typeof(IntersectionObserver) !== "undefined") {
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
    }else{
        document.querySelectorAll(".profile-container,.view-panel,.side-container,.col").forEach((element) => element.style.visibility = "visible" );

    }