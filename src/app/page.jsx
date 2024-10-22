import { DateProvider } from "../context/DateContext";
import Calendar from "../components/Calendar";
import { EventProvider } from "../context/EventContext/event.context.provider";

export default function Home() {
  return (
    <DateProvider>
      <EventProvider>
        <main>
          <Calendar />
        </main>
      </EventProvider>
    </DateProvider>
  );
}
