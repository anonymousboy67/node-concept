const cors = require("cors");

const configureCors = () => {
  return cors({
    //origin -> this will tell that which origins you want user can access your api
    origin: (origin, callback) => {
      const allowedOrigins = [
        "http://localhost:3000", //local dev
        "https://yourcustomdomain.com", //production domain
      ];

      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true); //giving permission so that req can be allowed
      } else {
        callback(new Error("Not allowed by cors"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization", "Accept-Version"],
    exposedHeaders: ["X-Total-Count", "Content-Range"],
    credentials: true, //enable support for cookies,
    preflightContinue: false,
    maxAge: 600, // cache pre flight responses for 10 mins  (600 seconds) -> avoid sending options requests multiple times
    optionsSuccessStatus: 204,
  });
};

module.exports = { configureCors };






// Alright! Imagine you own a **candy shop**, and kids from different neighborhoods want to buy candy. But you don’t want **random strangers** from faraway towns to take your candy—only kids from your **approved neighborhoods** can enter.  

// Your code is like a **bouncer** at the shop’s entrance, deciding who can come in and who can’t.  

// ### 🚀 Breaking it Down:

// 1️⃣ **`origin` (Who Can Enter? 🎟️)**  
//    - We allow visitors from **certain neighborhoods (websites)**:  
//      ✅ `"http://localhost:3000"` → Local development (for testing)  
//      ✅ `"https://yourcustomdomain.com"` → Your real website  
//    - If someone else comes, we say **"Sorry, you’re not allowed!"**  

// 2️⃣ **`methods` (What Can They Do? 🛠️)**  
//    - We allow only certain actions:  
//      ✅ `"GET"` → Look at candy 🍬  
//      ✅ `"POST"` → Request new candy 🎁  
//      ✅ `"PUT"` → Change candy order 📝  
//      ✅ `"DELETE"` → Cancel candy order ❌  

// 3️⃣ **`allowedHeaders` (Secret Passcodes 🏷️)**  
//    - Some customers need to show **special tickets** to enter:  
//      ✅ `"Content-Type"` (Type of request)  
//      ✅ `"Authorization"` (Secret key for VIP access 🔑)  
//      ✅ `"Accept-Version"` (Which version of the candy list do you want?)  

// 4️⃣ **`exposedHeaders` (What We Tell Them 📢)**  
//    - We **share some info** with the customer:  
//      ✅ `"X-Total-Count"` (Total number of candies 🍭)  
//      ✅ `"Content-Range"` (Which part of the candy list they can see)  

// 5️⃣ **`credentials: true` (Can They Use Cookies? 🍪)**  
//    - Yes! If they bring their cookies, we accept them.  

// 6️⃣ **`maxAge: 600` (Remember the Rules for 10 Minutes ⏳)**  
//    - Instead of asking every time, we **remember the rules for 10 minutes** so it’s faster!  

// 7️⃣ **`optionsSuccessStatus: 204` (Quick "Yes, You Can" Reply ✅)**  
//    - If someone asks, **"Can I access your candy shop?"**, we quickly reply **"Yes, 204 OK!"**  

// ### 🎯 **Why Are We Doing This?**  
// - **Security** → Stops random strangers from accessing your API.  
// - **Control** → Allows only approved websites.  
// - **Performance** → Saves time by remembering rules.  

// ### 🎁 **What Do We Get?**  
// ✔ **Safer API** (Only trusted websites can use it).  
// ✔ **Faster responses** (Less checking, more doing).  
// ✔ **Smooth user experience** (No unnecessary rejections).  

// Hope that helps! 🚀😃