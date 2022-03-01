import {
  IDisplayAllEventsOutput,
  DisplayAllEventsOutputData,
} from "../../application/Display/IDisplayAllEventsOutput";
import { IEventView } from "../IEventView";

export class DisplayAllEvenstPresenter
  implements IDisplayAllEventsOutput
{
  constructor(private _view: IEventView) {}

  present(outputData: DisplayAllEventsOutputData) {
    this._view.showAll(
      outputData.events.map((e) => ({
        id: e.id,
        name: e.name,
        duration: e.duration,
      }))
    );
  }
}
