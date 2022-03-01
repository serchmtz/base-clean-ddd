import React from "react";
import { EventController } from "../../../../Contexts/Backoffice/Events/infrastructure/EventController";
import { EventsControllersFactory } from "../../../../Contexts/Backoffice/Events/infrastructure/Factories/EventsControllersFactory";
import {
  IEventView,
  EventViewModel,
} from "../../../../Contexts/Backoffice/Events/infrastructure/IEventView";

import { db, mongodbClient } from "../../Shared/config/mongodbConnection";
import { MongoEventGW } from "../../Shared/Gateways/Event/MongoEventGW";

import Table from "ink-table";
import { Form, FormStructure } from "ink-form";
import { Box } from "ink";


interface EventViewProps {}


interface EventViewState {
  events: EventViewModel[];
}


export class EventView
  extends React.Component<EventViewProps, EventViewState>
  implements IEventView
{
  private _controller: EventController;
  form: FormStructure = {
    title: "Create an Event",
    sections: [
      {
        title: "New Event Data",
        fields: [
          { type: "string", name: "name", label: "Name" },
          { type: "string", name: "duration", label: "Duration" },
        ],
      },
    ],
  };
  constructor(props: EventViewProps) {
    super(props);
    this.state = {
      events: [],
    };
    this._controller =
      EventsControllersFactory.createController(this, new MongoEventGW(db));
    this._controller.displayAllEvents();    
  }
  show(viewModel: EventViewModel) {
    this.setState((prev) => {
      const index = prev.events.findIndex((e) => e.id === viewModel.id);
      if (index > -1) prev.events[index] = viewModel;
      else prev.events.push(viewModel);
      return { events: [...prev.events] };
    });
  }
  showAll(viewModel: EventViewModel[]) {
    this.setState({ events: viewModel });
  }
  async componentWillUnmount(){
    await mongodbClient.close();
  }
  render() {
    const events = this.state.events;
    return (
      <Box flexDirection="row">
        <Box width="40%">
          <Form
            onSubmit={(value: any) =>
              this._controller.createEvent(value.name, value.duration)
            }
            form={this.form}
          />
        </Box>
        <Box width="60%">
          <Table data={events} />
        </Box>
      </Box>
    );
  }
}
