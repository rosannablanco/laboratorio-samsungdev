//funcion mostrar valor del input range
function mostrarRango() {
  var valueRango = document.getElementById('valoracion').value;
  alert('Has valorado con ' + valueRango + ' puntos');
}

//funcion mostrar cuenta
function mostrarCuenta() {
  var valuePais = document.getElementById('pais').value;
  var valueIban = document.getElementById('ctrl-iban').value;
  var valueEntidad = document.getElementById('entidad').value;
  var valueSucursal = document.getElementById('sucursal').value;
  var valueDc = document.getElementById('dc').value;
  var valueCuenta = document.getElementById('cuenta').value;
  var numCuenta = valuePais + valueIban + '-' + valueEntidad + '-' + valueSucursal + '-' + valueDc + '-' + valueCuenta;
  alert('Le informamos que su cuenta bancaria es: ' + numCuenta);
}

//funcion mostrar dia elegido
function mostrarDia() {
  var semana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sabado'];
  var valueFecha = document.getElementById('fecha').value;
  var fechaSeleccionada = new Date(valueFecha);
  var dia = fechaSeleccionada.getDay();
  alert('La fecha seleccionada en el elemento de fecha es un ' + semana[dia]);
}
