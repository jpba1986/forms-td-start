import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
// use  https://angular.io/api/forms/Validators
  @ViewChild('f', {static: false}) singupForm : NgForm;
  defaultQuestion = 'pet';
  answer = '';
  suggestUserName() {
    const suggestedName = 'Superuser';
  }

 // onSubmit(form: NgForm){
 //   console.log(form);
 // }

  onSubmit(){
  console.log(this.singupForm);
  }

}
