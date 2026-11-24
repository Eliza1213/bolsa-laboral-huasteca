$("#vig").textContent = CONFIG.vigenciaDias;
const comunidades = [...new Set(VACANTES.map(v=>v.comunidad))];
comunidades.forEach(c=>{const o=document.createElement("option");o.value=c;o.textContent=c;$("#com").appendChild(o);});
["Tiempo completo","Medio tiempo","Fines de semana","Sin experiencia"].forEach(t=>{
  const a=document.createElement("a");a.className="chip";a.textContent=t;a.href="vacantes.html?jornada="+encodeURIComponent(t);$("#chips").appendChild(a);});
$("#form-b").onsubmit=e=>{e.preventDefault();location.href=`vacantes.html?q=${encodeURIComponent($("#q").value)}&comunidad=${encodeURIComponent($("#com").value)}`;};
$("#recientes").innerHTML = VACANTES.slice(0,3).map(filaVacante).join("");
