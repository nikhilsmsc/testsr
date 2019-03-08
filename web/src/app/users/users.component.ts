import { Component, OnInit, ViewChild } from '@angular/core';
import { GlobalMethods } from '../services/global_methods';
import { Router } from '@angular/router';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  displayedColumns: string[] = [ 'name', 'createdAt', 'UpdatedAt' ,'count'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private gbmethods : GlobalMethods,private router: Router) {
  

  }

 

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.gbmethods.PostData(this.gbmethods.getusers,{uid : localStorage.getItem('user_id')}).subscribe( Response => {
       let res: any=Response;
     this.dataSource = new MatTableDataSource(res);
 
   },
   error => {
     console.error("Error !");
     console.error(error);
   });
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  


}
