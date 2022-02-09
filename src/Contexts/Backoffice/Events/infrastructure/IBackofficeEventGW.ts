export type BaseBackofficeEventData = {
  name: string;
  duration: string;
};
export type BackofficeEventData = {
  id: string;
} & BaseBackofficeEventData;

export interface IBackofficeEventGW {
  getAll(): Promise<BackofficeEventData[]>;
  getOne(id: string): Promise<BackofficeEventData>;
  insertOne(data: BaseBackofficeEventData): Promise<BackofficeEventData>;
  // insertMany(data: BackofficeEventData[]): BackofficeEventData[];
  // updateOne(data: Partial<BackofficeEventData>): BackofficeEventData;
}
