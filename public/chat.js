const form = document.getElementById('chatform');
const msgcon = document.getElementById('list');

function addMsg(msg) {
  const div = document.createElement('div');
  div.classList.add('messages');
  div.innerHTML = `<p>${msg}</p>`;
  msgcon.appendChild(div);
};

const socket = io('http://localhost:4000/');

socket.on('msg', data => {
  console.log(data);
  addMsg(data);
});

form.addEventListener('submit', e => {
  e.preventDefault();
  console.log(e.target.elements.message.value);
  socket.emit('append', e.target.elements.message.value); 
  addMsg(e.target.elements.message.value);
  e.target.elements.message.value = '';
  e.target.elements.message.focus();
});

