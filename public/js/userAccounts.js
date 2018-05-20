(function() {
   
    var txtEmail = document.getElementById('email');
    var txtPassword = document.getElementById('password');
    var btnLogin = document.getElementById('signInBtn');
    var btnSignUp = document.getElementById('registerBtn');
    var btnLogout = document.getElementById('');

    btnLogin.addEventListener('click', e => {
        var email = txtEmail.value;
        var pass = txtPassword.value;
        var auth = firebase.auth();

        var promise = auth.signInWithEmailAndPassword(email,pass);
        promise.catch(e => console.log(e.message));
    });

    btnSignUp.addEventListener('click', e => {
        var email = txtEmail.value;
        var pass = txtPassword.value;
        var auth = firebase.auth();

        var promise = auth.createUserWithEmailAndPassword(email,pass);
        promise.catch(e => console.log(e.message));
    });

    /*btnLogout.addEventListener('click', e => {
        firebase.auth().signOut();
    });*/

    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser) {
            console.log(firebaseUser);
            //btnLogout.classList.remove('hide');
        } else {
            console.log('not logged in');
            //btnLogout.classList.add('hide';)
        }    
    });

});

(function() {
    
    const preObject = document.getElementById('object');
    
    const dbRefObject = firebase.database().ref().child('object');
    
    dbRefObject.on('value', snap => {
        preObject.innerText = JSON.stringify(snap.val(), null, 3);
    });
    
    
});