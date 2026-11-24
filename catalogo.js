const P = new URLSearchParams(location.search);
const fill=(id,vals)=>[...new Set(vals)].forEach(x=>{const o=document.createElement("option");o.value=o.textContent=x;$(id).appendChild(o);});
fill("#f-com",VACANTES.map(v=>v.comunidad)); fill("#f-giro",VACANTES.map(v=>v.giro));
$("#f-q").value=P.get("q")||""; $("#f-com").value=P.get("comunidad")||""; $("#f-jor").value=P.get("jornada")||"";
function cat(v){const t=estadoVisible(v)[0];return t==="En verificación"?"ver":(t==="Ya fue ocupada"||t==="Vencida")?"cerr":"vig";}
function pintar(){
  const q=$("#f-q").value.toLowerCase(),c=$("#f-com").value,g=$("#f-giro").value,j=$("#f-jor").value,e=$("#f-est").value;
  const d=VACANTES.filter(v=>(!q||(v.puesto+" "+v.negocio+" "+v.requisitos).toLowerCase().includes(q))&&(!c||v.comunidad===c)&&(!g||v.giro===g)&&(!j||v.jornada===j)&&(!e||cat(v)===e));
  $("#lista").innerHTML=d.length?d.map(filaVacante).join(""):'<p class="vacio">No hay vacantes con estos filtros.</p>';
  $("#cont").textContent=`${d.length} resultado${d.length===1?"":"s"} encontrado${d.length===1?"":"s"}`;
}
["#f-q","#f-com","#f-giro","#f-jor","#f-est"].forEach(s=>$(s).addEventListener("input",pintar)); pintar();
