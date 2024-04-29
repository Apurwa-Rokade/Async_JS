function loadmessage(){
  const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
xhr.onload = function (){
  
  let users= JSON.parse(this.responseText);
 
  console.log(users);
  let username = document.getElementById("username");
  users.forEach(user =>{
    const listitem = document.createElement('li');
    listitem.textContent = user.name;
    username.appendChild(listitem);
  })
  
}
xhr.send();
}