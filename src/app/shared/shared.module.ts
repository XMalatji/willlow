import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatTableModule} from '@angular/material/table';
import { BigInputComponent } from './big-input/big-input.component';
import { BigInputActionComponent } from './big-input/big-input-action.component';
import { ReactiveFormsModule} from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import {   MatNativeDateModule, MatDatepickerModule } from '@angular/material';
import {MatChipsModule} from '@angular/material/chips';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';
import { CalendarModule } from 'angularx-calendar';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CalendarModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSelectModule,
    MatTabsModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    MatTooltipModule,
    MatTableModule,
    MatStepperModule,
    MatChipsModule,
    MatDialogModule,
    MatExpansionModule
  ],
  declarations: [BigInputComponent, BigInputActionComponent],
  exports: [
    CommonModule,
    FormsModule,
    CalendarModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatMenuModule,
    MatTabsModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatSelectModule,
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule,
    MatTableModule,
    MatNativeDateModule,
    MatDatepickerModule,
    BigInputComponent,
    BigInputActionComponent,
    MatStepperModule,
    MatChipsModule,
    MatDialogModule,
    MatExpansionModule

  ]
})
export class SharedModule {}
