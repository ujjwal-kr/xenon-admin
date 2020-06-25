import { Component, OnInit } from '@angular/core';
import { StoriesService } from '../services/stories.service';
import { Story } from '../add-stories/story';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.sass']
})
export class StoriesComponent implements OnInit {
stories: Story[];
password: any;
  constructor(private storyService: StoriesService, private authService: AuthService) { }

  ngOnInit(): void {
    this.password = localStorage.getItem("password")
    this.authService.signIn(this.password)
    this.storyService.getStories().subscribe(data => {
      this.stories = data;
    })
  }

  delete(id) {
    return  this.storyService.deleteStory(id)
  }

}
