import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit{

  courses: Course[] = [];

  ngOnInit(): void {
    this.courses = [
      {
        id: 1,
        name: 'Angular: Forms',
        imageUrl: '/assets/images/forms.png',
        price: 45.99,
        code: 'XPS-8796',
        duration: 120,
        rating: 4.2,
        releaseDate: 'December, 2, 2020'
      },
      {
        id: 1,
        name: 'Angular: HTML',
        imageUrl: '/assets/images/http.png',
        price: 99.99,
        code: 'XPS-8586',
        duration: 120,
        rating: 5,
        releaseDate: 'December, 4, 2020'
      },
      {
        id: 1,
        name: 'Angular: HTML II',
        imageUrl: '/assets/images/http.png',
        price: 99.99,
        code: 'XPS-8587',
        duration: 120,
        rating: 3.5,
        releaseDate: 'December, 4, 2020'
      }
    ]
  }
}
