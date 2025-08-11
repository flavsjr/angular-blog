import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Post, PostService } from '../../services/post.service';
import { BigMainCardComponent } from '../../components/big-main-card/big-main-card.component';
import { SmallCardComponent } from '../../components/small-card/small-card.component';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule, FormsModule, BigMainCardComponent, SmallCardComponent],
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition(':enter', [
        query('app-small-card', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger('100ms', [
            animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class PostListComponent implements OnInit {
  allPostsMaster: Post[] = [];
  filteredPosts: Post[] = [];
  searchTerm: string = '';
  featuredPost!: Post | undefined;
  activeCategory: string = 'All';

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.allPostsMaster = this.postService.getAllPosts();
    this.filteredPosts = this.allPostsMaster;
    this.featuredPost = this.postService.getFeaturedPost();
  }

  setFilter(category: string) : void {
    this.activeCategory = category;
    this.applyFilters();
  }

  onSearch(): void {
    this.applyFilters();
  }

  applyFilters() : void {
    let posts = this.allPostsMaster;

    if (this.activeCategory !== 'All') {
      posts = posts.filter(post => post.category === this.activeCategory);
    }

    if (this.searchTerm.trim() !== '') {
      posts = posts.filter(post =>
        post.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }

    this.filteredPosts = posts;
  }
}
