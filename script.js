document.addEventListener('DOMContentLoaded', () => {

    const words = [
        'Web Developer',
        'Freelancer',
        'Frontend Engineer',
        'Open Source Contributor'
    ];

    const typingElement = document.getElementById("typing-text");

    const typingSpeed = 80;
    const deletingSpeed = 45;
    const holdDelay = 1400;
    const betweenDelay = 400;

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeloop() {
        const currentWord = words[wordIndex];

        if (!isDeleting) {
            // Typing forward
            typingElement.textContent = currentWord.slice(0, charIndex + 1);
            charIndex++;

            if (charIndex === currentWord.length) {
                isDeleting = true;
                setTimeout(typeloop, holdDelay);
            } else {
                setTimeout(typeloop, typingSpeed);
            }

        } else {
            // Deleting backward
            typingElement.textContent = currentWord.slice(0, charIndex - 1);
            charIndex--;

            if (charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                setTimeout(typeloop, betweenDelay);
            } else {
                setTimeout(typeloop, deletingSpeed);
            }
        }
    }

    setTimeout(typeloop, 500);
});





// Animate skill cards
function animateSkills() {
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    const target = parseInt(card.dataset.percent);
    const perText = card.querySelector(".per");
    const bar = card.querySelector(".per-fill");

    let current = 0;

    const interval = setInterval(() => {
      if (current >= target) {
        clearInterval(interval);
      } else {
        current++;
        perText.textContent = current + "%";
        bar.style.width = current + "%";
      }
    }, 10); // speed
  });
}

// Trigger animation when cards appear in viewport
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateSkills();
      observer.disconnect(); // run ONCE
    }
  });
});

observer.observe(document.querySelector(".cards"));





// humberger
