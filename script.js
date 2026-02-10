// ============================================
// VALENTINE'S DAY WEBSITE - NAVIGATION & LOGIC
// ============================================

// Scroll-triggered animations for story sections
function initScrollAnimations() {
  const sections = document.querySelectorAll('.story-section');
  
  if (sections.length === 0) return;

  const observerOptions = {
    threshold: 0.3,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    section.style.opacity = '0';
    observer.observe(section);
  });
}

// Initialize scroll animations on page load
document.addEventListener('DOMContentLoaded', initScrollAnimations);

// ============================================
// QUIZ LOGIC
// ============================================

const QUIZ_ANSWERS = {
  question1: 'A', // 29th August 2025
  question2: 'B', // 1st November 2025
  question3: 'D'  // 7th December 2026
};

function validateQuiz() {
  const answers = {
    question1: getSelectedAnswer('question1'),
    question2: getSelectedAnswer('question2'),
    question3: getSelectedAnswer('question3')
  };

  // Check if all questions are answered
  if (!answers.question1 || !answers.question2 || !answers.question3) {
    showQuizMessage('Please answer all questions!', 'error');
    return false;
  }

  // Check if all answers are correct
  const allCorrect = 
    answers.question1 === QUIZ_ANSWERS.question1 &&
    answers.question2 === QUIZ_ANSWERS.question2 &&
    answers.question3 === QUIZ_ANSWERS.question3;

  if (allCorrect) {
    showQuizMessage('✓ All correct! Redirecting to your gift...', 'success');
    // Redirect after a short delay
    setTimeout(() => {
      window.location.href = 'gift.html';
    }, 1500);
    return true;
  } else {
    showQuizMessage('✗ Some answers are incorrect. Try again!', 'error');
    return false;
  }
}

function getSelectedAnswer(questionId) {
  const selected = document.querySelector(`input[name="${questionId}"]:checked`);
  return selected ? selected.value : null;
}

function showQuizMessage(message, type) {
  // Remove existing message if any
  const existingMessage = document.querySelector('.quiz-message');
  if (existingMessage) {
    existingMessage.remove();
  }

  // Create and insert new message
  const messageDiv = document.createElement('div');
  messageDiv.className = `quiz-message ${type}`;
  messageDiv.textContent = message;

  const quizContainer = document.querySelector('.quiz-container');
  if (quizContainer) {
    quizContainer.insertBefore(messageDiv, quizContainer.firstChild);
  }

  // Auto-remove error messages after 3 seconds
  if (type === 'error') {
    setTimeout(() => {
      messageDiv.style.opacity = '0';
      messageDiv.style.transition = 'opacity 0.3s ease';
      setTimeout(() => messageDiv.remove(), 300);
    }, 3000);
  }
}

// Quiz submit button handler
function setupQuizHandler() {
  const submitBtn = document.getElementById('quiz-submit');
  if (submitBtn) {
    submitBtn.addEventListener('click', (e) => {
      e.preventDefault();
      validateQuiz();
    });
  }
}

document.addEventListener('DOMContentLoaded', setupQuizHandler);

// ============================================
// PAGE NAVIGATION
// ============================================

function setActiveNavLink(page) {
  // Remove active class from all links
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.classList.remove('active');
  });

  // Add active class to current page link
  const currentLink = document.querySelector(`.nav-links a[href*="${page}"]`);
  if (currentLink) {
    currentLink.classList.add('active');
  }
}

// Detect current page and set active link
document.addEventListener('DOMContentLoaded', () => {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  setActiveNavLink(currentPage);
});

// ============================================
// CONFETTI ANIMATION (GIFT PAGE)
// ============================================

function createConfetti() {
  const confettiContainer = document.body;
  const colors = ['#d4af37', '#dc143c', '#e5c158', '#c41e3a'];
  const confettiCount = 30;

  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti-piece';
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.top = '-10px';
    confetti.style.width = Math.random() * 10 + 5 + 'px';
    confetti.style.height = Math.random() * 10 + 5 + 'px';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.opacity = Math.random() * 0.7 + 0.3;
    confetti.style.animation = `confettiFall ${Math.random() * 2 + 2}s ease-in forwards`;
    confetti.style.animationDelay = Math.random() * 0.5 + 's';
    confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
    
    confettiContainer.appendChild(confetti);

    // Remove confetti element after animation completes
    setTimeout(() => confetti.remove(), 3500);
  }
}

// Initialize confetti on gift page
document.addEventListener('DOMContentLoaded', () => {
  if (window.location.pathname.includes('gift.html')) {
    createConfetti();
    // Create additional confetti bursts
    setTimeout(() => createConfetti(), 800);
    setTimeout(() => createConfetti(), 1600);
  }
});

// ============================================
// SMOOTH PAGE TRANSITIONS
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  // Fade in animation on page load
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => {
    page.style.opacity = '0';
    page.style.animation = 'fadeIn 0.6s ease-out forwards';
  });
});

// ============================================
// MOBILE MENU TOGGLE (FUTURE USE)
// ============================================

function setupMobileMenu() {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.style.display = 
        navLinks.style.display === 'flex' ? 'none' : 'flex';
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.style.display = 'none';
      });
    });
  }
}

document.addEventListener('DOMContentLoaded', setupMobileMenu);

// ============================================
// PREVENT DEFAULT FORM SUBMISSION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  const quizForm = document.querySelector('form');
  if (quizForm) {
    quizForm.addEventListener('submit', (e) => {
      e.preventDefault();
    });
  }
});
