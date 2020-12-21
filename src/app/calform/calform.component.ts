import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, throwError } from "rxjs";
import { CalModel } from '../models/CalModel';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router'; 


@Component({
  selector: 'app-calform',
  templateUrl: './calform.component.html',
  styleUrls: ['./calform.component.scss']
})
export class CalformComponent implements OnInit {
  @Output() calForm: EventEmitter<any> = new EventEmitter();
  
  one: number;
  two: number;
  three: number;
  four: number;

  constructor(private http: HttpClient,private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm){
    this.http.post('https://localhost:5001/api/calculate', f).subscribe(status=> {
      console.log(JSON.stringify(status))
      location.reload();
    });
  }

}
