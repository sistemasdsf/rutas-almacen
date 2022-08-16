import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTableModule } from '@angular/material/table';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSortModule } from '@angular/material/sort';
import {MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { ModalRouteManagerComponent } from './modal-route-manager/modal-route-manager.component';

const materialModules = [
  MatIconModule
];

@NgModule({
  declarations: [
    AppComponent,
    ModalRouteManagerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatDialogModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSelectModule,
    ...materialModules
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    ...materialModules
  ]
})
export class AppModule { }
