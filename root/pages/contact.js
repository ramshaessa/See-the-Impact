function validation() {
    var name = document.getElementById("name").nodeValue;
    var subject = document.getElementById("subject").nodeValue;
    var phone = document.getElementById("phone").nodeValue;
    var email = document.getElementById("email").nodeValue;
    var message = document.getElementById("name").nodeValue;
    var name = document.getElementById("error_message");
    var text;

    error_message.style.padding = "10px";

    if(name.length < 5) {
        text = "Please Enter Valid Name";
        error_message.innerHTML = text;
        return false;
    }

    if(subject.length < 10) {
        text = "Please Enter Correct Subject";
        error_message.innerHTML = text;
        return false;

    }

    if(isNaN(phone) || phone.length != 10) {
        text = "Please Enter Valid Phone Number";
        error_message.innerHTML = text;
        return false;

    }

    if(email.indexOf("@") == -1 || email.length < 6) {
        text = "Please Enter Valid Email";
        error_message.innerHTML = text;
        return false;

    }

    if(message.length <= 140) {
        text = "Please Enter More Than 140 Characters"
        error_message.innerHTML = text;
        return false;
    }

    alert("Form Submitted Successfully");
    return true;
   


}

