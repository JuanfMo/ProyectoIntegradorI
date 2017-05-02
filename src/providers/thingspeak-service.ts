import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ThingspeakService {
  
  data1: any;

  constructor(public http: Http) {  }

  load(){
    if (this.data1){
      //ya se han cargado los datos
      return Promise.resolve(this.data1);
    }

    return new Promise(resolve => {
      this.http.get('https://api.thingspeak.com/channels/263862/feeds.json?results=20')
          .map(res => res.json())
          .subscribe(data1 => {
            this.data1 = data1.results;
            resolve(this.data1);
          });
    });
  }

}
