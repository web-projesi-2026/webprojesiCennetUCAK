const container = document.getElementById("tekliflerContainer");

let tekliflerim = JSON.parse(localStorage.getItem("tekliflerim")) || [];

fetch("../assets/data/services.json")
  .then(res => res.json())
  .then(data => {

    const secilenler = data.filter(item =>
      tekliflerim.includes(item.id)
    );

    secilenler.forEach(item => {
      container.innerHTML += `
        <div class="service-card">
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <span>${item.price}</span>
        </div>
      `;
    });

  });
