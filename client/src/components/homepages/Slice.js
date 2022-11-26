
import ClientCaptcha from "react-client-captcha";
import "react-client-captcha/dist/index.css";
import { useEffect, useRef, useState } from "react";
export default function Slice() {

  //const captchaRef2 = useRef(null);
  const [captch, setCaptch] = useState("");
  
  const loadCaptcha = (code) => {
    setCaptch(code);
  };
  // const handleCaptcha = (e) => {
  //   const captcha = captchaRef2.current.value;
  //   if (captcha === captch) {
  //     alert("true");
  //   } else {
  //     alert("false");
  //   }
  // };

  return (
    <div className="App">
      <div>
        <ClientCaptcha captchaCode={loadCaptcha} />
        {/* <input ref={captchaRef2} type="text" />
      <button onClick={handleCaptcha}>Check</button>*/}
      </div>
    </div>
  );
}
