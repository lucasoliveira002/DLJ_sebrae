document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("toggle");
  const imagem = document.getElementById("imagem");
  const titulo = document.getElementById("titulo"); // pega o h1 pelo id

  toggle.addEventListener("change", () => {
    if (toggle.checked) {
      titulo.innerText = "Vibração Pulsante"; // muda o texto do h1
      imagem.src = "../imgs/verde.png"; // quando ligado
    } else {
      titulo.innerText = "Vibração Intensa"; // muda o texto do h1
      imagem.src = "../imgs/vermelho.png"; // quando desligado
      alert("⚠️ Atenção: O semáforo está vermelho!");
    }
  });
});
