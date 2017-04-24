import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, FormControl} from "@angular/forms";
import {Doctor} from "./ImformationPortal/dr_info";
import {Http} from "@angular/http";
import {ImformationService} from "./ImformationPortal/imformation.service";

@Component(
  {
    selector:'add-component',
    template:`

  <input type="text" name="name" [(ngModel)]="newDoctor.name" placeholder="name">
                  <input type="text" name="image" [(ngModel)]="newDoctor.image" placeholder="image" >
                  <input type="text" name="address" [(ngModel)]="newDoctor.address" placeholder="address">
                  <input type="text" name="timing" [(ngModel)]="newDoctor.timing" placeholder="timing">
                  <input type="text" name="fee" [(ngModel)]="newDoctor.fee" placeholder="fee">
                  <input type="number" name="id" [(ngModel)]="newDoctor.id" placeholder="id">
                  <input type="text" name="specialization" [(ngModel)]="newDoctor.specialization" placeholder="specialization">
                  <button (click)="onSubmit()">submit</button>
             `
  }
)

export class AddComponent {
  //myForm:FormGroup;
  newDoctor:Doctor=new Doctor;
  constructor(private fb:FormBuilder,private http:Http,private infoServe:ImformationService){

  }



  onSubmit()
  {
    console.log(this.newDoctor);
    this.infoServe.mail(this.newDoctor).subscribe(task=>{console.log('finished')});
  }

}
