import { NgModule } from '@angular/core';
import { Modules, PagesModules } from "./pages.config";

@NgModule({
  imports:      [ Modules ],
  declarations: [],
  exports:      [ PagesModules ],
  providers:    [],
})
export class PagesModule { }