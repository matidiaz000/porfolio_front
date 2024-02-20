import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-abilities',
  templateUrl: './abilities.component.html'
})
export class AbilitiesComponent implements OnInit, OnDestroy {

  nav: any = null;
  data: any = null;
  activeIndex: number = 999;
  activeNav: string | null = null;
  loading_items = true;

  constructor(
    private _renderer: Renderer2,
    private _api: ApiService
  ) {
    this._renderer.addClass(document.body, 'bg-white');
  }

  ngOnInit(): void {
    this.setNav();
  }

  setNav(): void {
    this._api.getAbilitiesCategories()
      .subscribe(
        (res: any) => {
          this.activeNav = res[0].id;
          this.nav = res;
          this.setItems(res[0].id)
        }, (err: Error) => console.error(err)
      )
  }

  setItems(category_id: string) {
    this._api.getAbilitiesItems(category_id)
      .subscribe(
        (res: any) => {
          this.data = res
          this.loading_items = false;
        },
        (err: Error) => {
          console.error(err)
          this.loading_items = false;
        }
      )
  }

  ngOnDestroy(): void {
    this._renderer.removeClass(document.body, 'bg-white');
  }

  onItemClick(index: number): void {
    if (this.activeIndex != index) this.activeIndex = index;
    else this.activeIndex = 999;
  }

  onNavClick(id: string) {
    this.loading_items = true;
    this.activeNav = id;
    this.activeIndex = 999;
    this.setItems(id)
  }

}