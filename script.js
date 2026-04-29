/**
 * Registration Logic for Activity: Lorenzo
 * Features: Console logging and input validation
 */
function validateRegistration() {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    // 1. Output to Console exactly as shown in sample screenshots
    console.log("Username: " + user);
    console.log("Password: " + pass);

    // 2. Define Validation Rules 
    const isTooShort = pass.length < 8; 
    const isOnlyNumbers = /^\d+$/.test(pass); 
    const hasUppercase = /[A-Z]/.test(pass);
    const hasLowercase = /[a-z]/.test(pass);
    const isNotMixedCase = !(hasUppercase && hasLowercase);

    // 3. Execution of Alert Logic
    if (isTooShort) {
        alert("Registration Failed: Password must be at least 8 characters.");
    } 
    else if (isOnlyNumbers) {
        alert("Registration Failed: Password cannot consist only of integers.");
    } 
    else if (isNotMixedCase) {
        alert("Registration Failed: Password must be a combination of uppercase and lowercase characters.");
    } 
    else if (user.trim() === "") {
        alert("Registration Failed: Username cannot be empty.");
    }
    else {
        alert("Registration Successful! Welcome, " + user + ".");
    }
}