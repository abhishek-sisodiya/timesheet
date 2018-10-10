import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FilldetailComponent } from './filldetail/filldetail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FilldetailComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(
      [
         { path: '', component: FilldetailComponent, pathMatch: 'full' },
      ]
      )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
