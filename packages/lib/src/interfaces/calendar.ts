interface CalendarEvent {
  date: Date;
  title: string;
}

interface Day {
  events: CalendarEvent[];
  date: Date;
}

export interface Calendar {
  days: Map<Day, Date[]>;
  months: Date
}

