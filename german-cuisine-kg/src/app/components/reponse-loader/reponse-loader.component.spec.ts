import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReponseLoaderComponent } from './reponse-loader.component';

describe('ReponseLoaderComponent', () => {
  let component: ReponseLoaderComponent;
  let fixture: ComponentFixture<ReponseLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReponseLoaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReponseLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
