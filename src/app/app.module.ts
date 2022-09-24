import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TimerComponent } from './components/timer/timer.component';
import { SimpleInterestsComponent } from './components/simple-interests/simple-interests.component';
import { CompoundInterestsComponent } from './components/compound-interests/compound-interests.component';
import { RandomNumbersComponent } from './components/random-numbers/random-numbers.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HeaderComponent,
    TimerComponent,
    SimpleInterestsComponent,
    CompoundInterestsComponent,
    RandomNumbersComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
