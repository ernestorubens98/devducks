import { VinculaArquiteto } from './../vincula-arquiteto.model';
import { ActivatedRoute, Router } from '@angular/router';
import { VinculaArquitetoService } from './../vincula-arquiteto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  vincula: any

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

  deletaVinculo():void {
    this.vinculaArquitetoService.delete(this.vincula.id).subscribe(() => {
      this.router.navigate(['/vincula-arquiteto'])
    })
  }

  cancel():void {
    this.router.navigate(['/vincula-arquiteto'])
  }

}
