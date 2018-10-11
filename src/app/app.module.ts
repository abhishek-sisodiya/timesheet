import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FilldetailComponent } from './filldetail/filldetail.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule,MatSelectModule,MatCardModule,MatButtonModule, MatCheckboxModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule, MatInputModule} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [
    AppComponent,
    FilldetailComponent,
  ],
  imports: [
    MatSnackBarModule,MatButtonModule,MatSelectModule, MatCheckboxModule, MatTableModule,MatInputModule,MatCardModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(
      [
         { path: '', component: FilldetailComponent, pathMatch: 'full' },
      ]
      ),
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
