// Smooth scroll for nav links (enhancement; CSS already has scroll-behavior: smooth)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Donate button: show a dignified message
document.querySelector('.donate-btn')?.addEventListener('click', function () {
  const messages = [
    "Thank you for your support. Every dollar helps a nepo baby feel seen.",
    "Your generosity will go toward awareness campaigns and support hotlines.",
    "We'll send a thank-you note on letterhead. (Our intern's dad owns a paper company.)",
  ];
  const msg = messages[Math.floor(Math.random() * messages.length)];
  alert(msg);
});
