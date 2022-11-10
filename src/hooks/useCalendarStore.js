import { useSelector } from "react-redux";

export const useCalendarStore = () => {
  const { events, activeEvents } = useSelector((state) => state.calendar);

  return {
    // Prperties
    events,
    activeEvents

    // Methods
  }
}
