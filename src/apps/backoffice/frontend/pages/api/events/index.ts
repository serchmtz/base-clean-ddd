import type { NextApiRequest, NextApiResponse } from "next";
import { BackofficeEventsControllersFactory } from "@backoffice/Events/infrastructure/Factories/BackofficeEventsControllersFactory";
import {
  IBackofficeEventView,
  BackofficeEventViewModel,
} from "@backoffice/Events/infrastructure/IBackofficeEventView";
import { MongoBackofficeEventGW } from "../../../../Shared/Gateways/Event/MongoBackofficeEventGW";
import { db } from "../../../../Shared/config/mongodbConnection";
class EventView implements IBackofficeEventView {
  constructor(private _res: NextApiResponse) {}
  setRes(res: NextApiResponse) {
    this._res = res;
  }
  show(viewModel: BackofficeEventViewModel) {
    this._res.status(200).json(viewModel);
  }
  showAll(viewModel: BackofficeEventViewModel[]) {
    this._res.status(200).json(viewModel);
  }
}
const mongogw = new MongoBackofficeEventGW(db);
export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      const { name, duration } = JSON.parse(req.body);
      const view = new EventView(res);
      const controller = BackofficeEventsControllersFactory.createController(
        view,
        mongogw
      );
      controller.createEvent(name, duration);
      res.end();
    } catch (err) {
      res.status(err).json({});
    }
  } else if (req.method === "GET") {
    try {
      const view = new EventView(res);
      const controller = BackofficeEventsControllersFactory.createController(
        view,
        mongogw
      );
      controller.displayAllEvents();
    } catch (err) {
      res.status(err).json({});
    }
  } else {
    res.status(405);
    res.end();
  }
};
