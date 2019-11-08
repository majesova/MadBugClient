import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TouchSequence } from 'selenium-webdriver';
import { BugService } from 'src/app/services/bug.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addbug',
  templateUrl: './addbug.component.html',
  styleUrls: ['./addbug.component.css']
})
export class AddbugComponent implements OnInit {

  bugForm: FormGroup;
  constructor(private bugService : BugService, private router : Router) { }

  

  ngOnInit() {
    this.bugForm = new FormGroup ({
      title:new FormControl('', [Validators.required,  Validators.maxLength(100)]),
      body:new FormControl('',[Validators.required, Validators.maxLength(200)]),
      stepsToReproduce:new FormControl('', [Validators.required,Validators.maxLength(250)]),
      severity:new FormControl('', [Validators.required])
    });
  }

  get title() { return this.bugForm.get('title'); }

  onSubmit(){
    if (!this.bugForm.valid) return;

    var bugForSend = this.bugForm.value;
    bugForSend.isFixed = false;
    bugForSend.severity = parseInt(bugForSend.severity);
    console.info(this.bugForm.value);
    this.bugService.postBug(bugForSend)
    .subscribe(
      
      data=>{console.info(data);
      this.router.navigate(["/buglist"]);
    },
      error=>{console.error(error)});
  }

}
