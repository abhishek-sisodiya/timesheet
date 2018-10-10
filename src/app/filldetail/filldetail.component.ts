import { Component, OnInit } from '@angular/core';
import { totalmem } from 'os';
import { empty } from 'rxjs';
import { _localeFactory } from '@angular/core/src/application_module';

@Component({
  selector: 'app-filldetail',
  templateUrl: './filldetail.component.html',
  styleUrls: ['./filldetail.component.css']
})
export class FilldetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.containers.push(true);
  }

  IsJiraOn = true;
  containers = [];
  ControlIndex = 1;
  HoursArray = [];
  TotalHours;
  x;
  // selectedProject;

  projects = [
    { name: "--Select--" },
    { name: "Undeployed-" },
  ]

  modules = [
    { name: "--Select--" }
  ]

  objects = [
    { name: "--Select--" }
  ]

  activitys = [
    { name: "--Select--" },
    { name: "Client Bug Fixing" },
    { name: "Code Review" },
    { name: "Communication" },
    { name: "Data Updation" },
    { name: "Deployement" },
    { name: "Design" },
    { name: "Design Review" },
    { name: "Development" },
    { name: "Discussion" },
    { name: "Documentation" },
    { name: "Internal Bug Fixing" },
    { name: "Interview" },
    { name: "Management" },
    { name: "Meeting" },
    { name: "Monitoring And Control" },
    { name: "On Leave" },
    { name: "Other Review" },
    { name: "Planning" },
    { name: "POC" },
    { name: "Pre Sales" },
    { name: "Project Coordination" },
    { name: "R&D" },
    { name: "Release" },
    { name: "Requirement" },
    { name: "ReWork" },
    { name: "Support" },
    { name: "Test Case Creation" },
    { name: "Test Case Review" },
    { name: "Testing" },
    { name: "Training" },
  ]


  projectClick(event) {
    if (event.target.value == 'Undeployed-') {
      this.IsJiraOn = false;
      this.modules = [
        { name: '--Select--' },
        { name: 'Appraisal' },
        { name: 'KT' },
        { name: 'NPA' },
        { name: 'Organisational' },
        { name: 'Self Assigned' },
        { name: 'Support' },
      ]
    }
    if (event.target.value == '--Select--') {
      this.IsJiraOn = true;
      this.modules = [
        { name: "--Select--" }
      ]
    }
  }

  moduleClick(event) {

    if (event.target.value == '--Select--') {
      this.objects = [
        { name: "--Select--" }
      ]
    }
    else if (event.target.value == 'Appraisal' || event.target.value == 'KT') {
      this.objects = [
        { name: "--Select--" },
        { name: "Meeting" }
      ]
    }
    else if (event.target.value == 'NPA') {
      this.objects = [
        { name: "--Select--" },
        { name: "Documentation" }
      ]
    }
    else if (event.target.value == 'Organisational') {
      this.objects = [
        { name: "--Select--" },
        { name: "Holiday" },
        { name: "Interview" },
        { name: "Meeting" },
        { name: "POC" },
        { name: "Pre-Sales" },
        { name: "R&D" },
        { name: "Training" },
        { name: "Training (As Trainer)" }
      ]
    }
    else if (event.target.value == 'Self Assigned') {
      this.objects = [
        { name: "--Select--" },
        { name: "Doing R&D" },
        { name: "Leave" }
      ]
    }
    else if (event.target.value == 'Support') {
      this.objects = [
        { name: "--Select--" },
        { name: "Support Activity" },
      ]
    }
  }

  addNewTask() {
    this.containers[this.ControlIndex] = true;
    this.ControlIndex++;
  }


  closeTask(event) {
    this.containers[event] = false;
    delete this.TotalHours;
  }


  cancelClick() {
    this.containers = [];
    delete this.TotalHours;
  }


  hoursClick(event) {
    this.x = event.data;
    this.TotalHours = event.data;
  }

  saveClick() {

  }



  // clickOutside() {
  //   if(this.x != undefined){
  //   this.HoursArray.push(this.x);}
  //   console.log(this.HoursArray);

  //   var result = 0;
  //   for (var i = 0; i < this.HoursArray.length; i++) {
  //     result += this.HoursArray[i];
  //   }
  //   console.log(result);


  //   // this.HoursArray.reduce(function (a, b) {
  //   //   console.log(a + b);
  //   // });


  // }



  /*   private _selected: any;
    set selected(src: any) {
      this._selected = src;
      this.selected2 = this._selected.value[0];
    };
    get selected(): any { return this._selected; };
    private selected2: string = "";
    private data: any[] = [
      { "name": "--Select--", "value": ["--Select--"] },
      { "name": "Undeployed", "value": [ 'Appraisel'  ,'KT'  ,'NPA'  ,'Organisational'  ,'Self Support'  ,'Support'  ,] },
    ]; */
}
