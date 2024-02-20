import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-abilities-main-box',
  templateUrl: './main-box.component.html',
  styleUrls: ['./main-box.component.scss']
})
export class AbilitiesMainBoxComponent {

  @Input()
  active: boolean | null = null;

  @Input()
  data: any | null = null;

  ngOnInit(): void {
    console.log(this.data)
  }

}