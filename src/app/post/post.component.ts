import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Post } from '../interfaces/post';
import { CommentsService } from '../services/comments.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() data: Post;
  public comments: any;
  public commentForm: FormGroup;

  constructor(
    private commentService: CommentsService,
  ) {
    this.data = {} as Post;
    this.commentForm = new FormGroup({
      commentText: new FormControl(''),
    });
   }

  public async ngOnInit(): Promise<void> {
    if(this.data.id)
      this.comments = await this.commentService.get(this.data.id).toPromise();
    console.log(this.data.id, this.comments);
  }

  public async onSubmit() {
    const commentText = this.commentForm.get('commentText')!.value;
    // console.log(commentText)
    await this.commentService.create(this.data.id, commentText).toPromise();
  }
}
