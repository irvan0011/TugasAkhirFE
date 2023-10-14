import { Component } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
})
export class AddPostComponent {
  public Editor = ClassicEditor;
  public config = {
    placeholder: 'Type the content here!',
  };
  upload: Boolean;
  logo?: String;
  constructor() {
    this.upload = false;
  }
  public ImageUrl = '';
  public FileImage: any;

  onFileChange(event: any) {
    this.FileImage = event.target.files[0];
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.ImageUrl = event.target.result;
    };
    this.upload = true;
    reader.readAsDataURL(this.FileImage);
    console.log(this.FileImage);
  }
  close() {
    this.upload = false;
    this.FileImage = null;
    console.log(this.FileImage);
  }
}