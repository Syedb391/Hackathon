const usersignup = ()=>{
    const email = document.getElementById('useremail').value
    const password = document.getElementById('userpassword').value
    const username = document.getElementById('username').value
    const userphone = document.getElementById('userphone').value
    const usercity = document.getElementById('city').value
    const usercountry = document.getElementById('country').value
    console.log("Email",email)
    console.log("Password",password)
if(email == "" || password == ""){
    alert("Plese Enter Data ")
}
else{

   firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    console.log("User Registered :",user)
    //key
   
    // ...

    var obj = {

        email : email,
        password : password,
        username : username,
        userphone : userphone,
        usercity : usercity,
        usercountry : usercountry,
        uid : user.uid,
    }

    console.log(obj)
  
firebase.database().ref('user').child(user.uid).set(obj)
.then((data) => {
    // Route User to a new page 
    console.log("User's additional details Added!");
    window.location='sign.html'
})
})
.catch((error) => {
var errorCode = error.code;
var errorMessage = error.message;
// Display Error if there is a problem with SignUp
console.log("Error Code: ", errorCode)
console.log("Error Message: ", errorMessage)
}).catch((err)=>{
console.log(err)
})}}