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
// ── STUDENT PROFILE DATA ──
const studentProfiles = {
  // ICT Strand
  "Azur, John Faust Walter B.": {
    photo: "students_profile/Azur, John Faust Walter.jpg",
    strand: "Information & Communications Technology",
    num: "#01"
  },
  "Azurias, Glenn Carl Autor": {
    photo: null,
    strand: "Information & Communications Technology",
    num: "#02"
  },
  "Base, Jairus R.": {
    photo: "students_profile/Base, Jairus.jpg",
    strand: "Information & Communications Technology",
    num: "#03"
  },
  "Martinez, Wency B.": {
    photo: "students_profile/Martinez, Wency.jpg",
    strand: "Information & Communications Technology",
    num: "#04"
  },
  "Monterde, Mario Joseph": {
    photo: "students_profile/Monterde, Mario Joseph.jpg",
    strand: "Information & Communications Technology",
    num: "#05"
  },
  "Presco, Mark Anthony C.": {
    photo: "students_profile/Presco, Mark Anthony.jpg",
    strand: "Information & Communications Technology",
    num: "#06"
  },
  "Remolano, Warlito Jr. B.": {
    photo: "students_profile/Remolano, Warlito.jpg",
    strand: "Information & Communications Technology",
    num: "#07"
  },
  "Sultan, Ignacio III A.": {
    photo: "students_profile/Sultan, Ignacio III.jpg",
    strand: "Information & Communications Technology",
    num: "#08"
  },
  "Abainza, Shiela Mae B.": {
    photo: "students_profile/Abainza, Shiela Mae.jpg",
    strand: "Information & Communications Technology",
    num: "#09"
  },
  "Bongcolmo, Maria Princess A.": {
    photo: "students_profile/Bongcolmo, Princess.jpg",
    strand: "Information & Communications Technology",
    num: "#10"
  },
  "Clacio, Shane Kristine B.": {
    photo: "students_profile/Clacio, Shane.jpg",
    strand: "Information & Communications Technology",
    num: "#11"
  },
  "Napay, Angelica P.": {
    photo: "students_profile/Napay, Angelica.jpg",
    strand: "Information & Communications Technology",
    num: "#12"
  },
  "Oliva, Ruby Jean C.": {
    photo: "students_profile/Oliva, Ruby Jean.jpg",
    strand: "Information & Communications Technology",
    num: "#13"
  },
  "Perez, Cherry Lyn B.": {
    photo: "students_profile/Perez, Cherry lyn.jpg",
    strand: "Information & Communications Technology",
    num: "#14"
  },
  "San Esteban, Rica P.": {
    photo: "students_profile/San Esteban, Rica.jpg",
    strand: "Information & Communications Technology",
    num: "#15"
  },
  // Cookery Strand
  "Adaque, King Felomino": {
    photo: "students_profile/Adaque, King Felomino.jpg",
    strand: "Cookery",
    num: "#01"
  },
  "Arinal, Justine A.": {
    photo: "students_profile/Arinal, Justine.jpg",
    strand: "Cookery",
    num: "#02"
  },
  "Aureus, Joshua E.": {
    photo: "students_profile/Aureus, Joshua.jpg",
    strand: "Cookery",
    num: "#03"
  },
  "Caudilla, Phrinz Lawrence B.": {
    photo: "students_profile/Caudilla, Prhinz Lawrence.jpg",
    strand: "Cookery",
    num: "#04"
  },
  "Colinares, Jeffrey": {
    photo: "students_profile/Colinares, Jeffrey.jpg",
    strand: "Cookery",
    num: "#05"
  },
  "Cortes, Marvi Jr. C.": {
    photo: "students_profile/Cortes, Marvi Jr..jpg",
    strand: "Cookery",
    num: "#06"
  },
  "Fajardo, Jhon Laurence R.": {
    photo: "students_profile/Fajardo, Jhon Laurence.jpg",
    strand: "Cookery",
    num: "#07"
  },
  "Moral, James Sheldon C.": {
    photo: "students_profile/Moral, James Sheldon.jpg",
    strand: "Cookery",
    num: "#08"
  },
  "Moscoso, Jairo C.": {
    photo: "students_profile/Moscoso, Jairo.jpg",
    strand: "Cookery",
    num: "#09"
  },
  "Rili, Gian Roi C.": {
    photo: "students_profile/Rili, Gian Roi.jpg",
    strand: "Cookery",
    num: "#10"
  },
  "Rocha, Russel Y.": {
    photo: "students_profile/Rocha, Russel.jpg",
    strand: "Cookery",
    num: "#11"
  },
  "Abay, Trisha Joy D.": {
    photo: "students_profile/Abay, Trisha Joy.jpg",
    strand: "Cookery",
    num: "#12"
  },
  "Base, Daphney L.": {
    photo: "students_profile/Base, Daphney.jpg",
    strand: "Cookery",
    num: "#13"
  },
  "Bigay, May Ann P.": {
    photo: "students_profile/Bigay, May Ann.jpg",
    strand: "Cookery",
    num: "#14"
  },
  "Carillo, Bea Joy R.": {
    photo: "students_profile/Carillo, Bea Carillo.jpg",
    strand: "Cookery",
    num: "#15"
  },
  "Falo, Jenneth E.": {
    photo: "students_profile/Falo, Jenneth.jpg",
    strand: "Cookery",
    num: "#16"
  },
  "Flores, Lea Lee T.": {
    photo: "students_profile/Flores, Lea lee.jpg",
    strand: "Cookery",
    num: "#17"
  },
  "Frijinal, Lyca C.": {
    photo: "students_profile/Friginal, Lyca.jpg",
    strand: "Cookery",
    num: "#18"
  },
  "Lasic, Neah Anthonette C.": {
    photo: "students_profile/Lasic, Anthonette.jpg",
    strand: "Cookery",
    num: "#19"
  },
  "Latinazo, Rhemia Faith F.": {
    photo: "students_profile/Latinaso, Faith.jpg",
    strand: "Cookery",
    num: "#20"
  },
  "Nocus, Maryjane C.": {
    photo: "null",
    strand: "Cookery",
    num: "#21"
  },
  "Perez, Edilen L.": {
    photo: "students_profile/Perez, Edilen.jpg",
    strand: "Cookery",
    num: "#22"
  },
  "Puso, Kimberly C.": {
    photo: "students_profile/Puso, Kimberly.jpg",
    strand: "Cookery",
    num: "#23"
  },
  "Roldan, Angeline C.": {
    photo: "students_profile/Roldan, Angeline.jpg",
    strand: "Cookery",
    num: "#24"
  },
  "Ruz, Janine SB.": {
    photo: "students_profile/Ruz, Janine.jpg",
    strand: "Cookery",
    num: "#25"
  },
  "Singsing, Nicole R.": {
    photo: "students_profile/Singsing, Nicole.jpg",
    strand: "Cookery",
    num: "#26"
  },
  "Sarcia, Kyla R.": {
    photo: "students_profile/Sarcia, Kyla.jpg",
    strand: "Cookery",
    num: "#27"
  },
  "Villafranca, Zilia M.": {
    photo: null,
    strand: "Cookery",
    num: "#28"
  },
  "Villanueva, Iris R.": {
    photo: "students_profile/Villanueva, Iris.jpg",
    strand: "Cookery",
    num: "#29"
  }
};

// ── OPEN PROFILE MODAL ──
function openProfileModal(name) {
  const data = studentProfiles[name];
  if (!data) return;

  const modal = document.getElementById("profileModal");
  const photoSquare = document.getElementById("pm-photo-square");
  const nameEl = document.getElementById("pm-name-label");
  const strandEl = document.getElementById("pm-strand");
  const numEl = document.getElementById("pm-num");

  // Set name & strand
  nameEl.textContent = name;
  strandEl.textContent = data.strand;
  numEl.textContent = "Student " + data.num;

  // Build photo or initials avatar
  photoSquare.innerHTML = "";
  if (data.photo) {
    const circleDiv = document.createElement("div");
    circleDiv.className = "pm-avatar-circle";
    const img = document.createElement("img");
    img.src = data.photo;
    img.alt = name;
    img.onerror = () => {
      // fallback to initials if image fails
      photoSquare.innerHTML = "";
      photoSquare.appendChild(makeInitialsAvatar(name));
    };
    circleDiv.appendChild(img);
    photoSquare.appendChild(circleDiv);
  } else {
    photoSquare.appendChild(makeInitialsAvatar(name));
  }

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function makeInitialsAvatar(name) {
  const parts = name.split(",");
  const lastName = parts[0].trim();
  const firstName = parts[1] ? parts[1].trim() : "";
  const initials = (firstName[0] || "") + (lastName[0] || "");
  const colors = ["#7ba7bc", "#e8a0b4", "#8fbc8f", "#d4a96a", "#c0392b"];
  const colorIdx = name.charCodeAt(0) % colors.length;
  const div = document.createElement("div");
  div.className = "pm-initials-avatar";
  div.style.background = colors[colorIdx];
  div.textContent = initials.toUpperCase();
  return div;
}

function closeProfileModalDirect() {
  const modal = document.getElementById("profileModal");
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function closeProfileModal(e) {
  if (e.target === document.getElementById("profileModal")) {
    closeProfileModalDirect();
  }
}

// Close profile modal on Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeProfileModalDirect();
});

// Wire up student cards to open the profile modal
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".student-card").forEach((card) => {
    const nameEl = card.querySelector(".student-name");
    if (nameEl) {
      card.addEventListener("click", () => {
        openProfileModal(nameEl.textContent.trim());
      });
    }
  });
});
