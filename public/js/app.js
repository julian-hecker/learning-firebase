const requestModal = document.querySelector('.new-request');
const requestLink = document.querySelector('.add-request');

// open request modal
requestLink.addEventListener('click', () => {
  requestModal.classList.add('open');
});

// close request modal
requestModal.addEventListener('click', (e) => {
  if (e.target.classList.contains('new-request')) {
    requestModal.classList.remove('open');
  }
});

const button = document.getElementsByClassName('call')[0];
button.addEventListener('click', async (_event) => {
  const sayHello = firebase.functions().httpsCallable('sayHello');
  try {
    const res = await sayHello({ name: 'boolean' });
    alert(res.data);
  } catch (err) {
    console.error(err);
  }
});
