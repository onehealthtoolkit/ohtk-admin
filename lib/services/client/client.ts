import { Domain } from "../domain";

export type Client = {
  id: string;
  name: string;
  schemaName: string;
  domains?: Array<Domain>;
};
