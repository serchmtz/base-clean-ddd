export type BaseEventData = {
  name: string;
  duration: string;
};
export type EventData = {
  id: string;
} & BaseEventData;

export interface IEventGW {
  getAll(): Promise<EventData[]>;
  getOne(id: string): Promise<EventData>;
  insertOne(data: BaseEventData): Promise<EventData>;
  // insertMany(data: EventData[]): EventData[];
  // updateOne(data: Partial<EventData>): EventData;
}
