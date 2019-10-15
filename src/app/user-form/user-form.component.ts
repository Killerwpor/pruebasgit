import { EventEmitter } from "@angular/core";
import { Component, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-user-form",
  templateUrl: "./user-form.component.html",
  styleUrls: ["./user-form.component.css"]
})
export class UserFormComponent implements OnInit {
  @Output() outputUsername = new EventEmitter();
  @Output() outputId = new EventEmitter();
  @Output() outputMail = new EventEmitter();
  @Output() outputPhone = new EventEmitter();
  @Output() outputCompany = new EventEmitter();
  @Output() outputJob = new EventEmitter();

  inputUsername: string;
  inputId: string;
  inputMail: string;
  inputPhone: string;
  inputCompany: string;
  inputJob: string;

  public imagePath;
  imgURL: any;
  public imgUploaded: boolean = false;

  preview(files) {
    if (files.length === 0) return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = _event => {
      this.imgURL = reader.result;
    };
    this.imgUploaded = true;
  }

  updateValues() {
    console.log("updateValues");
    /*
    console.log(this.inputUsername);
    console.log(this.inputId);
    console.log(this.inputMail);
    console.log(this.inputPhone);
    console.log(this.inputCompany);
    console.log(this.inputJob);
    */
  }

  constructor() {}

  ngOnInit() {}
}
