import { BackofficeEvent } from "../../domain/BackofficeEvent";
import { IBackofficeEventRepository } from "../IBackofficeEventRepository";
import { ICreateBackofficeOutput } from "./ICreateBackofficeOutput";
import {
  ICreateBackofficeInput,
  CreateBackofficeInputData,
} from "./ICreateBackofficeInput";

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

  async execute(inputData: CreateBackofficeInputData) {
    const event = await this.repo.add(
      BackofficeEvent.fromPlainData({ ...inputData, id: "" })
    );
    this.output.present(event.toPlainData());
  }
}
