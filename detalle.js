const id=new URLSearchParams(location.search).get("id");
const v=VACANTES.find(x=>x.id===id);
if(!v){$("#contenido").innerHTML='<p class="vacio">No encontramos esta vacante.</p>';}
else{
  document.title=v.puesto+" · Bolsa de trabajo Huejutla";
  const activa=estadoVisible(v)[1]==="ok"||estadoVisible(v)[0].startsWith("Vence");
  const msg=`Hola, me interesa la vacante ${v.id} (${v.puesto}).`;
  const wa=(CONFIG.whatsapp&&activa)?`<a class="btn" target="_blank" rel="noopener" href="https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}">Escribir por WhatsApp</a>`
    :`<button class="btn off" disabled>Escribir por WhatsApp</button><p class="nota">${activa?"Contacto pendiente de configurar.":"El contacto se habilita cuando la vacante esté verificada y vigente."}</p>`;
  $("#contenido").innerHTML=`<div class="det"><div class="card">
    <h1>${esc(v.puesto)}</h1><p class="neg">${esc(v.negocio)}</p>
    <dl class="d"><dt>Sueldo</dt><dd><b>${esc(v.sueldo)}</b></dd><dt>Horario</dt><dd>${esc(v.horario)}</dd>
    <dt>Requisitos</dt><dd>${esc(v.requisitos)}</dd><dt>Dónde</dt><dd>${esc(v.donde)}</dd>
    <dt>Fechas</dt><dd>${v.publicada?`Publicada: ${esc(v.publicada)} · Vence: ${esc(v.vence)}`:"Se definen al publicarla"}</dd></dl>
    <div class="mapa">Mapa no incluido en el piloto · ${esc(v.donde)}</div></div>
    <aside class="lado"><div class="card"><div class="est"><span>Estado:</span>${etiqueta(v)}</div>${wa}
    <button class="rep" id="rep" type="button">⚠ Reportar esta vacante</button><div class="salida" id="sal" hidden></div></div></aside></div>`;
  $("#rep").onclick=()=>mensajeBina(`Quiero reportar la vacante ${v.id} (${v.puesto}). Motivo: `,$("#sal"));
}
