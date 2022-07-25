const socket = io.connect();

function render(data) {
  const html = data.map((elem, index) => {
      return(`<div>
          <strong>${elem.author.email}</strong>:
          <em>${elem.text}</em>
      </div>`)
  }).join(" ");

  document.getElementById('messages').innerHTML = html;
}

function addMessage(e) {
  //  const f = new Date()
  //  let formatDate = f.getDate() + "/" + f.getMonth() + "/" + f.getFullYear() + " " + f.getHours() + ":" + f.getMinutes() + ":" + f.getSeconds();

   if (document.getElementById('email').value !== "" ) {
    console.log(document.getElementById('email').value,  document.getElementById('alias').value);
    const mensaje = {
        author: {
          id: 10,
          email: document.getElementById('email').value,
          nombre: document.getElementById('nombre').value,
          apellido: document.getElementById('apellido').value,
          edad: document.getElementById('edad').value,
          alias: document.getElementById('alias').value,
          avatar: document.getElementById('avatar').value
        },
        text: document.getElementById('message').value
    };
    
    socket.emit('new-message', mensaje);
   } else {
     alert("Debe ingresar su direccion de correo");
   }
}

socket.on('messages', data => {
    render(data);
})