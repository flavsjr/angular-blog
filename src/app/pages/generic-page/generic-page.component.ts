import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-generic-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './generic-page.component.html',
  styleUrl: './generic-page.component.scss'
})
export class GenericPageComponent implements OnInit {
  pageTitle: string = '';
  pageDescription: string = '';
  pageItems: any[] = []

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: Data) => {
      this.pageDescription = data['description'];
      this.pageTitle = data['title'];
      this.pageItems = data['items'];
    });
  }
}
