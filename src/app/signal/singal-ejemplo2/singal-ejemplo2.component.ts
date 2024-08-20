import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-singal-ejemplo2',
  standalone: true,
  imports: [],
  templateUrl: './singal-ejemplo2.component.html',
  styleUrl: './singal-ejemplo2.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export default class SingalEjemplo2Component {

contador=signal(0)
constructor(){

  // setInterval(()=>this.contador.set(this.contador()+1),100);
}

}
