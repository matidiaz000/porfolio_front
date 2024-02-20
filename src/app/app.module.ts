import { NgModule } from '@angular/core';

import { Modules, Bootstrap } from './app.config';

@NgModule({
  declarations:     [ Bootstrap ],
  imports:          [ Modules ],
  bootstrap:        [ Bootstrap ]
})
export class AppModule { }
