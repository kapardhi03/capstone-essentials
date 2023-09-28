/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "neutral-50":"#f9f9f9",
        "neutral-400":"#a2a2a2",
        "gray":"rgba(255,255,255,0.12)",
        "neutral-950":"#0a0a0a",
        "neutral-900":"#171717",
        "neutral-800":"#262626",
        "neutral-700":"#404040",
        "neutral-600":"#525252",
        "neutral-500":"#737373",
        "neutral-300":"#d3d3d3",
        "neutral-200":"#e4e4e4",
        "neutral-100":"#f4f4f4",
        "red-error":"#8b141a",
        "green-success":"#00be74",
        "card-fill":"#1618c",
        "searchbar-fill":"#212327",
        "blue-wash":"rgba(117,190,239,0.2)",
        "twitter-blue":"#1d9bf0",
        "stroke":"#1d9bf0",
        "blhvr":"#1871CA",
      },
      spacing:{
        "w-90":"20.875rem",
        "w-98":"446px",
        "h-4.5":"19px",
        "w-100":"438px",
        "40.2":"162px",
        "58":"237px",
        "20":"593.13px",
        "24.5":"100px",
        "0.5":"2px",
        "105":"455px",
        "50":"199px",
        "99":"367px",
        "93":"371px",
        "0.25":"1px",
        "45":"189.94"
      },
      fontFamily:{
        "px-regular":"Inter",
        
        "chrip":"sans",
      },
    },
  },
  corePlugins:{preflight:false,}
  
};

