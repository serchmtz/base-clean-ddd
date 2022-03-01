import { ICreateInput } from "../application/Create/ICreateInput";
import { IDisplayAllEventsInput } from "../application/Display/IDisplayAllEventsInput";
export class EventController {
  constructor(
    private _createEvent: ICreateInput,
    private _displayAllEvents: IDisplayAllEventsInput
  ) {}

  createEvent(name: string, duration: string) {
    this._createEvent.execute({ name, duration });
  }

  displayAllEvents() {
    this._displayAllEvents.execute();
  }
}
