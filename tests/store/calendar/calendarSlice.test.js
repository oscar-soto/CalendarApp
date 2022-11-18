import {
  calendarSlice,
  onAddNewEvent,
  onDeleteEvent,
  onLoadEvent,
  onLogoutCalendar,
  onSetActiveEvent,
  onUpdateEvent,
} from '../../../src/store/calendar/calendarSlice';
import {
  calendarWithActiveEventsState,
  calendarWithEventsState,
  events,
  initialState,
} from '../../__fixtures/calendatSatate';

describe('Pruebas en calendarSlice', () => {
  test('Debe de regresar el estado por defecto', () => {
    const state = calendarSlice.getInitialState();
    expect(state).toEqual(initialState);
  });

  test('onSetActiveEvent debe de activar el evento', () => {
    const state = calendarSlice.reducer(
      calendarWithEventsState,
      onSetActiveEvent(events[0])
    );

    expect(state.activeEvent).toEqual(events[0]);
  });

  test('onAddNewEvent debe agregar el evento', () => {
    const newEvent = {
      id: 3,
      start: new Date('2022-11-21 13:00:00'),
      end: new Date('2022-11-21 15:00:00'),
      title: 'Cumple años de Oscar',
      notes: 'Alguna nota nueva',
    };

    const state = calendarSlice.reducer(
      calendarWithEventsState,
      onAddNewEvent(newEvent)
    );

    expect(state.events).toEqual([...events, newEvent]);
  });

  test('onUpdateEvent debe actualizar el evento', () => {
    const updatedEvent = {
      id: 1,
      start: new Date('2022-11-21 13:00:00'),
      end: new Date('2022-11-21 15:00:00'),
      title: 'Cumple años de Oscar',
      notes: 'Alguna nota nueva',
    };

    const state = calendarSlice.reducer(
      calendarWithEventsState,
      onUpdateEvent(updatedEvent)
    );

    expect(state.events).toContain(updatedEvent);
  });

  test('onDeleteEvent debe de borrar el evento activo', () => {
    // calendarWithActiveEventsState
    const state = calendarSlice.reducer(
      calendarWithActiveEventsState,
      onDeleteEvent()
    );
    expect(state.activeEvent).toBe(null);
    expect(state.events).not.toContain(events[0]);
  });

  test('onLoadEvent debe de establecer los eventos', () => {
    // InitalState
    const state = calendarSlice.reducer(initialState, onLoadEvent(events));
    expect(state.isLoadingEvents).toBeFalsy();
    expect(state.events).toEqual(events);

    const newState = calendarSlice.reducer(state, onLoadEvent(events));
    expect(state.events.length).toEqual(events.length);
  });

  test('onLogoutCalendar debe de limpiar el estado', () => {
    // calendarWithActiveEventsState
    const state = calendarSlice.reducer(
      calendarWithActiveEventsState,
      onLogoutCalendar()
    );
    expect(state).toEqual(initialState);
  });
});
