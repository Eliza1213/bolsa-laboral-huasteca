// Datos del catálogo. Se editan a mano (servicio concierge).
// estado: "En verificación" | "Vigente" | "Vencida" | "Ocupada"
// Una vacante pasa a "Vigente" solo cuando la bina la verificó, tiene consentimiento y se llenan publicada/vence.
// Fechas en formato AAAA-MM-DD. vence = publicada + vigenciaDias.
const CONFIG = {
  whatsapp: "527717482748",            // número de la bina con lada, ej. "5217711234567". Vacío = sin enlace directo.
  vigenciaDias: 4,         // Protocolo v1.2 (26/11/2026): publicadas el 26/11, vencen el 30/11
  actualizado: "26/11/2026"
};

const VACANTES = [
  { id: "V01", negocio: "Tacos de guisado", codigoNegocio: "N01", puesto: "Atención en puesto de tacos de guisado",
    comunidad: "Huejutla", giro: "Alimentos / Restaurantes", jornada: "Tiempo completo",
    sueldo: "$150 por día", horario: "Lunes a viernes, 9:00 a 15:00",
    requisitos: "Buena presentación y responsable.",
    donde: "CECyTEH plantel Huejutla.",
    publicada: "2026-11-26", vence: "2026-11-30", estado: "Vigente" },
  { id: "V02", negocio: "Venta de nieve", codigoNegocio: "N02", puesto: "Venta en negocio de nieve",
    comunidad: "Huejutla", giro: "Alimentos / Restaurantes", jornada: "Tiempo completo",
    sueldo: "$300 por día", horario: "7:00 a 15:00 (días por WhatsApp)",
    requisitos: "Responsable, buena actitud y proactivo(a).",
    donde: "Se indica por WhatsApp.",
    publicada: "2026-11-26", vence: "2026-11-30", estado: "Vigente" },
  { id: "V03", negocio: "Oficina en Huejutla", codigoNegocio: "N03", puesto: "Auxiliar administrativo",
    comunidad: "Huejutla", giro: "Administrativo / Oficina", jornada: "Tiempo completo",
    sueldo: "$9,000 mensuales", horario: "Lunes a viernes, 8:00 a 17:00",
    requisitos: "Bachillerato concluido; manejo básico de computadora y paquetería Office; disponibilidad de horario; facilidad para trabajar en equipo; actitud de servicio y responsabilidad.",
    donde: "Se indica por WhatsApp.",
    publicada: "2026-11-26", vence: "2026-11-30", estado: "Vigente" },
  { id: "V04", negocio: "Tienda de abarrotes", codigoNegocio: "N04", puesto: "Ayudante de tienda",
    comunidad: "Huejutla", giro: "Comercio / Tiendas", jornada: "Tiempo completo",
    sueldo: "$1,500 por semana", horario: "Lunes a viernes, 9:00 a 18:00",
    requisitos: "Secundaria terminada, responsable y buena actitud. Actividades: atender a clientes, cobrar y acomodar mercancía.",
    donde: "Col. Parque de Poblamiento.",
    publicada: "2026-11-26", vence: "2026-11-30", estado: "Vigente" },
  { id: "V05", negocio: "Beauty (estética)", codigoNegocio: "N05", puesto: "Estilista auxiliar",
    comunidad: "Huejutla", giro: "Belleza / Estética", jornada: "A convenir",
    sueldo: "Sueldo base + comisiones y propinas", horario: "A convenir con el negocio",
    requisitos: "Conocimientos básicos de corte de dama, tintes, tratamientos y estilizado; responsable, actitud de servicio y disposición para aprender. Actividades: apoyar en servicios de belleza, tintes, tratamientos, secado, planchado, ondas y atención a clientes.",
    donde: "Col. Parque de Poblamiento.",
    publicada: "2026-11-26", vence: "2026-11-30", estado: "Vigente" },
  { id: "V06", negocio: "Beauty (estética)", codigoNegocio: "N05", puesto: "Estilista profesional",
    comunidad: "Huejutla", giro: "Belleza / Estética", jornada: "A convenir",
    sueldo: "Sueldo base + comisiones y propinas", horario: "A convenir con el negocio",
    requisitos: "Experiencia en servicios de belleza (cortes de dama, tintes, tratamientos, depilación, manicura, pedicura, pestañas y maquillaje); responsable, excelente actitud de servicio y compromiso.",
    donde: "Col. Parque de Poblamiento.",
    publicada: "2026-11-26", vence: "2026-11-30", estado: "Vigente" }
];
