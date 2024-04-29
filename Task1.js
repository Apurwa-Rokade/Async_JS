// The XMLHttpRequest object is a built-in JavaScript object that allows you to interact with servers and load data from them asynchronously. It is commonly used in AJAX (Asynchronous JavaScript and XML) to send HTTP requests to a server and receive responses from the server without refreshing the entire webpage. This enables web applications to provide dynamic and interactive user experiences.

// Here is how XMLHttpRequest is used in AJAX:

// Creating an instance: 
// 1) First, create an instance of XMLHttpRequest using the new keyword:
const xhr = new XMLHttpRequest();

// 2)Configuring the request: Use the open method to specify the type of HTTP request (e.g., GET, POST), the URL you want to request, and whether the request should be asynchronous (usually true):
xhr.open('GET', 'https://api.example.com/data', true);

// 3)Setting request headers: If necessary, set custom headers for the request using the setRequestHeader method:
xhr.setRequestHeader('Content-Type', 'application/json');

// 4)Handling response: Define a function to handle the response when the request completes. This function can be set as the onreadystatechange event handler. The response data can be accessed from xhr.responseText or xhr.response (depending on the request type):
xhr.onreadystatechange = function() {
  if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
          // Successful response
          console.log(xhr.responseText);
      } else {
          // Error handling
          console.error(`Error: ${xhr.status}`);
      }
  }
};

// 5)Sending the request: Finally, send the request to the server using the send method. You can pass request data if necessary (e.g., for a POST request):
xhr.send();

// By using XMLHttpRequest in AJAX, you can fetch data from a server, update parts of the web page, or perform other server-side operations without reloading the page, providing a smoother user experience.