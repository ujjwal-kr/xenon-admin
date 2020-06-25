import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { StoriesService } from '../services/stories.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Story } from './story';

@Component({
  selector: 'app-add-stories',
  templateUrl: './add-stories.component.html',
  styleUrls: ['./add-stories.component.sass']
})
export class AddStoriesComponent implements OnInit {
password: any;
form: FormGroup;
  constructor(
    private authService: AuthService,
    private storiesService: StoriesService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: ['', [
        Validators.required
      ]],
      description: ['', [
        Validators.required
      ]],
      image: [''],
      url: ['']
    })
    this.password = localStorage.getItem("password")
    this.authService.signIn(this.password);
  }

  get description() { return this.form.get('description').value }
  get title() { return this.form.get('title').value }
  get image() { return this.form.get('image').value }
  get url() { return this.form.get('url').value }

  submit() {
    if (!this.form.errors){
      const data: Story = {
        title: this.title,
        description: this.description,
        image: this.image,
        url: this.url
      }
      this.form.reset()
      return this.storiesService.addStory(data);
    }
    return
  }

}
