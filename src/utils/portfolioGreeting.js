const GREETING = 'Hi, my name is Sourabh Rawat. Check out my portfolio.';

let hasStarted = false;
let resumeTimerId = null;
let gestureCleanup = null;

const keepSpeechAlive = () => {
  window.clearInterval(resumeTimerId);
  resumeTimerId = window.setInterval(() => {
    if (!window.speechSynthesis?.speaking) {
      window.clearInterval(resumeTimerId);
      resumeTimerId = null;
      return;
    }
    window.speechSynthesis.resume();
  }, 4000);
};

const clearGestureArm = () => {
  if (!gestureCleanup) return;
  gestureCleanup();
  gestureCleanup = null;
};

const speakIntro = () => {
  if (typeof window === 'undefined' || !window.speechSynthesis || hasStarted) {
    return false;
  }

  const speech = new SpeechSynthesisUtterance(GREETING);
  speech.rate = 0.9;
  speech.pitch = 0.8;
  speech.volume = 1;

  speech.onstart = () => {
    hasStarted = true;
    clearGestureArm();
    keepSpeechAlive();
  };

  speech.onerror = (event) => {
    if (event.error === 'not-allowed' || event.error === 'canceled') {
      hasStarted = false;
      armGestureReplay();
    }
  };

  speech.onend = () => {
    window.clearInterval(resumeTimerId);
    resumeTimerId = null;
  };

  window.speechSynthesis.cancel();
  window.speechSynthesis.resume();
  window.speechSynthesis.speak(speech);
  return true;
};

const armGestureReplay = () => {
  if (gestureCleanup || hasStarted || typeof window === 'undefined') return;

  const onGesture = () => {
    clearGestureArm();
    speakIntro();
  };

  window.addEventListener('pointerdown', onGesture);
  window.addEventListener('keydown', onGesture);
  window.addEventListener('touchstart', onGesture, { passive: true });

  gestureCleanup = () => {
    window.removeEventListener('pointerdown', onGesture);
    window.removeEventListener('keydown', onGesture);
    window.removeEventListener('touchstart', onGesture);
  };
};

/** Warm voices during splash. */
export const preloadGreeting = () => {
  if (typeof window === 'undefined' || !window.speechSynthesis) return;

  window.speechSynthesis.getVoices();
  window.speechSynthesis.addEventListener(
    'voiceschanged',
    () => window.speechSynthesis.getVoices(),
    { once: true }
  );
};

/**
 * Called when Gojo starts moving.
 * Browsers block autoplay sound — if blocked, first natural click/key plays it.
 */
export const playGojoGreeting = () => {
  if (hasStarted || typeof window === 'undefined') return;

  speakIntro();

  window.setTimeout(() => {
    if (!hasStarted && !window.speechSynthesis?.speaking) {
      armGestureReplay();
    }
  }, 300);
};
