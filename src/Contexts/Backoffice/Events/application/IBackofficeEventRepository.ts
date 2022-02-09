import { BackofficeEventId } from "../domain/BackofficeEventId";
import { BackofficeEvent, NewBackofficeEvent } from "../domain/BackofficeEvent";

export interface IBackofficeEventRepository {
  get: (id: BackofficeEventId) => Promise<BackofficeEvent>;
  add: (event: NewBackofficeEvent) => Promise<BackofficeEvent>;
  getAll: () => Promise<BackofficeEvent[]>;
}
