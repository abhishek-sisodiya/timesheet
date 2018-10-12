import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FilldetailComponent } from './filldetail/filldetail.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule,MatNativeDateModule ,MatDatepickerModule,MatSnackBarModule,MatSelectModule,MatCardModule,MatButtonModule, MatCheckboxModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule, MatInputModule} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    FilldetailComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    MatMenuModule,MatNativeDateModule ,MatDatepickerModule,MatSnackBarModule,MatButtonModule,MatSelectModule, MatCheckboxModule, MatTableModule,MatInputModule,MatCardModule,
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
