document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name && email && message) {
        document.getElementById("responseMessage").innerText = "Thank you for reaching out! We'll get back to you soon.";
        document.getElementById("contactForm").reset();
    } else {
        document.getElementById("responseMessage").innerText = "Please fill out all fields.";
    }
});