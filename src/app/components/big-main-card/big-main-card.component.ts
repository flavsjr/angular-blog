import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Post } from '../../services/post.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-big-main-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './big-main-card.component.html',
  styleUrl: './big-main-card.component.scss'
})
export class BigMainCardComponent {
  @Input() data!: Post;
}
