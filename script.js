function calculateSalary(salario, vendas) {
  let resultado = 0;
  for (let i = 0; i < vendas.length; i++) {
    resultado += vendas[i];
  }
  if (resultado > 1.2) {
    let total = salario + resultado * 0.05;
    return total;
  } else {
    let total = salario + resultado * 0.03;
    return total;
  }
}
console.log(calculateSalary(1333, [1000, 500, 26, 45]));


function cashMachine(saque, salario, vendas) {
  let vSaque = saque;
  let notasDisponiveis = [200, 100, 50, 20, 10, 5, 2];
  let quantidadeNotas = [];
  let notas = [];

  for (let i = 0; i < notasDisponiveis.length; i++) {
    if (vSaque / notasDisponiveis[i] >= 1) {
      quantidadeNotas.push(Math.floor(vSaque / notasDisponiveis[i]));
      notas.push(notasDisponiveis[i]);
      vSaque -= notasDisponiveis[i] * Math.floor(vSaque / notasDisponiveis[i]);
    }
  }
  let salarioFixo = calculateSalary(salario, vendas);
  let notasSacadas = [];
  for (let i = 0; i < quantidadeNotas.length; i++) {
    if (quantidadeNotas[i] === 1) {
      notasSacadas.push(`${quantidadeNotas[i]} nota de R$${notas[i]}`);
    } else {
      notasSacadas.push(`${quantidadeNotas[i]} notas de R$${notas[i]}`);
    }
  }
  notasSacadas.push(`Saldo Atual = R$${salarioFixo - saque}`);
  return notasSacadas.join(",");
}console.log(cashMachine(100, 1200, [100, 300, 46]));


function calculateStock(estoqueAtual, estoqueMax, estoqueMin) {
  let media = estoqueMax + estoqueMin / 2;
  if (estoqueAtual >= media) {
    return "Não efetuar a compra";
  } else {
    return "Efetuar compra";
  }
}console.log(calculateStock(300, 400, 250));


function calculateAge(anoNascimento, anoAtual) {
  let idade = anoAtual - anoNascimento;
  let meses = idade * 12;
  let dias = idade * 365;
  let semanas = meses * 4;
  return `Idade atual = ${idade} , Idade em meses = ${meses}, Idade em dias = ${dias} e Idade em semanas = ${semanas}`;
}console.log(calculateAge(2000, 2022));



let matrix = [
  [1, 2, 5],
  [6, 5, 2],
  [2, 5, 7],
];
function getDiagonal(matrixQuadrada) {
  let resultado = [];
  for (let i = 0; i < matrixQuadrada.length; i++) {
    for (let j = 0; j < matrixQuadrada[i].length; j++) {
      if (i == j) {
        resultado.push(matrixQuadrada[i][j]);
      }
    }
  }
  return resultado;
}console.log(getDiagonal(matrix));
