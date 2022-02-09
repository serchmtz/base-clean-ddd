import { IBackofficeEventRepository } from "../application/IBackofficeEventRepository";
import { BackofficeEvent, NewBackofficeEvent } from "../domain/BackofficeEvent";
import { BackofficeEventId } from "../domain/BackofficeEventId";
import { IBackofficeEventGW } from "./IBackofficeEventGW";

export class PersistentBackofficeEventRepository
  implements IBackofficeEventRepository
{
  constructor(private _gateway: IBackofficeEventGW) {}

  async getAll(): Promise<BackofficeEvent[]> {
    const data = await this._gateway.getAll();

    return data.map((d) => BackofficeEvent.fromPlainData({ ...d }));
  }
  async get(id: BackofficeEventId): Promise<BackofficeEvent> {
    const data = await this._gateway.getOne(id.value);

    return BackofficeEvent.fromPlainData(data);
  }

  async add(event: NewBackofficeEvent): Promise<BackofficeEvent> {
    const data = await this._gateway.insertOne(event.toPlainData());
    return BackofficeEvent.fromPlainData(data);
  }
}
