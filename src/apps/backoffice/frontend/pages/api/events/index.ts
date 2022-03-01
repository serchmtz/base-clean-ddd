import type { NextApiRequest, NextApiResponse } from "next";
import { EventsControllersFactory } from "@backoffice/Events/infrastructure/Factories/EventsControllersFactory";
import {
  IEventView,
  EventViewModel,
} from "@backoffice/Events/infrastructure/IEventView";
import { MongoEventGW } from "../../../../Shared/Gateways/Event/MongoEventGW";
import { db } from "../../../../Shared/config/mongodbConnection";

class EventView implements IEventView {
  constructor(private _res: NextApiResponse) {}
  setRes(res: NextApiResponse) {
    this._res = res;
  }
  show(viewModel: EventViewModel) {
    this._res.status(200).json(viewModel);
  }
  showAll(viewModel: EventViewModel[]) {
    this._res.status(200).json(viewModel);
  }
}

const mongogw = new MongoEventGW(db);

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const { name, duration } = JSON.parse(req.body);
      const view = new EventView(res);
      const controller = EventsControllersFactory.createController(
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
      const controller = EventsControllersFactory.createController(
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
}
