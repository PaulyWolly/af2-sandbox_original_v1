import { Component } from "@angular/core";
//import { MatPaginator } from '@angular/material/paginator';

/*
Basic usage of the <table mat-table>
*/

@Component({
    selector: 'table-basic-md',
    templateUrl: 'table-basic-md.html',
    styleUrls: ['table-basic-md.css']
})
export class TableBasicMd {
    displayedColumns = ['position', 'name', 'weight', 'symbol'];
    dataSource = ELEMENT_DATA;
}

export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 1.0079, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 1.0079, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 1.0079, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 1.0079, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 1.0079, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 1.0079, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 1.0079, symbol: 'O'},
    {position: 9, name: 'Flourine', weight: 1.0079, symbol: 'F'},
    {position: 10, name: 'Hydrogen', weight: 1.0079, symbol: 'Ne'},
    {position: 11, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 12, name: 'Helium', weight: 1.0079, symbol: 'He'},
    {position: 13, name: 'Lithium', weight: 1.0079, symbol: 'Li'},
    {position: 14, name: 'Beryllium', weight: 1.0079, symbol: 'Be'},
    {position: 15, name: 'Boron', weight: 1.0079, symbol: 'B'},
    {position: 16, name: 'Carbon', weight: 1.0079, symbol: 'C'},
    {position: 17, name: 'Nitrogen', weight: 1.0079, symbol: 'N'},
    {position: 18, name: 'Oxygen', weight: 1.0079, symbol: 'O'},
    {position: 19, name: 'Flourine', weight: 1.0079, symbol: 'F'},
    {position: 20, name: 'Hydrogen', weight: 1.0079, symbol: 'Ne'}
];
