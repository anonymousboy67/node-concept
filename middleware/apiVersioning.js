const urlVersioning=(version)=>(req,res,next)=>{
    if(req.path.startsWith(`/api/${version}`)){
        next();
    }else{
        res.status(404).json({
            success:false,
            error:"API version is not supported",
        })
    }
}



const headerVersioning=(version)=>(req,res,next)=>{
    if(req.get("Accept Version")==version){
        next();
    }else{
        res.status(404).json({
            success: false,
            error:"API version is not supported",
    });
}
}



const contentTypeVersioning=(version)=>(req,res,next)=>{
    const contentType=req.get('Content-Type');

    if(
        contentType &&
        contentType.includes(`application/vnd.api.${version}+json`)
    ){
        next();
    }else{
        res.status(4004).json({
            success:false,
            error:"API version is not supported",
        })
    }
}

module.exports={urlVersioning, headerVersioning, contentTypeVersioning};




// Alright! Imagine you have a **toy shop**, and you sell different versions of the same toy. Some customers want the **new version**, while others like the **older one**. You need a way to make sure they get the right toy.  

// In this case, the **"toy"** is your **API (a system that gives information)**, and the **"versions"** are different updates of that API.  

// Your code is like a **security guard** that checks if a customer is asking for the right version. If they ask for the wrong one, the guard says, **"Sorry, we don’t have that version!"**  

// ### 🚀 Breaking it Down:

// 1️⃣ **`urlVersioning(version)`** → 🛣 **Checking the URL Path**  
//    - The customer (user) must go to the correct shop address:  
//      ✅ `/api/v1/toys` (Allowed!)  
//      ❌ `/api/v2/toys` (Oops! Not available!)  
//    - If the address starts with `/api/v1`, we let them in. Otherwise, we say **404 (not found).**

// 2️⃣ **`headerVersioning(version)`** → 📩 **Checking the Header**  
//    - Think of this like a **secret passcode** on a letter.  
//    - The customer must send a request with a special header:  
//      ✅ `"Accept-Version: v1"` (Allowed!)  
//      ❌ `"Accept-Version: v2"` (Nope! Not available!)  
//    - If they have the right version in the **header**, we let them in.  

// 3️⃣ **`contentTypeVersioning(version)`** → 📜 **Checking the Content Type**  
//    - This is like a **special box** for the toy.  
//    - If the request has the correct **Content-Type**, like:  
//      ✅ `"Content-Type: application/vnd.api.v1+json"` (Allowed!)  
//      ❌ `"Content-Type: application/json"` (Wrong box! Not allowed!)  
//    - We check if the request is packed in the right way.  

// ### 🎯 **Why Are We Doing This?**  
// - **APIs change over time** (like iPhone updates 📱).  
// - We don’t want old users to **break** if they still use an old version.  
// - We give users different ways to **choose** the version they need.  

// ### 🎁 **What Do We Get?**  
// ✔ **Better control** over API versions.  
// ✔ **Smooth updates** without breaking old users.  
// ✔ **Flexibility** in how users access the API.  

// Hope this makes sense! 🚀😃