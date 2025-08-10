import { useState, useEffect } from "react";

interface TypingAnimationOptions {
  typeSpeed?: number;
  deleteSpeed?: number;
  delayBetweenTexts?: number;
  startDelay?: number;
}

export function useTypingAnimation(
  texts: string[], 
  options: TypingAnimationOptions = {}
) {
  const {
    typeSpeed = 100,
    deleteSpeed = 50,
    delayBetweenTexts = 2000,
    startDelay = 0
  } = options;

  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (startDelay > 0 && !hasStarted) {
      const startTimer = setTimeout(() => {
        setHasStarted(true);
      }, startDelay);
      
      return () => clearTimeout(startTimer);
    }
    setHasStarted(true);
  }, [startDelay, hasStarted]);

  useEffect(() => {
    if (!hasStarted || texts.length === 0) return;

    const currentText = texts[textIndex];
    let timer: NodeJS.Timeout;

    if (isDeleting) {
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(currentText.substring(0, displayText.length - 1));
        }, deleteSpeed);
      } else {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    } else {
      if (displayText.length < currentText.length) {
        timer = setTimeout(() => {
          setDisplayText(currentText.substring(0, displayText.length + 1));
        }, typeSpeed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, delayBetweenTexts);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, textIndex, isDeleting, texts, typeSpeed, deleteSpeed, delayBetweenTexts, hasStarted]);

  return displayText;
}
