import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @ViewChild('f', {static: false}) singupForm : NgForm;
  email        ='';
  pass         ='';
  subscription ='';
  subs         ='';
  defaultSubs  ='advanced';
  showData = false;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    this.showData = true;
    this.email =this.singupForm.value.email;
    this.pass  =this.singupForm.value.pass;
    this.subs  = this.singupForm.value.subscription;
    this.singupForm.reset();/**/
    console.log(this.singupForm);
  }

}
