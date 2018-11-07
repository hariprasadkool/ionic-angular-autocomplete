import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FormBuilder, Validators, FormGroup, FormControl} from "@angular/forms";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  placeholderAssignedTo = " "; 
  placeholderOwner = " ";
  placeholderNotify = " ";
  assignsearchTextValue: any;
  ownersearchTextValue: any;
  datasearchTextValue: any;
  raidform: FormGroup;
  assignTodropdown = [
    {
      ID: '1',
      name: 'assign-1'
    },
    {
      ID: '2',
      name: 'assign-2'
    }
  ];
  owners = [
    {
      ID: '1',
      name: 'owner-1'
    },
    {
      ID: '2',
      name: 'owner-2'
    }
  ];
  data: any = [
    {
      ID: '1',
      name: 'hari'
    },
    {
      ID: '2',
      name: 'prakash'
    },
    {
      ID: '3',
      name: 'mahesh'
    },
    {
      ID: '4',
      name: 'ramesh'
    }
  ];

  constructor(public navCtrl: NavController, private _formBuilder: FormBuilder) {
    this.assignsearchTextValue = "assign-1"
    this.ownersearchTextValue = "owner-1";
    this.datasearchTextValue = [
      {
        ID: '1',
        name: 'hari'
      },
      {
        ID: '2',
        name: 'prakash'
      }
    ];

  }

  returnFieldFromAssigned(item){
    return item.name
  }

  selectedAssigned($event){
    console.log($event);
  }

  returnFieldFromOwner(item){
    return item.name
  }

  selectedOwner($event){
    console.log($event);
  }

  returnFieldFromNotify(item) {
    return item.name;
  }

  selectedNotify($event) {
    console.log($event);
  }



}
