import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSingleProductComponent } from './show-single-product.component';

describe('ShowSingleProductComponent', () => {
  let component: ShowSingleProductComponent;
  let fixture: ComponentFixture<ShowSingleProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowSingleProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowSingleProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
