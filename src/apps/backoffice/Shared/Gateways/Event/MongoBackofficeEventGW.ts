import {
  BackofficeEventData,
  BaseBackofficeEventData,
  IBackofficeEventGW,
} from "../../../../../Contexts/Backoffice/Events/infrastructure/IBackofficeEventGW";
import { ObjectId, Db } from "mongodb";

export class MongoBackofficeEventGW implements IBackofficeEventGW {
  private readonly _COLLECTION = "events";
  constructor(private _db: Db) {}
  getAll(): Promise<BackofficeEventData[]> {
    const data = this._db
      .collection<BackofficeEventData>(this._COLLECTION)
      .find({});
    return data.toArray();
  }
  async getOne(id: string): Promise<BackofficeEventData> {
    const data = await this._db
      .collection<BackofficeEventData>(this._COLLECTION)
      .findOne({ id });

    return data;
  }
  async insertOne(data: BaseBackofficeEventData): Promise<BackofficeEventData> {
    const collection = this._db.collection<BackofficeEventData>(
      this._COLLECTION
    );
    const id = new ObjectId();
    const newData = { _id: id, ...data, id: id.toString() };
    await collection.insertOne(newData);
    return newData;
  }
}
