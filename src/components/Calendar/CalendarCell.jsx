import { useEventContext } from "../../context/EventContext/hooks/useEventContext";
import styles from "./CalendarCell.module.scss";

const CalendarCell = ({
  day,
  currentMonth,
  setSelectedDate,
  setSelectedEvent,
}) => {
  const date = new Date(new Date().getFullYear(), currentMonth, day);
  const { state, dispatch } = useEventContext();

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const handleRemoveEvent = (e, calEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({
      type: "DELETE_EVENT",
      payload: calEvent.id,
    });
  };

  const handleEditEvent = (e, calEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedEvent(calEvent);
    handleDateClick(new Date(calEvent.date));
  };

  return (
    <div
      key={day}
      className={styles.date}
      onClick={() => handleDateClick(date)}
    >
      {day}
      <div className={styles.eventWrapper}>
        {state.events
          .filter(
            (event) =>
              new Date(event.date).toDateString() === date.toDateString()
          )
          .map((event) => (
            <div
              key={event.id}
              className={styles.event}
              title={event.title}
              onClick={(e) => {
                handleEditEvent(e, event);
              }}
            >
              <span className={styles.eventTitle}>{event.title}</span>
              <button
                className={styles.eventDeleteBtn}
                onClick={(e) => {
                  handleRemoveEvent(e, event);
                }}
              >
                x
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CalendarCell;
