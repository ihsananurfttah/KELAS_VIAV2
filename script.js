function scrollToSection() {
  document.getElementById("tentang").scrollIntoView({
    behavior: "smooth"
  });
}

/* DATA ANGGOTA (22 ORANG) */
const anggota = [
  { nama: "M.Kinan Aftadithya Naufaldy", foto: "https://i.imgur.com/aGcDJwm.jpg" },
  { nama: "Muhammad Noval", foto: "https://i.imgur.com/u7fA9MQ.jpg" },

  { nama: "Ahmad Hafi Badali", foto: "https://i.imgur.com/zQOGnQ3.jpg" },
  { nama: "Alqaqa Ibn Amr", foto: "https://i.imgur.com/WHoawyS.jpg" },
  { nama: "Almira Shidqiya", foto: "https://i.imgur.com/JMWgIYs.jpg" },
  { nama: "Azka Ihsana Nurfattah", foto: "https://i.imgur.com/DiFPYxP.jpg" },
  { nama: "Chelsea Putri Agustina", foto: "https://i.imgur.com/JiOTwYz.jpg" },
  { nama: "Defandra Athiyya Rizki", foto: "https://i.imgur.com/p2oU4EV.jpg" },
  { nama: "Hayfa Nayla Fitria", foto: "https://i.imgur.com/AnCXQfR.jpg" },
  { nama: "Lakeisha Azzalea Akbar", foto: "https://i.imgur.com/h4TQGGH.jpg" },
  { nama: "Muhammad Abidzar", foto: "https://i.imgur.com/iIZRjwG.jpg" },
  { nama: "Muhammad Abiena Amri", foto: "https://i.imgur.com/NJonxVP.jpg" },
  { nama: "Muhammad Hafiy", foto: "https://i.imgur.com/SDygFKk.jpg" },
  { nama: "Muhammad Luthfi Hadi", foto: "https://i.imgur.com/p7KQzQH.jpg" },
  { nama: "Muhammad Nizar Munawwar", foto: "https://i.imgur.com/I2Fj5x2.jpg" },
  { nama: "Muhammad Tsaqif Nur Rayyan", foto: "https://i.imgur.com/mxf7MpL.jpg" },
  { nama: "Nabila El Anabel", foto: "https://i.imgur.com/aRoMEmO.jpg" },
  { nama: "Nadia Zalfa Aridha", foto: "https://i.imgur.com/3IYFQl5.jpg" },
  { nama: "Rafael Carolius Sembiring", foto: "https://i.imgur.com/tcxxJBu.jpg" },
  { nama: "Riska Irliani", foto: "https://i.imgur.com/iHEPKN8.jpg" },
  { nama: "Tiara Ramadhania", foto: "https://i.imgur.com/EwxoEic.jpg" },
  { nama: "Zara Sherin Chrestianto", foto: "https://i.imgur.com/taGoUBE.jpg" }
];

/* RENDER */
const container = document.getElementById("anggota");

anggota.forEach(a => {
  container.innerHTML += `
    <div class="card">
      <img src="${a.foto}">
      <p>${a.nama}</p>
    </div>
  `;
});
