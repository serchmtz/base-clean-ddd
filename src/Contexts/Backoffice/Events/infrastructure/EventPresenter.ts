import {
  ICreateOutput,
  CreateOutputData,
} from "../application/Create/ICreateOutput";
import { IEventView } from "./IEventView";

export class EventPresenter implements ICreateOutput {
  constructor(private _view: IEventView) {}

  present(outputData: CreateOutputData) {
    this._view.show({
      id: outputData.id,
      name: outputData.name,
      duration: outputData.duration,
    });
  }
}
