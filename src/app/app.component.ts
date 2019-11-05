import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MadBugClient';
  model = {id:"1", name:"Manuel"}
  name :string;
  arreglo = ["UNO","DOS","TRES"];
  valor = ""

  unclick() {
      this.arreglo.push(this.valor);
      this.valor = "";
  }
}
