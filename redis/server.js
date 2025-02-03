
const redis=require("redis");


const client=redis.createClient({
    host: 'localhost',
    port:6379
})


client.on('error', (error)=>
console.log("Redis client error occured", error));


async function testRedisConnection(){
    try{
        await client.connect()
        console.log("Connected to redis");
    }catch(error){
        console.log("Error connecting to redis", error);
    }finally{
        await client.quit();
    }
}
testRedisConnection();


