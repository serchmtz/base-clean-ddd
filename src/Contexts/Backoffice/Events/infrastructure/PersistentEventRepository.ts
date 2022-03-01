import { IEventRepository } from "../application/IEventRepository";
import { Event, NewEvent } from "../domain/Event";
import { EventId } from "../domain/EventId";
import { IEventGW } from "./IEventGW";

export class PersistentEventRepository
  implements IEventRepository
{
  constructor(private _gateway: IEventGW) {}

  async getAll(): Promise<Event[]> {
    const data = await this._gateway.getAll();

    return data.map((d) => Event.fromPlainData({ ...d }));
  }
  async get(id: EventId): Promise<Event> {
    const data = await this._gateway.getOne(id.value);

    return Event.fromPlainData(data);
  }

  async add(event: NewEvent): Promise<Event> {
    const data = await this._gateway.insertOne(event.toPlainData());
    return Event.fromPlainData(data);
  }
}
