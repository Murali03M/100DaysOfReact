const { Configuration, OpenAIApi } = require("openai");

const express = require('express')
const bodyParser = require('body-parser')
const cors =require('cors')

const configuration = new Configuration({
    organization: "org-5MHvuQsmRA56x0DpmAtM7YYj",
    apiKey:process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const app =express();
app.use(bodyParser.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))

const port = 3080;

app.post('/', async(req,res)=>{

    const {message} =req.body;
    console.log(message);
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt:`${message}`,
        max_tokens: 100,
        temperature: 0.5,
      });
     console.log();
        res.json({
             message:response.data.choices[0].text,
           
          })

})

app.listen(port,()=>{
    console.log(`post is listening ${port}`);
})
