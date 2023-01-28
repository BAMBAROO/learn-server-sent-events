const sse = new EventSource("http://localhost:8080/stream");

const setMessage = (message) => {
  const list = document.querySelector(".list");
  const p = document.createElement("p");
  p.textContent = message;
  list.appendChild(p);
};

sse.onmessage = (event) => {
  console.log(event)
  setMessage(event.data);
};

sse.onerror = () => {
  setMessage("DISCONNECT");
  sse.close();
};