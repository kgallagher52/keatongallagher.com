import axios from "axios";


declare global {
  interface Window {
    opr?: {
      addons?: any
    },
    chrome:any,
    opera: any,
    InstallTrigger?:any,
  }
  interface Document {
    documentMode?: any
  }
}

const browserCheck = () => {
  // Opera 8.0+
  var isOpera;
  isOpera =
    (!!window.opr && !!window.opr.addons) ||
    !!window.opera ||
    navigator.userAgent.indexOf(" OPR/") >= 0;
  // Firefox 1.0+
  var isFirefox = ("InstallTrigger" in window)
  
  // Safari 3.0+ "[object HTMLElementConstructor]"
  var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
  // Internet Explorer 6-11
  var isIE = /*@cc_on!@*/ false || !!document.documentMode;
  // Edge 20+
  var isEdge = !isIE && !!window.StyleMedia;
  // Chrome 1 - 79
  var isChrome =
    !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
  // Edge (based on chromium) detection
  var isEdgeChromium = isChrome && navigator.userAgent.indexOf("Edg") !== -1;
  // Blink engine detection
  if (isFirefox) {
    return "FireFox";
  }
  if (isChrome) {
    return "Chrome";
  }
  if (isSafari) {
    return "Safari";
  }
  if (isOpera) {
    return "Opera";
  }
  if (isIE) {
    return "IE";
  }
  if (isEdge) {
    return "Edge";
  }
  if (isEdgeChromium) {
    return "EdgeChromium";
  }
};

const operatingSystemCheck = () => {
  var Name = "Not known";
  if (navigator.appVersion.indexOf("Win") !== -1) Name = "Windows OS";
  if (navigator.appVersion.indexOf("Mac") !== -1) Name = "MacOS";
  if (navigator.appVersion.indexOf("X11") !== -1) Name = "UNIX OS";
  if (navigator.appVersion.indexOf("Linux") !== -1) Name = "Linux OS";
  return Name;
};


export const handleLogError = async (error:Error) => {
  console.error({ error });
  var message = error.message || "";
  var location = error.stack || "";
  var req = JSON.stringify({
    location: location,
    origin: "weBoost",
    browser: browserCheck(),
    operatingSystem: operatingSystemCheck(),
    dateLogged: new Date(),
    message: message,
  });
  if(process.env.CUSTOM_ENV === "production") {
    await axios
    .post(`${process.env.ERROR_LOGGING_PATH}/logs`, req)
    .then(function (res) {
      console.log("Error has been logged to the developers", res);
    })
  } else {
    console.log("IN DEVELOPMENT")
  }
};
