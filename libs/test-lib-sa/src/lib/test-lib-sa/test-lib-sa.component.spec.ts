import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestLibSaComponent } from './test-lib-sa.component';

describe('TestLibSaComponent', () => {
  let component: TestLibSaComponent;
  let fixture: ComponentFixture<TestLibSaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestLibSaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestLibSaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
