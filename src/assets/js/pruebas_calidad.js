function showSection(sectionId, btnElement) {
      const sections = document.querySelectorAll('.section-content');
      sections.forEach(sec => sec.classList.remove('active'));

      const buttons = document.querySelectorAll('.nav-btn');
      buttons.forEach(btn => btn.classList.remove('active'));

      document.getElementById(sectionId).classList.add('active');
      btnElement.classList.add('active');
    }