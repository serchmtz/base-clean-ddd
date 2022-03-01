import { EventId } from "../domain/EventId";
import { Event, NewEvent } from "../domain/Event";

export interface IEventRepository {
  get: (id: EventId) => Promise<Event>;
  add: (event: NewEvent) => Promise<Event>;
  getAll: () => Promise<Event[]>;
}
