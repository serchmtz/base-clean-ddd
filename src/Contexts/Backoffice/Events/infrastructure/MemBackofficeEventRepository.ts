import { IBackofficeEventRepository } from "../application/IBackofficeEventRepository";
import { BackofficeEvent } from "../domain/BackofficeEvent";
import { BackofficeEventId } from "../domain/BackofficeEventId";

export class MemBackofficeEventRepository
  implements IBackofficeEventRepository
{
  private static _instace: MemBackofficeEventRepository | null = null;
  static getInstance() {
    if (MemBackofficeEventRepository._instace === null) {
      MemBackofficeEventRepository._instace =
        new MemBackofficeEventRepository();
    }
    return MemBackofficeEventRepository._instace;
  }
  protected events: BackofficeEvent[];
  private constructor() {
    this.events = [
      BackofficeEvent.fromPlainData({
        id: "1",
        name: "Concierto Chico Che",
        duration: "5hrs",
      }),
    ];
  }

  getAll(): Promise<BackofficeEvent[]> {
    return new Promise((resolve, _reject) => {
      resolve(this.events);
    });
  }
  get(id: BackofficeEventId): Promise<BackofficeEvent> {
    const index = this.events.findIndex((e) => e.id === id);
    return new Promise((resolve, reject) => {
      if (index < 0) {
        reject(
          new Error(
            `BackofficeEvent not found for 'id': ${BackofficeEventId.toString()}`
          )
        );
      } else {
        resolve(this.events[index]);
      }
    });
  }

  add(event: BackofficeEvent): Promise<BackofficeEvent> {
    const index = this.events.findIndex((e) => e.id === event.id);
    return new Promise((resolve, reject) => {
      if (index > -1) {
        reject(
          new Error(
            `BackofficeEvent already exists: ${BackofficeEventId.toString()}`
          )
        );
      } else {
        const newEventData = {
          ...event.toPlainData(),
          id: (this.events.length + 1).toString(),
        };
        const newEvent = BackofficeEvent.fromPlainData(newEventData);
        this.events.push(newEvent);
        resolve(newEvent);
      }
    });
  }
}
