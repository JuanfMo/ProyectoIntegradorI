import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ThingspeakService {
  
  data1: any;

  constructor(public http: Http) { console.log("aca empieza el mensaje"); }

  /**load(){
    if (this.data1){
      //ya se han cargado los datos
      return Promise.resolve(this.data1);
    }

    return new Promise(resolve => {
      this.http.get('https://api.thingspeak.com/channels/263862/feeds.json?results=0').map(res => res.json()).subscribe(data1 => {
            this.data1 = data1;
            resolve(this.data1);
          });
    });
  }**/

  getData(){
    
    this.http.get('https://api.thingspeak.com/channels/263862/feeds.json?results=0').map(res => res.json()).subscribe(data =>{
      return data;
    });
  }


}
