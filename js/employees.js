const employees = {
  1: {
    name: "Mete Hanoğlu",
    role: "Genel Müdür",
    image: "../assets/images/employees/emp1.png",
    education: "İstanbul Teknik Üniversitesi - Endüstri Mühendisliği",
    experience: "15 yıl",
    expertise: "Kurumsal strateji, yönetim, operasyon planlama",
    bio: "Şirketin genel yönetiminden sorumlu olan Mete Hanoğlu, teknoloji ve endüstriyel süreç yönetiminde uzun yıllara dayanan tecrübeye sahiptir. Kurumsal büyüme, proje yatırımları ve stratejik iş birliklerini yönetir."
  },
  2: {
    name: "Timur Çelik",
    role: "Genel Müdür Yardımcısı",
    image: "../assets/images/employees/emp2.png",
    education: "Boğaziçi Üniversitesi - İşletme",
    experience: "12 yıl",
    expertise: "Yönetim koordinasyonu, süreç geliştirme",
    bio: "Kurumsal iş akışlarının koordinasyonunu sağlayan Timur Çelik, şirket içi süreçlerin verimli, düzenli ve sürdürülebilir ilerlemesini desteklemektedir."
  },
  3: {
    name: "Pelin Kaya",
    role: "Operasyon Direktörü",
    image: "../assets/images/employees/emp3.png",
    education: "Yıldız Teknik Üniversitesi - Makine Mühendisliği",
    experience: "13 yıl",
    expertise: "Operasyon yönetimi, saha organizasyonu",
    bio: "Operasyonel süreçlerin planlanması ve sahadaki uygulamaların yönetilmesinden sorumludur. Verimlilik ve performans odaklı çalışma anlayışıyla projelere yön verir."
  },
  4: {
    name: "Mehmet Tokgöz",
    role: "Yazılım Geliştirme Direktörü",
    image: "../assets/images/employees/emp4.png",
    education: "ODTÜ - Bilgisayar Mühendisliği",
    experience: "11 yıl",
    expertise: "Yazılım mimarisi, proje yönetimi, ekip liderliği",
    bio: "Şirketin yazılım geliştirme ekiplerini yöneten Mehmet Tokgöz, yüksek performanslı ve ölçeklenebilir sistemlerin mimarisini oluşturmaktadır."
  },
  5: {
    name: "Serkan Yılmaz",
    role: "Proje Koordinatörü",
    image: "../assets/images/employees/emp5.png   ",
    education: "Sakarya Üniversitesi - Yazılım Mühendisliği",
    experience: "9 yıl",
    expertise: "Proje planlama, ekip koordinasyonu",
    bio: "Projelerin zamanında ve hedeflenen kalite standartlarında tamamlanması için ekipler arasında koordinasyon sağlar."
  },
  6: {
    name: "Pınar Karasu",
    role: "İnsan Kaynakları Müdürü",
    image: "../assets/images/employees/emp6.png",
    education: "Marmara Üniversitesi - İnsan Kaynakları Yönetimi",
    experience: "10 yıl",
    expertise: "İşe alım, kurumsal gelişim, insan yönetimi",
    bio: "Şirketin insan kaynağı stratejisini oluşturan Pınar Karasu, çalışan deneyimi ve organizasyonel gelişim alanlarında aktif rol üstlenmektedir."
  },
  7: {
    name: "Kıvanç Yaman",
    role: "Finans Müdürü",
    image: "../assets/images/employees/emp7.png",
    education: "Ankara Üniversitesi - Maliye",
    experience: "14 yıl",
    expertise: "Bütçe yönetimi, finansal analiz, raporlama",
    bio: "Finansal süreçleri yöneten Kıvanç Yaman, şirketin bütçe planlaması, mali analizleri ve sürdürülebilir finansal yapısının korunmasından sorumludur."
  },
  8: {
    name: "Kenan Yaman",
    role: "Satış ve Pazarlama Müdürü",
    image: "../assets/images/employees/emp8.png",
    education: "Ege Üniversitesi - Pazarlama",
    experience: "8 yıl",
    expertise: "Kurumsal satış, marka yönetimi, müşteri ilişkileri",
    bio: "Kurumsal müşteri ilişkileri ve marka konumlandırması alanında çalışan Kenan Yaman, şirket ürün ve hizmetlerinin pazardaki gücünü artırmayı hedefler."
  },
  9: {
    name: "Mustafa Demir",
    role: "Teknik Destek Müdürü",
    image: "../assets/images/employees/emp9.png",
    education: "Karadeniz Teknik Üniversitesi - Bilgisayar Teknolojisi",
    experience: "10 yıl",
    expertise: "Teknik servis, sistem bakımı, kullanıcı desteği",
    bio: "Teknik destek operasyonlarını yöneten Mustafa Demir, müşterilere hızlı çözüm, bakım planlaması ve sistem sürekliliği konularında hizmet verir."
  },
  10: {
    name: "Işıl Hanoğlu",
    role: "Kurumsal İletişim Sorumlusu",
    image: "../assets/images/employees/emp10.png",
    education: "İstanbul Üniversitesi - İletişim Fakültesi",
    experience: "7 yıl",
    expertise: "Kurumsal iletişim, medya ilişkileri, organizasyon yönetimi",
    bio: "Şirketin iç ve dış iletişim süreçlerini yürüten Işıl Hanoğlu, marka dili, kurumsal görünürlük ve profesyonel iletişim stratejilerinde görev alır."
  }
};

const employeeCards = document.querySelectorAll(".employee-card");
const employeeModal = document.getElementById("employeeModal");
const modalBody = document.getElementById("modalBody");
const modalClose = document.getElementById("modalClose");
const modalOverlay = document.getElementById("modalOverlay");

if (employeeCards.length && employeeModal && modalBody && modalClose && modalOverlay) {
  employeeCards.forEach(card => {
    card.addEventListener("click", () => {
      const id = card.getAttribute("data-id");
      const employee = employees[id];

      if (employee) {
        modalBody.innerHTML = `
          <div class="modal-profile">
            <img src="${employee.image}" alt="${employee.name}">
            <div class="modal-info">
              <h2>${employee.name}</h2>
              <p class="modal-role">${employee.role}</p>
              <p><strong>Eğitim:</strong> ${employee.education}</p>
              <p><strong>Deneyim:</strong> ${employee.experience}</p>
              <p><strong>Uzmanlık:</strong> ${employee.expertise}</p>
              <p><strong>Özgeçmiş:</strong> ${employee.bio}</p>
            </div>
          </div>
        `;
        employeeModal.classList.add("active");
      }
    });
  });

  const closeModal = () => {
    employeeModal.classList.remove("active");
  };

  modalClose.addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", closeModal);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  });
}