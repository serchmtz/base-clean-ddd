import { CreateBackofficeOutputData } from "../../application/Create/CreateBackofficeOutputData";
import { ICreateBackofficeOutput } from "../../application/Create/ICreateBackofficeOutput";
import { IBackofficeEventView } from "../IBackofficeEventView";

export class CreateBackofficeEventPresenter implements ICreateBackofficeOutput {
  constructor(private _viewer: IBackofficeEventView) {}

  present(outputData: CreateBackofficeOutputData) {
    this._viewer.show({ name: outputData.name, duration: outputData.duration });
  }
}
