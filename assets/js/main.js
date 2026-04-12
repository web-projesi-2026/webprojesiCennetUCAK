const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });
}
const aiInput = document.getElementById("aiInput");
const aiSendBtn = document.getElementById("aiSendBtn");
const aiMessages = document.getElementById("aiMessages");

if (aiInput && aiSendBtn && aiMessages) {
  const getBotReply = (message) => {
    const text = message.toLowerCase();

    if (text.includes("hizmet")) {
      return "Uçak Yazılım Endüstrileri; özel yazılım geliştirme, sistem entegrasyonu, veri raporlama, bakım ve teknik destek hizmetleri sunmaktadır.";
    }

    if (text.includes("ürün")) {
      return "Ürünlerimiz arasında Endüstri ERP Suite, Bakım Takip Pro ve Üretim Analiz Dashboard gibi kurumsal çözümler bulunmaktadır.";
    }

    if (text.includes("proje")) {
      return "Şirketimiz akıllı üretim yönetimi, kurumsal bakım takip yazılımı ve lojistik kontrol panelleri gibi projeler geliştirmektedir.";
    }

    if (text.includes("iletişim") || text.includes("iletisim")) {
      return "Bizimle iletişime geçmek için iletişim sayfasını kullanabilir veya info@ucakyazilim.com adresi üzerinden ulaşabilirsiniz.";
    }

    if (text.includes("çalışan") || text.includes("calisan") || text.includes("kadro")) {
      return "Çalışan kadrosu sayfasında yönetim ve idari personel bilgilerini detaylı olarak inceleyebilirsiniz.";
    }

    return "Sorunuz alınmıştır. Uçak Yazılım Endüstrileri; ürünler, hizmetler, projeler ve kurumsal çözümler konusunda bilgi sunmaktadır.";
  };

  const addMessage = (text, type) => {
    const div = document.createElement("div");
    div.className = `msg ${type}`;
    div.textContent = text;
    aiMessages.appendChild(div);
    aiMessages.scrollTop = aiMessages.scrollHeight;
  };

  const sendMessage = () => {
    const userText = aiInput.value.trim();
    if (!userText) return;

    addMessage(userText, "user");
    aiInput.value = "";

    setTimeout(() => {
      const reply = getBotReply(userText);
      addMessage(reply, "bot");
    }, 500);
  };

  aiSendBtn.addEventListener("click", sendMessage);

  aiInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  });
}
