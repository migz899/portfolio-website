export function TypeWritterAnimationMultiple(
  p_texts,
  p_callback,
  p_typingSpeed = 100,
  p_deletingSpeed = 50,
  p_delayBetweenTexts = 1500
) {
  let i = 0;
  let charIndex = 0;
  let isDeleting = false;
  let active = true;

  function type() {
    if (!active) return;

    const currentText = p_texts[i];
    const displayed = isDeleting
      ? currentText.slice(0, charIndex--)
      : currentText.slice(0, charIndex++);

    p_callback(displayed);

    if (!isDeleting && charIndex === currentText.length) {
      setTimeout(() => (isDeleting = true), p_delayBetweenTexts);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;

      // Displays Text in random order 
      //i = Math.floor(Math.random() * p_texts.length);

      i++;
      if (i > p_texts.length - 1) i = 0;
    }

    const delay = isDeleting ? p_deletingSpeed : p_typingSpeed;
    setTimeout(type, delay);
  }

  type();

  return {
    stop: () => (active = false),
  };
}