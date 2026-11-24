$("#f").onsubmit=e=>{e.preventDefault();
  const c=$("#cod").value.trim().toUpperCase(); const mis=VACANTES.filter(v=>v.codigoNegocio===c);
  if(!mis.length){$("#err").hidden=false;return;}
  $("#acceso").hidden=true; const p=$("#panel"); p.hidden=false;
  p.innerHTML=`<div class="panel-top"><div><h1>Panel de negocio</h1><p class="sub">${esc(mis[0].negocio)} (${esc(c)})</p></div><a class="btn" href="publicar.html">+ Nueva vacante</a></div>
  <div class="tabla"><div class="tr th"><span>Puesto</span><span>Estado</span><span>Vence</span><span>Acciones</span></div>
  ${mis.map(v=>{const d=diasRestantes(v);const venc=v.vence?(d===0?"Hoy":d===1?"Mañana":d<0?"—":`En ${d} días`):"—";const cerrada=v.estado==="Ocupada"||estadoVisible(v)[0]==="Vencida";
   const acc=cerrada?`<button class="btn sec peq" data-a="rep" data-id="${v.id}">Volver a publicar</button>`:`<button class="btn peq" data-a="ren" data-id="${v.id}">Renovar</button><button class="btn sec peq" data-a="ocu" data-id="${v.id}">Marcar ocupada</button>`;
   return `<div class="tr"><b>${esc(v.puesto)}</b><span>${etiqueta(v)}</span><span>${venc}</span><span class="acc">${acc}</span></div>`;}).join("")}</div>
  <div class="salida" id="sal" hidden></div>
  <p class="nota" style="margin-top:14px">Cada botón prepara un aviso para la bina por WhatsApp; ella actualiza el estado en el catálogo. Si no se renueva antes del vencimiento, la vacante deja de aparecer como vigente.</p>`;
  p.querySelectorAll("button[data-a]").forEach(b=>b.onclick=()=>{const v=VACANTES.find(x=>x.id===b.dataset.id);
    const t={ocu:"ya se cubrió",ren:"sigue abierta y quiero renovarla",rep:"quiero volver a publicarla"}[b.dataset.a];
    mensajeBina(`Hola, soy del negocio ${c}. Mi vacante ${v.id} (${v.puesto}) ${t}.`,$("#sal"));});
};
