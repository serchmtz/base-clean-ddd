import {
  EventData,
  BaseEventData,
  IEventGW,
} from "../../../../../Contexts/Backoffice/Events/infrastructure/IEventGW";
import { ObjectId, Db } from "mongodb";

export class MongoEventGW implements IEventGW {
  private readonly _COLLECTION = "events";
  constructor(private _db: Db) {}
  getAll(): Promise<EventData[]> {
    const data = this._db
      .collection<EventData>(this._COLLECTION)
      .find({});
    return data.toArray();
  }
  async getOne(id: string): Promise<EventData> {
    const data = await this._db
      .collection<EventData>(this._COLLECTION)
      .findOne({ id });

    return data;
  }
  async insertOne(data: BaseEventData): Promise<EventData> {
    const collection = this._db.collection<EventData>(
      this._COLLECTION
    );
    const id = new ObjectId();
    const newData = { _id: id, ...data, id: id.toString() };
    await collection.insertOne(newData);
    return newData;
  }
}
