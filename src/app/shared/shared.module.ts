import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    HttpClientModule
  ],
  declarations: [],
  exports: [HttpClientModule]
})
export class SharedModule { }