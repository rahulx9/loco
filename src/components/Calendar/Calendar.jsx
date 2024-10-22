"use client";
import { useMemo, useState } from "react";
import EventForm from "../Event/EventForm";
import styles from "./Calendar.module.scss";
import CalendarCell from "./CalendarCell";
import { WEEK_DAYS } from "../../constants/calander";
import {
  getFirstDayOfMonth,
  getLastDateOfMonth,
  getMonthYearString,
} from "../../utils/calander.utils";
import { useDateContext } from "../../context/DateContext";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const { currentDate: date, changeMonth } = useDateContext();

  const currentMonth = date.getMonth();
  const currentYear = date.getFullYear();

  const { dayArray, dayOfWeek } = useMemo(() => {
    const daysInMonth = getLastDateOfMonth(currentYear, currentMonth);
    const dayOfWeek = getFirstDayOfMonth(currentYear, currentMonth);

    return {
      dayArray: Array.from({ length: daysInMonth }, (_, i) => i + 1),
      dayOfWeek,
    };
  }, [currentYear, currentMonth]);

  return (
    <div className={styles.calendar}>
      <div className={styles.calendarHeading}>
        <button
          className={styles.calendarActionBtn}
          onClick={() => changeMonth(-1)}
        >
          Previous Month
        </button>
        <h2 className={styles.calendarHeadingText}>
          {getMonthYearString(currentYear, currentMonth)}
        </h2>
        <button
          className={styles.calendarActionBtn}
          onClick={() => changeMonth(1)}
        >
          Next Month
        </button>
      </div>
      <div className={styles.grid}>
        {WEEK_DAYS.map((day) => (
          <div key={day} className={styles.weekDay}>
            {day}
          </div>
        ))}
      </div>
      <div className={styles.grid} style={{ "--start-column": dayOfWeek + 1 }}>
        {dayArray.map((day) => (
          <CalendarCell
            key={day}
            day={day}
            currentMonth={currentMonth}
            setSelectedDate={setSelectedDate}
            setSelectedEvent={setSelectedEvent}
          />
        ))}
      </div>
      {selectedDate && (
        <EventForm
          selectedDate={selectedDate}
          onClose={() => {
            setSelectedDate(null)
            setSelectedEvent(null)
          }}
          event={selectedEvent}
        />
      )}
    </div>
  );
};

export default Calendar;
