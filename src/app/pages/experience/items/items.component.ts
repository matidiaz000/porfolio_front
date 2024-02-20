import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-experience-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ExperienceItemsComponent {

  @Input()
  active: boolean = false;

}