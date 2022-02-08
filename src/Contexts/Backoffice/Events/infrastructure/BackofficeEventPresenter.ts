import {
  ICreateBackofficeOutput,
  CreateBackofficeOutputData,
} from "../application/Create/ICreateBackofficeOutput";
import { IBackofficeEventView } from "./IBackofficeEventView";

export class BackofficeEventPresenter implements ICreateBackofficeOutput {
  constructor(private _view: IBackofficeEventView) {}

  present(outputData: CreateBackofficeOutputData) {
    this._view.show({
      id: outputData.id,
      name: outputData.name,
      duration: outputData.duration,
    });
  }
}
