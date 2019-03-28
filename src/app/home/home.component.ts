import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'specialty', 'gender', 'rating'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}


export interface PeriodicElement {
  name: string;
  position: number;
  specialty: string;
  gender: string;
  rating: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Saddy Odugbesan', gender: 'Male', specialty: 'Surgeon', rating: '75%'},
  {position: 2, name: 'Ana Pan', gender: 'Female', specialty: 'Surgeon', rating: '88%'},
  {position: 3, name: 'Mary Simson', gender: 'Female', specialty: 'Surgeon', rating: '50%'},
];