import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../services/feedback.service';
import { Feedback } from './feedBack';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.sass']
})
export class FeedbackComponent implements OnInit {
feedBacks: Feedback[];
password: any;
  constructor(
    private feedbackService: FeedbackService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.password = localStorage.getItem("password");
    this.authService.signIn(this.password).then(() => {
      this.feedbackService.getFeedbacks().subscribe(data => {
        this.feedBacks = data;
      })
    })
  }

  delete(id) {
    return this.feedbackService.delete(id)
  }

}
