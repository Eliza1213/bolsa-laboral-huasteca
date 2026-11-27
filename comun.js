const $ = (s, r=document) => r.querySelector(s);
const pagina = document.body.dataset.pagina;

function cabecera(){
  const nav = (href, txt, key, extra="") =>
    `<a href="${href}" class="${extra}${pagina===key?" activo":""}">${txt}</a>`;
  document.getElementById("cab").innerHTML = `
    <div class="cab-in">
      <a href="index.html" class="marca"><span class="logo">B</span><span class="nom">Bolsa de trabajo</span><small>Huejutla</small></a>
      <nav>${nav("vacantes.html","Vacantes","vacantes")}${nav("publicar.html","Publicar vacante","publicar")}
      ${nav("negocio.html","Entrar como negocio","negocio","btn-out")}</nav>
    </div>`;
}
function pie(){
  document.getElementById("pie").innerHTML =
    `Bolsa Laboral Huasteca · Integradora, UTHH · Grupo 10.° B · Bina 09 · Versión 1.1<br>Prueba piloto actualizada el ${CONFIG.actualizado}. No guardamos datos de candidatos.`;
}
cabecera(); pie();

function diasRestantes(v){
  if(!v.vence) return null;
  const hoy = new Date(); hoy.setHours(0,0,0,0);
  return Math.round((new Date(v.vence+"T00:00:00") - hoy)/86400000);
}
function estadoVisible(v){
  if(v.estado==="Ocupada") return ["Ya fue ocupada","off"];
  if(v.estado==="En verificación") return ["En verificación","wait"];
  const d = diasRestantes(v);
  if(v.estado==="Vencida" || (d!==null && d<0)) return ["Vencida","off"];
  if(d===null) return ["Vigente","ok"];
  if(d===0) return ["Vence hoy","wait"];
  if(d===1) return ["Vence mañana","wait"];
  return [`Vigente - ${d} días`,"ok"];
}
function etiqueta(v){ const [t,c]=estadoVisible(v); return `<span class="tag ${c}">${t}</span>`; }
function esc(s){ return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c])); }
function filaVacante(v){
  return `<a class="card fila" href="detalle.html?id=${v.id}">
    <div class="fila-top"><h3>${esc(v.puesto)}</h3>${etiqueta(v)}</div>
    <p class="meta"><b>${esc(v.negocio)}</b><span>${esc(v.sueldo)}</span><span>${esc(v.jornada)} · ${esc(v.comunidad)}</span></p></a>`;
}
// Mensaje a la bina (concierge): abre WhatsApp si hay número, si no deja copiar el texto.
function mensajeBina(texto, caja){
  const url = CONFIG.whatsapp ? `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(texto)}` : "";
  caja.hidden = false;
  caja.innerHTML = `<p><b>Mensaje listo para enviar a la bina:</b></p><pre></pre>
    <div class="acciones"><button class="btn" id="copiar" type="button">Copiar mensaje</button>
    ${url?`<a class="btn sec" target="_blank" rel="noopener" href="${url}">Abrir WhatsApp</a>`:`<span class="nota">Aún no hay número configurado: copia el mensaje y envíalo a la bina.</span>`}</div>`;
  $("pre",caja).textContent = texto;
  $("#copiar",caja).onclick = async e => { try{ await navigator.clipboard.writeText(texto); e.target.textContent="Copiado"; }catch(_){ e.target.textContent="Selecciona y copia"; } };
}
