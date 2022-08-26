import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { filter } from 'rxjs';
import { IModalData, ModalRouteManagerComponent } from '../modal-route-manager/modal-route-manager.component';
import { HandleRoutesService } from '../services/handle-routes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public displayedColumns: string[] = [
    'name',
    'adjustment',
    'cubic_capacity',
    'state',
    'service_type',
    'route',
    'actions'
  ];
  public dataSource: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    public dialog: MatDialog,
    private _handleRoutesService: HandleRoutesService,
  ) {}

  ngOnInit(): void{
    this._handleRoutesService.getItems().subscribe(data => {
      this.dataSource = new MatTableDataSource<any>(data.rows);
      this.dataSource.paginator = this.paginator;
    });
  }

  openRouteManagerModal(route: any) {
    const dialogRef = this.dialog.open(ModalRouteManagerComponent, {
      minWidth: '15vW',
      minHeight: '15vH',
      data: {
        modelData: route
      } as unknown as IModalData
    });
    dialogRef.afterClosed().pipe(
      filter(data => !!data)
    ).subscribe((data:any) => {
      this.ngOnInit();
    });
  }
}
