import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/Produto.model';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.page.html',
  styleUrls: ['./cadastro-produto.page.scss'],
})
export class CadastroProdutoPage implements OnInit {

  produto: Produto = {
    nome: '',
    preco: '',
    tipo: '',
    marca: ''
  };

  constructor(private UserService: ProdutoService) { }

  ngOnInit() {
  }

  salvarProduto(){
    this.UserService.salvar(this.usuario).subscribe(retorno => {
      this.usuario = retorno;
      alert("Sucesso! usuario: [" + this.usuario.id + "] foi salvo");
    });    
}
