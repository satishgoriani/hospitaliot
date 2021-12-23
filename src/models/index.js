// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Sensor, Usermenu, User, Company, Section, Room } = initSchema(schema);

export {
  Sensor,
  Usermenu,
  User,
  Company,
  Section,
  Room
};