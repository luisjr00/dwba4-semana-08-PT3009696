class Aluno{
  constructor(primeiroNome, segundoNome, primeiraNota, segundaNota){
    this.nome = primeiroNome;
    this.sobrenome = segundoNome;
    this.nota1 = primeiraNota;
    this.nota2 = segundaNota;
  }

  nomeCompleto(){
    return (this.nome + " " + this.sobrenome);
  }

  media(){
    return (this.nota1 * 0.6) + (this.nota2 * 0.4);
  }

  situacao(){
    if(this.media() > 6){   
      return "Aprovado";
    }
    else{
      return "Reprovado";
    }
  }
}

function createAlunos(){
var alunos = [new Aluno("Luís","Antônio", 8, 6),
              new Aluno("Mário","Guilherme", 9, 10),
              new Aluno("Luiz","Henrique", 8, 4),
              new Aluno("Gabriel","Roccinholi", 3, 5),
              new Aluno("Isabelle","Bertelli", 9, 8)];

alunos.forEach(exibirAlunos);
}

function exibirAlunos(item, index){
alert("Nome Completo: " + item.nomeCompleto() + "\n" +
      "Média: " + item.media() + "\n" +
      "Situação: "+ item.situacao());
}

createAlunos();