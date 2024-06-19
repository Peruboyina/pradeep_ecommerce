/* const form = document.querySelector("form");
const fullName = document.getElementById("First name");
const LastName = document.getElementById("Last name");
const Email = document.getElementById("Email");
const phone = document.getElementById("phone Number");
const message = document.getElementById("Message");

function sendEmail(){
    const bodyMessage = 'Full Name: ${fullName.value}<br> Email: $
    {Email.value}<br> Phone Number: ${phone.value} <br> Message:';

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "pvenkatapradeep4@gmail.com",
        Password : "4B9BFA3210B782D5D1690895F3AD90D03FF7",
        To : 'pvenkatapradeep4@gmail.com',
        From : "pvenkatapradeep4@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
}); */