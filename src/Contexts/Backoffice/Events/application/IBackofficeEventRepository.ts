import { BackofficeEventId } from "../domain/BackofficeEventId";
import { BackofficeEvent } from "../domain/BackofficeEvent";

export interface IBackofficeEventRepository {
  get: (id: BackofficeEventId) => Promise<BackofficeEvent>;
  add: (event: BackofficeEvent) => Promise<void>;
}
