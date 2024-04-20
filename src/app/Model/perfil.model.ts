export class perfil {
  id?: number;
  nome: string;
  sobrenome: string;
  img: string;
  profissao: string;

  constructor(
    nome: string, sobrenome: string, img: string, profissao: string) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.img = img;
    this.profissao = profissao;
  }
}
