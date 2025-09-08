let btn = document.getElementById('mybutton');
let output = document.getElementById('output');
let inputBox = document.getElementById('inputbox');
let hoverText = document.getElementById('hoverText');

// button click event
btn.addEventListener('click', function(){
    output.textContent = 'Button Clicked - addEventListener';
});

//input typing event
inputBox.addEventListener('keyup', function(){
    output.textContent = `you typed: ${inputBox.value}`;
});

//hover event
hoverText.addEventListener('mouseover', function(){
    hoverText.style.color = 'red';
});

hoverText.addEventListener('mouseout', function(){
    hoverText.style.color = 'green';
});

// counter game

let count = 0;
let counterDisplay = document.getElementById('counter');
let increaseBtn = document.getElementById('increase');
let decreaseBtn = document.getElementById('decrease');

increaseBtn.addEventListener('click', function(){
    count++;
    counterDisplay.textContent = count;
});

//form
function validateEmail(email) {
    let format = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return format.test(email); 
}

function validatePassword(password) {
    // Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character
    let format = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return format.test(password);
}


function validateSignUp(){
    let username = document.getElementById('username').value.trim();
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value.trim();

    //not empty
    if(!username || !email || !password){
        alert('All fields are required!');
        return false; //prevent form submission
    }

    if(!validateEmail(email)){
        alert('Please enter a valid email address.');
        return false; //prevent form submission
    }

    if(!validatePassword(password)){
        alert('Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.');
        return false; //prevent form submission
    }

    alert('Form submitted successfully!');
    return true; //allow form submission
}