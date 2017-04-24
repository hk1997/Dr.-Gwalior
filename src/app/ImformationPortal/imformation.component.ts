import {Component, OnInit} from '@angular/core';
import {Doctor} from "./dr_info";
import {ImformationService} from "./imformation.service";
import {FormBuilder} from "@angular/forms";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector:'imformation',
  templateUrl:'./imformation.component.html',
  styleUrls:['./imformation.component.css','./imformation.stylesheet.scss'],

})
export class ImformationComponent
{
  list:string[]=['Ayurvedic','Cardiologist','Dentist',"Dermatologist",'ENT','Neurologist','Orthopedic','Eye Care','Paediatrician'
  ,'Physiotherapist','Psychiatrist','Radiologist'];
  selected='Ayurvedic';
  onSelect(i)
  {
    this.selected=i;
  }

}
