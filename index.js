const app = require('express')();

app.get("/stream", (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Access-Control-Allow-Origin", "*");

  const intervalId = setInterval(() => {
    const date = Date.now()
    res.write("data: " + `${date}\n\n`);
  }, 1000)

  res.on("close", () => {
    res.end("client disconnect");
    clearInterval(intervalId);
  })
});


app.listen(8080, () => {
  console.log('server running at port 8080')
});