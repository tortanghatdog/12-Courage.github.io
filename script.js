function scrollTo(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  document
    .querySelectorAll(".nav-tab")
    .forEach((t) => t.classList.remove("active"));
  const map = { photos: 0, videos: 1, people: 2, memories: 3 };
  document.querySelectorAll(".nav-tab")[map[id]].classList.add("active");
}


    function openLightbox(src, caption) {
      const lb      = document.getElementById("lightbox");
      const imgEl   = document.getElementById("lb-img");
      const vidWrap = document.getElementById("lb-video-wrapper");
      const vidEl   = document.getElementById("lb-video");
      const capEl   = document.getElementById("lb-caption");

      // Stop any playing video
      vidEl.pause();
      vidEl.src = "";
      vidWrap.style.display = "none";
      imgEl.style.display   = "";

      // Show image / emoji
      if (src.startsWith("assets/") || src.startsWith("http")) {
        imgEl.innerHTML = `<img src="${src}" alt="${caption}" style="max-width:100%;max-height:70vh;border-radius:8px;display:block;margin:0 auto;">`;
      } else {
        imgEl.textContent = src; // emoji fallback
      }

      capEl.textContent = caption;
      lb.classList.add("open");
      lb.setAttribute("aria-hidden", "false");
    }

    /* ── Video Lightbox ── */
    function openVideoLightbox(src, caption) {
      const lb      = document.getElementById("lightbox");
      const imgEl   = document.getElementById("lb-img");
      const vidWrap = document.getElementById("lb-video-wrapper");
      const vidEl   = document.getElementById("lb-video");
      const capEl   = document.getElementById("lb-caption");

      imgEl.innerHTML     = "";
      imgEl.style.display = "none";

      vidEl.src             = src;
      vidWrap.style.display = "block";

      capEl.textContent = caption;
      lb.classList.add("open");
      lb.setAttribute("aria-hidden", "false");

      // Autoplay after a short delay to let the lightbox animate in
      setTimeout(() => { vidEl.play().catch(() => {}); }, 150);
    }

    /* ── Close helpers ── */
    function closeLightboxDirect() {
      const lb    = document.getElementById("lightbox");
      const vidEl = document.getElementById("lb-video");
      vidEl.pause();
      vidEl.src = "";
      lb.classList.remove("open");
      lb.setAttribute("aria-hidden", "true");
    }

    function closeLightbox(e) {
      if (e.target === document.getElementById("lightbox")) {
        closeLightboxDirect();
      }
    }

    // Close on Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeLightboxDirect();
    });


// Intersection observer for fade-in
const obs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add("visible"), i * 40);
      }
    });
  },
  { threshold: 0.1 },
);

document.querySelectorAll(".fade-in").forEach((el) => obs.observe(el));

// Update active nav on scroll
const sections = ["photos", "videos", "people", "memories"];
const tabs = document.querySelectorAll(".nav-tab");
window.addEventListener(
  "scroll",
  () => {
    let current = 0;
    sections.forEach((id, i) => {
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - 100) current = i;
    });
    tabs.forEach((t) => t.classList.remove("active"));
    tabs[current].classList.add("active");
  },
  { passive: true },
);