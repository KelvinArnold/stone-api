const app = require("./../app");
// Port
const port = process.env.PORT || 4500;

app.listen(port, () => {
  console.log(`listening on ports ${port}`)
});