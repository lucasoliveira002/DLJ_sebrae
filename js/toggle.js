document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("toggle");
    const imagem = document.getElementById("imagem");
  
    toggle.addEventListener("change", () => {
      if (toggle.checked) {
        imagem.src = "../imgs/verde.png"; // quando ligado
      } else {
        imagem.src = "../imgs/vermelho.png"; // quando desligado
        alert("⚠️ Atenção: O semáforo está vermelho!");
      }
    });
  });
  