const loader = document.querySelector("#introLoader");
window.addEventListener("load", () => window.setTimeout(() => loader?.classList.add("done"), 900));

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    observer.unobserve(entry.target);
  });
}, { threshold: .12 });
document.querySelectorAll(".reveal").forEach((element, index) => {
  element.style.transitionDelay = `${Math.min(index % 4, 3) * 90}ms`;
  revealObserver.observe(element);
});

const heartField = document.querySelector(".hearts");
function createHeart() {
  if (!heartField) return;
  const heart = document.createElement("span");
  heart.className = "floating-heart";
  heart.textContent = Math.random() > .25 ? "♡" : "✦";
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.fontSize = `${12 + Math.random() * 20}px`;
  heart.style.setProperty("--duration", `${7 + Math.random() * 7}s`);
  heartField.appendChild(heart);
  window.setTimeout(() => heart.remove(), 15000);
}
window.setInterval(createHeart, 1400);

document.querySelector("#memoryButton")?.addEventListener("click", (event) => {
  document.querySelector("#surprise").classList.add("show");
  event.currentTarget.textContent = "A little truth for you ♡";
});

const noButton = document.querySelector("#noButton");
noButton?.addEventListener("click", () => {
  noButton.textContent = "Take all the time you need";
  noButton.style.transform = `translate(${(Math.random() - .5) * 18}px, ${(Math.random() - .5) * 8}px)`;
});
document.querySelector("#yesButton")?.addEventListener("click", () => document.querySelector("#celebration").classList.add("show"));

document.querySelectorAll(".faq-list details").forEach((detail) => detail.addEventListener("toggle", () => {
  if (!detail.open) return;
  document.querySelectorAll(".faq-list details").forEach((other) => {
    if (other !== detail) other.removeAttribute("open");
  });
}));
