import { IEventRepository } from "../IEventRepository";
import { IDisplayAllEventsInput } from "./IDisplayAllEventsInput";
import { IDisplayAllEventsOutput } from "./IDisplayAllEventsOutput";

export class DisplayAllEvents
  implements IDisplayAllEventsInput
{
  readonly repo: IEventRepository;
  readonly output: IDisplayAllEventsOutput;
  constructor(
    repo: IEventRepository,
    output: IDisplayAllEventsOutput
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
