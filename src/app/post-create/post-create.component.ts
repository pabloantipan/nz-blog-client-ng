import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {
  public postForm: FormGroup;

  constructor(
    private postService: PostsService,
  ) {
    this.postForm = new FormGroup({
      title: new FormControl(''),
    });
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    const titleValue = this.postForm.get('title')!.value;
    await this.postService.createPost( titleValue ).toPromise();
    this.postForm.reset();
  }

}
