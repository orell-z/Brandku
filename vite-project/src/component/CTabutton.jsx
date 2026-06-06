import { useState } from "react";

const CtaButton = () => {
  // 1. Logika tombol klik (tetap dipertahankan)
  const [counter, setCounter] = useState(0);
  const [feedbackText, setFeedbackText] = useState("");
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  const handleCtaClick = () => {
    const nextCounter = counter + 1;
    setCounter(nextCounter);

    if (nextCounter === 1) {
      setFeedbackText("hallo harusnya muncul!!");
    } else if (nextCounter === 2) {
      setFeedbackText("Ini teks bebas yang kamu mau!");
    } else if (nextCounter === 3) {
      setIsButtonVisible(false); // Tombol hilang pada klik ke-3
    }
  };

  return (
    <div className="text-center pt-7">
      {isButtonVisible && (
        <button 
          id="cta-btn" 
          onClick={handleCtaClick} 
          className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-full transition"
        >
          mulai gratis
        </button>
      )}
      {feedbackText && (
        <p id="cta-feedback" className="mt-4 text-blue-600 font-medium">
          {feedbackText}
        </p>
      )}
    </div>
  );
};

export default CtaButton;