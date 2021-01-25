import { Router } from '@angular/router';
import { VinculaArquitetoService } from './../vincula-arquiteto.service';
import { VinculaArquiteto } from './../vincula-arquiteto.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  vincula: VinculaArquiteto[] = [];
  displayedColumns = ['gestor_n1', 'gestor_n2', 'nome_arquiteto', 'epico_jira', 'action']
  campoInput: any;

  constructor(private router: Router, private vinculaArquitetoService: VinculaArquitetoService) { }

  ngOnInit(): void {
    this.vinculaArquitetoService.read().subscribe(vincula => {
      this.vincula = vincula
    })
  }

  navigateToVinculaArquiteto(): void {
    this.router.navigate(['vincula-arquiteto/create'])
  }

}
