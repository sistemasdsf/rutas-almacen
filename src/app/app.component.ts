import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { filter } from 'rxjs';
import { IModalData, ModalRouteManagerComponent } from './modal-route-manager/modal-route-manager.component';
import { HandleRoutesService } from './services/handle-routes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public displayedColumns: string[] = [
    'name',
    'adjustment',
    'cubic_capacity',
    'state',
    'service_type',
    'route',
    'actions'
  ];
  public dataSource = new MatTableDataSource<any>([
    {
      IDAGENCIA: 1,
      name: 'Correos Islas',
      adjustment: 1,
      cubic_capacity: 167,
      state: 'Activo',
      service_type: 'Básico',
      route: 62,
    },
    {
      IDAGENCIA: 2,
      name: 'Cabeza Transport',
      adjustment: 1,
      cubic_capacity: 250,
      state: 'Activo',
      service_type: 'Básico',
      route: 54,
    }
  ]);

  constructor(
    public dialog: MatDialog,
    private _handleRoutesService: HandleRoutesService
  ) {}

  ngOnInit(): void{
    this._handleRoutesService.getItems().subscribe(data => {
      this.dataSource = new MatTableDataSource<any>(data);
    });
  }

  openRouteManagerModal(allocation: any) {
    const dialogRef = this.dialog.open(ModalRouteManagerComponent, {
      minWidth: '15vW',
      minHeight: '15vH',
      data: {
        modelData: allocation
      } as unknown as IModalData
    });
    dialogRef.afterClosed().pipe(
      filter(data => !!data)
    ).subscribe((data:any) => {
      this.ngOnInit();
    });
  }
}
