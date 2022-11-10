import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { addHours } from 'date-fns';

import { Navbar } from '../';
import { localizer, gerMessageES } from '../../helpers';

const myEventsList = [
  {
    title: 'Cumple años de jefe',
    notes: 'Hay que comprar el pastel',
    start: new Date(), //
    end: addHours(new Date(), 2),
    bgColor: '#fafafa',
    user: {
      _id: '12324',
      name: 'Oscar',
    },
  },
];

export const CalendarPage = () => {
  const eventStyleGetter = (event, start, end, isSelected) => {
    console.log({event, end, start, isSelected})

    const style = {
      backgroundColor: '#347CF7',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white'
    }

    return {
      style
    }
  }

  return (
    <>
      <Navbar />

      <Calendar
        culture="es"
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc(100vh - 80px)' }}
        messages={gerMessageES()}
        eventPropGetter={eventStyleGetter}
      />
    </>
  );
};
