const requestLogger=(req,res,next)=>{

    // requestLogger
    // A person (client) sends a request (like opening a webpage).
    // Your function:
    // Checks the date and time.
    // Gets the request type (e.g., GET, POST).
    // Gets the URL the person is asking for.
    // Gets the browser information (User-Agent).
    // It prints this information to the console.
    // It calls next(), which tells the server to continue processing the request.

    const timeStamp=new Date().toString();
    const method=req.method
    const url=req.url
    const userAgent=req.get('User-Agent');
    console.log(`[${timeStamp}] ${method} ${url}-${userAgent}`);
    next();
}

const addTimeStamp = (req, res, next) => {
    req.timeStamp = new Date().toISOString();
    next();  // 👈 This makes sure the request moves forward
};


module.exports={requestLogger, addTimeStamp};