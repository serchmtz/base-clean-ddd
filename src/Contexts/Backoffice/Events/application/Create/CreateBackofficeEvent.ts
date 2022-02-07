import { BackofficeEvent } from "../../domain/BackofficeEvent";
import { IBackofficeEventRepository } from "../IBackofficeEventRepository";
import { ICreateBackofficeOutput } from "./ICreateBackofficeOutput";
import { ICreateBackofficeInput } from "./ICreateBackofficeInput";
import { CreateBackofficeInputData } from "./CreateBackofficeInputData";

export class CreateBackofficeEvent implements ICreateBackofficeInput {
  readonly repo: IBackofficeEventRepository;
  readonly output: ICreateBackofficeOutput;

  constructor(
    repo: IBackofficeEventRepository,
    output: ICreateBackofficeOutput
  ) {
    this.repo = repo;
    this.output = output;
  }

  execute(inputData: CreateBackofficeInputData) {
    const event = BackofficeEvent.fromPlainData({ ...inputData, id: "" });
    this.repo.add(event);
    this.output.present(event.toPlainData());
  }
}
