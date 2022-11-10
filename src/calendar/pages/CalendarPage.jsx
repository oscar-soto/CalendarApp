import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { addHours, format, parse, startOfWeek, getDay } from 'date-fns';

import enUS from 'date-fns/locale/en-US';

import { Navbar } from '../';

const locales = {
  'en-US': enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const myEventsList = [{
  title: 'Cumple años de jefe',
  notes: 'Hay que comprar el pastel',
  start: new Date(), // 
  end: addHours(new Date(), 2),
  bgColor: '#fafafa',
  user: {
    _id: '12324',
    name: 'Oscar'
  }
}]

export const CalendarPage = () => {
  return (
    <>
      <Navbar />

      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc(100vh - 80px)' }}
      />
    </>
  );
};
