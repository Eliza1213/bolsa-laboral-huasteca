document.getElementById("dur-dias").textContent = CONFIG.vigenciaDias + " días";
const ids=["puesto","com","dir","hor","sue","req","neg","wa"];
function previa(){
  const g=i=>$("#"+i).value.trim();
  $("#pv").innerHTML=`<div class="card fila"><div class="fila-top"><h3>${esc(g("puesto")||"Puesto de la vacante")}</h3><span class="tag wait">En verificación</span></div>
  <p class="meta"><b>${esc(g("neg")||"Tu negocio")}</b><span>${esc(g("sue")||"Sueldo")}</span><span>${esc(g("com")||"Comunidad")}</span></p></div>`;
}
ids.forEach(i=>$("#"+i).addEventListener("input",previa)); previa();
$("#f").onsubmit=e=>{e.preventDefault();const g=i=>$("#"+i).value.trim()||"(sin dato)";
  mensajeBina(`Hola, quiero publicar una vacante en la Bolsa de trabajo Huejutla.\nNegocio: ${g("neg")}\nPuesto: ${g("puesto")}\nComunidad: ${g("com")}\nDirección o referencia: ${g("dir")}\nHorario: ${g("hor")}\nSueldo: ${g("sue")}\nRequisitos: ${g("req")}\nWhatsApp del negocio: ${g("wa")}\nDuración: ${CONFIG.vigenciaDias} días\nAcepto que mi vacante se publique en la página y que me recuerden su estado por WhatsApp.`,$("#sal"));};
