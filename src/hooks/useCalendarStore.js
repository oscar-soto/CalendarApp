import { useDispatch, useSelector } from 'react-redux';
import { calendarApi } from '../api';
import {
  onAddNewEvent,
  onDeleteEvent,
  onSetActiveEvent,
  onUpdateEvent,
} from '../store';

export const useCalendarStore = () => {
  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector((state) => state.calendar);
  const { user } = useSelector((state) => state.auth);

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
      const { data } = await calendarApi.post('/events', calendarEvent);

      dispatch(onAddNewEvent({ ...calendarEvent, id: data.event.id, user }));
    }
  };

  const startDeleteEvent = () => {
    // Todo: Llegar al backend
    dispatch(onDeleteEvent());
  };

  return {
    // Prperties
    events,
    activeEvent,
    hasEventSelected: !!activeEvent,

    // Methods
    setActiveEvent,
    startSavingEvent,
    startDeleteEvent,
  };
};
