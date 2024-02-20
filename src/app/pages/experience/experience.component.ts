import { Component, OnDestroy, Renderer2 } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnDestroy {

  constructor(
    private _renderer: Renderer2,
    private _api: ApiService
  ) {
    this._renderer.addClass(document.body, 'bg-white');
  }

  ngOnInit(): void {
    this._api.getExperiences()
      .subscribe(
        (res: any) => console.log(res),
        (err: Error) => console.error(err)
      )
  }

  ngOnDestroy(): void {
    this._renderer.removeClass(document.body, 'bg-white');
  }

}