/* =========================================================
   CONFIGURAÇÃO — edite apenas este bloco
   ========================================================= */
const CONFIG = {
  nome: "Maria Letícia Carvalho",
  linkedin: "https://www.linkedin.com/in/carvalhooliveiramaria/",
  curriculo: "assets/curriculo.pdf",                   // coloque o PDF nesta pasta com este nome
  whatsappNumero: "5512997467420",                     // 55 + DDD + número
  whatsappMensagem: "Olá, gostaria de conhecer mais sobre o seu serviço!",
};
/* ========================================================= */

const links = {
  linkedin: CONFIG.linkedin,
  curriculo: CONFIG.curriculo,
  whatsapp: `https://wa.me/${CONFIG.whatsappNumero}?text=${encodeURIComponent(CONFIG.whatsappMensagem)}`,
};

document.querySelectorAll("[data-config]").forEach((el) => {
  el.textContent = CONFIG[el.dataset.config];
});
document.querySelectorAll("[data-link]").forEach((el) => {
  el.href = links[el.dataset.link];
});
document.getElementById("ano").textContent = new Date().getFullYear();

/* Navegação entre telas: #inicio, #sobre, #carreira, #servicos */
const VIEWS = ["inicio", "sobre", "carreira", "servicos"];

function show() {
  const v = location.hash.replace("#", "");
  const view = VIEWS.includes(v) ? v : "inicio";
  document.body.dataset.view = view;
  document.querySelectorAll(".view").forEach((s) => s.classList.toggle("is-active", s.id === `view-${view}`));
  document.querySelectorAll("[data-tab]").forEach((t) => t.classList.toggle("is-active", t.dataset.tab === view));
  window.scrollTo({ top: 0, behavior: "instant" });
}

window.addEventListener("hashchange", show);
show();
