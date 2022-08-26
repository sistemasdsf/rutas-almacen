import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HandleRoutesService } from '../services/handle-routes.service';

export interface IModalData {
  modelData?: any;
}

@Component({
  selector: 'app-modal-route-manager',
  templateUrl: './modal-route-manager.component.html',
  styleUrls: ['./modal-route-manager.component.css']
})
export class ModalRouteManagerComponent implements OnInit {
  public routesForm!: FormGroup;
  public modelData!: any;
  public statesEnum: string[] = [
    'Activo',
    'Inactivo'
  ]

  constructor(
    private _fb: FormBuilder,
    public dialogRef: MatDialogRef<ModalRouteManagerComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: IModalData,
    private _handleRoutesService: HandleRoutesService
  ) { 
    this.modelData = this.dialogData.modelData;
  }

  ngOnInit(): void {
    this.routesForm = this.routesToFormGroup(this.modelData);
  }

  public routesToFormGroup(item: any): FormGroup {
    return this._fb.group({
      state: [item?.ESTADO, [Validators.required]],
    })
  }

  public submitData() {
    if(this.routesForm.invalid) {
      return;
    }
    const modelDataCopy:any = {
      ROWID: this.modelData.ROWID,
      ESTADO: this.routesForm.get('state')?.value,
    }
    this._handleRoutesService.updateItem(modelDataCopy).subscribe(() => {
      this._closeModal(true);
    })
  }

  private _closeModal(value?: boolean) {
    this.dialogRef.close(value);
  }

}
