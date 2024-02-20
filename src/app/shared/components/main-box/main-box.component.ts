import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-box',
  templateUrl: './main-box.component.html',
  styleUrls: ['./main-box.component.scss']
})
export class MainBoxComponent {

  @Input()
  active: boolean = false;

  @Input()
  description: string = '';

}