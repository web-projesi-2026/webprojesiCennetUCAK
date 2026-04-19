// ÇALIŞAN VERİLERİ
const employees = {
  1: {
    name: "Mete Hanoğlu",
    role: "Genel Müdür",
    image: "../assets/images/employees/emp1.png",
    education: "İstanbul Teknik Üniversitesi - Endüstri Mühendisliği",
    experience: "15 yıl",
    expertise: "Kurumsal strateji, yönetim, operasyon planlama",
    bio: "Şirketin genel yönetiminden sorumlu olan Mete Hanoğlu, teknoloji ve endüstriyel süreç yönetiminde uzun yıllara dayanan tecrübeye sahiptir."
  },
  2: {
    name: "Timur Çelik",
    role: "Genel Müdür Yardımcısı",
    image: "../assets/images/employees/emp2.png",
    education: "Boğaziçi Üniversitesi - İşletme",
    experience: "12 yıl",
    expertise: "Yönetim koordinasyonu",
    bio: "Kurumsal iş akışlarını yöneten ve organizasyonu sağlayan isimdir."
  },
  3: {
    name: "Pelin Kaya",
    role: "Operasyon Direktörü",
    image: "../assets/images/employees/emp3.png",
    education: "Yıldız Teknik Üniversitesi",
    experience: "13 yıl",
    expertise: "Operasyon yönetimi",
    bio: "Operasyonel süreçleri yöneten ve sahadaki uygulamaları kontrol eden liderdir."
  },
  4: {
    name: "Mehmet Tokgöz",
    role: "Yazılım Direktörü",
    image: "../assets/images/employees/emp4.png",
    education: "ODTÜ",
    experience: "11 yıl",
    expertise: "Yazılım mimarisi",
    bio: "Yazılım ekiplerini yöneten ve sistem mimarisini kuran isimdir."
  },
  5: {
    name: "Serkan Yılmaz",
    role: "Proje Koordinatörü",
    image: "../assets/images/employees/emp5.png",
    education: "Sakarya Üniversitesi",
    experience: "9 yıl",
    expertise: "Proje yönetimi",
    bio: "Projelerin zamanında tamamlanmasını sağlar."
  }
};

// ELEMENTLER
const employeeCards = document.querySelectorAll(".employee-card");
const employeeModal = document.getElementById("employeeModal");

// 🔥 BURADA İSMİ DEĞİŞTİRDİK (HATA BURADAYDI)
const employeeModalBody = document.getElementById("modalBody");

const modalClose = document.getElementById("modalClose");
const modalOverlay = document.getElementById("modalOverlay");

// MODAL AÇ
function openEmployeeModal(employee) {
  if (!employeeModal || !employeeModalBody) return;

  employeeModalBody.innerHTML = `
    <div style="display:flex; gap:20px; align-items:center;">
      <img src="${employee.image}" style="width:120px; border-radius:10px;">
      <div>
        <h2>${employee.name}</h2>
        <p><strong>${employee.role}</strong></p>
        <p><b>Eğitim:</b> ${employee.education}</p>
        <p><b>Deneyim:</b> ${employee.experience}</p>
        <p><b>Uzmanlık:</b> ${employee.expertise}</p>
        <p>${employee.bio}</p>
      </div>
    </div>
  `;

  employeeModal.classList.add("active");
  document.body.style.overflow = "hidden";
}

// MODAL KAPAT
function closeEmployeeModal() {
  if (!employeeModal) return;

  employeeModal.classList.remove("active");
  document.body.style.overflow = "";
}

// KARTA TIKLAMA
employeeCards.forEach(card => {
  card.addEventListener("click", () => {
    const id = card.getAttribute("data-id");
    const employee = employees[id];

    if (employee) {
      openEmployeeModal(employee);
    }
  });
});

// KAPATMA BUTONU
if (modalClose) {
  modalClose.addEventListener("click", closeEmployeeModal);
}

// ARKA PLAN TIKLAMA
if (modalOverlay) {
  modalOverlay.addEventListener("click", closeEmployeeModal);
}

// ESC TUŞU
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeEmployeeModal();
  }
});
