import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FlightState } from 'src/app/redux/state.model';
import * as FlightSelect from '../../../redux/selectors/flight.selector';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-step',
  templateUrl: './first-step.component.html',
  styleUrls: ['./first-step.component.scss'],
})
export class FirstStepComponent implements OnInit {

  public flights$: Observable<FlightState> | undefined;

  constructor(private store: Store,
              private router: Router,) {}

  ngOnInit(): void {
    this.flights$ = this.store.select(FlightSelect.selectFlight);
  }

  public back(isBack:boolean):void{
    if(isBack){
      this.router.navigateByUrl('/'); 
    }else{
      this.router.navigateByUrl('step/2'); 
    }
  }

}
