import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SysadminRoutingModule } from './sysadmin-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SysadminRoutingModule
  ]
})
export class SysAdminModule { }
