import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dropdown';
  result!:string;
  display(val:string)
  {
    if(val=="apple")
    {
      this.result="https://www.collinsdictionary.com/images/full/apple_158989157.jpg";
    }
    if(val=="orange")
    {
      this.result="https://www.gardeningknowhow.com/wp-content/uploads/2021/08/Orange-fruits.jpg";
    }
    if(val=="mango")
    {
      this.result="https://www.cspinet.org/sites/default/files/styles/og_image/public/2022-03/april19_rightStuff_ValeriLuzina_adobe_hero_750x530.jpg?itok=C_oswv5L";
    }
    if(val=="grapes")
    {
      this.result="https://www.collinsdictionary.com/images/full/grape_229112122.jpg";
    }
  }
}
