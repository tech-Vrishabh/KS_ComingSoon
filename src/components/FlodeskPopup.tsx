import { useEffect } from "react";

declare global {
  interface Window {
    FlodeskObject?: string;
    fd?: (...args: any[]) => void;
  }
}

export default function FlodeskPopup() {
  useEffect(() => {
    const loadPopup = () => {
      // Initialize TRUE popup mode
      window.fd?.("form", {
        formId: "6932b5676e4686bdd8985b2c",
        successRedirectUrl: "/",   // redirect after submit
        inPlace: false,            // ensures popup mode
      });

      // Extra safety listener
      window.fd?.("form:submit:success", () => {
        window.location.href = "/";
      });
    };

    // Load script once
    if (!document.querySelector('script[src*="flodesk"]')) {
      (function (w, d, t, h, s, n) {
        w.FlodeskObject = n;
        const fn = function () {
          (w[n].q = w[n].q || []).push(arguments);
        };
        w[n] = w[n] || fn;

        const f = d.getElementsByTagName(t)[0];
        const v = "?v=" + Math.floor(Date.now() / (120 * 1000)) * 60;

        const sm = d.createElement(t) as HTMLScriptElement;
        sm.async = true;
        sm.type = "module";
        sm.src = h + s + ".mjs" + v;
        sm.onload = loadPopup;
        f.parentNode?.insertBefore(sm, f);

        const sn = d.createElement(t) as HTMLScriptElement;
        sn.async = true;
        sn.noModule = true;
        sn.src = h + s + ".js" + v;
        sn.onload = loadPopup;
        f.parentNode?.insertBefore(sn, f);
      })(window, document, "script", "https://assets.flodesk.com", "/universal", "fd");
    } else {
      loadPopup();
    }
  }, []);

  return null;
}
