import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-all-columns',
  templateUrl: './all-columns.component.html',
  styleUrls: ['./all-columns.component.css']
})
export class AllColumnsComponent implements OnInit {

  columns: Array<string> = [];

  constructor(private _data: DataService) { 
    this._data.getAllColumns()
      .subscribe((data: any) => {
        console.log(data);
        this.columns = data.total_columns;
      })
  }

  ngOnInit() {
  }

}
