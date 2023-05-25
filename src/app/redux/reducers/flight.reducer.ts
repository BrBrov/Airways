import { createReducer, on } from '@ngrx/store';
import { IFlightState, initialFlightState } from '../state.model';

import * as FlightActions from '../actions/flight.actions';

export const flightReducer = createReducer(
  initialFlightState,
  on(FlightActions.updatePassengers, (state: IFlightState, { passengers }):IFlightState => ({
    ...state,
    passengers,
  })),
  on(FlightActions.getFlights, (state: IFlightState): IFlightState => ({ ...state })),
  on(
    FlightActions.updateFlights,
    (state: IFlightState, {
      flightType, from, destination, startDate, endDate, passengers,
    }): IFlightState => ({
      ...state,
      flightType,
      from,
      destination,
      startDate,
      endDate,
      passengers,
    }),
  ),
  on(
    FlightActions.changeFromFlight,
    (state: IFlightState, { from }): IFlightState => ({
      ...state,
      from,
    }),
  ),
  on(
    FlightActions.changeDestinationFlight,
    (state: IFlightState, { destination }): IFlightState => ({
      ...state,
      destination,
    }),
  ),
  on(
    FlightActions.changeStartDateFlight,
    (state: IFlightState, { startDate }): IFlightState => ({
      ...state,
      startDate,
    }),
  ),
  on(
    FlightActions.changeEndDateFlight,
    (state: IFlightState, { endDate }): IFlightState => ({
      ...state,
      endDate,
    }),
  ),
  on(
    FlightActions.updateDirectFlight,
    (state: IFlightState, { selectedDirectFlight }): IFlightState => ({
      ...state,
      selectedDirectFlight,
    }),
  ),
  on(
    FlightActions.updateReverseFlight,
    (state: IFlightState, { selectedReverseFlight }): IFlightState => ({
      ...state,
      selectedReverseFlight,
    }),
  ),
  on(
    FlightActions.updateTotalCost,
    (state: IFlightState, { totalCost }): IFlightState => ({
      ...state,
      totalCost,
    }),
  ),
  on(
    FlightActions.clearStore,
    (state: IFlightState): IFlightState => ({
      ...state,
      destination: initialFlightState.destination,
      from: initialFlightState.from,
      startDate: initialFlightState.startDate,
      endDate: initialFlightState.endDate,
      passengers: initialFlightState.passengers,
      flightType: initialFlightState.flightType,
      selectedDirectFlight: initialFlightState.selectedDirectFlight,
      selectedReverseFlight: initialFlightState.selectedReverseFlight,
    }),
  ),
);
