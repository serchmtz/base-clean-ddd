import { CreateEvent } from "../../application/Create/CreateEvent";
import { DisplayAllEvents } from "../../application/Display/DisplayAllEvents";
import { EventController } from "../EventController";
import { CreateEventPresenter } from "../Create/CreateEventPresenter";
import { DisplayAllEvenstPresenter } from "../Display/DisplayAllEventsPresenter";
import { IEventGW } from "../IEventGW";
import { IEventView } from "../IEventView";
import { MemEventRepository } from "../MemEventRepository";
import { PersistentEventRepository } from "../PersistentEventRepository";

export class EventsControllersFactory {
  static createController(
    view: IEventView,
    gateway?: IEventGW
  ) {
    const repo = !!gateway
      ? new PersistentEventRepository(gateway)
      : MemEventRepository.getInstance();

    const createEvent = new CreateEvent(
      repo,
      new CreateEventPresenter(view)
    );

    const displayEvents = new DisplayAllEvents(
      repo,
      new DisplayAllEvenstPresenter(view)
    );
    const controller = new EventController(
      createEvent,
      displayEvents
    );

    return controller;
  }
}
