import { Component, OnInit } from '@angular/core';
import { StoriesService } from '../services/stories.service';
import { Story } from '../add-stories/story';


@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.sass']
})
export class StoriesComponent implements OnInit {
stories: Story[];
  constructor(private storyService: StoriesService) { }

  ngOnInit(): void {
    this.storyService.getStories().subscribe(data => {
      this.stories = data;
    })
  }

}
