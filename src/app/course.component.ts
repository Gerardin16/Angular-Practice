import { CoursesService } from './course.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
    
                <h2>{{ title }}</h2>
                <ol>
                    <li *ngFor="let course of courseList">
                        {{ course }}
                    </li>
                </ol>
                `
})
export class CourseComponent{
    title="Welcome to Angular Courses";
    courseList;

    constructor (service:CoursesService){
        this.courseList=service.getCourses();

    }
    
}