import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CropperOneComponent } from './cropper-one/cropper-one.component';
import { CropperTwoComponent } from './cropper-two/cropper-two.component';

@NgModule({
  declarations: [
    AppComponent,
    CropperOneComponent,
    CropperTwoComponent
  ],
  imports: [
    BrowserModule,
    ImageCropperModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
