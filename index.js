
const express = require('express');
const app = express();
const wbm = require('wbm');


app.get('/', (req, res)=>{
    return res.status(200).json({
        "data": "hello from express"
    })
})

app.post('/sendMessage/:phone', (req, res)=>{
    let phone = req.params.phone
    wbm.start().then(async () => {
        const phones = [phone];
        const message = 'HI rachit boss';
        await wbm.send(phones, message);
        await wbm.end();
    }).catch(err => console.log(err));
    return res.send('Success');
})

app.listen(8000, ()=>{
    console.log("app running on port 8000");
})