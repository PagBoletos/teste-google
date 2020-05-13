import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TesteGoogleSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [TesteGoogleSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent]
})
export class TesteGoogleHomeModule {}
