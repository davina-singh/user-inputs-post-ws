 // Submit event listener
// ⛳️ Add a submit event listener to the form, and prevent the default behaviour of the form submitting the data to the server.
const messageForm = document.querySelector("#messageForm");

function handleSubmitMessageForm(event) {
  event.preventDefault();
  // Fetch API
  // ⛳️ Inside the submit event listener, use the Fetch API to send the data to the server
  const formData = new FormData(messageForm);
  const message = formData.get("message");

  fetch("http://localhost:3000/messages", {
    method: "POST", // This is where we set the POST HTTP verb
    headers: {
      "Content-Type": "application/json", // This tells the server we're sending stringified JSON data
    },
    body: JSON.stringify({ message }),
  });
  // do something with the form data here 
}

messageForm.addEventListener("submit", handleSubmitMessageForm);

