import { useDispatch, useSelector } from 'react-redux';
import { onAddNewEvent, onSetActiveEvent, onUpdateEvent } from '../store';

export const useCalendarStore = () => {
  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector((state) => state.calendar);

  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent));
  };

  const startSavingEvent = async (calendarEvent) => {
    // TODO: Llegar al backend

    // all right
    if (calendarEvent._id) {
      // update
      dispatch(onUpdateEvent({ ...calendarEvent }));
    } else {
      // build
      dispatch(onAddNewEvent({ ...calendarEvent, _id: new Date().getTime() }));
    }
  };

  return {
    // Prperties
    events,
    activeEvent,

    // Methods
    setActiveEvent,
    startSavingEvent,
  };
};
