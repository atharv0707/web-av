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
      navLinks.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
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

// ============================================
// SLIDESHOW FUNCTIONALITY
// ============================================

// Slideshow data structure
const slideshows = {
  confession: {
    images: [
      'img/confession/conf1.jpeg',
      'img/confession/conf2.jpeg',
      'img/confession/conf3.jpeg',
      'img/confession/conf4.jpeg',
      'img/confession/conf5.jpeg',
      'img/confession/conf6.jpeg'
    ],
    currentIndex: 0,
    autoRotate: true,
    autoRotateInterval: null
  },
  cute: {
    images: [
      'img/cute-photos/IMG_2846.JPG',
      'img/cute-photos/IMG_2848.JPG',
      'img/cute-photos/IMG_2957.JPG'
    ],
    currentIndex: 0,
    autoRotate: true,
    autoRotateInterval: null
  },
  mugs: {
    images: [
      'img/random-mugs/IMG_1728.JPG',
      'img/random-mugs/IMG_2853.JPG',
      'img/random-mugs/IMG_2962.JPG',
      'img/random-mugs/lp_image.jpg'
    ],
    currentIndex: 0,
    autoRotate: true,
    autoRotateInterval: null,
    locked: true
  }
};

const CORRECT_PIN = '29082025';

// Change slide function
function changeSlide(slideshowId, direction) {
  const slideshow = slideshows[slideshowId];
  if (!slideshow) return;

  slideshow.currentIndex += direction;
  
  // Wrap around
  if (slideshow.currentIndex >= slideshow.images.length) {
    slideshow.currentIndex = 0;
  } else if (slideshow.currentIndex < 0) {
    slideshow.currentIndex = slideshow.images.length - 1;
  }

  updateSlideshow(slideshowId);

  // Reset auto-rotation if manual navigation
  if (slideshow.autoRotate) {
    clearInterval(slideshow.autoRotateInterval);
    slideshow.autoRotateInterval = setInterval(() => {
      changeSlide(slideshowId, 1);
    }, 4000);
  }
}

// Go to specific slide
function goToSlide(slideshowId, index) {
  const slideshow = slideshows[slideshowId];
  if (!slideshow) return;

  if (index >= 0 && index < slideshow.images.length) {
    slideshow.currentIndex = index;
    updateSlideshow(slideshowId);

    // Reset auto-rotation if manual navigation
    if (slideshow.autoRotate) {
      clearInterval(slideshow.autoRotateInterval);
      slideshow.autoRotateInterval = setInterval(() => {
        changeSlide(slideshowId, 1);
      }, 4000);
    }
  }
}

// Update slideshow display
function updateSlideshow(slideshowId) {
  const slideshow = slideshows[slideshowId];
  if (!slideshow) return;

  const container = document.getElementById(slideshowId + '-slideshow');
  if (!container) return;

  // Update image
  const img = container.querySelector('.slideshow-image');
  if (img) {
    img.src = slideshow.images[slideshow.currentIndex];
  }

  // Update dots
  const dots = container.querySelectorAll('.dot');
  dots.forEach((dot, index) => {
    dot.classList.remove('active');
    if (index === slideshow.currentIndex) {
      dot.classList.add('active');
    }
  });

  // Update modal image if it's open
  const modal = document.getElementById('image-modal');
  if (modal && modal.classList.contains('active')) {
    const modalImg = document.getElementById('modal-image');
    if (modalImg) {
      modalImg.src = slideshow.images[slideshow.currentIndex];
    }
  }
}

// Initialize slideshows
function initSlideshows() {
  // Initialize confession slideshow with auto-rotation
  updateSlideshow('confession');
  slideshows.confession.autoRotateInterval = setInterval(() => {
    changeSlide('confession', 1);
  }, 4000);
  
  // Initialize cute photos slideshow with auto-rotation
  updateSlideshow('cute');
  slideshows.cute.autoRotateInterval = setInterval(() => {
    changeSlide('cute', 1);
  }, 4000);
  
  // Initialize mugs slideshow (will start after PIN unlock)
  updateSlideshow('mugs');
}

// PIN validation function
function validatePin() {
  const pinInput = document.getElementById('pin-input');
  const messageDiv = document.getElementById('pin-message');
  const pin = pinInput.value.trim();

  if (pin === CORRECT_PIN) {
    // Correct PIN
    slideshows.mugs.locked = false;
    
    // Hide PIN lock container
    const lockContainer = document.getElementById('pin-lock-container');
    if (lockContainer) {
      lockContainer.style.display = 'none';
    }

    // Show slideshow
    const mugsSlideshow = document.getElementById('mugs-slideshow');
    if (mugsSlideshow) {
      mugsSlideshow.style.display = 'block';
    }

    // Start auto-rotation for mugs
    if (slideshows.mugs.autoRotateInterval) {
      clearInterval(slideshows.mugs.autoRotateInterval);
    }
    slideshows.mugs.autoRotateInterval = setInterval(() => {
      changeSlide('mugs', 1);
    }, 4000);

    // Show success message
    messageDiv.textContent = '✓ Unlocked!';
    messageDiv.className = 'success';
    
    setTimeout(() => {
      messageDiv.textContent = '';
    }, 2000);

    // Clear input
    pinInput.value = '';
  } else {
    // Incorrect PIN
    messageDiv.textContent = '✗ Incorrect PIN. Try again!';
    messageDiv.className = 'error';
    pinInput.value = '';
    pinInput.focus();
  }
}

// Initialize slideshows on images page
document.addEventListener('DOMContentLoaded', () => {
  if (window.location.pathname.includes('images.html')) {
    initSlideshows();
  }
});

// Cleanup auto-rotation intervals when leaving the page
window.addEventListener('beforeunload', () => {
  if (slideshows.confession.autoRotateInterval) {
    clearInterval(slideshows.confession.autoRotateInterval);
  }
  if (slideshows.cute.autoRotateInterval) {
    clearInterval(slideshows.cute.autoRotateInterval);
  }
  if (slideshows.mugs.autoRotateInterval) {
    clearInterval(slideshows.mugs.autoRotateInterval);
  }
});

// ============================================
// IMAGE MODAL FUNCTIONALITY
// ============================================

function openImageModal(imageSrc) {
  const modal = document.getElementById('image-modal');
  const modalImg = document.getElementById('modal-image');
  
  if (modal && modalImg) {
    modalImg.src = imageSrc;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeImageModal() {
  const modal = document.getElementById('image-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

// Handle Escape key to close modal
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeImageModal();
  }
});

// Close modal when clicking outside the image
document.addEventListener('click', (e) => {
  const modal = document.getElementById('image-modal');
  if (modal && e.target === modal) {
    closeImageModal();
  }
});

