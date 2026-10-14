// VETIX TECNOLOGIA — comportamento do site
(function () {
  const WHATSAPP = "5551993529610"; // número usado no formulário

  // 1) Vídeo da abertura: versão horizontal ou vertical conforme a tela.
  //    Quem pediu "reduzir movimento" no aparelho vê só a imagem parada.
  const video = document.querySelector(".hero__video");
  if (video) {
    const reduz = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduz) {
      const vertical = window.matchMedia("(max-aspect-ratio: 3/4)").matches;
      video.src = vertical ? video.dataset.srcV : video.dataset.srcH;
      video.play().catch(() => {});
    } else {
      video.removeAttribute("autoplay");
    }
  }

  // 2) Cabeçalho fica azul ao rolar a página.
  const topo = document.getElementById("topo");
  const marcaTopo = () => topo.classList.toggle("topo--solido", window.scrollY > 40);
  marcaTopo();
  window.addEventListener("scroll", marcaTopo, { passive: true });

  // 3) Menu do celular.
  const btn = document.querySelector(".menu-btn");
  const menu = document.getElementById("menu");
  const fecha = () => { menu.classList.remove("aberto"); btn.setAttribute("aria-expanded", "false"); };
  btn.addEventListener("click", () => {
    const aberto = menu.classList.toggle("aberto");
    btn.setAttribute("aria-expanded", String(aberto));
    topo.classList.add("topo--solido");
  });
  menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", fecha));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") fecha(); });

  // 4) Formulário: monta a mensagem e abre o WhatsApp.
  const form = document.getElementById("form-contato");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const d = new FormData(form);
    const texto =
      `Olá! Vim pelo site da Vetix.\n` +
      `Nome: ${d.get("nome")}\n` +
      (d.get("empresa") ? `Empresa: ${d.get("empresa")}\n` : "") +
      `\n${d.get("mensagem")}`;
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`, "_blank", "noopener");
  });

  // 5) Ano no rodapé.
  document.getElementById("ano").textContent = new Date().getFullYear();
})();
