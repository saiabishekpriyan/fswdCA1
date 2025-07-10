const express=require('express')
const cors=require('cors')

const app=express();
const port=3001;

app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('info');
});

app.post('/info',(req,res)=>{
    try{
        const{username,email,password,dateofbirth}=req.body;

        if (!username)
            return res.status(400).json({message:"Username cannot be empty"});
        if (!password)
            return res.status(400).json({message:"Email cannot be empty"});
        if (!password || pasword.length<8||password.length>16)
            return res.status(400).json({message:"Password should be between 8 and 16 characters",});

        return res.status(200).json({message:"Success"});
    }
    catch(e){
        console.log(e.message);
        res.status(500).json({message:"Server Error"});
    }
});

app.listen(port,()=>{
    console.log(`Server connected successfully on port ${port}`);

});
