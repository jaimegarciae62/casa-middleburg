// Casa Middleburg - App Principal

// Datos
let tareas = JSON.parse(localStorage.getItem('tareas')) || [];

// Cargar tareas predeterminadas si está vacío
if (tareas.length === 0) {
    const hoy = new Date();
    const proximaFecha = (meses) => {
        const fecha = new Date(hoy);
        fecha.setMonth(fecha.getMonth() + meses);
        return fecha.toISOString().split('T')[0];
    };

    tareas = [
        // HVAC
        { id: '1', nombre: 'Cambiar filtros HVAC', sistema: 'HVAC', frecuencia: 'trimestral', fecha: proximaFecha(0), costo: 45, notas: 'Filtros MERV 11 o superior' },
        { id: '2', nombre: 'Mantenimiento preventivo HVAC', sistema: 'HVAC', frecuencia: 'semestral', fecha: proximaFecha(2), costo: 150, notas: 'Llamar técnico certificado' },
        { id: '3', nombre: 'Limpiar conductos de aire', sistema: 'HVAC', frecuencia: 'anual', fecha: proximaFecha(6), costo: 400, notas: 'Servicio profesional' },
        
        // Plomería
        { id: '4', nombre: 'Revisar calentador de agua', sistema: 'General', frecuencia: 'semestral', fecha: proximaFecha(3), costo: 0, notas: 'Verificar ánodo y presión' },
        { id: '5', nombre: 'Drenar calentador de agua', sistema: 'General', frecuencia: 'anual', fecha: proximaFecha(6), costo: 0, notas: 'Eliminar sedimentos' },
        { id: '6', nombre: 'Inspeccionar válvulas de agua', sistema: 'Pozo de agua', frecuencia: 'anual', fecha: proximaFecha(8), costo: 0, notas: 'Verificar que abren y cierran bien' },
        { id: '7', nombre: 'Limpiar sifones de lavabos', sistema: 'General', frecuencia: 'trimestral', fecha: proximaFecha(1), costo: 0, notas: 'Prevenir obstrucciones' },
        
        // Detectores
        { id: '8', nombre: 'Probar detectores de humo', sistema: 'Detectores', frecuencia: 'mensual', fecha: proximaFecha(0), costo: 0, notas: 'Presionar botón de prueba' },
        { id: '9', nombre: 'Cambiar baterías detectores', sistema: 'Detectores', frecuencia: 'anual', fecha: proximaFecha(6), costo: 20, notas: 'Baterías 9V' },
        { id: '10', nombre: 'Probar detectores de CO', sistema: 'Detectores', frecuencia: 'mensual', fecha: proximaFecha(0), costo: 0, notas: 'Botón de prueba' },
        
        // Eléctrico
        { id: '11', nombre: 'Revisar panel eléctrico', sistema: 'General', frecuencia: 'anual', fecha: proximaFecha(10), costo: 0, notas: 'Buscar señales de corrosión' },
        { id: '12', nombre: 'Probar interruptores GFCI', sistema: 'General', frecuencia: 'mensual', fecha: proximaFecha(0), costo: 0, notas: 'Baños y cocina' },
        
        // Techo y Exterior
        { id: '13', nombre: 'Limpiar canaletas', sistema: 'Techo', frecuencia: 'semestral', fecha: proximaFecha(2), costo: 150, notas: 'Primavera y otoño' },
        { id: '14', nombre: 'Inspeccionar techo', sistema: 'Techo', frecuencia: 'anual', fecha: proximaFecha(4), costo: 0, notas: 'Buscar tejas dañadas' },
        { id: '15', nombre: 'Revisar sellado de ventanas', sistema: 'General', frecuencia: 'anual', fecha: proximaFecha(5), costo: 50, notas: 'Re-sellar si necesario' },
        { id: '16', nombre: 'Lavar exterior de casa', sistema: 'General', frecuencia: 'anual', fecha: proximaFecha(3), costo: 300, notas: 'Pressure washing' },
        
        // Pozo y Séptico
        { id: '17', nombre: 'Inspeccionar pozo de agua', sistema: 'Pozo de agua', frecuencia: 'anual', fecha: proximaFecha(6), costo: 150, notas: 'Prueba de calidad de agua' },
        { id: '18', nombre: 'Bombear tanque séptico', sistema: 'Septico', frecuencia: 'anual', fecha: proximaFecha(8), costo: 350, notas: 'Cada 3-5 años realmente' },
        { id: '19', nombre: 'Inspeccionar drainfield', sistema: 'Septico', frecuencia: 'anual', fecha: proximaFecha(8), costo: 0, notas: 'Verificar que no hay agua estancada' },
        
        // Filtro de agua
        { id: '20', nombre: 'Cambiar filtro de agua', sistema: 'Filtro agua', frecuencia: 'semestral', fecha: proximaFecha(2), costo: 50, notas: 'Filtro principal de casa' },
        { id: '21', nombre: 'Revisar sistema de filtración', sistema: 'Filtro agua', frecuencia: 'anual', fecha: proximaFecha(6), costo: 0, notas: 'Verificar presión y fugas' },
        
        // Chimenea
        { id: '22', nombre: 'Limpiar chimenea', sistema: 'Chimenea', frecuencia: 'anual', fecha: proximaFecha(4), costo: 200, notas: 'Antes de temporada de frío' },
        { id: '23', nombre: 'Inspeccionar chimenea', sistema: 'Chimenea', frecuencia: 'anual', fecha: proximaFecha(4), costo: 100, notas: 'Revisar damper y estructura' },
        
        // Electrodomésticos
        { id: '24', nombre: 'Limpiar filtro lavadora', sistema: 'Electrodomesticos', frecuencia: 'mensual', fecha: proximaFecha(0), costo: 0, notas: 'Filtro de pelusa y bomba' },
        { id: '25', nombre: 'Limpiar refrigerador - bobinas', sistema: 'Electrodomesticos', frecuencia: 'semestral', fecha: proximaFecha(3), costo: 0, notas: 'Bobinas traseras' },
        { id: '26', nombre: 'Limpiar lavavajillas', sistema: 'Electrodomesticos', frecuencia: 'mensual', fecha: proximaFecha(0), costo: 5, notas: 'Ciclo con vinagre' },
        { id: '27', nombre: 'Limpiar secadora - conducto', sistema: 'Electrodomesticos', frecuencia: 'anual', fecha: proximaFecha(6), costo: 100, notas: 'Prevenir incendios' },
        
        // General
        { id: '28', nombre: 'Inspección general de casa', sistema: 'General', frecuencia: 'anual', fecha: proximaFecha(11), costo: 400, notas: 'Inspector profesional' },
        { id: '29', nombre: 'Revisar extintores', sistema: 'General', frecuencia: 'anual', fecha: proximaFecha(6), costo: 0, notas: 'Verificar presión y fecha' },
        { id: '30', nombre: 'Revisar sótano/cimientos', sistema: 'General', frecuencia: 'semestral', fecha: proximaFecha(4), costo: 0, notas: 'Buscar humedad o grietas' }
    ];
    
    localStorage.setItem('tareas', JSON.stringify(tareas));
}

let historial = JSON.parse(localStorage.getItem('historial')) || [];
let proveedores = JSON.parse(localStorage.getItem('proveedores')) || [];

// Fecha actual para calendario
let fechaActual = new Date();

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    initNavegacion();
    initModales();
    initFormularios();
    initFiltros();
    initCalendario();
    renderTareas();
    renderProveedores();
    renderHistorial();
});

// Navegación
function initNavegacion() {
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById(btn.dataset.section).classList.add('active');
        });
    });
}

// Modales
function initModales() {
    document.getElementById('btn-nueva-tarea').addEventListener('click', () => {
        document.getElementById('form-tarea').reset();
        document.getElementById('tarea-id').value = '';
        document.getElementById('modal-tarea-titulo').textContent = 'Nueva Tarea';
        document.getElementById('modal-tarea').style.display = 'block';
    });

    document.getElementById('btn-nuevo-proveedor').addEventListener('click', () => {
        document.getElementById('form-proveedor').reset();
        document.getElementById('proveedor-id').value = '';
        document.getElementById('modal-proveedor-titulo').textContent = 'Nuevo Proveedor';
        document.getElementById('modal-proveedor').style.display = 'block';
    });

    document.querySelectorAll('.cerrar').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.closest('.modal').style.display = 'none';
        });
    });

    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });
}

// Formularios
function initFormularios() {
    document.getElementById('form-tarea').addEventListener('submit', guardarTarea);
    document.getElementById('form-proveedor').addEventListener('submit', guardarProveedor);
    document.getElementById('form-completar').addEventListener('submit', completarTarea);
}

// Guardar tarea
function guardarTarea(e) {
    e.preventDefault();
    const id = document.getElementById('tarea-id').value;
    const tarea = {
        id: id || Date.now().toString(),
        nombre: document.getElementById('tarea-nombre').value,
        sistema: document.getElementById('tarea-sistema').value,
        frecuencia: document.getElementById('tarea-frecuencia').value,
        fecha: document.getElementById('tarea-fecha').value,
        costo: parseFloat(document.getElementById('tarea-costo').value) || 0,
        notas: document.getElementById('tarea-notas').value
    };

    if (id) {
        const index = tareas.findIndex(t => t.id === id);
        tareas[index] = tarea;
    } else {
        tareas.push(tarea);
    }

    localStorage.setItem('tareas', JSON.stringify(tareas));
    document.getElementById('modal-tarea').style.display = 'none';
    renderTareas();
    renderCalendario();
}

// Renderizar tareas
function renderTareas(filtro = 'todas') {
    const lista = document.getElementById('lista-tareas');
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);

    let tareasFiltradas = tareas.map(t => {
        const fecha = new Date(t.fecha + 'T00:00:00');
        const diff = Math.ceil((fecha - hoy) / (1000 * 60 * 60 * 24));
        return { ...t, diff, fechaObj: fecha };
    });

    if (filtro === 'pendientes') {
        tareasFiltradas = tareasFiltradas.filter(t => t.diff >= 0);
    } else if (filtro === 'vencidas') {
        tareasFiltradas = tareasFiltradas.filter(t => t.diff < 0);
    }

    tareasFiltradas.sort((a, b) => a.fechaObj - b.fechaObj);

    if (tareasFiltradas.length === 0) {
        lista.innerHTML = '<p style="text-align:center;color:#666;padding:2rem;">No hay tareas</p>';
        return;
    }

    lista.innerHTML = tareasFiltradas.map(t => {
        let estado = 'ok';
        if (t.diff < 0) estado = 'vencida';
        else if (t.diff <= 7) estado = 'proxima';

        return `
            <div class="tarea-card ${estado}">
                <div class="tarea-header">
                    <span class="tarea-nombre">${t.nombre}</span>
                    <span class="tarea-sistema">${t.sistema}</span>
                </div>
                <div class="tarea-fecha">📅 ${formatearFecha(t.fecha)}</div>
                ${t.notas ? `<p style="color:#666;font-size:0.9rem;">${t.notas}</p>` : ''}
                <div class="tarea-acciones">
                    <button class="btn-accion btn-completar" onclick="abrirCompletar('${t.id}')">✓ Completar</button>
                    <button class="btn-accion btn-editar" onclick="editarTarea('${t.id}')">Editar</button>
                    <button class="btn-accion btn-eliminar" onclick="eliminarTarea('${t.id}')">Eliminar</button>
                </div>
            </div>
        `;
    }).join('');
}

// Filtros
function initFiltros() {
    document.querySelectorAll('.filtro').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filtro').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderTareas(btn.dataset.filtro);
        });
    });
}

// Editar tarea
function editarTarea(id) {
    const tarea = tareas.find(t => t.id === id);
    document.getElementById('tarea-id').value = tarea.id;
    document.getElementById('tarea-nombre').value = tarea.nombre;
    document.getElementById('tarea-sistema').value = tarea.sistema;
    document.getElementById('tarea-frecuencia').value = tarea.frecuencia;
    document.getElementById('tarea-fecha').value = tarea.fecha;
    document.getElementById('tarea-costo').value = tarea.costo;
    document.getElementById('tarea-notas').value = tarea.notas || '';
    document.getElementById('modal-tarea-titulo').textContent = 'Editar Tarea';
    document.getElementById('modal-tarea').style.display = 'block';
}

// Eliminar tarea
function eliminarTarea(id) {
    if (confirm('¿Eliminar esta tarea?')) {
        tareas = tareas.filter(t => t.id !== id);
        localStorage.setItem('tareas', JSON.stringify(tareas));
        renderTareas();
        renderCalendario();
    }
}

// Abrir modal completar
function abrirCompletar(id) {
    const tarea = tareas.find(t => t.id === id);
    document.getElementById('completar-id').value = id;
    document.getElementById('completar-nombre-tarea').textContent = tarea.nombre;
    document.getElementById('completar-fecha').value = new Date().toISOString().split('T')[0];
    document.getElementById('completar-costo').value = tarea.costo;
    
    const selectProv = document.getElementById('completar-proveedor');
    selectProv.innerHTML = '<option value="">Ninguno / Yo mismo</option>' +
        proveedores.map(p => `<option value="${p.id}">${p.nombre}</option>`).join('');
    
    document.getElementById('modal-completar').style.display = 'block';
}

// Completar tarea
function completarTarea(e) {
    e.preventDefault();
    const id = document.getElementById('completar-id').value;
    const tarea = tareas.find(t => t.id === id);
    
    const registro = {
        id: Date.now().toString(),
        tareaId: id,
        nombre: tarea.nombre,
        sistema: tarea.sistema,
        fechaCompletada: document.getElementById('completar-fecha').value,
        costo: parseFloat(document.getElementById('completar-costo').value),
        proveedorId: document.getElementById('completar-proveedor').value,
        notas: document.getElementById('completar-notas').value
    };
    
    historial.push(registro);
    localStorage.setItem('historial', JSON.stringify(historial));
    
    // Reprogramar si es recurrente
    if (tarea.frecuencia !== 'unica') {
        const nuevaFecha = calcularProximaFecha(tarea.fecha, tarea.frecuencia);
        tarea.fecha = nuevaFecha;
        localStorage.setItem('tareas', JSON.stringify(tareas));
    } else {
        tareas = tareas.filter(t => t.id !== id);
        localStorage.setItem('tareas', JSON.stringify(tareas));
    }
    
    document.getElementById('modal-completar').style.display = 'none';
    renderTareas();
    renderHistorial();
    renderCalendario();
}

// Calcular próxima fecha
function calcularProximaFecha(fechaStr, frecuencia) {
    const fecha = new Date(fechaStr + 'T00:00:00');
    switch (frecuencia) {
        case 'mensual': fecha.setMonth(fecha.getMonth() + 1); break;
        case 'trimestral': fecha.setMonth(fecha.getMonth() + 3); break;
        case 'semestral': fecha.setMonth(fecha.getMonth() + 6); break;
        case 'anual': fecha.setFullYear(fecha.getFullYear() + 1); break;
    }
    return fecha.toISOString().split('T')[0];
}

// Calendario
function initCalendario() {
    document.getElementById('mes-anterior').addEventListener('click', () => {
        fechaActual.setMonth(fechaActual.getMonth() - 1);
        renderCalendario();
    });
    document.getElementById('mes-siguiente').addEventListener('click', () => {
        fechaActual.setMonth(fechaActual.getMonth() + 1);
        renderCalendario();
    });
    renderCalendario();
}

function renderCalendario() {
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
                   'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    const dias = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
    
    document.getElementById('mes-actual').textContent = 
        `${meses[fechaActual.getMonth()]} ${fechaActual.getFullYear()}`;
    
    const grid = document.getElementById('calendario-grid');
    let html = dias.map(d => `<div class="dia-header">${d}</div>`).join('');
    
    const primerDia = new Date(fechaActual.getFullYear(), fechaActual.getMonth(), 1);
    const ultimoDia = new Date(fechaActual.getFullYear(), fechaActual.getMonth() + 1, 0);
    const hoy = new Date();
    
    // Días del mes anterior
    for (let i = 0; i < primerDia.getDay(); i++) {
        const dia = new Date(primerDia);
        dia.setDate(dia.getDate() - (primerDia.getDay() - i));
        html += `<div class="dia otro-mes">${dia.getDate()}</div>`;
    }
    
    // Días del mes actual
    for (let d = 1; d <= ultimoDia.getDate(); d++) {
        const fechaStr = `${fechaActual.getFullYear()}-${String(fechaActual.getMonth() + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
        const tieneTareas = tareas.some(t => t.fecha === fechaStr);
        const esHoy = hoy.toISOString().split('T')[0] === fechaStr;
        
        html += `<div class="dia ${esHoy ? 'hoy' : ''} ${tieneTareas ? 'tiene-tareas' : ''}" 
                     onclick="mostrarTareasDia('${fechaStr}')">${d}</div>`;
    }
    
    grid.innerHTML = html;
}

function mostrarTareasDia(fechaStr) {
    const tareasDia = tareas.filter(t => t.fecha === fechaStr);
    const lista = document.getElementById('lista-tareas-dia');
    
    if (tareasDia.length === 0) {
        lista.innerHTML = '<p style="color:#666;">No hay tareas este día</p>';
    } else {
        lista.innerHTML = tareasDia.map(t => `
            <div class="tarea-card">
                <strong>${t.nombre}</strong>
                <span class="tarea-sistema">${t.sistema}</span>
            </div>
        `).join('');
    }
}

// Proveedores
function guardarProveedor(e) {
    e.preventDefault();
    const id = document.getElementById('proveedor-id').value;
    const proveedor = {
        id: id || Date.now().toString(),
        nombre: document.getElementById('proveedor-nombre').value,
        servicio: document.getElementById('proveedor-servicio').value,
        telefono: document.getElementById('proveedor-telefono').value,
        email: document.getElementById('proveedor-email').value,
        notas: document.getElementById('proveedor-notas').value
    };

    if (id) {
        const index = proveedores.findIndex(p => p.id === id);
        proveedores[index] = proveedor;
    } else {
        proveedores.push(proveedor);
    }

    localStorage.setItem('proveedores', JSON.stringify(proveedores));
    document.getElementById('modal-proveedor').style.display = 'none';
    renderProveedores();
}

function renderProveedores() {
    const lista = document.getElementById('lista-proveedores');
    
    if (proveedores.length === 0) {
        lista.innerHTML = '<p style="text-align:center;color:#666;padding:2rem;">No hay proveedores registrados</p>';
        return;
    }
    
    lista.innerHTML = proveedores.map(p => `
        <div class="proveedor-card">
            <h3>${p.nombre}</h3>
            <div class="proveedor-info">
                <p>🔧 ${p.servicio}</p>
                ${p.telefono ? `<p>📞 <a href="tel:${p.telefono}">${p.telefono}</a></p>` : ''}
                ${p.email ? `<p>✉️ <a href="mailto:${p.email}">${p.email}</a></p>` : ''}
                ${p.notas ? `<p>📝 ${p.notas}</p>` : ''}
            </div>
            <div class="tarea-acciones" style="margin-top:0.5rem;">
                <button class="btn-accion btn-editar" onclick="editarProveedor('${p.id}')">Editar</button>
                <button class="btn-accion btn-eliminar" onclick="eliminarProveedor('${p.id}')">Eliminar</button>
            </div>
        </div>
    `).join('');
}

function editarProveedor(id) {
    const p = proveedores.find(pr => pr.id === id);
    document.getElementById('proveedor-id').value = p.id;
    document.getElementById('proveedor-nombre').value = p.nombre;
    document.getElementById('proveedor-servicio').value = p.servicio;
    document.getElementById('proveedor-telefono').value = p.telefono || '';
    document.getElementById('proveedor-email').value = p.email || '';
    document.getElementById('proveedor-notas').value = p.notas || '';
    document.getElementById('modal-proveedor-titulo').textContent = 'Editar Proveedor';
    document.getElementById('modal-proveedor').style.display = 'block';
}

function eliminarProveedor(id) {
    if (confirm('¿Eliminar este proveedor?')) {
        proveedores = proveedores.filter(p => p.id !== id);
        localStorage.setItem('proveedores', JSON.stringify(proveedores));
        renderProveedores();
    }
}

// Historial
function renderHistorial() {
    const lista = document.getElementById('lista-historial');
    const stats = document.getElementById('stats-costos');
    
    const total = historial.reduce((sum, h) => sum + h.costo, 0);
    stats.textContent = `Total gastado: $${total.toFixed(2)}`;
    
    if (historial.length === 0) {
        lista.innerHTML = '<p style="text-align:center;color:#666;padding:2rem;">No hay historial</p>';
        return;
    }
    
    const ordenado = [...historial].sort((a, b) => 
        new Date(b.fechaCompletada) - new Date(a.fechaCompletada));
    
    lista.innerHTML = ordenado.map(h => {
        const prov = proveedores.find(p => p.id === h.proveedorId);
        return `
            <div class="historial-card">
                <div class="tarea-header">
                    <span class="tarea-nombre">${h.nombre}</span>
                    <span class="historial-costo">$${h.costo.toFixed(2)}</span>
                </div>
                <p class="historial-fecha">📅 ${formatearFecha(h.fechaCompletada)}</p>
                ${prov ? `<p style="color:#666;">🔧 ${prov.nombre}</p>` : ''}
                ${h.notas ? `<p style="color:#666;">${h.notas}</p>` : ''}
            </div>
        `;
    }).join('');
}

// Utilidades
function formatearFecha(fechaStr) {
    const fecha = new Date(fechaStr + 'T00:00:00');
    return fecha.toLocaleDateString('es-ES', { 
        weekday: 'short', 
        day: 'numeric', 
        month: 'short', 
        year: 'numeric' 
    });
}
