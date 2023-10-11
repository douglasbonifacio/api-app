import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/Usuario.model';
import { Action } from 'rxjs/internal/scheduler/Action';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-alterar-usuario',
  templateUrl: './alterar-usuario.page.html',
  styleUrls: ['./alterar-usuario.page.scss'],
})
export class AlterarUsuarioPage implements OnInit {

  usuario!:Usuario;

  constructor(
    private activeRoute: ActivatedRoute,
    private userService: UsuarioService,
    private router: Router
  ) { }

  ngOnInit() {
    // Cria a variavel id
    // Pega o id que veio na rota
    // Converte em Numero
    const id = Number(this.activeRoute.snapshot.paramMap.get('id'));

    this.userService.getOne(id).subscribe(retorno => {this.usuario = retorno;
      console.log(this.usuario);
    })
  }

}
