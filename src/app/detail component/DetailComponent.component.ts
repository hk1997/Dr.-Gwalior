import {Component, Input, OnInit} from '@angular/core';
import {ImformationService} from "../ImformationPortal/imformation.service";
import {Doctor} from "../ImformationPortal/dr_info";
@Component({
  selector:'detail-component',
  templateUrl:'./DetailComponent.html.html',
  styleUrls:['./DetailComponent.stylesheet.css']
})

export class DetailComponent
{
  @Input() s:string;
  numberOfChanges=0;
  doc:Doctor[]=[];
  show:Boolean=false;
  doc_show:Doctor=new Doctor();
  showList:Boolean=true;

  ngOnChanges() {


    this.infoService.searchList(this.s).subscribe(task=>{
      this.doc=task;
      console.log('finished');
    });

    this.showList=true;
    this.show = false;
  }

  constructor(private infoService:ImformationService){

  }

  onShow(i:Doctor)
  {
    this.show=true;
    this.doc_show=i;
    this.showList=false;
  }

  band()
  {
    this.show=false;
    this.showList=true;
    console.log('executed');
  }



}
