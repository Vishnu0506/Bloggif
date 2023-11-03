import express from "express" ;
import bodyParser from "body-parser";

const port = 3000;
const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("main.ejs" , {}) ;
  });
  app.get("/create" , (req,res) => {
    res.render( "create.ejs" )
  })
  app.get("/contact" , (req,res) => {
    res.render( "contact.ejs" )
  })
  app.get("/about" , (req,res) => {
    res.render( "about.ejs" )
  })

  app.post("/bloggify" , (req,res) => {
    const t1 = req.body["Title"] ;
    const t2 = req.body["Paragraph"] ;
    console.log( t1 + " " + t2)
    res.render("main.ejs" , {
        Title: t1 ,
        Paragraph: t2
    })

  })


  app.listen( port , () => {
    console.log("Server is currently functioning on " + port + " port")
  } )
