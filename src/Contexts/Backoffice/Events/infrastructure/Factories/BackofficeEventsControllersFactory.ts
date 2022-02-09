import { CreateBackofficeEvent } from "../../application/Create/CreateBackofficeEvent";
import { DisplayAllBackofficeEvents } from "../../application/Display/DisplayAllBackofficeEvents";
import { BackofficeEventController } from "../BackofficeEventController";
import { CreateBackofficeEventPresenter } from "../Create/CreateBackofficeEventPresenter";
import { DisplayAllBackofficeEvenstPresenter } from "../Display/DisplayAllBackofficeEventsPresenter";
import { IBackofficeEventGW } from "../IBackofficeEventGW";
import { IBackofficeEventView } from "../IBackofficeEventView";
import { MemBackofficeEventRepository } from "../MemBackofficeEventRepository";
import { PersistentBackofficeEventRepository } from "../PersistentBackofficeEventRepository";

export class BackofficeEventsControllersFactory {
  static createController(
    view: IBackofficeEventView,
    gateway?: IBackofficeEventGW
  ) {
    const repo = !!gateway
      ? new PersistentBackofficeEventRepository(gateway)
      : MemBackofficeEventRepository.getInstance();

    const createEvent = new CreateBackofficeEvent(
      repo,
      new CreateBackofficeEventPresenter(view)
    );

    const displayEvents = new DisplayAllBackofficeEvents(
      repo,
      new DisplayAllBackofficeEvenstPresenter(view)
    );
    const controller = new BackofficeEventController(
      createEvent,
      displayEvents
    );

    return controller;
  }
}
