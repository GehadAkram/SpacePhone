import { NgModule } from '@angular/core';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';


const materials = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatListModule,
  MatSidenavModule,
  MatCardModule,
  
]

@NgModule({
  imports: [materials],
  exports: [materials]

})
export class MaterialModule { }
