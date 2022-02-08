import type { NextApiRequest, NextApiResponse } from "next";
import { BackofficeEventsControllersFactory } from "@backoffice/Events/infrastructure/Factories/BackofficeEventsControllersFactory";
import {
  IBackofficeEventView,
  BackofficeEventViewModel,
} from "@backoffice/Events/infrastructure/IBackofficeEventView";

class EventView implements IBackofficeEventView {
  constructor(private _res: NextApiResponse) {}
  setRes(res: NextApiResponse){
    this._res = res;
  }
  show(viewModel: BackofficeEventViewModel) {
    this._res.status(200).json(viewModel);
  }
  showAll(viewModel: BackofficeEventViewModel[]) {
    this._res.status(200).json(viewModel);
  }
}

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { name, duration } = JSON.parse(req.body);
    const view = new EventView(res);
    const controller =
      BackofficeEventsControllersFactory.createController(view);
    controller.createEvent(name, duration);
    return;
  }

  if (req.method === "GET") {
    const view = new EventView(res);
    const controller =
      BackofficeEventsControllersFactory.createController(view);
    controller.displayAllEvents();
    return;
  }
};
