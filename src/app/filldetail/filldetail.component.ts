import { Component, OnInit } from '@angular/core';
import { _localeFactory } from '@angular/core/src/application_module';
import { MatSnackBar } from '@angular/material';
import { ifError } from 'assert';
import { del } from 'selenium-webdriver/http';

@Component({
  selector: 'app-filldetail',
  templateUrl: './filldetail.component.html',
  styleUrls: ['./filldetail.component.css']
})
export class FilldetailComponent implements OnInit {

  constructor(public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.containers[this.ControlIndex] = true;
    this.IsJiraOn[this.ControlIndex] = true;

    this.locations = [
      { name: "Bangalore" },
      { name: "Indore" },
      { name: "Other" },
      { name: "Pune" },
      { name: "USA" },
    ]
    this.DefaultLocation = this.locations[1].name;
  }

  DefaultLocation;
  IsJiraOn = [];
  containers = [];
  ControlIndex = 0;
  HoursArray = [];
  TotalHours;
  x;
  ProjectArray = [];
  ModuleArray = [];
  ObjectArray = [];
  ActivityArray = [];
  JIRANumberArray = [];
  CommentsArray = [];
  HrsWorkedArray = [];
  ObjectCollection = [];
  item = {};
  // selectedProject;
  locations = []



  projects = [
    { name: "--Select--" },
    { name: "Undeployed" },
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


  projectClick(event, index) {
    this.ProjectArray[index] = event.value;

    if (event.value == 'Undeployed') {
      this.IsJiraOn[index] = false;
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
    if (event.value == '--Select--') {
      this.IsJiraOn[index] = true;
      this.modules = [
        { name: "--Select--" }
      ]
      this.objects = [
        { name: "--Select--" }
      ]
    }
  }

  moduleClick(event, index) {
    this.ModuleArray[index] = event.value;

    if (event.value == '--Select--') {
      this.objects = [
        { name: "--Select--" }
      ]
    }
    else if (event.value == 'Appraisal' || event.value == 'KT') {
      this.objects = [
        { name: "--Select--" },
        { name: "Meeting" }
      ]
    }
    else if (event.value == 'NPA') {
      this.objects = [
        { name: "--Select--" },
        { name: "Documentation" }
      ]
    }
    else if (event.value == 'Organisational') {
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
    else if (event.value == 'Self Assigned') {
      this.objects = [
        { name: "--Select--" },
        { name: "Doing R&D" },
        { name: "Leave" }
      ]
    }
    else if (event.value == 'Support') {
      this.objects = [
        { name: "--Select--" },
        { name: "Support Activity" },
      ]
    }
  }

  objectClick(event, index) {
    this.ObjectArray[index] = event.value;
  }

  activityClick(event, index) {
    this.ActivityArray[index] = event.value;
  }

  addNewTask() {
    this.ControlIndex++;
    this.containers[this.ControlIndex] = true;
    this.IsJiraOn[this.ControlIndex] = true;
  }


  closeTask(event) {
    if (event == 0) {
      return false;
    }
    else {
      this.containers[event] = false;
    }
    delete this.TotalHours;
  }


  cancelClick() {
    this.containers = [];
    delete this.TotalHours;
  }


  hoursClick(event, index) {
    this.HoursArray[index] = event.data;
    
/*     var result = 0;
    for (var i = 0; i < this.HoursArray.length; i++) {
      result += this.HoursArray[i];
    }
    console.log(result); */
    
  
    this.TotalHours = event.data;
  }

  saveClick() {
    this.ObjectCollection = [];
    for (let i: number = 0; i < this.containers.length; i++) {
      this.item = {}
      if (this.ProjectArray[i] != '--Select--' && this.ProjectArray[i] != undefined && this.ModuleArray[i] != '--Select--' && this.ModuleArray[i] != undefined && this.ObjectArray[i] != '--Select--' && this.ObjectArray[i] != undefined && this.ActivityArray[i] != '--Select--' && this.ActivityArray[i] != undefined && this.CommentsArray[i] != undefined && this.HrsWorkedArray[i] != undefined) {
        this.item["SeqNumber"] = i;
        this.item["Project"] = this.ProjectArray[i];
        this.item["Module"] = this.ModuleArray[i];
        this.item["Object"] = this.ObjectArray[i];
        this.item["Activity"] = this.ActivityArray[i];
        if (this.JIRANumberArray[i] != undefined) {
          this.item["JIRAno"] = this.JIRANumberArray[i];
        }
        this.item["Comments"] = this.CommentsArray[i];
        this.item["HrsWorked"] = this.HrsWorkedArray[i];
        this.ObjectCollection[i] = this.item;
      }
      else {
        this.openSnackBar('Please Fill All The Values ', '');
      }
    }
    console.log(this.ObjectCollection);
  }


  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
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
