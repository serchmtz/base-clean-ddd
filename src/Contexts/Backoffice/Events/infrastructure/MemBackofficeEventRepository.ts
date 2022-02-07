import { IBackofficeEventRepository } from "../application/IBackofficeEventRepository";
import { BackofficeEvent } from "../domain/BackofficeEvent";
import { BackofficeEventId } from "../domain/BackofficeEventId";

export class MemBackofficeEventRepository
  implements IBackofficeEventRepository
{
  protected events: BackofficeEvent[];

  constructor() {
    this.events = [];
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

  add(event: BackofficeEvent): Promise<void> {
    const index = this.events.findIndex((e) => e.id === event.id);
    return new Promise((resolve, reject) => {
      if (index > -1) {
        reject(
          new Error(
            `BackofficeEvent already exists: ${BackofficeEventId.toString()}`
          )
        );
      } else {
        this.events.push(event);
        resolve();
      }
    });
  }
}
