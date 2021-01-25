import { Router } from '@angular/router';
import { VinculaArquitetoService } from './../vincula-arquiteto.service';
import { VinculaArquiteto } from './../vincula-arquiteto.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  vincula: any = {
    gestor_n1: '',
    gestor_n2: '',
    nome_arquiteto: '',
    epico_jira: ''
  }

  constructor(private vinculaArquitetoService: VinculaArquitetoService, private router: Router) { }

  ngOnInit(): void {
  }

  createVinculo():void {
    this.vinculaArquitetoService.create(this.vincula).subscribe(() => {
      this.router.navigate(['/vincula-arquiteto'])
    })
  }

  cancel():void {
    this.router.navigate(['/vincula-arquiteto'])
  }

}
