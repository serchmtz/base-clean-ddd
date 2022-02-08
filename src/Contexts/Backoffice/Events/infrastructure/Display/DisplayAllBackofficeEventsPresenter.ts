import {
  IDisplayAllBackofficeEventsOutput,
  DisplayAllBackofficeEventsOutputData,
} from "../../application/Display/IDisplayAllBackofficeEventsOutput";
import { IBackofficeEventView } from "../IBackofficeEventView";

export class DisplayAllBackofficeEvenstPresenter
  implements IDisplayAllBackofficeEventsOutput
{
  constructor(private _view: IBackofficeEventView) {}

  present(outputData: DisplayAllBackofficeEventsOutputData) {
    this._view.showAll(
      outputData.events.map((e) => ({
        id: e.id,
        name: e.name,
        duration: e.duration,
      }))
    );
  }
}
