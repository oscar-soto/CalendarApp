import { createSlice } from '@reduxjs/toolkit';
import { addHours } from 'date-fns';

const tempEvent = {
  _id: new Date().getTime(),
  title: 'Cumple años del jefe',
  notes: 'Hay que comprar el pastel',
  start: new Date(), //
  end: addHours(new Date(), 2),
  bgColor: '#fafafa',
  user: {
    _id: '12324',
    name: 'Oscar',
  },
}

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState: {
    events: [tempEvent],
    activeEvent: null
  },
  reducers: {
    onSetActiveEvent: (state, {payload}) => {
      state.activeEvent = payload
    }
  },
});

// Action creators are generated for each case reducer function
export const { onSetActiveEvent } = calendarSlice.actions;