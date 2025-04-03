
document.addEventListener("DOMContentLoaded", function() {
    
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
        document.getElementById("main-content").style.display = "block";
    }, 3000);
    
    window.addEventListener("scroll", function() {
        let profilePic = document.querySelector(".profile-pic");
        profilePic.style.transform = `translateY(${window.scrollY * 0.5}px)`;
    });

    
    function togglePopup(id) {
        let popup = document.getElementById(id);
        if (popup.style.display === "block") {
            popup.style.display = "none";
        } else {
            popup.style.display = "block";
        }
    }


    document.querySelector(".close-btn").addEventListener("click", function() {
        document.getElementById("contact").style.display = "none";
    });
    
    
    let images = document.querySelectorAll(".image-grid img");
    images.forEach(img => {
        img.addEventListener("click", function() {
            images.forEach(i => i.style.filter = "blur(5px)");
            this.style.filter = "none";
        });
    });

    
    document.querySelectorAll("form").forEach(form => {
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Message sent successfully!");
        });
    });
});
