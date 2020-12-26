import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdrComponent } from './ordr.component';

describe('OrdrComponent', () => {
  let component: OrdrComponent;
  let fixture: ComponentFixture<OrdrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
