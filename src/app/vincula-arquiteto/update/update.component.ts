import { Router, ActivatedRoute } from '@angular/router';
import { VinculaArquitetoService } from './../vincula-arquiteto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  vincula: any = {
    gestor_n1: '',
    gestor_n2: '',
    nome_arquiteto: '',
    epico_jira: ''
  };

  constructor(
    private vinculaArquitetoService: VinculaArquitetoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id: any = this.route.snapshot.paramMap.get('id')
    this.vinculaArquitetoService.readById(id).subscribe(vincula => {
      this.vincula = vincula
    })
  }

  updateVinculo(): void {
    this.vinculaArquitetoService.update(this.vincula).subscribe(() => {
      this.router.navigate(['/vincula-arquiteto'])
    })
  }

  cancel():void {
    this.router.navigate(['/vincula-arquiteto'])
  }

}
