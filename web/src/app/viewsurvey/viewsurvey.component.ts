import { Component, OnInit ,ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource,MatSort } from '@angular/material';
import { GlobalMethods } from '../services/global_methods';
import { jsonpCallbackContext } from '@angular/common/http/src/module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewsurvey',
  templateUrl: './viewsurvey.component.html',
  styleUrls: ['./viewsurvey.component.css']
})
export class ViewsurveyComponent implements OnInit {

  displayedColumns: string[] = [ 'name', 'createdAt', 'action', 'view'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private gbmethods : GlobalMethods,private router: Router) {
  

  }

 

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.gbmethods.PostData(this.gbmethods.getallsurves_url,{cid : localStorage.getItem('user_id')}).subscribe( Response => {
       let res: any=Response;
     this.dataSource = new MatTableDataSource(res);
 
   },
   error => {
     console.error("Error adding survey!");
     console.error(error);
   });
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  
  editsurvey(element : any){
    //console.log(element);
    localStorage.setItem("myHiddenData", JSON.stringify(element));
    this.router.navigateByUrl('edit');
  }
  viewsurvey(element : any){
    //console.log(element);
    localStorage.setItem("viewsurvey", JSON.stringify(element));
    this.router.navigateByUrl('survey');
  }
  deletesurvey(id :any){
    console.log(id);
  }

}



 


