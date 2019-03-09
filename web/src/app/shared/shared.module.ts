
import { NgModule } from '@angular/core';
import { GlobalMethods } from '../services/global_methods';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from '../header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './Material.module';
import {StarRatingModule} from 'angular-star-rating';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule,
    StarRatingModule.forRoot()
    


  ],
  exports:[
    HttpClientModule,
    HeaderComponent,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule,
    StarRatingModule
    

  ],
  providers: [GlobalMethods]
})
export class SharedModule { }
