const express = require("express")
const handlebars = require(" express-handlebars ")

const app = express();

const conn = require("./db/conn");

const hbs = handlebars.create({
    partialsDir: ["views/partials"]
});

app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/', (request, response) => {
    return response.render('publications/home')
  })
  
  conn
    // .sync({force:true})
    .sync()
    .then(()=>{
      app.listen(3333)
    })
    .catch((error)=>console.log(error))