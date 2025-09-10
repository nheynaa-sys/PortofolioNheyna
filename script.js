 const skills = [
      { icon: "ri-html5-line", title: "HTML", desc: "Mampu membuat struktur website yang rapi dan sesuai standar." },
      { icon: "ri-css3-line", title: "CSS", desc: "Menata tampilan website dengan desain modern & responsif." },
      { icon: "ri-paint-brush-line", title: "UI/UX Design", desc: "Membuat desain aplikasi menarik menggunakan Figma." },
      { icon: "ri-chat-1-line", title: "Communication", desc: "Mampu menyampaikan ide dengan jelas dan efektif dalam tim.", type: "soft" },
      { icon: "ri-group-line", title: "Teamwork", desc: "Bekerja sama dengan baik bersama anggota tim untuk mencapai tujuan.", type: "soft" },
      { icon: "ri-lightbulb-line", title: "Problem Solving", desc: "Mampu menemukan solusi kreatif untuk mengatasi masalah yang muncul.", type: "soft" }
    ];

    const skillsGrid = document.getElementById("skills-grid");

    skills.forEach(skill => {
      const card = document.createElement("div");
      card.classList.add("skill-card");
      if(skill.type === "soft") card.classList.add("soft-skill");

      card.innerHTML = `
        <i class="${skill.icon}"></i>
        <h3>${skill.title}</h3>
        <p>${skill.desc}</p>
      `;

      skillsGrid.appendChild(card);
    });

(function () {
  emailjs.init("k4lJry-_YwyR2d2A4");
})();

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const commentsList = document.getElementById("comments-list");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      emailjs.sendForm("service_36zt14b", "template_gykb8ti", this).then(
        () => {
          const name = form.querySelector("[name='user_name']").value;
          const message = form.querySelector("[name='message']").value;

          if (commentsList) {
            const li = document.createElement("li");
            li.innerHTML = `<strong>${name}</strong>: ${message}`;
            commentsList.appendChild(li);
          }

          alert("✅ Pesan berhasil dikirim!");
          form.reset();
        },
        (error) => {
          alert("❌ Gagal mengirim pesan: " + JSON.stringify(error));
        }
      );
    });
  }
});