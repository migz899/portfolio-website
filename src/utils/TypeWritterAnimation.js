/**
 * Typewriter utility THIS IS FOR SINGULAR USE ONLY
 * 
 * Usage:
 *   const tw = typewriterEffect("Hello world!", (output) => {
 *     console.log(output);
 *   });
 * 
 *   // Optional: stop later
 *   tw.stop();
 */
export function TypeWritterAnimation(p_texts, p_callback, p_speed = 100) {
    let i = 0;
    let active = true;
  
    function type() {
      if (!active) return;
      if (i <= p_text.length) {
        p_callback(p_text.slice(0, i));
        i++;
        setTimeout(type, p_speed);
      }
    }
  
    type();
  
    return {
      stop: () => (active = false),
    };
  }