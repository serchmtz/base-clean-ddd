import { Event } from "../../domain/Event";
import { IEventRepository } from "../IEventRepository";
import { ICreateOutput } from "./ICreateOutput";
import {
  ICreateInput,
  CreateInputData,
} from "./ICreateInput";

export class CreateEvent implements ICreateInput {
  readonly repo: IEventRepository;
  readonly output: ICreateOutput;

  constructor(
    repo: IEventRepository,
    output: ICreateOutput
  ) {
    this.repo = repo;
    this.output = output;
  }

  async execute(inputData: CreateInputData) {
    const event = await this.repo.add(
      Event.fromPlainData({ ...inputData, id: "" })
    );
    this.output.present(event.toPlainData());
  }
}
