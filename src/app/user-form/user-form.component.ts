import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  public imagePath;
  imgURL: any;
  public imgUploaded: boolean = false;
  
  preview(files) {
    if (files.length === 0)
    return;
    
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
    this.imgUploaded = true;
  }
  
  constructor() { }
  
  ngOnInit() {
  }
  
}
