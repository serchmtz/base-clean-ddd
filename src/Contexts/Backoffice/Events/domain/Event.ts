import { EventDuration } from "./EventDuration";
import { EventId } from "./EventId";
import { EventName } from "./EventName";

export class Event {
  readonly id: EventId;
  readonly name: EventName;
  readonly duration: EventDuration;

  constructor(
    id: EventId,
    name: EventName,
    duration: EventDuration
  ) {
    this.id = id;
    this.name = name;
    this.duration = duration;
  }

  static create(
    id: EventId,
    name: EventName,
    duration: EventDuration
  ) {
    const course = new Event(id, name, duration);

    return course;
  }

  static fromPlainData(plainData: {
    id: string;
    name: string;
    duration: string;
  }) {
    return new Event(
      new EventId(plainData.id),
      new EventName(plainData.name),
      new EventDuration(plainData.duration)
    );
  }

  toPlainData() {
    return {
      id: this.id.value,
      name: this.name.value,
      duration: this.duration.value,
    };
  }
}

export type NewEvent = Omit<Event, "id">;
