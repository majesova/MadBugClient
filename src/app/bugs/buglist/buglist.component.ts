import { Component, OnInit } from '@angular/core';
import { BugService } from 'src/app/services/bug.service';

@Component({
  selector: 'app-buglist',
  templateUrl: './buglist.component.html',
  styleUrls: ['./buglist.component.css']
})
export class BuglistComponent implements OnInit {

  constructor(private bugService: BugService) { }
  
  bugs:any=[];

  ngOnInit() {

    this.bugService.getBugs().subscribe(
      data=>
      {
        this.bugs = data;
        console.info(data);
      },
      error=>
      {console.error(error);
      }
    )

  }

  delete(item, index){
    this.bugService.deleteBug(item.id).subscribe(
      data=>{  
        this.bugs.splice(index, 1);
       },
      error=>{})
   
    console.log("Se  va a eliminar" +  index)
  }

  modify(item, index){
    //Debe reenviar a una página con ruta: 
    //editbug/109
    //En esa página desplegar los datos actuales que se consultan dsde el endpoint:
    //https://localhost:5001/api/Bug/1
    //ponerlos en una variable que esté enlazada al formulario de edición
    //Y enviar a guardar con el bugService.put(id, elemento)
  }

}
