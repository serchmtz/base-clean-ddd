import { BackofficeEventDuration } from "./BackOfficeEventDuration";
import { BackofficeEventId } from "./BackofficeEventId";
import { BackofficeEventName } from "./BackofficeEventName";

export class BackofficeEvent {
  readonly id: BackofficeEventId;
  readonly name: BackofficeEventName;
  readonly duration: BackofficeEventDuration;

  constructor(
    id: BackofficeEventId,
    name: BackofficeEventName,
    duration: BackofficeEventDuration
  ) {
    this.id = id;
    this.name = name;
    this.duration = duration;
  }

  static create(
    id: BackofficeEventId,
    name: BackofficeEventName,
    duration: BackofficeEventDuration
  ) {
    const course = new BackofficeEvent(id, name, duration);

    return course;
  }

  static fromPlainData(plainData: {
    id: string;
    name: string;
    duration: string;
  }) {
    return new BackofficeEvent(
      new BackofficeEventId(plainData.id),
      new BackofficeEventName(plainData.name),
      new BackofficeEventDuration(plainData.duration)
    );
  }

  toPlainData() {
    return {
      id: this.id.value,
      name: this.name.value,
      duration: this.duration.value,
    };
  }
}
