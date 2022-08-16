import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRouteManagerComponent } from './modal-route-manager.component';

describe('ModalRouteManagerComponent', () => {
  let component: ModalRouteManagerComponent;
  let fixture: ComponentFixture<ModalRouteManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalRouteManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalRouteManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
