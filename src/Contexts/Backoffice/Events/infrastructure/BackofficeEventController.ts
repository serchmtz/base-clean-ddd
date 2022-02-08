import { ICreateBackofficeInput } from "../application/Create/ICreateBackofficeInput";
import { IDisplayAllBackofficeEventsInput } from "../application/Display/IDisplayAllBackofficeEventsInput";
export class BackofficeEventController {
  constructor(
    private _createBackofficeEvent: ICreateBackofficeInput,
    private _displayAllBackofficeEvents: IDisplayAllBackofficeEventsInput
  ) {}

  createEvent(name: string, duration: string) {
    this._createBackofficeEvent.execute({ name, duration });
  }

  displayAllEvents() {
    this._displayAllBackofficeEvents.execute();
  }
}
