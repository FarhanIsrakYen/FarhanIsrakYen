function sendEmail() {
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 5000, // Increase the duration to 5 seconds
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        },
        customClass: {
            container: 'swal2-container', // Ensure the container is visible
        }
    });

    let params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value,
    };

    let missingFields = [];

    // Check for empty fields
    if (!params.name) missingFields.push('Name');
    if (!params.email) missingFields.push('Email');
    if (!params.phone) missingFields.push('Phone');
    if (!params.message) missingFields.push('Message');

    // If there are missing fields, show an error toast
    if (missingFields.length > 0) {
        Toast.fire({
            icon: "error",
            title: `The following fields are required: ${missingFields.join(', ')}`
        });
        return; // Stop the function if validation fails
    }

    // If validation passes, send the email
    emailjs.send("service_y611hm8", "template_ahg5sek", params)
        .then(() => {
            Toast.fire({
                icon: "success",
                title: "Message sent successfully"
            });
        })
        .catch((error) => {
            Toast.fire({
                icon: "error",
                title: "Failed to send message"
            });
            console.error("Error sending email:", error);
        });
}


// back-to-top button
let myButton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}

// back-to-top button