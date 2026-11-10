// =================================
// POWELL TUSIIME - PERSONAL BLOG
// JAVASCRIPT FUNCTIONALITY
// =================================

// THEME SWITCHING

const themeButton = document.getElementById("themeButton");

function updateThemeButton() {
  const isLight = document.body.classList.contains("light");

  themeButton.textContent = isLight
    ? "🌙 Dark Mode"
    : "☀️ Light Mode";
}

const savedTheme = localStorage.getItem("blogTheme");

if (savedTheme === "light") {
  document.body.classList.add("light");
} else if (savedTheme === "dark") {
  document.body.classList.remove("light");
} else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
  document.body.classList.add("light");
}

updateThemeButton();

themeButton.addEventListener("click", function () {

  document.body.classList.toggle("light");

  const currentTheme = document.body.classList.contains("light")
    ? "light"
    : "dark";

  localStorage.setItem("blogTheme", currentTheme);

  updateThemeButton();

});


// THREE BLOG SESSIONS

const sessions = {

  aboutMe: {
    title: "01. About Me",

    description: `
      My name is Powell Tusiime, and I am an individual who
      believes that life is a continuous journey of learning,
      growth and self-discovery.

      I value personal development, meaningful relationships
      and the opportunity to discover what I am truly capable
      of achieving. I consider myself a calm and thoughtful
      person who enjoys observing, learning and reflecting on
      different experiences.

      I believe that every individual has a unique story and
      that our backgrounds, decisions and experiences all
      contribute to shaping our identities.

      This section gives you a glimpse into my personality,
      the values I appreciate and the principles that guide
      the way I approach life.
    `
  },

  interests: {
    title: "02. My Interests",

    description: `
      I have always appreciated activities that allow me
      to explore my creativity, challenge myself and learn
      something new.

      Football is one of the interests that holds a special
      place in my life. Beyond entertainment, I appreciate
      the discipline, teamwork, determination and passion
      associated with the beautiful game.

      I am also interested in technology and the possibilities
      it creates. I enjoy discovering how digital platforms,
      software and modern innovations can solve problems
      and make everyday life better.

      I also enjoy exploring new ideas, connecting with
      people and learning skills that can contribute to
      my personal and professional development.

      My interests continue to evolve as I discover new
      opportunities and experiences.
    `
  },

  journey: {
    title: "03. My Journey",

    description: `
      Life is a journey filled with opportunities,
      uncertainties, challenges and valuable lessons.

      My personal journey is centred around discovering
      my potential, developing useful skills and becoming
      more intentional about the future I want to create.

      I understand that success does not happen overnight.
      It requires patience, consistency, discipline and
      the willingness to learn from mistakes.

      I have ambitions that I continue to work towards,
      and although the road ahead may not always be clear,
      I believe that every small step contributes to
      meaningful progress.

      My goal is to keep learning, embrace new experiences
      and build a future that reflects my values,
      aspirations and hard work.

      Above all, I want my journey to be a reminder that
      growth is personal and that everyone moves at their
      own pace.
    `
  }

};


// DISPLAY SESSION INFORMATION

const sessionDetails = document.getElementById("sessionDetails");

const detailTitle = document.getElementById("detailTitle");

const detailDescription =
  document.getElementById("detailDescription");

const closeDetails = document.getElementById("closeDetails");

document.querySelectorAll(".read-button").forEach(function (button) {

  button.addEventListener("click", function () {

    const sessionName = button.dataset.session;

    const selectedSession = sessions[sessionName];

    if (!selectedSession) return;

    detailTitle.textContent = selectedSession.title;

    detailDescription.textContent =
      selectedSession.description.trim();

    sessionDetails.hidden = false;

    sessionDetails.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });

  });

});


// CLOSE SESSION INFORMATION

closeDetails.addEventListener("click", function () {

  sessionDetails.hidden = true;

});


// MOBILE NAVIGATION

const menuButton = document.getElementById("menuButton");

const navigation = document.getElementById("navigation");

menuButton.addEventListener("click", function () {

  const isOpen = navigation.classList.toggle("active");

  menuButton.setAttribute("aria-expanded", isOpen);

  menuButton.textContent = isOpen ? "✕" : "☰";

});

// Close mobile menu after selecting a navigation link

navigation.querySelectorAll("a").forEach(function (link) {

  link.addEventListener("click", function () {

    navigation.classList.remove("active");

    menuButton.setAttribute("aria-expanded", "false");

    menuButton.textContent = "☰";

  });

});


// AUTOMATIC COPYRIGHT YEAR

document.getElementById("year").textContent =
  new Date().getFullYear();