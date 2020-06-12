import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Input() msg;
  legenda: string = 'estou no Angular';

  constructor() { }

  ngOnInit(): void {
  }

  resetLegenda(): void {
    // console.log('Evento de click do angular!');
    // one way data binding
    this.legenda = 'estou no Angular';
  }

}
