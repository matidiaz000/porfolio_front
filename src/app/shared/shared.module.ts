import { NgModule } from '@angular/core';
import { Modules, Components, Directives } from './shared.config';

@NgModule({
  imports:      [ Modules ],
  declarations: [ Directives, Components ],
  exports:      [ Directives, Modules, Components, ],
  providers:    []
})
export class SharedModule {}