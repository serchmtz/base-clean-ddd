import React from "react";
import { BackofficeEventController } from "../../../../Contexts/Backoffice/Events/infrastructure/BackofficeEventController";
import { BackofficeEventsControllersFactory } from "../../../../Contexts/Backoffice/Events/infrastructure/Factories/BackofficeEventsControllersFactory";
import {
  IBackofficeEventView,
  BackofficeEventViewModel,
} from "../../../../Contexts/Backoffice/Events/infrastructure/IBackofficeEventView";

import Table from "ink-table";
import { Form, FormStructure } from "ink-form";
import { Box } from "ink";

interface EventViewProps {}
interface EventViewState {
  events: BackofficeEventViewModel[];
}
export class EventView
  extends React.Component<EventViewProps, EventViewState>
  implements IBackofficeEventView
{
  private _controller: BackofficeEventController;
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
      BackofficeEventsControllersFactory.createController(this);
    this._controller.displayAllEvents();
  }
  show(viewModel: BackofficeEventViewModel) {
    this.setState((prev) => {
      const index = prev.events.findIndex((e) => e.id === viewModel.id);
      if (index > -1) prev.events[index] = viewModel;
      else prev.events.push(viewModel);
      return { events: [...prev.events] };
    });
  }
  showAll(viewModel: BackofficeEventViewModel[]) {
    this.setState({ events: viewModel });
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
