/**
 * AETHER — AI Creative Advertising Studio
 * Interactive Motion & Media Controller
 */

// 1. Portfolio Media Manifest
const PORTFOLIO_VIDEOS = [
  {
    id: 'vid-01',
    title: 'Velvet Indulgence — Artisan Cocoa',
    category: 'Gourmet & Confectionery',
    src: 'portfolio/agency/videos/Transform_storyboard_into_video_20261027153937.mp4',
    poster: 'portfolio/agency/photos/A Little Chocolate, Brighter Day.png',
    label: 'VIDEO CAMPAIGN / CONCEPT AD',
    index: '01',
    description: 'Fluid macro fluidics and decadent pouring dynamics showcasing rich cocoa texture, glossy viscous movement, and sensory appetite appeal.'
  },
  {
    id: 'vid-02',
    title: 'Ethereal Luminescence',
    category: 'Beauty & High Fashion',
    src: 'portfolio/agency/videos/3f467cc01908c12bda49d6d10deb1a32_720w.mp4',
    poster: 'portfolio/agency/photos/Minimalist Vitamin C Serum Glow.png',
    label: 'VIDEO CAMPAIGN / CONCEPT STUDY',
    index: '02',
    description: 'Soft chiaroscuro lighting and intimate high-fashion portraiture exploring radiance, skin luminosity, and refined editorial elegance.'
  },
  {
    id: 'vid-03',
    title: 'Apex Extreme — Action Capture',
    category: 'Adventure & Hardware',
    src: 'portfolio/agency/videos/Transform_storyboard_into_video_20261027163849.mp4',
    poster: 'portfolio/agency/photos/Portronics Vader Pro Gaming Mouse Ad.png',
    label: 'VIDEO CAMPAIGN / CONCEPT AD',
    index: '03',
    description: 'High-velocity environmental camera tracking, cinematic lens flare, and rugged adrenaline-fueled action camera product campaign.'
  },
  {
    id: 'vid-04',
    title: 'Noir Haute Couture',
    category: 'Luxury Fashion & Persona',
    src: 'portfolio/agency/videos/659d16ff96ed4f3f1ecb4b6b57deb665_720w.mp4',
    poster: 'portfolio/agency/photos/More Than a Watch_ Premium SYLVI Timepiece.png',
    label: 'VIDEO CAMPAIGN / CONCEPT STUDY',
    index: '04',
    description: 'Monochrome mood study with deliberate cinematic pacing, stylized garment movement, and evocative editorial gaze.'
  }
];

const PORTFOLIO_IMAGES = [
  {
    id: 'img-01',
    title: 'Portronics Vader Pro — Wireless Gaming Mouse',
    category: 'Tech & Gaming',
    catSlug: 'tech',
    src: 'portfolio/agency/photos/Portronics Vader Pro Gaming Mouse Ad.png',
    desc: 'High-impact product visual with cybernetic ambient lighting and dynamic shadow projection.'
  },
  {
    id: 'img-02',
    title: 'Ocean & Canyon Perfume Duo',
    category: 'Luxury Fragrance',
    catSlug: 'luxury',
    src: 'portfolio/agency/photos/Ocean & Canyon Perfume Duo.png',
    desc: 'Dual elemental fragrance study exploring obsidian stone textures and oceanic mist.'
  },
  {
    id: 'img-03',
    title: 'Sylvi — "More Than a Watch"',
    category: 'Horology & Luxury',
    catSlug: 'luxury',
    src: 'portfolio/agency/photos/More Than a Watch_ Premium SYLVI Timepiece.png',
    desc: 'Editorial luxury timepiece campaign highlighting precision bezel engineering and metallic highlights.'
  },
  {
    id: 'img-04',
    title: 'Nestasia — Modern Lifestyle Tumbler',
    category: 'Lifestyle & Tableware',
    catSlug: 'lifestyle',
    src: 'portfolio/agency/photos/cb1b0da1-4324-4331-80cb-e5d68fd89d7f.png',
    desc: 'Earthen minimalism and serene Scandinavian home lifestyle composition.'
  },
  {
    id: 'img-05',
    title: 'Little Angel — Gentle Protection',
    category: 'Baby & Maternal Care',
    catSlug: 'lifestyle',
    src: 'portfolio/agency/photos/7d6c9a20-743a-4754-8169-e7a6a85dda30.png',
    desc: 'Tender maternal study focusing on cloud-soft textures and pure comforting ambiance.'
  },
  {
    id: 'img-06',
    title: 'Minimalist — Vitamin C Glow',
    category: 'Skincare & Clinical Beauty',
    catSlug: 'wellness',
    src: 'portfolio/agency/photos/Minimalist Vitamin C Serum Glow.png',
    desc: 'Clinical purity balanced with golden amber radiance for contemporary skincare enthusiasts.'
  },
  {
    id: 'img-07',
    title: 'Brass Loban Dani — Sacred Rituals',
    category: 'Artisanal Home & Wellness',
    catSlug: 'lifestyle',
    src: 'portfolio/agency/photos/Metal Loban Dani Ritual Ad.png',
    desc: 'Warm brass reflection and sacred resin incense ribbons conveying centuries of artisanal tradition.'
  },
  {
    id: 'img-08',
    title: 'Hoppup — "Game On" Earbuds',
    category: 'Audio & Wearables',
    catSlug: 'tech',
    src: 'portfolio/agency/photos/HOPPUP Gaming Earbuds_ Game On.png',
    desc: 'Electrifying neon rim lighting and floating earbud dynamics engineered for mobile esports.'
  },
  {
    id: 'img-09',
    title: 'OZiva — Clean Plant Protein',
    category: 'Nutrition & Botanicals',
    catSlug: 'wellness',
    src: 'portfolio/agency/photos/57377e2d-aa86-49c5-83f5-b2835405f07d.png',
    desc: 'Earthy botanical ingredients swirling in harmony with organic nutrition packaging.'
  },
  {
    id: 'img-10',
    title: 'Artisanal Chocolate — "A Little Chocolate, Brighter Day"',
    category: 'Gourmet Confectionery',
    catSlug: 'lifestyle',
    src: 'portfolio/agency/photos/A Little Chocolate, Brighter Day.png',
    desc: 'Decadent cocoa layers, warm caramel hues, and intimate sensory indulgence.'
  }
];

// 2. State Management
let currentImageIndex = 0;
let activeFilter = 'all';

// 3. Initialization
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  initCustomCursor();
  initHeroMouseTracking();
  initHeaderScroll();
  initScrollProgressBar();
  initGSAPAnimations();
  initVideoInteractions();
  initImageGalleryModal();
  initFilterButtons();
  initContactInteractions();
  initMobileMenu();
});

// 4. Custom Interactive Cursor & Spotlight
function initCustomCursor() {
  const cursorDot = document.querySelector('.cursor-dot');
  const cursorRing = document.querySelector('.cursor-ring');
  const spotlight = document.getElementById('cursor-spotlight');

  if (!cursorDot || !cursorRing) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    cursorDot.style.left = `${mouseX}px`;
    cursorDot.style.top = `${mouseY}px`;

    if (spotlight) {
      spotlight.style.left = `${mouseX}px`;
      spotlight.style.top = `${mouseY}px`;
    }
  });

  // Smooth lerp animation for outer ring
  function renderCursor() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;

    cursorRing.style.left = `${ringX}px`;
    cursorRing.style.top = `${ringY}px`;

    requestAnimationFrame(renderCursor);
  }
  requestAnimationFrame(renderCursor);

  // Expand ring on interactive elements
  const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, .video-card, .portfolio-item');
  interactiveElements.forEach((el) => {
    el.addEventListener('mouseenter', () => {
      document.body.classList.add('cursor-hover');
    });
    el.addEventListener('mouseleave', () => {
      document.body.classList.remove('cursor-hover');
    });
  });
}

// 5. Hero Mouse Tracking & Parallax HUD
function initHeroMouseTracking() {
  const heroSection = document.getElementById('hero');
  const coordDisplay = document.getElementById('hero-coord-display');
  const heroBgVideo = document.getElementById('hero-bg-video');
  const heroTitle = document.querySelector('.hero-title');

  if (!heroSection) return;

  heroSection.addEventListener('mousemove', (e) => {
    const rect = heroSection.getBoundingClientRect();
    const x = Math.round(e.clientX - rect.left);
    const y = Math.round(e.clientY - rect.top);

    // Update Coordinates HUD
    if (coordDisplay) {
      coordDisplay.textContent = `POS: X: ${String(x).padStart(3, '0')} | Y: ${String(y).padStart(3, '0')}`;
    }

    // Subtle 3D perspective tilt
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const deltaX = (x - centerX) / centerX;
    const deltaY = (y - centerY) / centerY;

    if (heroTitle) {
      heroTitle.style.transform = `perspective(1000px) rotateX(${-deltaY * 3}deg) rotateY(${deltaX * 3}deg)`;
      heroTitle.style.transition = 'transform 0.1s ease-out';
    }

    if (heroBgVideo) {
      heroBgVideo.style.transform = `scale(1.05) translate(${deltaX * -8}px, ${deltaY * -8}px)`;
    }
  });

  heroSection.addEventListener('mouseleave', () => {
    if (heroTitle) {
      heroTitle.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
      heroTitle.style.transition = 'transform 0.6s ease';
    }
    if (heroBgVideo) {
      heroBgVideo.style.transform = 'scale(1.05) translate(0px, 0px)';
      heroBgVideo.style.transition = 'transform 0.8s ease';
    }
  });
}

// 6. Header Scroll & Navbar Tint
function initHeaderScroll() {
  const header = document.getElementById('site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// 7. Scroll Progress Bar
function initScrollProgressBar() {
  const progressBar = document.getElementById('scroll-progress-bar');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight > 0) {
      const progress = (window.scrollY / totalHeight) * 100;
      progressBar.style.width = `${progress}%`;
    }
  });
}

// 8. GSAP Scroll Animations
function initGSAPAnimations() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  gsap.registerPlugin(ScrollTrigger);

  // Hero Text Reveal
  gsap.from('.hero-label-reveal', {
    y: 20,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    delay: 0.2
  });

  gsap.from('.hero-title .block', {
    y: 60,
    opacity: 0,
    duration: 1.2,
    stagger: 0.15,
    ease: 'power4.out',
    delay: 0.4
  });

  gsap.from('.hero-desc, .hero-actions', {
    y: 30,
    opacity: 0,
    duration: 1,
    stagger: 0.15,
    ease: 'power3.out',
    delay: 0.9
  });

  // ScrollTrigger reveals on sections
  const sections = document.querySelectorAll('section');
  sections.forEach((sec) => {
    const title = sec.querySelector('.section-title');
    if (title) {
      gsap.from(title, {
        scrollTrigger: {
          trigger: sec,
          start: 'top 80%',
          toggleActions: 'play none none none'
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });
    }

    const cards = sec.querySelectorAll('.video-card, .portfolio-item, .service-card, .process-step');
    if (cards.length > 0) {
      gsap.from(cards, {
        scrollTrigger: {
          trigger: sec,
          start: 'top 75%',
          toggleActions: 'play none none none'
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out'
      });
    }
  });
}

// 9. Video Interactions & Lightbox Player
function initVideoInteractions() {
  const videoCards = document.querySelectorAll('.video-card');
  const videoModal = document.getElementById('video-modal');
  const modalVideo = document.getElementById('modal-main-video');
  const modalTitle = document.getElementById('modal-video-title');
  const modalCategory = document.getElementById('modal-video-category');
  const modalDesc = document.getElementById('modal-video-desc');
  const closeModalBtn = document.getElementById('close-video-modal-btn');

  // Video Controls
  const playToggleBtn = document.getElementById('video-play-toggle-btn');
  const playIcon = document.getElementById('video-play-icon');
  const soundToggleBtn = document.getElementById('video-sound-toggle-btn');
  const volumeIcon = document.getElementById('video-volume-icon');
  const scrubber = document.getElementById('video-scrubber');
  const timeDisplay = document.getElementById('video-time-display');
  const fullscreenBtn = document.getElementById('video-fullscreen-btn');

  // Hover Preview for Cards
  videoCards.forEach((card) => {
    const previewVideo = card.querySelector('.portfolio-preview-video');
    const index = parseInt(card.getAttribute('data-video-index'), 10);

    card.addEventListener('mouseenter', () => {
      if (previewVideo) {
        previewVideo.muted = true;
        const playPromise = previewVideo.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {});
        }
      }
    });

    card.addEventListener('mouseleave', () => {
      if (previewVideo) {
        previewVideo.pause();
        previewVideo.currentTime = 0;
      }
    });

    // Click to Open Cinematic Lightbox
    card.addEventListener('click', () => {
      openVideoModal(index);
    });
  });

  // IntersectionObserver to pause offscreen card videos
  if ('IntersectionObserver' in window) {
    const videoObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const vid = entry.target.querySelector('video');
        if (vid && !entry.isIntersecting) {
          vid.pause();
        }
      });
    }, { threshold: 0.2 });

    videoCards.forEach(c => videoObserver.observe(c));
  }

  function openVideoModal(index) {
    const data = PORTFOLIO_VIDEOS[index];
    if (!data || !videoModal || !modalVideo) return;

    modalTitle.textContent = data.title;
    modalCategory.textContent = `${data.index} // ${data.category}`;
    modalDesc.textContent = data.description;

    modalVideo.src = data.src;
    modalVideo.currentTime = 0;
    modalVideo.muted = false;

    videoModal.classList.remove('opacity-0', 'pointer-events-none');
    document.body.style.overflow = 'hidden';

    const playPromise = modalVideo.play();
    if (playPromise !== undefined) {
      playPromise.then(() => updatePlayIcon(true)).catch(() => {
        modalVideo.muted = true;
        modalVideo.play();
        updatePlayIcon(true);
        updateVolumeIcon(true);
      });
    }
  }

  function closeVideoModal() {
    if (!videoModal || !modalVideo) return;
    modalVideo.pause();
    modalVideo.src = '';
    videoModal.classList.add('opacity-0', 'pointer-events-none');
    document.body.style.overflow = '';
  }

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeVideoModal);
  }

  videoModal.addEventListener('click', (e) => {
    if (e.target === videoModal) {
      closeVideoModal();
    }
  });

  // Video Player Controls Logic
  if (modalVideo) {
    modalVideo.addEventListener('timeupdate', () => {
      if (!isNaN(modalVideo.duration) && modalVideo.duration > 0) {
        const progress = (modalVideo.currentTime / modalVideo.duration) * 100;
        scrubber.value = progress;

        const curMins = Math.floor(modalVideo.currentTime / 60);
        const curSecs = Math.floor(modalVideo.currentTime % 60);
        const durMins = Math.floor(modalVideo.duration / 60);
        const durSecs = Math.floor(modalVideo.duration % 60);

        timeDisplay.textContent = `${String(curMins).padStart(2, '0')}:${String(curSecs).padStart(2, '0')} / ${String(durMins).padStart(2, '0')}:${String(durSecs).padStart(2, '0')}`;
      }
    });

    modalVideo.addEventListener('ended', () => {
      updatePlayIcon(false);
    });

    if (scrubber) {
      scrubber.addEventListener('input', () => {
        if (!isNaN(modalVideo.duration)) {
          modalVideo.currentTime = (scrubber.value / 100) * modalVideo.duration;
        }
      });
    }

    if (playToggleBtn) {
      playToggleBtn.addEventListener('click', () => {
        if (modalVideo.paused) {
          modalVideo.play();
          updatePlayIcon(true);
        } else {
          modalVideo.pause();
          updatePlayIcon(false);
        }
      });
    }

    if (soundToggleBtn) {
      soundToggleBtn.addEventListener('click', () => {
        modalVideo.muted = !modalVideo.muted;
        updateVolumeIcon(modalVideo.muted);
      });
    }

    if (fullscreenBtn) {
      fullscreenBtn.addEventListener('click', () => {
        if (!document.fullscreenElement) {
          modalVideo.requestFullscreen().catch(() => {});
        } else {
          document.exitFullscreen().catch(() => {});
        }
      });
    }
  }

  function updatePlayIcon(isPlaying) {
    if (!playIcon) return;
    if (isPlaying) {
      playIcon.setAttribute('data-lucide', 'pause');
    } else {
      playIcon.setAttribute('data-lucide', 'play');
    }
    if (window.lucide) window.lucide.createIcons();
  }

  function updateVolumeIcon(isMuted) {
    if (!volumeIcon) return;
    if (isMuted) {
      volumeIcon.setAttribute('data-lucide', 'volume-x');
    } else {
      volumeIcon.setAttribute('data-lucide', 'volume-2');
    }
    if (window.lucide) window.lucide.createIcons();
  }

  // Keyboard Shortcuts (Esc to close)
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeVideoModal();
      closeImageModal();
    }
    if (e.key === ' ' && !videoModal.classList.contains('pointer-events-none')) {
      e.preventDefault();
      if (modalVideo.paused) modalVideo.play(); else modalVideo.pause();
    }
  });
}

// 10. Fullscreen Image Lightbox Modal
function initImageGalleryModal() {
  const items = document.querySelectorAll('.portfolio-item');
  const modal = document.getElementById('image-modal');
  const mainImg = document.getElementById('lightbox-main-img');
  const titleEl = document.getElementById('lightbox-title');
  const counterEl = document.getElementById('lightbox-counter');
  const metaEl = document.getElementById('lightbox-meta');
  const closeBtn = document.getElementById('close-image-modal-btn');
  const prevBtn = document.getElementById('lightbox-prev-btn');
  const nextBtn = document.getElementById('lightbox-next-btn');

  items.forEach((item) => {
    item.addEventListener('click', () => {
      const idx = parseInt(item.getAttribute('data-image-index'), 10);
      openImageModal(idx);
    });
  });

  function openImageModal(index) {
    currentImageIndex = index;
    updateModalContent();
    modal.classList.remove('opacity-0', 'pointer-events-none');
    document.body.style.overflow = 'hidden';
  }

  function updateModalContent() {
    const data = PORTFOLIO_IMAGES[currentImageIndex];
    if (!data) return;

    mainImg.src = data.src;
    mainImg.alt = data.title;
    titleEl.textContent = data.title;
    counterEl.textContent = `${String(currentImageIndex + 1).padStart(2, '0')} / ${String(PORTFOLIO_IMAGES.length).padStart(2, '0')}`;
    metaEl.textContent = `${data.category} • ${data.desc}`;
  }

  window.closeImageModal = function() {
    if (!modal) return;
    modal.classList.add('opacity-0', 'pointer-events-none');
    document.body.style.overflow = '';
  };

  if (closeBtn) closeBtn.addEventListener('click', window.closeImageModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.classList.contains('backdrop-blur-2xl')) {
      window.closeImageModal();
    }
  });

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      currentImageIndex = (currentImageIndex - 1 + PORTFOLIO_IMAGES.length) % PORTFOLIO_IMAGES.length;
      updateModalContent();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      currentImageIndex = (currentImageIndex + 1) % PORTFOLIO_IMAGES.length;
      updateModalContent();
    });
  }

  // Keyboard navigation for image lightbox
  window.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('pointer-events-none')) {
      if (e.key === 'ArrowLeft') {
        currentImageIndex = (currentImageIndex - 1 + PORTFOLIO_IMAGES.length) % PORTFOLIO_IMAGES.length;
        updateModalContent();
      } else if (e.key === 'ArrowRight') {
        currentImageIndex = (currentImageIndex + 1) % PORTFOLIO_IMAGES.length;
        updateModalContent();
      }
    }
  });

  // Mobile Swipe support
  let touchStartX = 0;
  let touchEndX = 0;
  modal.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  modal.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchStartX - touchEndX > 50) {
      // swipe left -> next
      currentImageIndex = (currentImageIndex + 1) % PORTFOLIO_IMAGES.length;
      updateModalContent();
    } else if (touchEndX - touchStartX > 50) {
      // swipe right -> prev
      currentImageIndex = (currentImageIndex - 1 + PORTFOLIO_IMAGES.length) % PORTFOLIO_IMAGES.length;
      updateModalContent();
    }
  }, { passive: true });
}

// 11. Category Filter Logic
function initFilterButtons() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const items = document.querySelectorAll('.portfolio-item');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      activeFilter = filter;

      items.forEach((item) => {
        const itemCat = item.getAttribute('data-category');
        if (filter === 'all' || itemCat === filter) {
          item.style.display = '';
          item.style.opacity = '1';
          item.style.transform = 'translateY(0)';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

// 12. Contact Form & Action Handlers
function initContactInteractions() {
  const form = document.getElementById('project-inquiry-form');
  const whatsappBtn = document.getElementById('send-whatsapp-btn');

  if (whatsappBtn) {
    whatsappBtn.addEventListener('click', () => {
      const name = document.getElementById('client-name').value.trim() || 'A Brand Partner';
      const contact = document.getElementById('client-contact').value.trim() || 'Not specified';
      const pkg = document.getElementById('project-package').value;
      const brief = document.getElementById('client-brief').value.trim() || 'Interested in starting a campaign.';

      const text = `*New Campaign Inquiry — AETHER AI Studio*\n\n*Name/Brand:* ${name}\n*Contact:* ${contact}\n*Package:* ${pkg}\n*Brief:* ${brief}\n\nLet's connect!`;
      const waUrl = `https://wa.me/919876543210?text=${encodeURIComponent(text)}`;
      window.open(waUrl, '_blank');
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('client-name').value.trim();
      const contact = document.getElementById('client-contact').value.trim();
      const pkg = document.getElementById('project-package').value;
      const brief = document.getElementById('client-brief').value.trim();

      const subject = `Campaign Inquiry from ${name} [${pkg}]`;
      const body = `Hi AETHER Studio,\n\nName / Brand: ${name}\nContact: ${contact}\nPackage Selected: ${pkg}\n\nProject Brief:\n${brief}\n\nLooking forward to hearing from you.`;
      
      const mailtoUrl = `mailto:hello@aethercreative.studio?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoUrl;

      showToast('Opening your email client...');
    });
  }
}

// 13. Copy to Clipboard Toast
window.copyContact = function(text, successMsg) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(successMsg);
  }).catch(() => {
    showToast(`Contact: ${text}`);
  });
};

function showToast(msg) {
  const toast = document.getElementById('toast-pill');
  const toastMsg = document.getElementById('toast-message');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = msg;
  toast.classList.remove('translate-y-20', 'opacity-0');
  toast.classList.add('translate-y-0', 'opacity-100');

  setTimeout(() => {
    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('translate-y-20', 'opacity-0');
  }, 3000);
}

// 14. Mobile Drawer Menu
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const drawer = document.getElementById('mobile-drawer');
  const links = document.querySelectorAll('.mobile-nav-item');

  if (!menuBtn || !drawer) return;

  let isOpen = false;

  function toggleMenu() {
    isOpen = !isOpen;
    if (isOpen) {
      drawer.classList.remove('opacity-0', 'pointer-events-none');
      drawer.classList.add('opacity-100', 'pointer-events-auto');
      document.body.style.overflow = 'hidden';
    } else {
      drawer.classList.add('opacity-0', 'pointer-events-none');
      drawer.classList.remove('opacity-100', 'pointer-events-auto');
      document.body.style.overflow = '';
    }
  }

  menuBtn.addEventListener('click', toggleMenu);

  links.forEach(link => {
    link.addEventListener('click', () => {
      if (isOpen) toggleMenu();
    });
  });
}
