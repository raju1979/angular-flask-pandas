import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-data',
  templateUrl: './all-data.component.html',
  styleUrls: ['./all-data.component.css']
})
export class AllDataComponent implements OnInit {

  columnDefs = [
    { headerName: 'Passenger Class', field: 'pclass', sortable: true, filter: true, resizable: true },
    { headerName: 'Name', field: 'name', sortable: true, filter: true, resizable: true },
    { headerName: 'Sex', field: 'sex', sortable: true, filter: true, resizable: true },
    { headerName: 'Age', field: 'age', sortable: true, filter: true, resizable: true },
    { headerName: 'sibsp', field: 'Sibsp', sortable: true, filter: true, resizable: true },
    { headerName: 'Parch', field: 'parch', sortable: true, filter: true, resizable: true },
    { headerName: 'Ticket', field: 'ticket', sortable: true, filter: true, resizable: true },
    { headerName: 'Fare', field: 'fare', sortable: true, filter: true, resizable: true },
    { headerName: 'Cabin', field: 'cabin', sortable: true, filter: true, resizable: true },
    { headerName: 'Embarked', field: 'embarked', sortable: true, filter: true, resizable: true },
    { headerName: 'Survived', field: 'survived', sortable: true, filter: true, resizable: true },
  ];

  rowData;

  private gridApi;
  private gridColumnApi;

  constructor(private _data: DataService, private activatedRoute: ActivatedRoute) {

  }

  sizeToFit() {
    this.gridApi.sizeColumnsToFit();
  }

  ngOnInit() {
    
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.activatedRoute.data.subscribe((data: { alldata: any }) => {
      console.log(data)
      this.rowData = data.alldata.output;
      this.sizeToFit();
    });

    // this._data.getAllData()
    //   .subscribe(
    //     (data: any) => {
    //       console.log(data);
    //       this.rowData = data.output;
    //       this.sizeToFit();
    //     }, (err) => {
    //       console.log(err)
    //     }
    //   )
  }

}
