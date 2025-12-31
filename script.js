/* DATOS DE LA MALLA CON CRÉDITOS */
// NOTA: He puesto creditos: 5 o 10 como ejemplo. ¡Debes poner los reales!

const subjectsData = [
    // --- SEMESTRE 1 ---
    { id: 's1_biocel', sem: 1, name: 'Biología Celular', credits: 6, req: [] },
    { id: 's1_quimica', sem: 1, name: 'Química General y Orgánica', credits: 6, req: [] },
    { id: 's1_fisica', sem: 1, name: 'Bases Físico-Matemáticas', credits: 5, req: [] },
    { id: 's1_bases', sem: 1, name: 'Bases y Fundamentos', credits: 4, req: [] },
    { id: 's1_abp1', sem: 1, name: 'Integración ABP I', credits: 5, req: [] },
    { id: 's1_estrategias', sem: 1, name: 'Estrategias Aprendizaje', credits: 3, req: [] },

    // --- SEMESTRE 2 ---
    { id: 's2_biomol', sem: 2, name: 'Biología Mol. y Genética', credits: 6, req: ['s1_biocel'] },
    { id: 's2_bioquim', sem: 2, name: 'Bioquímica General', credits: 6, req: ['s1_biocel', 's1_quimica'] },
    { id: 's2_soporte', sem: 2, name: 'Soporte Básico Vital', credits: 3, req: ['s1_biocel'] },
    { id: 's2_historia', sem: 2, name: 'Historia de la Medicina', credits: 3, req: ['s1_bases'] },
    { id: 's2_morfo1', sem: 2, name: 'Morfología Integrada I', credits: 7, req: ['s1_abp1'] },
    { id: 's2_abp2', sem: 2, name: 'Integración ABP II', credits: 5, req: ['s1_abp1'] },
    { id: 's2_antro', sem: 2, name: 'Antropología', credits: 3, req: [] },

    // --- SEMESTRE 3 ---
    { id: 's3_bioest', sem: 3, name: 'Bioestadística y MBE', credits: 5, req: [] },
    { id: 's3_micro', sem: 3, name: 'Microbiología Médica', credits: 6, req: ['s2_soporte', 's2_biomol'] },
    { id: 's3_fisio', sem: 3, name: 'Fisiología Médica', credits: 8, req: ['s2_biomol', 's2_morfo1', 's2_bioquim'] },
    { id: 's3_psico', sem: 3, name: 'Psicología Aplicada', credits: 4, req: ['s2_historia'] },
    { id: 's3_morfo2', sem: 3, name: 'Morfología Integrada II', credits: 7, req: ['s2_morfo1', 's2_biomol'] },
    { id: 's3_etica', sem: 3, name: 'Ética', credits: 3, req: ['s2_antro'] },

    // --- SEMESTRE 4 ---
    { id: 's4_fisiopat', sem: 4, name: 'Fisiopatología Médica', credits: 7, req: ['s3_fisio'] },
    { id: 's4_saludpop', sem: 4, name: 'Salud Poblacional', credits: 5, req: ['s3_bioest'] },
    { id: 's4_morfo3', sem: 4, name: 'Morfología Integrada III', credits: 7, req: ['s3_fisio', 's3_morfo2'] },
    { id: 's4_razon1', sem: 4, name: 'Razonamiento Clínico I', credits: 5, req: ['s3_fisio', 's3_morfo2'] },
    { id: 's4_electivo2', sem: 4, name: 'Electivo Integral II', credits: 3, req: [] },

    // --- SEMESTRE 5 ---
    { id: 's5_semio1', sem: 5, name: 'Semiología I', credits: 8, req: ['s4_fisiopat', 's4_morfo3', 's4_razon1', 's1_bases'] },
    { id: 's5_patol', sem: 5, name: 'Patología Médica', credits: 6, req: ['s3_micro', 's4_morfo3'] },
    { id: 's5_epidem', sem: 5, name: 'Epidemiología', credits: 5, req: ['s4_saludpop'] },
    { id: 's5_bioetica', sem: 5, name: 'Bioética', credits: 3, req: ['s4_razon1'] },
    { id: 's5_electivo1', sem: 5, name: 'Electivo Integral I', credits: 3, req: ['s3_etica'] },
    { id: 's5_electivo2b', sem: 5, name: 'Electivo Integral III', credits: 3, req: [] },

    // --- SEMESTRE 6 ---
    { id: 's6_semio2', sem: 6, name: 'Semiología II', credits: 8, req: ['s5_semio1', 's5_patol'] },
    { id: 's6_farmaco', sem: 6, name: 'Farmacología General', credits: 5, req: ['s5_patol'] },
    { id: 's6_metod', sem: 6, name: 'Metodología Inv.', credits: 4, req: ['s3_bioest'] },
    { id: 's6_saludig', sem: 6, name: 'Salud Digital', credits: 3, req: ['s5_semio1'] },
    { id: 's6_razon2', sem: 6, name: 'Razonamiento Clínico II', credits: 5, req: ['s5_semio1', 's5_patol'] },
    { id: 's6_electivo4', sem: 6, name: 'Electivo Integral IV', credits: 3, req: [] },

    // --- SEMESTRE 7 ---
    { id: 's7_medint1', sem: 7, name: 'Medicina Interna I', credits: 10, req: ['s6_semio2', 's6_razon2', 's3_micro'] },
    { id: 's7_ciru1', sem: 7, name: 'Cirugía I', credits: 9, req: ['s6_semio2', 's6_razon2', 's3_micro'] },
    { id: 's7_psiq1', sem: 7, name: 'Psiquiatría I', credits: 6, req: ['s6_semio2', 's6_razon2', 's3_micro'] },
    { id: 's7_pueblos', sem: 7, name: 'Salud Pueblos Orig.', credits: 3, req: ['s6_razon2'] },

    // --- SEMESTRE 8 ---
    { id: 's8_medint2', sem: 8, name: 'Medicina Interna II', credits: 10, req: ['s7_medint1'] },
    { id: 's8_ciru2', sem: 8, name: 'Cirugía II', credits: 9, req: ['s7_ciru1'] },
    { id: 's8_psiq2', sem: 8, name: 'Psiquiatría II', credits: 6, req: ['s7_psiq1'] },
    { id: 's8_legal', sem: 8, name: 'Medicina Legal', credits: 4, req: ['s7_pueblos'] },

    // --- SEMESTRE 9 ---
    { id: 's9_ped1', sem: 9, name: 'Pediatría I', credits: 9, req: ['s8_medint2', 's8_psiq2', 's8_legal'] },
    { id: 's9_gine1', sem: 9, name: 'Ginecología - Obst. I', credits: 9, req: ['s8_medint2', 's8_ciru2', 's8_legal'] },
    { id: 's9_espec1', sem: 9, name: 'Especialidades I', credits: 5, req: ['s8_medint2'] },
    { id: 's9_medfam', sem: 9, name: 'Medicina Familiar', credits: 6, req: ['s8_medint2'] },
    { id: 's9_paliat', sem: 9, name: 'Cuidados Paliativos', credits: 3, req: ['s8_medint2', 's8_ciru2', 's8_psiq2', 's8_legal'] },
    { id: 's9_saludap', sem: 9, name: 'Salud Pob. Aplicada', credits: 3, req: ['s8_legal'] },

    // --- SEMESTRE 10 ---
    { id: 's10_ped2', sem: 10, name: 'Pediatría II', credits: 9, req: ['s9_ped1'] },
    { id: 's10_gine2', sem: 10, name: 'Ginecología - Obst. II', credits: 9, req: ['s9_gine1'] },
    { id: 's10_espec2', sem: 10, name: 'Especialidades II', credits: 5, req: ['s9_medfam', 's9_paliat'] },
    { id: 's10_urg', sem: 10, name: 'Medicina Urgencia', credits: 6, req: ['s9_ped1', 's9_gine1', 's9_paliat'] },
    { id: 's10_razon3', sem: 10, name: 'Razonamiento Clínico III', credits: 5, req: ['s9_medfam', 's9_paliat'] },

    // --- INTERNADOS (Creditos altos) ---
    { id: 's11_int_med', sem: 11, name: 'Int. Med. Interna', credits: 20, req: ['LICENCIATURA'] },
    { id: 's11_int_ped', sem: 11, name: 'Int. Pediatría', credits: 20, req: ['LICENCIATURA'] },

    { id: 's12_int_ment', sem: 12, name: 'Int. Salud Mental', credits: 15, req: ['LICENCIATURA'] },
    { id: 's12_int_fam', sem: 12, name: 'Int. Med. Familiar', credits: 15, req: ['LICENCIATURA'] },
    { id: 's12_int_elec1', sem: 12, name: 'Int. Electivo I', credits: 10, req: ['LICENCIATURA'] },

    { id: 's13_int_esp', sem: 13, name: 'Int. Esp. Med. Interna', credits: 15, req: ['s11_int_med', 's12_int_ment'] },
    { id: 's13_int_cir', sem: 13, name: 'Int. Cirugía', credits: 15, req: ['s11_int_med'] },
    { id: 's13_int_elec2', sem: 13, name: 'Int. Electivo II', credits: 10, req: ['s11_int_ped', 's12_int_fam'] },

    { id: 's14_int_gine', sem: 14, name: 'Int. Ginecología', credits: 15, req: ['s13_int_esp', 's13_int_cir'] },
    { id: 's14_int_urg', sem: 14, name: 'Int. Urgencia', credits: 15, req: ['s11_int_med', 's11_int_ped', 's13_int_cir', 's12_int_fam'] },
    { id: 's14_razon4', sem: 14, name: 'Razonamiento IV', credits: 5, req: ['s13_int_esp', 's13_int_cir', 's13_int_elec2'] }
];

/* ESTADO (Ahora es un Objeto ID -> Nota) */
// "grades" guardará algo como: { 's1_biocel': 6.5, 's1_quimica': 5.0 }
let grades = JSON.parse(localStorage.getItem('medicalGrades')) || {};

// Variables temporales para el modal
let currentSubjectId = null;

function init() {
    renderMalla();
    updateGPA();
}

function checkLicenciatura() {
    const basicCycle = subjectsData.filter(s => s.sem <= 10);
    // Verificar si cada ramo del ciclo básico tiene una entrada en 'grades'
    return basicCycle.every(s => grades.hasOwnProperty(s.id));
}

function isUnlocked(subject) {
    if (subject.req.includes('LICENCIATURA')) {
        return checkLicenciatura();
    }
    const realReqs = subject.req.filter(r => r !== 'LICENCIATURA');
    return realReqs.every(reqId => grades.hasOwnProperty(reqId));
}

function getMissingRequisites(subject) {
    let missing = [];
    if (subject.req.includes('LICENCIATURA')) {
        if (!checkLicenciatura()) missing.push("Licenciatura completa (Sem 1-10)");
    }
    subject.req.filter(r => r !== 'LICENCIATURA').forEach(reqId => {
        if (!grades.hasOwnProperty(reqId)) {
            const reqSubject = subjectsData.find(s => s.id === reqId);
            if (reqSubject) missing.push(reqSubject.name);
        }
    });
    return missing;
}

// Renderizado principal
function renderMalla() {
    const container = document.getElementById('malla-container');
    container.innerHTML = ''; 

    for (let i = 1; i <= 14; i++) {
        const semesterCol = document.createElement('div');
        semesterCol.className = 'semester-column';
        
        const title = document.createElement('div');
        title.className = 'semester-title';
        title.textContent = `Sem ${i}`;
        semesterCol.appendChild(title);

        const semesterSubjects = subjectsData.filter(s => s.sem === i);

        semesterSubjects.forEach(sub => {
            const card = document.createElement('div');
            card.className = 'subject-card';
            card.textContent = sub.name;
            
            const isApproved = grades.hasOwnProperty(sub.id);
            const unlocked = isUnlocked(sub);

            if (isApproved) {
                card.classList.add('approved');
                // Mostrar nota
                const badge = document.createElement('div');
                badge.className = 'grade-badge';
                badge.textContent = grades[sub.id]; // La nota
                card.appendChild(badge);
            } else if (!unlocked) {
                card.classList.add('locked');
                card.title = "Faltan requisitos";
            }

            // Click: o abre modal de nota (si no aprobado) o confirma borrado
            card.onclick = () => handleSubjectClick(sub, isApproved, unlocked);
            semesterCol.appendChild(card);
        });

        container.appendChild(semesterCol);
    }
}

// Manejo del Clic
function handleSubjectClick(subject, isApproved, isUnlocked) {
    const modal = document.getElementById('modal');
    const title = document.getElementById('modal-title');
    const msg = document.getElementById('modal-message');
    const inputContainer = document.getElementById('grade-input-container');
    const input = document.getElementById('grade-input');

    // 1. Si ya está aprobado: Confirmar borrado
    if (isApproved) {
        if(confirm(`¿Deseas eliminar la nota de "${subject.name}"?`)){
            delete grades[subject.id];
            saveAndRender();
        }
        return;
    }

    // 2. Si está bloqueado: Mostrar alerta
    if (!isUnlocked) {
        title.textContent = "Ramo Bloqueado";
        const missing = getMissingRequisites(subject);
        msg.innerHTML = `Requisitos pendientes:<br>• ${missing.join('<br>• ')}`;
        inputContainer.style.display = 'none';
        modal.style.display = 'block';
        return;
    }

    // 3. Si está disponible: Pedir nota
    currentSubjectId = subject.id;
    title.textContent = `Aprobar: ${subject.name}`;
    msg.textContent = ""; // Limpiar mensaje
    input.value = ""; // Limpiar input
    inputContainer.style.display = 'block';
    modal.style.display = 'block';
    input.focus();
}

// Confirmar Nota desde el Modal
function confirmGrade() {
    const input = document.getElementById('grade-input');
    let val = parseFloat(input.value); // Permitimos decimales

    if (isNaN(val) || val < 1.0 || val > 7.0) {
        alert("Por favor ingresa una nota válida (1.0 - 7.0)");
        return;
    }

    if (currentSubjectId) {
        grades[currentSubjectId] = val; // Guardar nota
        closeModal();
        saveAndRender();
    }
}

// Calculo de Promedio Ponderado
function updateGPA() {
    let sumProduct = 0; // Nota * Creditos
    let sumCredits = 0; // Total Creditos aprobados

    for (const [id, grade] of Object.entries(grades)) {
        const subject = subjectsData.find(s => s.id === id);
        if (subject) {
            sumProduct += (grade * subject.credits);
            sumCredits += subject.credits;
        }
    }

    const gpaElement = document.getElementById('gpa-value');
    if (sumCredits === 0) {
        gpaElement.textContent = "--";
    } else {
        const gpa = sumProduct / sumCredits;
        gpaElement.textContent = gpa.toFixed(2); // 2 decimales
    }
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
    currentSubjectId = null;
}

window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        closeModal();
    }
}

function saveAndRender() {
    localStorage.setItem('medicalGrades', JSON.stringify(grades));
    renderMalla();
    updateGPA();
}

function resetProgress() {
    if(confirm("¿Borrar todas las notas y el progreso?")) {
        grades = {};
        saveAndRender();
    }
}

// Soporte para tecla Enter en el input
document.getElementById('grade-input').addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        confirmGrade();
    }
});

document.addEventListener('DOMContentLoaded', init);

