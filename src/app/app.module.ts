import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProductComponent } from './product.componen';
import { FormsModule } from '@angular/forms';
import { PipeDetailComponent } from './pipe-detail.component';
import { PipeCustomComponent } from './pipe-custom.component';
import { SummaryPipe } from './summary.pipe';


@NgModule({
  declarations: [
    ProductComponent,
    PipeDetailComponent,
    PipeCustomComponent ,
    SummaryPipe
  ],
  imports: [
    BrowserModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [ProductComponent]
})
export class AppModule { }
