import { Component } from '@angular/core';
import { Orto } from './orto.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Auto orto';
  orti: Orto[] = [
    new Orto('Rucola', true, 40.3, 60, 'https://www.faidateingiardino.com/wp-content/uploads/2017/09/rucola-750x400.jpg'),
    new Orto('Peperoni', false, 80.7, 12, 'https://www.ortodacoltivare.it/wp-content/uploads/2015/01/peperone-1-800x531.jpg'),
    new Orto('Fragole', true, 12.0, 50, 'https://www.csoservizi.com/wp-content/uploads/2019/02/csoservizi-csoitaly-fragole-006-600x369.jpg')
  ];
}
