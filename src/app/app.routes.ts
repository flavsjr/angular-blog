import { Routes } from '@angular/router';
import { PostListComponent } from './pages/post-list/post-list.component';
import { PostDetailComponent } from './pages/post-detail/post-detail.component';
import { GenericPageComponent } from './pages/generic-page/generic-page.component';

export const routes: Routes = [
    { path: '', component: PostListComponent},
    { path: 'post/:id', component: PostDetailComponent},
    { 
        path: 'case-studies',
        component: GenericPageComponent,
        data: {
            title: 'Case Studies',
            description: 'Explore our in-depth case studies and see how we solve complex challenges for our clients.',
            items: [
                { title: 'Case Study: Fintech App', imageUrl: 'https://picsum.photos/seed/case1/400/300' },
                { title: 'Case Study: Health Platform', imageUrl: 'https://picsum.photos/seed/case2/400/300' },
                { title: 'Case Study: E-commerce', imageUrl: 'https://picsum.photos/seed/case3/400/300' }
            ]
        }
    },
    { 
        path: 'portfolios', 
        component: GenericPageComponent,
        data: {
          title: 'Portfolios',
          description: 'Browse our collection of projects and see the quality and creativity of our work.',
          items: [
            { title: 'Visual Identity Project', imageUrl: 'https://picsum.photos/seed/port1/400/300' },
            { title: 'Mobile App Design System', imageUrl: 'https://picsum.photos/seed/port2/400/300' },
            { title: 'Modern Institutional Website', imageUrl: 'https://picsum.photos/seed/port3/400/300' },
            { title: 'Data Analysis Dashboard', imageUrl: 'https://picsum.photos/seed/port4/400/300' }
          ]
        } 
    },
    { 
        path: 'resource', 
        component: GenericPageComponent,
        data: {
          title: 'Resources',
          description: 'Access our resources, guides, and articles to deepen your knowledge of design and technology.',
          items: [
            { title: 'Web Accessibility Guide', imageUrl: 'https://picsum.photos/seed/res1/400/300' },
            { title: 'Ebook: The Future of UI/UX', imageUrl: 'https://picsum.photos/seed/res2/400/300' }
          ]
        } 
    }
];
