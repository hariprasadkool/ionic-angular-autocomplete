import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FormBuilder, Validators, FormGroup, FormControl} from "@angular/forms";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // Placeholders variable
  // =====================

  public placeholderPlayer = " "; 
  public placeholderNotifyPlayer = " "
  public placeholderTeam = "Search Team";
  public placeholderNotifyTeam = "Notify Team"

  // Mock data
  // ==========

  public playerData = [
    {
      id: '1',
      name: 'Virat'
    },
    {
      id: '2',
      name: 'Sachin'
    }
  ];

  public notifyPlayerData = [
    {
      id: '1',
      name: 'Virat Kohli'
    },
    {
      id: '2',
      name: 'Sachin Tendulkar'
    }
  ];

  public teamData = [
    {
      id: '1',
      name: 'India'
    },
    {
      id: '2',
      name: 'South Africa'
    }
  ];

  public notifyTeamData = [
    {
      id: '1',
      name: 'Men in Blue'
    },
    {
      id: '2',
      name: 'Men in Green'
    },
    {
      id: '3',
      name: 'Men in Yellow'
    },
    {
      id: '4',
      name: 'Men in Black'
    }
  ];


  // pre-population variables data
  // =============================

  playerValue: any;
  notifyplayerValue: any;
  teamValue: any;
  notifyTeamValue: any;

  constructor(public navCtrl: NavController, private _formBuilder: FormBuilder) {

    // pre-populating values for fields

    this.teamValue = "India";
    this.notifyTeamValue = [
      {
        id: '1',
        name: 'Men in Blue'
      }
    ];

  }

  returnFieldFromPlayer(item){
    return item.name;
  }

  selectedPlayer($event){
    console.log($event);
  }

  returnFieldFromNotifyPlayer(item){
    return item.name;
  }

  selectedNotifyPlayer($event){
    console.log($event);
  }

  returnFieldFromTeam(item){
    return item.name
  }

  selectedTeam($event){
    console.log($event);
  }

  returnFieldFromNotifyTeam(item) {
    return item.name;
  }

  selectedNotifyTeam($event) {
    console.log($event);
  }



}
