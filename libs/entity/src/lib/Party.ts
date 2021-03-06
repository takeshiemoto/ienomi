import { User } from './User';

export type Party = {
  userId: string;
  name: string;
  time: number;
  startTime: Date;
  endTime: Date;
};

export type PartyResponse = {
  user: User;
  party: Party & { id: string };
};
