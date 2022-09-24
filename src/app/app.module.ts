import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SimpleInterestsComponent } from './components/simple-interests/simple-interests.component';
import { CompoundInterestsComponent } from './components/compound-interests/compound-interests.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HeaderComponent,
    SimpleInterestsComponent,
    CompoundInterestsComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
