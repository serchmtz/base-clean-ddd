import { IEventRepository } from "../application/IEventRepository";
import { Event, NewEvent } from "../domain/Event";
import { EventId } from "../domain/EventId";

export class MemEventRepository
  implements IEventRepository
{
  private static _instace: MemEventRepository | null = null;
  static getInstance() {
    if (MemEventRepository._instace === null) {
      MemEventRepository._instace =
        new MemEventRepository();
    }
    return MemEventRepository._instace;
  }
  protected events: Event[];
  private constructor() {
    this.events = [
      Event.fromPlainData({
        id: "1",
        name: "Concierto Chico Che",
        duration: "5hrs",
      }),
    ];
  }

  getAll(): Promise<Event[]> {
    return new Promise((resolve, _reject) => {
      resolve(this.events);
    });
  }
  get(id: EventId): Promise<Event> {
    const index = this.events.findIndex((e) => e.id === id);
    return new Promise((resolve, reject) => {
      if (index < 0) {
        reject(
          new Error(
            `Event not found for 'id': ${EventId.toString()}`
          )
        );
      } else {
        resolve(this.events[index]);
      }
    });
  }

  add(event: NewEvent): Promise<Event> {
    const newEventData = {
      ...event.toPlainData(),
      id: (this.events.length + 1).toString(),
    };
    const newEvent = Event.fromPlainData(newEventData);
    this.events.push(newEvent);
    return new Promise((resolve) => resolve(newEvent));
  }
}
