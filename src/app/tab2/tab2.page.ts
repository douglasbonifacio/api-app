import { Component } from '@angular/core';
import { Produto } from '../models/Produto.model';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  listaProdutos: Produto[] = [];
  produto?: Produto;
  id: number = 0;

  /** Para buscar dados da API, depois de criar o serviço
      Temos que instanciar em uma variavel o serviço criado
  **/
  constructor(private userService: ProdutoService
    ) {}

  // Criar os metodos que conversam com a API
  // Depois adicionamos o subscribe para receber
  // a resposta quando ela chegar

  // Adicionamos uma variavel que guarda o retorno
  //e enviamos ela para uma função anônima dentro da função vamos adicionar o retorno a variavel local

  buscarProdutos(){
    this.userService.getAll().subscribe(retorno =>{
      // "as Usuario[]" tenta converter o retorno para este tipo
      this.listaProdutos = retorno as Produto[];
      console.log(this.listaProdutos);
      this.produto = undefined;
    });
  }
  buscarPorID(){
    this.userService.getOne(this.id).subscribe(retorno =>{
      console.log(retorno);
      this.produto = retorno as Produto;
      this.listaProdutos = [];
    });
  }

  ngOnInit(): void {
    this.buscarProdutos();
  }
}
