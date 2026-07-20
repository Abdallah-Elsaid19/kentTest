import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { setCookieConsent } from "@/store/slices/uiSlice";
import { Link } from "react-router-dom";

export default function CookieBanner() {
  const dispatch = useAppDispatch();
  const consent = useAppSelector((state) => state.ui.cookieConsent);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("kbc_cookie_consent");
    if (!stored) {
      setVisible(true);
    } else {
      dispatch(setCookieConsent(stored === "true"));
    }
  }, [dispatch]);

  const accept = () => {
    localStorage.setItem("kbc_cookie_consent", "true");
    dispatch(setCookieConsent(true));
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("kbc_cookie_consent", "false");
    dispatch(setCookieConsent(false));
    setVisible(false);
  };

  if (!visible || consent !== null) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-4 animate-slide-up">
      <div className="max-w-4xl mx-auto bg-kbc-dark-900 rounded-xl p-5 shadow-2xl flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <i className="ri-information-line text-kbc-gold-400 text-2xl shrink-0" />
        <p className="text-sm text-white/80 flex-1">
          We use cookies to improve your experience, analyse site traffic, and personalise content. 
          By clicking &ldquo;Accept&rdquo;, you consent to our use of cookies. 
          <Link to="/cookies" className="text-kbc-gold-400 hover:underline ml-1">
            Cookie Policy
          </Link>
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={decline}
            className="px-4 py-2 border border-white/30 text-white/80 text-sm rounded-lg hover:bg-white/10 transition-colors whitespace-nowrap"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="px-4 py-2 bg-kbc-gold-500 text-kbc-dark-900 text-sm font-semibold rounded-lg hover:bg-kbc-gold-400 transition-colors whitespace-nowrap"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}