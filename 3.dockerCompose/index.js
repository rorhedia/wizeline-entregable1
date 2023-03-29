const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient({
  url: 'redis://redis:6379'
});
const port = 3000

client.on('error', err => console.log('Redis Client Error', err));

async function increment(){
  let retries = 5;
  while (true){
    try{
        return await client.incr('hits');
    }catch(e){
        if(retries === 0){
          throw e;
        }
        retries -= 1;
    }
  }
}

app.get('/', async (req, res) => {
  const inc = await increment();
  console.log(inc);
  res.send('Hello World!')
})


app.listen(port, async () => {
  await client.connect();
  console.log(`Listening on port ${port}`)
})



// await client.set('key', 'value');
// const value = await client.get('key');
// await client.disconnect();