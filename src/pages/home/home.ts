import { Component } from '@angular/core';
import { MenuController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { ThingspeakService } from '../../providers/thingspeak-service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ThingspeakService]
})
export class HomePage {
 
  public sensors: any;
  menuFinal: Array<{title: string}>;

  constructor(
    public menuCtrl: MenuController,
    public navCtrl: NavController,
    public thingService: ThingspeakService) {

      this.loadSensor();

     this.menuFinal = [
       {title: 'Agregar Sensor'},
       {title: 'Configuracion'},
     ];

     
  }

  loadSensor(){
    this.thingService.load()
      .then(data1 => {
        this.sensors = data1;
      });
  }

  openMenu(){
    this.menuCtrl.open();
  }

  closeMenu(){
    this.menuCtrl.close();
  }

  
}
