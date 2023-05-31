let codigo = {
  e: 'enter',
  i: 'imes',
  a: 'ai',
  o: 'ober',
  u: 'ufat'
}


function capturarTexto(texto) {
  let datos = texto;

  return datos
}


const eliminarAcentos = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function normalizarTexto(texto) {
  return eliminarAcentos(texto.toLowerCase().trim());
}


function encriptarTexto(texto) {
  let textoEncriptado = '';

  for (let vocal in codigo) {
    textoEncriptado = texto.replaceAll(vocal, codigo[vocal]);
    texto = textoEncriptado;
  }

  return textoEncriptado
}

let tEncriptado = encriptarTexto();

function desencriptarTexto(tEncriptado) {
  let textoDesencriptado = '';
  for (let vocal in codigo) {
    textoDesencriptado = tEncriptado.replaceAll(codigo[vocal], vocal)

    tEncriptado = textoDesencriptado
  }

  return textoDesencriptado;

}

let tDesencriptado = desencriptarTexto()

