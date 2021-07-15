import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import {MatSelectModule} from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopComponentComponent } from './top-component/top-component.component';
import { BottomComponentComponent } from './bottom-component/bottom-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponentComponent,
    BottomComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
