import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  studentID = '001';
  studentName = 'Monky D Luffy';
  allowNewStudent = false;
  imgUrl = 'https://i.pinimg.com/originals/95/6b/d4/956bd4081372ba4e1962b078f6d364c9.jpg';
  isActive = true;

  skills = {
    title: 'This is Mugiwara',
    student: 10,
    rating: 100,
    price: 150000,
    releasDate: new Date(2021, 2, 18)
  };


  constructor() { }

  ngOnInit(): void {
  }

}
