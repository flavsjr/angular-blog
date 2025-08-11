import { Injectable } from '@angular/core';

export interface Post {
  id: number;
  category: string;
  title: string;
  imageUrl: string;
  author: string;
  authorAvatarUrl: string;
  publishDate: Date;
  summary: string;
  content: string;
}

export interface FeaturedPost extends Post {
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private mockPosts: Post[] = [
    {
      id: 1,
      category: 'UI DESIGN',
      title: 'Compelling Design Takes More Than “Making It Look Strips”',
      imageUrl: 'https://picsum.photos/seed/design1/400/250',
      author: 'Jane Doe',
      authorAvatarUrl: 'https://i.pravatar.cc/40?u=jane',
      publishDate: new Date('2025-08-10T10:00:00Z'),
      summary: 'A deep dive into the principles of compelling UI design...',
      content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.</p>
      <h2>Subtítulo Importante</h2>
      <p>Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.</p>
      <blockquote>Isso é uma citação. Ela se destaca do resto do texto para chamar a atenção para uma frase chave.</blockquote>
      <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero.</p>
    `,
    },
    {
      id: 2,
      category: 'DESIGN PROCESS',
      title: 'What Is Design Thinking and How It Hacks the Way to Success',
      imageUrl: 'https://picsum.photos/seed/design2/400/250',
      author: 'Jane Doe',
      authorAvatarUrl: 'https://i.pravatar.cc/40?u=jane',
      publishDate: new Date('2025-08-10T10:00:00Z'),
      summary: 'A deep dive into the principles of compelling UI design...',
      content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.</p>
      <h2>Subtítulo Importante</h2>
      <p>Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.</p>
      <blockquote>Isso é uma citação. Ela se destaca do resto do texto para chamar a atenção para uma frase chave.</blockquote>
      <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero.</p>
    `,
    },
    {
      id: 3,
      category: 'UI DESIGN',
      title:
        'Healthcare UX: How Design Can Solve Biggest Challenges for Medical',
      imageUrl: 'https://picsum.photos/seed/design3/400/250',
      author: 'Jane Doe',
      authorAvatarUrl: 'https://i.pravatar.cc/40?u=jane',
      publishDate: new Date('2025-08-10T10:00:00Z'),
      summary: 'A deep dive into the principles of compelling UI design...',
      content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.</p>
      <h2>Subtítulo Importante</h2>
      <p>Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.</p>
      <blockquote>Isso é uma citação. Ela se destaca do resto do texto para chamar a atenção para uma frase chave.</blockquote>
      <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero.</p>
    `,
    },
    {
      id: 4,
      category: 'TECHNOLOGY',
      title: 'The Unseen Revolution of Backend Development in 2025',
      imageUrl: 'https://picsum.photos/seed/tech1/400/250',
      author: 'Jane Doe',
      authorAvatarUrl: 'https://i.pravatar.cc/40?u=jane',
      publishDate: new Date('2025-08-10T10:00:00Z'),
      summary: 'A deep dive into the principles of compelling UI design...',
      content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.</p>
      <h2>Subtítulo Importante</h2>
      <p>Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.</p>
      <blockquote>Isso é uma citação. Ela se destaca do resto do texto para chamar a atenção para uma frase chave.</blockquote>
      <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero.</p>
    `,
    },
    {
      id: 5,
      category: 'BUSINESS',
      title: 'How to Align Your Product Strategy with Market Needs',
      imageUrl: 'https://picsum.photos/seed/business1/400/250',
      author: 'Jane Doe',
      authorAvatarUrl: 'https://i.pravatar.cc/40?u=jane',
      publishDate: new Date('2025-08-10T10:00:00Z'),
      summary: 'A deep dive into the principles of compelling UI design...',
      content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.</p>
      <h2>Subtítulo Importante</h2>
      <p>Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.</p>
      <blockquote>Isso é uma citação. Ela se destaca do resto do texto para chamar a atenção para uma frase chave.</blockquote>
      <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero.</p>
    `,
    },
    {
      id: 6,
      category: 'DESIGN PROCESS',
      title: 'A Practical Guide to User Journey Mapping',
      imageUrl: 'https://picsum.photos/seed/design4/400/250',
      author: 'Jane Doe',
      authorAvatarUrl: 'https://i.pravatar.cc/40?u=jane',
      publishDate: new Date('2025-08-10T10:00:00Z'),
      summary: 'A deep dive into the principles of compelling UI design...',
      content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.</p>
      <h2>Subtítulo Importante</h2>
      <p>Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.</p>
      <blockquote>Isso é uma citação. Ela se destaca do resto do texto para chamar a atenção para uma frase chave.</blockquote>
      <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero.</p>
    `,
    },
  ];

  constructor() {}

  getAllPosts(): Post[] {
    return this.mockPosts;
  }

  getFeaturedPost(): Post | undefined {
    return this.mockPosts.find(p => p.id === 1);
  }

  getPostById(id: number): Post | undefined {
    return this.mockPosts.find(post => post.id === id);
  }
}
