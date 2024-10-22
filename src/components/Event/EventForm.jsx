"use client";
import { useState, useEffect } from "react";
import Modal from "../Modal/Modal";
import styles from "./EventForm.module.scss";
import { addEvent, editEvent } from "../../context/EventContext/reducer/eventActions";
import { useEventContext } from "../../context/EventContext/hooks/useEventContext";

const EventForm = ({ selectedDate, onClose, event }) => {
  const { dispatch } = useEventContext();
  const [title, setTitle] = useState(event?.title ?? "");
  const [time, setTime] = useState(event?.time ?? "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (event) {
      dispatch(
        editEvent({
          id: event.id,
          title,
          date: selectedDate.toISOString(),
          time,
        })
      );
    } else {
      dispatch(
        addEvent({
          id: Math.random().toString(),
          title,
          date: selectedDate.toISOString(),
          time,
        })
      );
    }
    onClose();
  };

  return (
    <Modal onClose={onClose}>
      <form
        className={styles.formContainer}
        onSubmit={handleSubmit}
        aria-labelledby="event-form"
      >
        <h3 className={styles.formHeading} id="event-form">
          {event
            ? `Edit Event on ${selectedDate.toDateString()}`
            : `Add Event on ${selectedDate.toDateString()}`}
        </h3>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="event-title">
            Title:
          </label>
          <input
            id="event-title"
            className={styles.inputText}
            type="text"
            placeholder="Event Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="event-time">
            Time:
          </label>
          <input
            id="event-time"
            className={styles.inputTime}
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
        <button className={styles.button} type="submit">
          {event ? "Update Event" : "Add Event"}
        </button>
      </form>
    </Modal>
  );
};

export default EventForm;
