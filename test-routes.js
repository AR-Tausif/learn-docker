import fetch from 'node-fetch';

fetch('http://localhost:5000/users/create-user', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ name: 'Tausif Ahmed', email: 'abc@gmail.com', address:"Laxmipur, Jamalganj"}),

})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error('Error:', error));
