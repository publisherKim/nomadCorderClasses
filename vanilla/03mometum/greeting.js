const form = document.querySelector('.js-form'),
      input = form.querySelector('input'),
      greeting = document.querySelector('.js-greetings');

const USER_LS = 'currentUser',
      SHOWING_CN = 'showing';

const saveName = text => {
  localStorage.setItem(USER_LS, text);
};

const handleSubmit = event => {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
};

const asKForName = () => {
  form.classList.add(SHOWING_CN);
  form.addEventListenner('submit');
};

const paintGreeting = (text) => {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN)
  greeting.innerText = `Hello ${text}`;
};

const loadName = () => {
  const currentUser = localStorag.getItem(USER_LS);
  if (currentUser === null) {
    // main is not
    asKForName();
  } else {
    // main is
    paintGreeting(currentUser);
  }
};

const init = () => {
  
};

init();