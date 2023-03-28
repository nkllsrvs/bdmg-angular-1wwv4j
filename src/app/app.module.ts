import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from '../hello.component';
import { AppService } from './app.service';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMaskModule } from 'ngx-mask';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatExpansionModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    NgxMaskModule.forRoot(),
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
  providers: [AppService],
})
export class AppModule {}
