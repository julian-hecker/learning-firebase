const authSwitchLinks = document.getElementsByClassName('switch');
const authWrapper = document.getElementsByClassName('auth');
const authModals = document.querySelectorAll('.auth .modal');
const registerForm = document.querySelector('.register');
const loginForm = document.querySelector('.login');
const signOut = document.querySelector('.sign-out');

// Toggle Auth Modals
Array.from(authSwitchLinks).forEach((link) => {
  link.addEventListener('click', () => {
    authModals.forEach((modal) => modal.classList.toggle('active'));
  });
});

registerForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = registerForm.email.value;
  const password = registerForm.password.value;
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((user) => {
      console.log(user);
      registerForm.reset();
    })
    .catch((err) => {
      registerForm.querySelector('p.error').textContent = err.message;
    });
});

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = loginForm.email.value;
  const password = loginForm.password.value;
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((user) => {
      console.log(user);
      loginForm.reset();
    })
    .catch((err) => {
      loginForm.querySelector('p.error').textContent = err.message;
    });
});

signOut.addEventListener('click', (e) => {
  firebase
    .auth()
    .signOut()
    .then(() => console.log('signed out'));
});

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    authWrapper.classList.remove('open');
    authModals.forEach((modal) => modal.classList.remove('active'));
  } else {
    authWrapper.classList.add('open');
    authModals[0].classList.add('active');
  }
});
