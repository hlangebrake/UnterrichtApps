// A short, decorative response to a newly accepted answer; never stored in learner progress.
const SUCCESS_EMOJIS = ['👍', '💚', '😊', '🙌', '✨', '😎'];
function animateTaskSuccess(formSelector = '#full-exercise-form') {
  if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
  const form = document.querySelector(formSelector);
  const card = form?.closest?.('.card');
  const button = form?.querySelector('button[type="submit"], button.primary');
  if (!card || !button) return;
  card.querySelectorAll('.success-shimmer, .success-emoji').forEach(el => el.remove());
  const cardRect = card.getBoundingClientRect(), buttonRect = button.getBoundingClientRect();
  const shimmer = document.createElement('span');
  shimmer.className = 'success-shimmer';
  shimmer.setAttribute('aria-hidden', 'true');
  const emoji = document.createElement('span');
  emoji.className = 'success-emoji';
  emoji.setAttribute('aria-hidden', 'true');
  emoji.textContent = SUCCESS_EMOJIS[Math.floor(Math.random() * SUCCESS_EMOJIS.length)];
  emoji.style.left = (buttonRect.left - cardRect.left + buttonRect.width / 2) + 'px';
  emoji.style.top = (buttonRect.top - cardRect.top + buttonRect.height / 2) + 'px';
  card.classList.add('success-celebration');
  button.classList.add('success-pop');
  card.append(shimmer, emoji);
  setTimeout(() => {
    shimmer.remove();
    emoji.remove();
    button.classList.remove('success-pop');
    card.classList.remove('success-celebration');
  }, 1500);
}