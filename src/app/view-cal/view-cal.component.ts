import { Component, OnInit } from '@angular/core';
import { CalculateService } from '../services/calculate.service';
import { CalModel } from '../models/CalModel';

@Component({
  selector: 'app-view-cal',
  templateUrl: './view-cal.component.html',
  styleUrls: ['./view-cal.component.scss']
})
export class ViewCalComponent implements OnInit {

  

  constructor(private calculateService: CalculateService) { }

  items: any;  

  ngOnInit(): void {
    this.calculateService.getAll().subscribe(items => {
      this.items = items;   
    });
    
  }

}
