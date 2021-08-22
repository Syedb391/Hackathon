const signup = ()=>{
  
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
    restaurant : restaurant,
    email : email,
    country : country,
    city : city,
    password : password,
    uid :user.uid,
}    

firebase.database().ref('restaurant').child(user.uid).set(obj)
    .then((data)=>{
        // Route User to a new page 
        //window.location='login.html'
        console.log("User's additional details Added!");
        window.location = 'sign.html'
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