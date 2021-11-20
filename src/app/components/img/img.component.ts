import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnChanges {

  @Input() img: string = '';
  @Output() loaded = new EventEmitter();
  imageDefault:string = './assets/images/default.png';

  constructor() {
    console.log('constructor', 'imgValue =>', this.img);
  }

  ngOnChanges(){
    console.log('ngOnChanges', 'imgValue =>', this.img);
  }

  imgError(){
    this.img = this.imageDefault;
  }

  imgLoaded(){
    console.log('Cargado con exito');
    this.loaded.emit(this.img);
  }

}
