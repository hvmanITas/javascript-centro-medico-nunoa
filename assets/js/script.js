document.write(
  `
  <header class="py-5">
    <div class="container col-12 col-md-10 col-lg-9 col-xl-8 col-xxl-7 py-5">
      <h1 class="rounded-pill py-3 text-bg-info fw-bold">Estadísticas Centro Médico Ñuñoa</span></h1>
      <div class="col-11 text-end">
        <h2>
          <span class="fs-5">Powered by</span>
          <span class="badge text-bg-warning ff-neutraface-text text-black">JavaScript</span>
        </h2>
      </div>
    </div>
  <header>
  `
);

var radiologia = [
  {
    hora: "11:00",
    especialista: "IGNACIO SCHULZ",
    paciente: "FRANCISCA ROJAS",
    rut: "9878782-1",
    prevision: "FONASA",
  },
  {
    hora: "11:30",
    especialista: "FEDERICO SUBERCASEAUX",
    paciente: "PAMELA ESTRADA",
    rut: "15345241-3",
    prevision: "ISAPRE",
  },
  {
    hora: "15:00",
    especialista: "FERNANDO WURTHZ",
    paciente: "ARMANDO LUNA",
    rut: "16445345-9",
    prevision: "ISAPRE",
  },
  {
    hora: "15:30",
    especialista: "ANA MARIA GODOY",
    paciente: "MANUEL GODOY",
    rut: "17666419-0",
    prevision: "FONASA",
  },
  {
    hora: "16:00",
    especialista: "PATRICIA SUAZO",
    paciente: "RAMON ULLOA",
    rut: "14989389-K",
    prevision: "FONASA",
  },
];

var traumatologia = [
  {
    hora: "8:00",
    especialista: "MARIA PAZ ALTUZARRA",
    paciente: "PAULA SANCHEZ",
    rut: "15554774-5",
    prevision: "FONASA",
  },
  {
    hora: "10:00",
    especialista: "RAUL ARAYA",
    paciente: "ANGÉLICA NAVAS",
    rut: "15444147-9",
    prevision: "ISAPRE",
  },
  {
    hora: "10:30",
    especialista: "MARIA ARRIAGADA",
    paciente: "ANA KLAPP",
    rut: "17879423-9",
    prevision: "ISAPRE",
  },
  {
    hora: "11:00",
    especialista: "ALEJANDRO BADILLA",
    paciente: "FELIPE MARDONES",
    rut: "1547423-6",
    prevision: "ISAPRE",
  },
  {
    hora: "11:30",
    especialista: "CECILIA BUDNIK",
    paciente: "DIEGO MARRE",
    rut: "16554741-K",
    prevision: "FONASA",
  },
  {
    hora: "12:00",
    especialista: "ARTURO CAVAGNARO",
    paciente: "CECILIA MENDEZ",
    rut: "9747535-8",
    prevision: "ISAPRE",
  },
  {
    hora: "12:30",
    especialista: "ANDRES KANACRI",
    paciente: "MARCIAL SUAZO",
    rut: "11254785-5",
    prevision: "ISAPRE",
  },
];

var dental = [
  {
    hora: "8:30",
    especialista: "ANDREA ZUÑIGA",
    paciente: "MARCELA RETAMAL",
    rut: "11123425-6",
    prevision: "ISAPRE",
  },
  {
    hora: "11:00",
    especialista: "MARIA PIA ZAÑARTU",
    paciente: "ANGEL MUÑOZ",
    rut: "9878789-2",
    prevision: "ISAPRE",
  },
  {
    hora: "11:30",
    especialista: "SCARLETT WITTING",
    paciente: "MARIO KAST",
    rut: "7998789-5",
    prevision: "FONASA",
  },
  {
    hora: "13:00",
    especialista: "FRANCISCO VON TEUBER",
    paciente: "KARIN FERNANDEZ",
    rut: "18887662-K",
    prevision: "FONASA",
  },
  {
    hora: "13:30",
    especialista: "EDUARDO VIÑUELA",
    paciente: "HUGO SANCHEZ",
    rut: "17665461-4",
    prevision: "FONASA",
  },
  {
    hora: "14:00",
    especialista: "RAQUEL VILLASECA",
    paciente: "ANA SEPULVEDA",
    rut: "14441281-0",
    prevision: "ISAPRE",
  },
];

// Se agregan las horas solicitadas al array de traumatología

traumatologia.push(
  {
    hora: "9:00",
    especialista: "RENÉ POBLETE",
    paciente: "ANA GELLONA",
    rut: "13123329-7",
    prevision: "ISAPRE",
  },
  {
    hora: "9:30",
    especialista: "MARÍA SOLAR",
    paciente: "RAMIRO ANDRADE",
    rut: "12221451-K",
    prevision: "FONASA",
  },
  {
    hora: "10:00",
    especialista: "RAÚL LOYOLA",
    paciente: "CARMEN ISLA",
    rut: "10112348-3",
    prevision: "ISAPRE",
  },
  {
    hora: "10:30",
    especialista: "ANTONIO LARENAS",
    paciente: "PABLO LOAYZA",
    rut: "13453234-1",
    prevision: "ISAPRE",
  },
  {
    hora: "12:00",
    especialista: "MATÍAS ARAVENA",
    paciente: "SUSANA POBLETE",
    rut: "14345656-6",
    prevision: "FONASA",
  }
);

// Se ordena el array en base a traumatologia.hora para que la información renderizada sea la correcta
// Se puede comparar traumatologia.hora sin considerar el carácter ':' utilizando split() y join()

traumatologia.sort((a, b) => {
  let horaA = a.hora.split(":").join("");
  let horaB = b.hora.split(":").join("");
  return horaA - horaB;
});

// Se eliminan el primer y el úlitmo elemento del array de radiología

radiologia.shift();
radiologia.pop();

// Se imprime la lista de consultas dentales

dental.forEach((consulta) => {
  if (consulta == dental[0]) {
    document.write(
      `
      <section class="py-5">
        <table class="table-dark col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6 border border-light mx-auto">
          <thead>
            <tr>
              <th scope="col">
                <h3 class="my-2">Consultas dentales</h3>
              </th>
            </tr>
          </thead>
          <tbody>
      `
    );
  }
  document.write(
    `
    <tr class="border">
      <td>
        <p class="my-2">
          ${consulta.hora}
          - ${consulta.especialista}
          - ${consulta.paciente}
          - ${consulta.rut}
          - ${consulta.prevision}
        </p>
      </td>
    </tr>
    `
  );
  if (consulta == dental[dental.length - 1]) {
    document.write(
      `
          </tbody>
        </table>
      </section>
      `
    );
  }
});

// Se crea un array que contenga los nombres de todos los pacientes en orden alfabético

let pacientes = [];

radiologia.forEach((paciente) => {
  pacientes.push(paciente.paciente);
});

traumatologia.forEach((paciente) => {
  pacientes.push(paciente.paciente);
});

dental.forEach((paciente) => {
  pacientes.push(paciente.paciente);
});

pacientes.sort();

// Se imprime la lista de todos los pacientes

pacientes.forEach((paciente) => {
  if (paciente == pacientes[0]) {
    document.write(
      `
      <section class="py-5">
        <table class="table-dark col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6 border border-light mx-auto">
          <thead>
            <tr>
              <th scope="col">
                <h3 class="my-2">Pacientes atendidos</h3>
              </th>
            </tr>
          </thead>
          <tbody>
      `
    );
  }
  document.write(
    `
    <tr class="border">
      <td>
        <p class="my-2">
          ${paciente}
        </p>
      </td>
    </tr>
    `
  );
  if (paciente == pacientes[pacientes.length - 1]) {
    document.write(
      `
          </tbody>
        </table>
      </section>
      `
    );
  }
});

// Se filtran los pacientes de dental con previsión Isapre

const dentalIsapre = dental.filter(
  (paciente) => paciente.prevision === "ISAPRE"
);

dentalIsapre.forEach((paciente) => {
  if (paciente == dentalIsapre[0]) {
    document.write(
      `
        <section class="py-5">
          <table class="table-dark col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6 border border-light mx-auto">
            <thead>
              <tr>
                <th scope="col">
                  <h3 class="my-2">Pacientes de dental con Isapre</h3>
                </th>
              </tr>
            </thead>
            <tbody>
        `
    );
  }
  document.write(
    `
      <tr class="border">
      <td>
        <p class="my-2">
          ${paciente.paciente}
          - ${paciente.prevision}
        </p>
      </td>
      </tr>
      `
  );
  if (paciente == dentalIsapre[dentalIsapre.length - 1]) {
    document.write(
      `
            </tbody>
          </table>
        </section>
        `
    );
  }
});

// Se filtran los pacientes de traumatología con previsión Fonasa

const traumatologiaFonasa = traumatologia.filter(
  (paciente) => paciente.prevision === "FONASA"
);

traumatologiaFonasa.forEach((paciente) => {
  if (paciente == traumatologiaFonasa[0]) {
    document.write(
      `
      <section class="py-5">
        <table class="table-dark col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6 border border-light mx-auto">
          <thead>
            <tr>
              <th scope="col">
                <h3 class="my-2">Pacientes de traumatología con Fonasa</h3>
              </th>
            </tr>
          </thead>
          <tbody>
      `
    );
  }
  document.write(
    `
      <tr class="border">
        <td>
          <p class="my-2">
            ${paciente.paciente}
            - ${paciente.prevision}
          </p>
        </td>
      </tr>
      `
  );
  if (paciente == traumatologiaFonasa[traumatologiaFonasa.length - 1]) {
    document.write(
      `
            </tbody>
          </table>
        </section>
        `
    );
  }
});

document.write(
  `
  <section class="py-5">
    <table class="table-dark col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6 border border-light mx-auto">
      <thead>
        <tr>
          <th scope="col">
            <h3 class="my-2">Atenciones por especialidad</h3>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="border">
          <td>
            <p class="my-2">
              Cantidad de atenciones para Radiología:
              ${radiologia.length}
            </p>
          </td>
        </tr>
        <tr class="border">
          <td>
            <p class="my-2">
              Cantidad de atenciones para Traumatología:
              ${traumatologia.length}
            </p>
          </td>
        </tr>
        <tr class="border">
          <td>
            <p class="my-2">
              Cantidad de atenciones para Dental:
              ${dental.length}
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
  <section class="py-5">
    <table class="table-dark col-12 col-md-11 col-lg-9 col-xl-7 col-xxl-6 border border-light mx-auto">
      <thead>
        <tr>
          <th scope="col">
            <h3 class="my-2">Atención inicial y final por especialidad</h3>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="border">
          <td>
            <p class="my-2">
              Primera atención:
              ${radiologia[0].paciente}
              - ${radiologia[0].prevision}
              | Última atención:
              ${radiologia[radiologia.length - 1].paciente}
              - ${radiologia[radiologia.length - 1].prevision}.
            </p>
          </td>
        </tr>
        <tr class="border">
          <td>
            <p class="my-2">
              Primera atención:
              ${traumatologia[0].paciente}
              - ${traumatologia[0].prevision} 
              | Última atención:
              ${traumatologia[traumatologia.length - 1].paciente}
              - ${traumatologia[traumatologia.length - 1].prevision}.
            </p>
          </td>
        </tr>
        <tr class="border">
          <td>
            <p class="my-2">
              Primera atención:
              ${dental[0].paciente}
              - ${dental[0].prevision} 
              | Última atención:
              ${dental[dental.length - 1].paciente}
              - ${dental[dental.length - 1].prevision}.
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
  `
);
