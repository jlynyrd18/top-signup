 const needForm = document.querySelectorAll("input[required]");
 const submitButton = document.getElementById("create"); 
 const paragraphs = document.getElementsByTagName("p");

submitButton.addEventListener("click", submit);

 function submit() {
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirm = document.getElementById("cpassword");

    for (let x = 0; x < needForm.length; x++) {
        var value = needForm[x].value;
        if (value == "") {
            for (let i = 0; i < paragraphs.length; i++) {
                paragraphs[i].style.visibility = "visible";
            }
        } if (!emailIsValid(emailInput.value)) {
            alert("Email is not valid");
            break;
        } if (passwordInput.value !== confirm.value) {
            alert("Passwords do not match. Please try again");
            break;
        } if (x === needForm.length - 1){
            alert("Account Created");
            
        }
    }
 }
function emailIsValid(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
//Need to validate if a box is empty, if is then pop up that all boxes are required
//Validate email is actually an email
//validate password and confirm password are the same
//could put line with "Fields marked with an asterisk are required"/ if do asterisk need p tags for right below that would pop up and say required
