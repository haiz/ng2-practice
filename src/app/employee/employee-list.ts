import { Component } from '@angular/core';
import { Sorter } from '../shared/utils/sorter';

@Component({
    moduleId: module.id,
    selector: 'employee-list',
    templateUrl: 'employee-list.component.html',
    styleUrls: ['employee-list.component.css'],
    providers: [Sorter],
})
export class EmployeeListComponent {
    private employees: any[];
    constructor(private sorter: Sorter) { }
    private sortReverse: boolean = false;
    private sortProperty: string = '';

    sort(prop: string) {
        this.sortProperty = prop;
        this.sortReverse = !this.sortReverse;
        this.sorter.sort(this.employees, prop);
    }
}