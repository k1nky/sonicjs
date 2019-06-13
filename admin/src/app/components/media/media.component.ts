import { Component, OnInit, ViewChild } from '@angular/core';
import { MediaService } from "../../../../projects/sonic-core/src/lib/services/media.service";
import { DropzoneComponent , DropzoneDirective, DropzoneConfigInterface } from 'ngx-dropzone-wrapper';


@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {

  constructor(private mediaService: MediaService) { }
  mediaList:any;

  public config: DropzoneConfigInterface = {
    clickable: true,
    maxFiles: 1,
    autoReset: null,
    errorReset: null,
    cancelReset: null
  };

  @ViewChild(DropzoneComponent) componentRef?: DropzoneComponent;
  @ViewChild(DropzoneDirective) directiveRef?: DropzoneDirective;

  ngOnInit() {
    this.loadMedia();
    this.setupDropzone();
  }

  async loadMedia() {
    this.mediaList = await this.mediaService.getMedia();
    console.log('media', this.mediaList);
  }

  setupDropzone(){
    // this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; }; 
    // this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; }; 
  }

  public onUploadInit(args: any): void {
    console.log('onUploadInit:', args);
  }

  public onUploadError(args: any): void {
    console.log('onUploadError:', args);
  }

  public onUploadSuccess(args: any): void {
    console.log('onUploadSuccess:', args);
  }

}