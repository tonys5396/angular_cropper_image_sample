import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ImageCroppedEvent, ImageCropperComponent } from 'ngx-image-cropper';
import Cropper from 'cropperjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent implements OnInit, AfterViewInit {
  private image: HTMLImageElement;
  ngOnInit(): void {
    this.image = document.getElementById('image') as HTMLImageElement;
    const ua = navigator.userAgent;
    // if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(ua)) {
    //   this.isHideResizeSquares = true;
    // }
  }
  isHideResizeSquares = false;
  imageChangedEvent: any = '';
  croppedImage: any = '';
  croppedImage2: any = '';
  ready: boolean;
  scale: number;
  minScale: number;
  cropper: Cropper;

  constructor() { }

  ngAfterViewInit() {
  }


  fileChangeEvent(event: any): void {
    const self = this;
    this.imageChangedEvent = event;
    this.image.src = URL.createObjectURL(event.target.files[0]);

    this.cropper = new Cropper(this.image, {
      aspectRatio: 16 / 9,
      center: true,
      zoomable: false,
      movable: false,
			autoCropArea: 1,
      dragMode: 'none'
    });
  }
  onImage2Cropped(){
    let croppedCanvasObj = {
      minWidth: 256,
      minHeight: 256,
      maxWidth: 1024,
      maxHeight: 1024,
      fillColor: '#fff',
      imageSmoothingEnabled: true
    };
    this.croppedImage2 = this.cropper.getCroppedCanvas(croppedCanvasObj).toDataURL("image/png", 1);
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }

  imageLoaded() {
    // clear event value after img loaded
  }

  cropperReady() {
    // cropper ready
  }

  loadImageFailed() {
    // show message
  }
}
