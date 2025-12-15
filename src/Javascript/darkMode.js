function switchMode(mode) {
  const lightMode = document.getElementById('lightMode');
    const darkMode = document.getElementById('darkMode');
  let themeStyle = document.getElementById('theme-style');
  if (!themeStyle) {
    themeStyle = document.createElement('style');
    themeStyle.id = 'theme-style';
    document.head.appendChild(themeStyle);
  }
  if (mode) {
    localStorage.setItem("currentMode", mode);
    

    lightMode.style.transition = "transform 1.5s ease, opacity 0.75s ease";
    lightMode.style.transform = "rotate(360deg)";
    lightMode.style.opacity = "0";
    lightMode.style.zIndex = "10";

    darkMode.style.transition = "transform 1.5s ease, opacity 0.75s ease";
    darkMode.style.transform = "rotate(-360deg)";
    darkMode.style.opacity = "1";
    darkMode.style.zIndex = "11";

    themeStyle.textContent = `
      :root {
        --wave-bg-dark: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
        --wave-color-1: #4a5d4a;
        --wave-color-2: #5a6c5a;
        --wave-color-3: #6a7c6a;
        --wave-color-4: #7a8c7a;
        --text-color-dark: #e0e0e0;
        --card-bg-dark: rgba(45, 45, 45, 0.8);
        --hero-title-dark: #ffffff;
        --hero-subtitle-dark: #b0b0b0;
      }
      md-filter-chip { background-color: rgba(150, 150, 150, 0.5); --md-sys-color-outline:lightgrey;}
      .header {color: white;}
      .sidebar{color: white}
      .menuPic {filter: invert(100%)}
      .mode {filter: invert(100%)}
      .wave-background {
        background: var(--wave-bg-dark) !important;
        transition: background 1.5s ease;
      }
      .wave-shape {
        background: linear-gradient(45deg,
          var(--wave-color-1) 0%,
          var(--wave-color-2) 25%,
          var(--wave-color-3) 50%,
          var(--wave-color-4) 75%,
          var(--wave-color-1) 100%) !important;
        transition: background 1.5s ease;
      }
      .hero-title {
        color: var(--hero-title-dark) !important;
        transition: color 1.5s ease;
      }
      .hero-subtitle {
        color: var(--hero-subtitle-dark) !important;
        transition: color 1.5s ease;
      }
      .feature-card {
        background: var(--card-bg-dark) !important;
        color: var(--text-color-dark) !important;
        transition: color 1.5s ease, background 1.5s ease;
      }
      .card-title {
        color: var(--hero-title-dark) !important;
        transition: color 1.5s ease;
      }
      .card-text {
        color: var(--text-color-dark) !important;
        transition: color 1.5s ease;
      }
      .tech-pill {
        background: rgba(100, 100, 100, 0.8) !important;
        color: var(--text-color-dark) !important;
        transition: color 1.5s ease, background 1.5s ease;
      }
      .privacy-disclaimer a {
        color: var(--text-color-dark) !important;
        transition: color 1.5s ease;
      }
      .go-button {
        background: linear-gradient(135deg, #5a5a5a, #7a7a7a) !important;
        box-shadow: 0 8px 30px rgba(122, 122, 122, 0.4), 0 0 40px rgba(122, 122, 122, 0.3), 0 0 60px rgba(0, 0, 0, 0.2) !important;
        transition: background 1.5s ease, box-shadow 1.5s ease;
      }
      .go-button:hover {
        box-shadow: 0 12px 40px rgba(122, 122, 122, 0.6), 0 0 60px rgba(122, 122, 122, 0.5), 0 0 80px rgba(122, 122, 122, 0.4) !important;
      }
      .privacy-disclaimer {
        background: var(--dark-mode-bg);
        transition: background 1.5s ease;
      }
    `;
    document.getElementById('body').style.backgroundColor = "var(--dark-bg)";
    document.getElementById('sidebar').style.backgroundColor = "var(--dark-mode-bg)";
    document.getElementById('header').style.backgroundColor = "var(--dark-mode-bg)";
    document.getElementById('githubIcon').style.filter = "brightness(100%)";
  } else {
    localStorage.setItem("currentMode", mode);
    darkMode.style.transition = "transform 1.5s ease, opacity 0.75s ease";
    darkMode.style.transform = "rotate(360deg)";
    darkMode.style.opacity = "0";
    darkMode.style.zIndex = "10";

    lightMode.style.transition = "transform 1.5s ease, opacity 0.75s ease";
    lightMode.style.transform = "rotate(-360deg)";
    lightMode.style.opacity = "1";
    lightMode.style.zIndex = "11";

    themeStyle.textContent = `
      :root {
        --wave-bg-light: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        --wave-color-1: #B5C9A8;
        --wave-color-2: #90A4AE;
        --wave-color-3: #E6CCB2;
        --wave-color-4: #E0C097;
        --text-color-light: #5f6368;
        --card-bg-light: white;
        --hero-title-light: #202124;
        --hero-subtitle-light: #5f6368;
      }
      md-filter-chip { background-color: white; }
      .header {color: var(--hero-title-light);}
      .sidebar{color: var(--hero-title-light);}
      .wave-background {
        background: var(--wave-bg-light) !important;
        transition: background 1.5s ease;
      }
      .wave-shape {
        background: linear-gradient(45deg,
          var(--wave-color-1) 0%,
          var(--wave-color-2) 16.67%,
          var(--wave-color-3) 33.33%,
          var(--wave-color-4) 50%,
          #D7CCC8 66.67%,
          #E6EE9C 83.33%,
          var(--wave-color-1) 100%) !important;
        transition: background 1.5s ease;
      }
      .hero-title {
        color: var(--hero-title-light) !important;
        transition: color 1.5s ease;
      }
      .hero-subtitle {
        color: var(--hero-subtitle-light) !important;
        transition: color 1.5s ease;
      }
      .feature-card {
        background: var(--card-bg-light) !important;
        color: var(--text-color-light) !important;
        transition: color 1.5s ease, background 1.5s ease;
      }
      .card-title {
        color: var(--hero-title-light) !important;
        transition: color 1.5s ease;
      }
      .card-text {
        color: var(--text-color-light) !important;
        transition: color 1.5s ease;
      }
      .tech-pill {
        background: #e8f0fe !important;
        color: var(--primary-blue) !important;
        transition: color 1.5s ease, background 1.5s ease;
      }
      .privacy-disclaimer a {
        color: var(--text-color-light) !important;
        transition: color 1.5s ease;
      }
      .go-button {
        background: var(--primary-blue) !important;
        box-shadow: 0 8px 30px rgba(66, 133, 244, 0.4), 0 0 40px rgba(52, 168, 83, 0.3), 0 0 60px rgba(251, 188, 4, 0.2) !important;
        transition: background 1.5s ease, box-shadow 1.5s ease;
      }
      .go-button:hover {
        box-shadow: 0 12px 40px rgba(66, 133, 244, 0.6), 0 0 60px rgba(52, 168, 83, 0.5), 0 0 80px rgba(251, 188, 4, 0.4) !important;
      }
      .privacy-disclaimer {
        background: var(--light-mode-bg);
        transition: background 1.5s ease;
      }
    `;
    document.getElementById('body').style.backgroundColor = "var(--light-bg)";
    document.getElementById('sidebar').style.backgroundColor = "var(--light-mode-bg)";
    document.getElementById('header').style.backgroundColor = "var(--light-mode-bg)";
    document.getElementById('githubIcon').style.filter = "brightness(0%)";
  }
}

document.addEventListener("DOMContentLoaded", function() {
  if(localStorage.getItem("currentMode") == 1) {
    switchMode(Number(localStorage.getItem("currentMode")) * 1);
  }
});