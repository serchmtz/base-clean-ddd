import { IBackofficeEventRepository } from "../IBackofficeEventRepository";
import { IDisplayAllBackofficeEventsInput } from "./IDisplayAllBackofficeEventsInput";
import { IDisplayAllBackofficeEventsOutput } from "./IDisplayAllBackofficeEventsOutput";

export class DisplayAllBackofficeEvents
  implements IDisplayAllBackofficeEventsInput
{
  readonly repo: IBackofficeEventRepository;
  readonly output: IDisplayAllBackofficeEventsOutput;
  constructor(
    repo: IBackofficeEventRepository,
    output: IDisplayAllBackofficeEventsOutput
  ) {
    this.repo = repo;
    this.output = output;
  }
  async execute() {
    const events = await this.repo.getAll();

    this.output.present({
      events: events.map((e) => ({
        name: e.name.value,
        id: e.id.value,
        duration: e.duration.value,
      })),
    });
  }
}
