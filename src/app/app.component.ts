import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

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
  genders =['male','female'];

  suggestUserName() {
    const suggestedName = 'Superuser';
/*     this.singupForm.setValue({
      userData : {
        username: suggestedName,
        email:''
      },
      secret:'pet',
      questionAnswer:'',
      gender: 'male'
    }); */
    this.singupForm.form.patchValue({
      userData : {
        username: suggestedName
      }
    });
  }

 // onSubmit(form: NgForm){
 //   console.log(form);
 // }

  onSubmit(){
  console.log(this.singupForm);
  }

}
