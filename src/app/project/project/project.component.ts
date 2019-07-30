import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  projectForm : FormGroup;
  projectStatus = ['Stable','Critical','Finished'];
  
  constructor() { }

  ngOnInit() {
    this.projectForm =new FormGroup({
      'projectName' : new FormControl(null, Validators.required, this.forbiddenProjectName.bind(this)),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl('Critical')
    }); 
  }

  onSubmit(){

    // update formulario
    console.log(this.projectForm.value);
  }

  forbiddenProjectName(control: FormControl): Promise<any>| Observable<any>{
    const promise = new Promise<any>((resolve, reject) =>{
        setTimeout(()=>{
              if (control.value ==='Test'){
                resolve({'ProjectNameIsForbidden': true});
              }else{
                resolve(null);
              }
          },1500);
      });
      return promise;
  }




}
