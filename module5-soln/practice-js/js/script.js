var sayHi = () => {

  var name = document.getElementById('name').value;

  var msg = `<h2>Hello, ${name}!</h2>`;
  console.log(msg);

  document
    .getElementById('output')
    .innerHTML = msg;

  document
    .querySelector('h1')
    .textContent = 'Have a nice day!';

  document
    .getElementsByClassName('emoji')
    .innerHTML = `<p>:)<p>`;

};