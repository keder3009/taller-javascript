function config() {
  let option = parseInt(prompt(`Configuracion del Software de Nómina
    1. Seleccione idioma
    2. Configurar
    3. Continuar
    0. Salir`));
  return option;
}
function idioma() {
  let option = parseInt(prompt(`Configuracion del Software de Nómina
       Seleccione idioma del software
    1. Español
    2. English
    0. Salir`));
  return option;
}
function configuration() {
  let option = parseInt(prompt(`Configuracion del Software de Nómina
    1. Nombre de la empresa
    2. Salario minimo
    3. A partir de cuantos salarios minimos se cobra retencion en la fuente
    4. Porcentaje de retencion en la fuente
    5. Hasta cuantos salarios minimos son necesarios para pagar auxilio de transporte
    6. Cuanto es el auxilio de transporte
    7. Cantidad de horas laborables al mes
    8. Volver
    0. Salir del programa`));
  return option;
}
var configG = [];
function name() {
  let name = prompt('Por favor digite el nombre de tu empresa');
  global = {
    name
  };
  configG = JSON.parse(localStorage.getItem('config'));
  if (JSON.parse(localStorage.getItem('config')) === null) {
    configG = [
      global
    ];
  } else {
    configG.push(global);
  }
  localStorage.setItem('config', JSON.stringify(configG));
  validateConfiguration();
  return configG;
}
function salaryMin() {
  let salary = parseInt(prompt('Por favor digite el salario de tu empresa'));
  global = {
    salary
  };
  configG = JSON.parse(localStorage.getItem('config'));
  if (JSON.parse(localStorage.getItem('config')) === null) {
    configG = [
      global
    ];
  } else {
    configG.push(global);
  }
  localStorage.setItem('config', JSON.stringify(configG));
  validateConfiguration();
  return configG;
}
function minRetention() {
  let mRetention = parseInt(prompt('Apartir de cuantos salarios minimos se cobrara retencion en la fuente?'));
  global = {
    mRetention
  };
  configG = JSON.parse(localStorage.getItem('config'));
  if (JSON.parse(localStorage.getItem('config')) === null) {
    configG = [global];
  } else {
    configG.push(global);
  }
  localStorage.setItem('config', JSON.stringify(configG));
  validateConfiguration();
  return configG;
}
function percentage() {
  let percentageR = parseInt(prompt('Porcentaje de retencion en la fuente? (%)'));
  global = {percentageR};
  configG = JSON.parse(localStorage.getItem('config'));
  if (JSON.parse(localStorage.getItem('config')) === null) {
    configG = [global];
  } else {
    configG.push(global);
  }
  localStorage.setItem('config', JSON.stringify(configG));
  validateConfiguration();
  return configG;
}
function maxSalary() {
  let mSalary = parseInt(prompt('Hasta cuantos salarios minimos son necesarios para pagar auxilio de transporte?'));
  global = {mSalary};
  configG = JSON.parse(localStorage.getItem('config'));
  if (JSON.parse(localStorage.getItem('config')) === null) {
    configG = [global];
  } else {
    configG.push(global);
  }
  localStorage.setItem('config', JSON.stringify(configG));
  validateConfiguration();
  return configG;
}
function aux() {
  let aux = parseInt(prompt('Cuanto es el auxilio de transporte?'));
  global = {aux};
  configG = JSON.parse(localStorage.getItem('config'));
  if (JSON.parse(localStorage.getItem('config')) === null) {
    configG = [global];
  } else {
    configG.push(global);
  }
  localStorage.setItem('config', JSON.stringify(configG));
  validateConfiguration();
  return configG;
}
function horasM() {
  let h = parseInt(prompt('Cantidad de horas laborables al mes?'));
  global = {h};
  configG = JSON.parse(localStorage.getItem('config'));
  if (JSON.parse(localStorage.getItem('config')) === null) {
    configG = [global];
  } else {
    configG.push(global);
  }
  localStorage.setItem('config', JSON.stringify(configG));
  validateConfiguration();
  return configG;
}
function validateConfiguration() {
  let option = configuration();
  switch (option) {
    case 1:
      name();
      break;
    case 2:
      salaryMin();
      break;
    case 3:
      minRetention();
      break;
    case 4:
      percentage();
      break;
    case 5:
      maxSalary();
      break;
    case 6:
      aux();
      break;
    case 7:
      horasM();
      break;
    case 8:
      validate();
      break;
    case 0:
      alert('Bay');
      break;
    default:
      alert('Seleccione una opcion correcta');
      validateConfiguration();
      break;
  }
}
function continuar() {
  let option = parseInt(prompt(`Software de Nómina
    1. Gestion de empleados
    2. Registrar horas laboradas
    3. Generar nomina
    4. Imprimir comprobante de pago
    0. Salir del programa`));
  return option;
}
function gestionEmpleados() {
  let option = parseInt(prompt(`
    1. Agregar
    2. Modificar
    3. Eliminar
    4. Volver
    0. Salir del programa`));
  console.clear();
  console.log(`+---------------------------------------------------------------------+`);
  console.log(`|-----Cedula-----|-----Nombre-----|-----Apellidos-----|-----Cargo-----|`);
  console.log(`+---------------------------------------------------------------------+`);
  let personal = JSON.parse(localStorage.getItem('empleados'));
  if (personal !== null) {
    let ant = 0;
    for (let i = 0; i <= personal.length - 1; i++) {
      if (personal[i + 1] !== undefined) {
        if (personal[i].cedula > personal[i + 1].cedula) {
          ant = personal[i];
          personal[i] = personal[i + 1];
          personal[i + 1] = ant;
        }
      }
    }
    for (let emple of personal) {
      if (emple !== null && emple.cedula !== undefined) {
        console.log(`|-----${emple.cedula}-----|-----${emple.nombre}-----|-----${emple.apellido}-----|-----${emple.cargo}-----|`);
      }
    }
  }
  return option;
}
function validateGestion() {
  let option = gestionEmpleados();
  switch (option) {
    case 1:
      add();
      break;
    case 2:
      edit();
      break;
    case 3:
      eliminar();
      break;
    case 4:
      validateContinuar();
      break;
    case 0:
      alert('Bay');
      break;
    default:
      alert('Seleccione una opcion correcta');
      validateGestion();
      break;
  }
}
let empleados = [];
function add() {
  empleados = JSON.parse(localStorage.getItem('empleados'));
  if (empleados === null) {
    var cont = 0;
    var cedula = prompt(`Cedula del nuevo empleado?`);
  } else {
    var cedula = parseInt(prompt(`Cedula del nuevo empleado?`));
    let flag = false;
    var cont = 0;
    for (let emple of empleados) {
      for (let flag in emple) {
        if (emple[flag] === cedula) {
          cont++;
          alert('El empleado ya esta registrado');
          validateGestion();
          break;
        } else {
          cont = 0;
        }
      }
    }
  }
  if (cont === 0) {
    let nombre = prompt(`Nombre del nuevo empleado?`);
    let apellido = prompt(`Apellido del nuevo empleado?`);
    let cargo = prompt(`Cargo del nuevo empleado?`);
    empleados = JSON.parse(localStorage.getItem('config'));
    flag = false;
    do {
      var salario = parseInt(prompt(`Salario del nuevo empleado?`));
      for (config of empleados) {
        for (e in config) {
          if (e === 'salary') {
            flag = config[e];
          }
        }
      }
    } while (salario < flag);
    empleados = JSON.parse(localStorage.getItem('empleados'));
    let personal = {
      cedula,
      nombre,
      apellido,
      cargo,
      salario
    };
    if (empleados === null) {
      empleados = [
        personal
      ];
    } else {
      empleados.push(personal);
    }
    localStorage.setItem('empleados', JSON.stringify(empleados));
    validateGestion();
    return personal;
  }
}
function edit() {
  var empleados = JSON.parse(localStorage.getItem('empleados'));
  if (empleados === null) {
    alert('No tienes empleados registrados');
    validateGestion();
  } else {
    var object = 0;
    var c = 0;
    var cedula = parseInt(prompt(`Cedula del nuevo empleado?`));
    let flag = false;
    var cont = 0;
    for (let emple of empleados) {
      for (let flag in emple) {
        if (emple[flag] === cedula) {
          cont = 0;
          break;
        } else {
          cont++;
        }
      }
    }
    if (cont !== 0) {
      alert('El empleado no se encuentra registrado');
      validateGestion();
    }

    if (cont === 0) {
      if (empleados === null) {
        var cedula = parseInt(prompt(`Nueva cedula del empleado?`));
      } else {
        let flag = false;
        do {
          var cedula = parseInt(prompt(`Nueva cedula del empleado?`));
          for (let config of empleados) {
            for (let e in config) {
              if (config[e] === cedula) {
                flag = config[e];
              }
            }
          }
        } while (cedula === flag);
      }
      let nombre = prompt(`Nuevo nombre del empleado?`);
      let apellido = prompt(`Nuevo apellido del empleado?`);
      let cargo = prompt(`Nuevo Cargo del empleado?`);
      let configG = JSON.parse(localStorage.getItem('config'));
      flag = false;
      do {
        var salario = parseInt(prompt(`Nuevo Salario del empleado?`));
        for (config of configG) {
          for (e in config) {
            if (e === 'salary') {
              flag = config[e];
            }
          }
        }
      } while (salario < flag);
      empleados = JSON.parse(localStorage.getItem('empleados'));
      let personal = {
        cedula,
        nombre,
        apellido,
        cargo,
        salario
      };
      empleados[object] = personal;
      localStorage.setItem('empleados', JSON.stringify(empleados));
      validateGestion();
      return empleados;
    }
  }
}
function eliminar() {
  let empleados = JSON.parse(localStorage.getItem('empleados'));
  let flag = false;
  if (empleados === null) {
    alert('No hay empleados registrados');
    validateGestion();
  } else {
    let cedula = parseInt(prompt('Numero de cedula del empleado que deseas eliminar?'));
    var object = 0;
    for (let i = 0; i < empleados.length; i++) {
      for (let emple in empleados[i]) {
        if (empleados[i][emple] === cedula) {
          var object = i;
          flag = true;
          if (flag === true) {
            var con = confirm(`Deseas Eliminar a ${empleados[object].nombre} ${empleados[object].apellido}`);
            if (con) {
              flag = true;
            } else {
              flag = false;
              validateGestion();
              break;
            }
          }
        }
      }
    }
    if (!flag) {
      alert(`El numero de cedula ${cedula} no se encuentra registrado`);
    }
    if (flag) {
      empleados.splice(object, 1);
    }
    localStorage.setItem('empleados', JSON.stringify(empleados));
    validateGestion();
    return empleados;
  }
}
function hoursLab() {
  if (JSON.parse(localStorage.getItem('config')) === null || JSON.parse(localStorage.getItem('empleados')) === null) {
    alert('No tienes empleados registrados');
    validateContinuar();
  } else {
    var hoursMin = 0;
    let hoursConfig = JSON.parse(localStorage.getItem('config'));
    hoursConfig.forEach((e) => {
      for (i in e) {
        if (i === 'h') {
          hoursMin = e[i];
        }
      }
    });
    let names = '';
    JSON.parse(localStorage.getItem('config')).forEach((e) => {
      if (e.name !== undefined) {
        names = e.name;
      }
    });
    let find = parseInt(prompt('Cedula del empleado a registrar las horas?'));
    let emple = JSON.parse(localStorage.getItem('empleados'));
    var tmp = 0;
    var salary = 0;
    var id = '';
    emple.forEach((e) => {
      if (e.cedula === find) {
        id = e.cedula;
        tmp++;
        salary = e.salario;
      }
    });
    if (tmp !== 0) {
      let i = 0;
      do {
        if (i !== 0) {
          alert(`Has ingresado mas horas de las horas configuradas previamente por tu empresa ${names}`);
        }
        i++;
        var daytimeHours = parseInt(prompt('Cuantas horas diurnas has trabajado'));
      } while (daytimeHours > hoursMin);
      i = 0;
      do {
        if (i !== 0) {
          alert(`Has ingresado mas horas de las horas configuradas previamente por tu empresa ${names}`);
        }
        i++;
        var nightHours = parseInt(prompt('Cuantas horas nocturnas has trabajado'));
      } while ((nightHours > hoursMin) && ((daytimeHours + nightHours) > hoursMin));
      i = 0;
      do {
        if (i !== 0) {
          alert(`Has ingresado mas horas de las horas configuradas previamente por tu empresa ${names}`);
        }
        i++;
        var daytimeSundayHours = parseInt(prompt('Cuantas horas dominicales diurnas has trabajado'));
      } while ((daytimeSundayHours > hoursMin) && (daytimeHours + daytimeSundayHours > hoursMin) && (nightHours + daytimeSundayHours > hoursMin));
      i = 0;
      do {
        if (i !== 0) {
          alert(`Has ingresado mas horas de las horas configuradas previamente por tu empresa ${names}`);
        }
        i++;
        var nightSundayHours = parseInt(prompt('Cuantas horas dominicales nocturnas has trabajado'));
      } while ((nightSundayHours > hoursMin) && (daytimeHours + nightSundayHours > hoursMin) && (nightHours + nightSundayHours > hoursMin) && (daytimeSundayHours + nightSundayHours > hoursMin));
      let daytimeOvertime = parseInt(prompt('Cuantas horas extras diurnas has trabajado'));
      let nightOvertime = parseInt(prompt('Cuantas horas extras nocturnas has trabajado'));
      let daytimeExtraSundayHours = parseInt(prompt('Cuantas horas dominicales extra diurnas has trabajado'));
      let nightExtraSundayHours = parseInt(prompt('Cuantas horas dominicales extra nocturnas has trabajado'));
      let pHours = (salary / hoursMin);
      let hoursDay = pHours;
      let hoursNight = ((pHours * 35) / 100) + pHours;
      let daySundayHours = ((pHours * 75) / 100) + pHours;
      let sundayNightHours = ((pHours * 110) / 100) + pHours;
      let hoursExtraDay = ((pHours * 25) / 100) + pHours;
      let hoursExtraNight = ((pHours * 75) / 100) + pHours;
      let hoursSundayExtraDay = ((pHours * 100) / 100) + pHours;
      let hoursSundayExtraNight = ((pHours * 150) / 100) + pHours;

      let hoursLaborable = {
        daytimeHours,
        nightHours,
        daytimeSundayHours,
        nightSundayHours,
        daytimeOvertime,
        nightOvertime,
        daytimeExtraSundayHours,
        nightExtraSundayHours
      };
      let vHoursLab = {
        'Horas Diurnas': hoursDay * daytimeHours,
        'Horas Nocturnas': hoursNight * nightHours,
        'Horas Dominicales Diurnas': daySundayHours * daytimeSundayHours,
        'Horas Dominicales Nocturnas': sundayNightHours * nightSundayHours,
        'Horas Extra Diurnas': hoursExtraDay * daytimeOvertime,
        'Horas Extra Nocturnas': hoursExtraNight * nightOvertime,
        'Horas Dominicales Extra Diurnas': hoursSundayExtraDay * daytimeExtraSundayHours,
        'Horas Dominicales Extra Nocturnas': hoursSundayExtraNight * nightExtraSundayHours
      };
      let hoursLaborales = {
        id,
        hoursLaborable,
        vHoursLab
      };
      let horasLaboradas = JSON.parse(localStorage.getItem('horasLaboradas'));
      if (horasLaboradas === null) {
        let horasLaboradas = [hoursLaborales];
        localStorage.setItem('horasLaboradas', JSON.stringify(horasLaboradas));
      } else {
        horasLaboradas.push(hoursLaborales);
        localStorage.setItem('horasLaboradas', JSON.stringify(horasLaboradas));
      }
      validateContinuar();
    } else {
      alert('El empleado no se encuentra registrado');
      validateContinuar();
    }
  }
}
function nomina() {
  if ((JSON.parse(localStorage.getItem('config')) === null) || (JSON.parse(localStorage.getItem('empleados')) === null) || (JSON.parse(localStorage.getItem('horasLaboradas')) === null)) {
    alert('No tienes empleados registrados o no tienes horas registradas');
    validateContinuar();
  } else {
    var auxTransport = JSON.parse(localStorage.getItem('config'));
    var salary = 0;
    var salaryRetention = 0;
    var percentageRetention = 0;
    var mSalary = 0;
    auxTransport.forEach((e) => {
      for (let i in e) {
        switch (i) {
          case 'salary':
            salary = e[i];
            break;
          case 'mRetention':
            salaryRetention = e[i];
            break;
          case 'percentageR':
            percentageRetention = e[i];
            break;
          case 'aux':
            auxTransport = e[i];
            break;
          case 'mSalary':
            mSalary = e[i];
            break;
        }
      }
    });
    var array = [];
    let empleados = JSON.parse(localStorage.getItem('empleados'));
    let ant = 0;
    for (let i = 0; i <= empleados.length - 1; i++) {
      if (empleados[i + 1] !== undefined) {
        if (empleados[i].cedula > empleados[i + 1].cedula) {
          ant = empleados[i];
          empleados[i] = empleados[i + 1];
          empleados[i + 1] = ant;
        }
      }
    }
    var salaryBaseEmple;
    salaryBase = JSON.parse(localStorage.getItem('empleados'));
    salaryBase.forEach((e) => {
      for (let empleade in e) {
        if (empleade === 'salario') {
          salaryBaseEmple = e[empleade];
        }
      }
    });
    var nominas = [];
    console.log(` -- Cedula -- Cargo -- Total A Pagar --`);
    empleados.forEach((e) => {
      let hoursLaborables = JSON.parse(localStorage.getItem('horasLaboradas'));
      hoursLaborables.forEach((j) => {
        if (j.id === e.cedula) {
          for (let hours in j.vHoursLab) {
            array.push(j.vHoursLab[hours]);
          }
          var total = 0;
          array = array.slice(-8);
          array.forEach((i) => {
            total += i;
          });
          if (total >= (salary * salaryRetention) && (salaryBaseEmple <= (salary * salaryRetention))) {
            let subs = total * percentageRetention / 100;
            total -= subs;
          }
          if (total <= (salary * mSalary) && (salaryBaseEmple <= (salary * mSalary))) {
            total += auxTransport;
          }
          if (total <= (salary * 1) && (salaryBaseEmple <= (salary * 1))) {
            let alimentation = (salary * 20) / 100;
            total += alimentation;
          }
          total = parseInt(total);
          total = total.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
          total = total.split('').reverse().join('').replace(/^[\.]/, '');
          let cedula = e.cedula;
          let cargo = e.cargo;
          let tot = total;
          var nomina = {
            cedula,
            cargo,
            tot
          };
          let nomin = JSON.parse(localStorage.getItem('nomina'));
          if (nomin === null) {
            nominas = [nomina];
            localStorage.setItem('nomina', JSON.stringify(nominas));
          } else {
            nominas.push(nomina);
            localStorage.setItem('nomina', JSON.stringify(nominas));
          }
          console.log(`${e.cedula} -- ${e.cargo} -- $${total}`);
        }
      });
    });
  }
  config();
}
function pago() {
  let empleados = JSON.parse(localStorage.getItem('empleados'));
  var config = JSON.parse(localStorage.getItem('config'));
  var nomin = JSON.parse(localStorage.getItem('nomina'));

  if (empleados === null) {
    alert('No hay empleados registrados');
    validateContinuar();
  } else {
    if (nomin === null) {
      alert('Debe primero generar la nomina de su empresa');
      validateContinuar();
    }
    let find = parseInt(prompt('Digite la cedula para el comprobante de pago?'));
    var tmp = 0;
    var name = '';
    var cargo = '';
    var paguis = 0;
    empleados.forEach((e) => {
      if (e.cedula === find) {
        tmp++;
        name = e.nombre;
        cargo = e.cargo;
        let pague = JSON.parse(localStorage.getItem('nomina'));
        pague.forEach((j) => {
          if (e.cedula === j.cedula) {
            paguis = j.tot;
          }
        });
      }
    });
    if (tmp === 0) {
      alert('El empleado no se encuentra registrado en la base de datos');
      validateContinuar();
    } else {
      console.log(`**********************************************`);
      console.log(`**********************************************`);
      console.log(`**          ${name} || ${cargo}              **`);
      console.log(`**          Recibi de:  ${config[0].name}                 **`);
      console.log(`**  Recibi una suma total de:  ${paguis}    **`);
      console.log(`**********************************************`);
      console.log(`**********************************************`);

    }
  }
  config();
}
function validateContinuar() {
  let option = continuar();
  switch (option) {
    case 1:
      validateGestion();
      break;
    case 2:
      hoursLab();
      break;
    case 3:
      nomina();
      break;
    case 4:
      pago();
      break;
    case 0:
      alert('Adios');
      break;
    default:
      alert('Seleccione una opcion correcta');
      validateContinuar();
      break;
  }
}
function validate() {
  let option = config();
  switch (option) {
    case 1:
      let opt = idioma();
      switch (opt) {
        case 1:
          validate();
          break;
        case 2:
          validate2();
          break;
        case 3:
          alert('Adios');
          break;
        default:
          alert('Seleccione una opcion correcta');
          validate();
          break;
      }
      break;
    case 2:
      validateConfiguration();
      break;
    case 3:
      if (JSON.parse(localStorage.getItem('config'))) {
        validateContinuar();
      } else {
        alert('No tienes Configurado tu sistema');
        validate();
      }
      break;
    case 0:
      alert('Adios');
      break;
    default:
      alert('Seleccione una opcion correcta');
      validate();
      break;
  }
}
validate();
function config2() {
  let option = parseInt(prompt(`Payroll Software Setup
1. Select language
2. Configure
3. Continue
0. Departure`));
  return option;
}
function idioma2() {
  let option = parseInt(prompt(`Payroll Software Setup
Select the software language
1. Spanish
2. English
0. Departure`));
  return option;
}
function configuration2() {
  let option = parseInt(prompt(`Payroll Software Setup
1. Name of the company
2. Minimum wage
3. How many minimum wages are conserved at the source
4. Percentage retention at source
5. Up to how many minimum wages are needed to pay transport aid
6. How much does transport aid cost?
7. Number of hours of work per month
8. Back
  0. Quit the program`));
  return option;
}
var configG = [];
function name2() {
  let name = prompt('Enter the name of your company');
  global = {name
  };
  configG = JSON.parse(localStorage.getItem('config'));
  if (JSON.parse(localStorage.getItem('config')) === null) {
    configG = [global
    ];
  } else {
    configG.push(global);
  }
  localStorage.setItem('config', JSON.stringify(configG));
  validateconfiguration2();
  return configG;
}
function salaryMin2() {
  let salary = parseInt(prompt("Enter your company's salary"));
  global = {salary
  };
  configG = JSON.parse(localStorage.getItem('config'));
  if (JSON.parse(localStorage.getItem('config')) === null) {
    configG = [global
    ];
  } else {
    configG.push(global);
  }
  localStorage.setItem('config', JSON.stringify(configG));
  validateconfiguration2();
  return configG;
}
function minRetention2() {
  let mRetention = parseInt(prompt('How many minimum wages does the withholding tax charge?'));
  global = {mRetention
  };
  configG = JSON.parse(localStorage.getItem('config'));
  if (JSON.parse(localStorage.getItem('config')) === null) {
    configG = [global];
  } else {
    configG.push(global);
  }
  localStorage.setItem('config', JSON.stringify(configG));
  validateconfiguration2();
  return configG;
}
function percentage2() {
  let percentageR = parseInt(prompt('Percentage withholding at source? (%)'));
  global = {percentageR};
  configG = JSON.parse(localStorage.getItem('config'));
  if (JSON.parse(localStorage.getItem('config')) === null) {
    configG = [global];
  } else {
    configG.push(global);
  }
  localStorage.setItem('config', JSON.stringify(configG));
  validateconfiguration2();
  return configG;
}
function maxSalary2() {
  let mSalary = parseInt(prompt('How many minimum wages do you need to pay for transport aid?'));
  global = {mSalary};
  configG = JSON.parse(localStorage.getItem('config'));
  if (JSON.parse(localStorage.getItem('config')) === null) {
    configG = [global];
  } else {
    configG.push(global);
  }
  localStorage.setItem('config', JSON.stringify(configG));
  validateconfiguration2();
  return configG;
}
function aux2() {
  let aux = parseInt(prompt('How much does transport help cost?'));
  global = {aux};
  configG = JSON.parse(localStorage.getItem('config'));
  if (JSON.parse(localStorage.getItem('config')) === null) {
    configG = [global];
  } else {
    configG.push(global);
  }
  localStorage.setItem('config', JSON.stringify(configG));
  validateconfiguration2();
  return configG;
}
function horasM2() {
  let h = parseInt(prompt('Number of hours of work per month?'));
  global = {h};
  configG = JSON.parse(localStorage.getItem('config'));
  if (JSON.parse(localStorage.getItem('config')) === null) {
    configG = [global];
  } else {
    configG.push(global);
  }
  localStorage.setItem('config', JSON.stringify(configG));
  validateconfiguration2();
  return configG;
}
function validateconfiguration2() {
  let option = configuration2();
  switch (option) {
    case 1:
      name2();
      break;
    case 2:
      salaryMin2();
      break;
    case 3:
      minRetention2();
      break;
    case 4:
      percentage2();
      break;
    case 5:
      maxSalary2();
      break;
    case 6:
      aux2();
      break;
    case 7:
      horasM2();
      break;
    case 8:
      validate2();
      break;
    case 0:
      alert('Bay');
      break;
    default:
      alert('Select a correct option');
      validateconfiguration2();
      break;
  }
}
function continuar2() {
  let option = parseInt(prompt(`Payroll Software
1. Employee management
2. Record of hours worked
3. Generate payroll
4. Print proof of payment
0. Quit the program`));
  return option;
}
function gestionEmpleados2() {
  let option = parseInt(prompt(`
1. Add
2. Modify
3. Delete
4. Back
0. Quit the program`));
  console.clear();
  console.log(`+----------------------------------------------------------------------------------+`);
  console.log(`|-----Identification Card-----|-----Name-----|-----Surnames-----|-----Position-----|`);
  console.log(`+----------------------------------------------------------------------------------+`);
  let personal = JSON.parse(localStorage.getItem('empleados'));
  if (personal !== null) {
    let ant = 0;
    for (let i = 0; i <= personal.length - 1; i++) {
      if (personal[i + 1] !== undefined) {
        if (personal[i].cedula > personal[i + 1].cedula) {
          ant = personal[i];
          personal[i] = personal[i + 1];
          personal[i + 1] = ant;
        }
      }
    }
    for (let emple of personal) {
      if (emple !== null && emple.cedula !== undefined) {
        console.log(`|-----${emple.cedula}-----|-----${emple.nombre}-----|-----${emple.apellido}-----|-----${emple.cargo}-----|`);
      }
    }
  }
  return option;
}
function validateGestion2() {
  let option = gestionEmpleados2();
  switch (option) {
    case 1:
      add2();
      break;
    case 2:
      edit2();
      break;
    case 3:
      eliminar2();
      break;
    case 4:
      validatecontinuar2();
      break;
    case 0:
      alert('Bay');
      break;
    default:
      alert('Select a correct option');
      validateGestion2();
      break;
  }
}
empleados = [];
function add2() {
  empleados = JSON.parse(localStorage.getItem('empleados'));
  if (empleados === null) {
    var cont = 0;
    var cedula = prompt(`New employee identification card?`);
  } else {
    var cedula = parseInt(prompt(`New employee identification card?`));
    let flag = false;
    var cont = 0;
    for (let emple of empleados) {
      for (let flag in emple) {
        if (emple[flag] === cedula) {
          cont++;
          alert('Employee is already registered');
          validateGestion();
          break;
        } else {
          cont = 0;
        }
      }
    }
  }
  if (cont === 0) {
    let nombre = prompt(`Name of new employee?`);
    let apellido = prompt(`Last name of new employee?`);
    let cargo = prompt(`New employee position?`);
    empleados = JSON.parse(localStorage.getItem('config'));
    flag = false;
    do {
      var salario = parseInt(prompt(`New employee salary?`));
      for (config of empleados) {
        for (let e in config) {
          if (e === 'salary') {
            flag = config[e];
          }
        }
      }
    } while (salario < flag);
    empleados = JSON.parse(localStorage.getItem('empleados'));
    let personal = {
      cedula,
      nombre,
      apellido,
      cargo,
      salario
    };
    if (empleados === null) {
      empleados = [
        personal
      ];
    } else {
      empleados.push(personal);
    }
    localStorage.setItem('empleados', JSON.stringify(empleados));
    validateGestion();
    return personal;
  }
}
function edit2() {
  let empleados = JSON.parse(localStorage.getItem('empleados'));
  if (empleados === null) {
    alert('You have no registered employees');
    validateGestion();
  } else {
    var object = 0;
    var c = 0;
    var cedula = parseInt(prompt(`New employee identification card?`));
    let flag = false;
    var cont = 0;
    for (let emple of empleados) {
      for (let flag in emple) {
        if (emple[flag] === cedula) {
          cont = 0;
          break;
        } else {
          cont++;
        }
      }
    }
    if (cont !== 0) {
      alert('Employee is not registered');
      validateGestion();
    }

    if (cont === 0) {
      if (empleados === null) {
        var cedula = parseInt(prompt(`New employee ID card?`));
      } else {
        let flag = false;
        do {
          var cedula = parseInt(prompt(`New employee ID card?`));
          for (let config of empleados) {
            for (let e in config) {
              if (config[e] === cedula) {
                flag = config[e];
              }
            }
          }
        } while (cedula === flag);
      }
      let nombre = prompt(`New employee name?`);
      let apellido = prompt(`New employee's last name?`);
      let cargo = prompt(`New Employee Position?`);
      let configG = JSON.parse(localStorage.getItem('config'));
      flag = false;
      do {
        var salario = parseInt(prompt(`New Employee Salary?`));
        for (config of configG) {
          for (e in config) {
            if (e === 'salary') {
              flag = config[e];
            }
          }
        }
      } while (salario < flag);
      empleados = JSON.parse(localStorage.getItem('empleados'));
      let personal = {
        cedula,
        nombre,
        apellido,
        cargo,
        salario
      };
      empleados[object] = personal;
      localStorage.setItem('empleados', JSON.stringify(empleados));
      validateGestion();
      return empleados;
    }
  }
}
function eliminar2() {
  let empleados = JSON.parse(localStorage.getItem('empleados'));
  let flag = false;
  if (empleados === null) {
    alert('No registered employees');
    validateGestion();
  } else {
    let cedula = parseInt(prompt('Identification number of the employee you want to delete?'));
    var object = 0;
    for (let i = 0; i < empleados.length; i++) {
      for (let emple in empleados[i]) {
        if (empleados[i][emple] === cedula) {
          var object = i;
          flag = true;
          if (flag === true) {
            var con = confirm(`You want to remove ${empleados[object].nombre} ${empleados[object].apellido}`);
            if (con) {
              flag = true;
            } else {
              flag = false;
              validateGestion();
              break;
            }
          }
        }
      }
    }

    if (!flag) {
      alert(`The ID number ${cedula} Not registered`);
    }
    if (flag) {
      empleados.splice(object, 1);
    }
    localStorage.setItem('empleados', JSON.stringify(empleados));
    validateGestion2();
    return empleados;
  }
}
function hoursLab2() {
  if (JSON.parse(localStorage.getItem('config')) === null || JSON.parse(localStorage.getItem('empleados')) === null) {
    alert('You have not set up your system or have no registered employees');
    validatecontinuar2();
  } else {
    var hoursMin = 0;
    let hoursConfig = JSON.parse(localStorage.getItem('config'));
    hoursConfig.forEach((e) => {
      for (i in e) {
        if (i === 'h') {
          hoursMin = e[i];
        }
      }
    });
    let names = '';
    JSON.parse(localStorage.getItem('config')).forEach((e) => {
      if (e.name !== undefined) {
        names = e.name;
      }
    });
    let find = parseInt(prompt('ID used to record the hours?'));
    let emple = JSON.parse(localStorage.getItem('empleados'));
    var tmp = 0;
    var salary = 0;
    var id = '';
    emple.forEach((e) => {
      if (e.cedula === find) {
        id = e.cedula;
        tmp++;
        salary = e.salario;
      }
    });
    if (tmp !== 0) {
      let i = 0;
      do {
        if (i !== 0) {
          alert(`You have entered more hours from the hours previously set by your company ${names}`);
        }
        i++;
        var daytimeHours = parseInt(prompt('How many hours of day have you worked?'));
      } while (daytimeHours > hoursMin);
      i = 0;
      do {
        if (i !== 0) {
          alert(`You have entered more hours from the hours previously set by your company ${names}`);
        }
        i++;
        var nightHours = parseInt(prompt('How many hours at night did you work?'));
      } while ((nightHours > hoursMin) || ((daytimeHours + nightHours) > hoursMin));
      i = 0;
      do {
        if (i !== 0) {
          alert(`You have entered more hours from the hours previously set by your company ${names}`);
        }
        i++;
        var daytimeSundayHours = parseInt(prompt('How many daytime hours have you worked'));
      } while ((daytimeSundayHours > hoursMin) || (daytimeHours + daytimeSundayHours > hoursMin) || (nightHours + daytimeSundayHours > hoursMin));
      i = 0;
      do {
        if (i !== 0) {
          alert(`You have entered more hours from the hours previously set by your company ${names}`);
        }
        i++;
        var nightSundayHours = parseInt(prompt('How many Sunday night hours have you worked'));
      } while ((nightSundayHours > hoursMin) || (daytimeHours + nightSundayHours > hoursMin) || (nightHours + nightSundayHours > hoursMin) || (daytimeSundayHours + nightSundayHours > hoursMin));
      let daytimeOvertime = parseInt(prompt('How many daytime overtime have you worked'));
      let nightOvertime = parseInt(prompt('How many night overtime have you worked'));
      let daytimeExtraSundayHours = parseInt(prompt('How many hours of daytime extra Sunday have you worked'));
      let nightExtraSundayHours = parseInt(prompt('How many Sunday night extra hours have you worked'));
      let pHours = (salary / hoursMin);
      let hoursDay = pHours;
      let hoursNight = ((pHours * 35) / 100) + pHours;
      let daySundayHours = ((pHours * 75) / 100) + pHours;
      let sundayNightHours = ((pHours * 110) / 100) + pHours;
      let hoursExtraDay = ((pHours * 25) / 100) + pHours;
      let hoursExtraNight = ((pHours * 75) / 100) + pHours;
      let hoursSundayExtraDay = ((pHours * 100) / 100) + pHours;
      let hoursSundayExtraNight = ((pHours * 150) / 100) + pHours;
      let hoursLaborable = {daytimeHours,
        nightHours,
        daytimeSundayHours,
        nightSundayHours,
        daytimeOvertime,
        nightOvertime,
        daytimeExtraSundayHours,
        nightExtraSundayHours
      };
      let vHoursLab = {'Horas Diurnas': hoursDay * daytimeHours,
        'Horas Nocturnas': hoursNight * nightHours,
        'Horas Dominicales Diurnas': daySundayHours * daytimeSundayHours,
        'Horas Dominicales Nocturnas': sundayNightHours * nightSundayHours,
        'Horas Extra Diurnas': hoursExtraDay * daytimeOvertime,
        'Horas Extra Nocturnas': hoursExtraNight * nightOvertime,
        'Horas Dominicales Extra Diurnas': hoursSundayExtraDay * daytimeExtraSundayHours,
        'Horas Dominicales Extra Nocturnas': hoursSundayExtraNight * nightExtraSundayHours
      };
      let hoursLaborales = {id,
        hoursLaborable,
        vHoursLab
      };
      let horasLaboradas = JSON.parse(localStorage.getItem('horasLaboradas'));
      if (horasLaboradas === null) {
        let horasLaboradas = [hoursLaborales];
        localStorage.setItem('horasLaboradas', JSON.stringify(horasLaboradas));
      } else {
        horasLaboradas.push(hoursLaborales);
        localStorage.setItem('horasLaboradas', JSON.stringify(horasLaboradas));
      }
      validatecontinuar2();
    } else {
      alert('The employee is not registered');
      validatecontinuar2();
    }
  }
}
function nomina2() {
  if ((JSON.parse(localStorage.getItem('config')) === null) || (JSON.parse(localStorage.getItem('empleados')) === null) || (JSON.parse(localStorage.getItem('horasLaboradas')) === null)) {
    alert('You have not set up your system, have no registered employees, or have no recorded hours');
    validatecontinuar2();
  } else {
    var auxTransport = JSON.parse(localStorage.getItem('config'));
    var salary = 0;
    var salaryRetention = 0;
    var percentageRetention = 0;
    var mSalary = 0;
    auxTransport.forEach((e) => {
      for (let i in e) {
        switch (i) {
          case 'salary':
            salary = e[i];
            break;
          case 'mRetention':
            salaryRetention = e[i];
            break;
          case 'percentageR':
            percentageRetention = e[i];
            break;
          case 'aux':
            auxTransport = e[i];
            break;
          case 'mSalary':
            mSalary = e[i];
            break;
        }
      }
    });
    var array = [];
    let empleados = JSON.parse(localStorage.getItem('empleados'));
    let ant = 0;
    for (let i = 0; i <= empleados.length - 1; i++) {
      if (empleados[i + 1] !== undefined) {
        if (empleados[i].cedula > empleados[i + 1].cedula) {
          ant = empleados[i];
          empleados[i] = empleados[i + 1];
          empleados[i + 1] = ant;
        }
      }
    }
    var salaryBaseEmple;
    salaryBase = JSON.parse(localStorage.getItem('empleados'));
    salaryBase.forEach((e) => {
      for (let empleade in e) {
        if (empleade === 'salario') {
          salaryBaseEmple = e[empleade];
        }
      }
    });
    var nominas = [];
    console.log(` -- Identification card -- Position -- Total to pay --`);
    empleados.forEach((e) => {
      let hoursLaborables = JSON.parse(localStorage.getItem('horasLaboradas'));
      hoursLaborables.forEach((j) => {
        if (j.id === e.cedula) {
          for (let hours in j.vHoursLab) {
            array.push(j.vHoursLab[hours]);
          }
          var total = 0;
          array = array.slice(-8);
          array.forEach((i) => {
            total += i;
          });
          if (total >= (salary * salaryRetention) && (salaryBaseEmple <= (salary * salaryRetention))) {
            let subs = total * percentageRetention / 100;
            total -= subs;
          }
          if (total <= (salary * mSalary) && (salaryBaseEmple <= (salary * mSalary))) {
            total += auxTransport;
          }
          if (total <= (salary * 1) && (salaryBaseEmple <= (salary * 1))) {
            let alimentation = (salary * 20) / 100;
            total += alimentation;
          }
          total = parseInt(total);
          total = total.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
          total = total.split('').reverse().join('').replace(/^[\.]/, '');
          let cedula = e.cedula;
          let cargo = e.cargo;
          let tot = total;
          var nomina = {cedula,
            cargo,
            tot
          };
          let nomin = JSON.parse(localStorage.getItem('nomina'));
          if (nomin === null) {
            nominas = [nomina];
            localStorage.setItem('nomina', JSON.stringify(nominas));
          } else {
            nominas.push(nomina);
            localStorage.setItem('nomina', JSON.stringify(nominas));
          }
          console.log(`${e.cedula} -- ${e.cargo} -- $${total}`);
        }
      });
    });
  }
}
function pago2() {
  let empleados = JSON.parse(localStorage.getItem('empleados'));
  var config = JSON.parse(localStorage.getItem('config'));
  var nomin = JSON.parse(localStorage.getItem('nomina'));

  if (empleados === null) {
    alert('No registered employees');
    validatecontinuar2();
  } else {
    if (nomin === null) {
      alert("You must first generate your company's payroll");
      validateContinuar();
    }
    let find = parseInt(prompt('Enter ID for proof of payment?'));
    var tmp = 0;
    var name = '';
    var cargo = '';
    var paguis = 0;
    empleados.forEach((e) => {
      if (e.cedula === find) {
        tmp++;
        name = e.nombre;
        cargo = e.cargo;
        let pague = JSON.parse(localStorage.getItem('nomina'));
        pague.forEach((j) => {
          if (e.cedula === j.cedula) {
            paguis = j.tot;
          }
        });
      }
    });
    if (tmp === 0) {
      alert('The employee is not registered in the database');
      validatecontinuar2();
    } else {
      console.log(`**********************************************`);
      console.log(`**********************************************`);
      console.log(`**          ${name} || ${cargo}              **`);
      console.log(`**          Received from:  ${config[0].name}                 **`);
      console.log(`**  I received a total sum of:  ${paguis}    **`);
      console.log(`**********************************************`);
      console.log(`**********************************************`);
    }
  }
}
function validatecontinuar2() {
  let option = continuar2();
  switch (option) {
    case 1:
      validateGestion2();
      break;
    case 2:
      hoursLab2();
      break;
    case 3:
      nomina2();
      break;
    case 4:
      pago2();
      break;
    case 0:
      alert('Bay');
      break;
    default:
      alert('Select a correct option');
      validatecontinuar2();
      break;
  }
}
function validate2() {
  let option = config2();
  switch (option) {
    case 1:
      let opt = idioma2();
      switch (opt) {
        case 1:
          validate();
          break;
        case 2:
          validate2();
          break;
        case 3:
          alert('Bay');
          break;
        default:
          alert('Select a correct option');
          validate2();
          break;
      }
      break;
    case 2:
      validateconfiguration2();
      break;
    case 3:
      if (JSON.parse(localStorage.getItem('config'))) {
        validatecontinuar2();
      } else {
        alert('You do not have your system configured');
        validate2();
      }
      break;
    case 0:
      alert('Bay');
      break;
    default:
      alert('Select a correct option');
      validate2();
      break;
  }
}