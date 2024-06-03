// //MovieSearch Application's firebase configuration
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
const firebaseConfig = {
    apiKey: "AIzaSyDDBkLFCOV4igLXuatndcm97r_TSnp3Usg",
    authDomain: "login-with-firebase-db-de781.firebaseapp.com",
    projectId: "login-with-firebase-db-de781",
    storageBucket: "login-with-firebase-db-de781.appspot.com",
    messagingSenderId: "284184760555",
    appId: "1:284184760555:web:9797645335563411222eae"
  };

  // Initializing Firebase
  firebase.initializeApp(firebaseConfig);

  //Initializing variables
  const auth=firebase.auth()
  const database=firebase.database()
  const signupRadio = document.getElementById('signup');
  const loginRadio = document.getElementById('login');

  const submit = document.querySelector('.form-inner .field.btn input'); //Main submit button (Signup/Login)

  //Set up Signup 
  submit.addEventListener('click', function(event) {
    event.preventDefault();

    let emailInput, passwordInput;

    if (signupRadio.checked){
      emailInput = document.querySelector('.form-inner .login input[type="text"], .form-inner .signup input[type="text"]');
      passwordInput = document.querySelector('.form-inner .login input[type="password"]:nth-of-type(1), .form-inner .signup input[type="password"]:nth-of-type(1)');
    } else if (loginRadio.checked) {
      emailInput = document.querySelector('.login input[type="text"]');
      passwordInput = document.querySelector('.login input[type="password"]:nth-of-type(1)');
    }
    const email = emailInput.value; //email inputbox value
    const password = passwordInput.value; //passowrd inputbox value

    //Validate input fields
    
    function validate_email(email){
      expression=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; //Regex expression for validating email
      if(expression.test(email)==true){
        //correct email
        return true;
      }
      else{
        //incorrect email
        alert('Invalid Email')
        return false
      }

    }

    function validate_password(password){
      //validate for password of upto length 6 and more.
      if(password>=6){
        return true;  // correct password
      }
      else{
        alert('Password is too short')
        return false //Password is too short/weak.
      }
    }

    if (signupRadio.checked && email && password){
      if(validate_email(email)==false || validate_password(password)==false){
        return;
        //Don't continue->return
      }

      //Move on with auth
      auth.createUserWithEmailAndPassword(email,password) //auth method to Handle promise 
      .then(function(){
          //Declaring user variable
          var user=auth.currentUser

          //Adding the user to firebase database
          var database_ref=database.ref()

          //create user object
          var user_data={
            email:email,
            last_login: Date.now()
            //Password should not be saved
          }

          database_ref.child('users/'+ user.uid).set(user_data)
          alert('User Created!! Signup successful')
      })
      .catch(function(error){
          //Firebase will alert if in case of errors
          var error_code=error.code
          var error_message=error.message
          alert(error_message)
      })

      // Clear input fields after signup
      emailInput.value = '';
      passwordInput.value = '';

    }else if (loginRadio.checked && email && password){

      //Validate email and password
      if(validate_email(email)==false || validate_password(password)==false){
        return;
        //Don't continue->return
      }

      auth.signInWithEmailAndPassword(email,password) //auth method to Handle promise 
      .then(function(){

        //Declaring user variable
        var user=auth.currentUser

        //Adding the user to firebase database
        var database_ref=database.ref()

        //create user object
        var user_data={
          email:email,
          last_login: Date.now()
          //Password should not be saved
        }

        database_ref.child('users/'+ user.uid).update(user_data)
        alert('User Login Successful!!!')
        window.location.href = 'movieSearch.html';

      })

      .catch(function(error){

        //Firebase will alert if in case of errors
        var error_code=error.code
        var error_message=error.message
        if(error_message){
          alert('Invalid Email or Password')
        }

      })
    }
  })
 
  







