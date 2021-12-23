import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type SensorMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UsermenuMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CompanyMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SectionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type RoomMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Sensor {
  readonly id: string;
  readonly serialnumber: string;
  readonly remarks?: string;
  readonly companyID?: string;
  readonly lastreadtemp?: number;
  readonly lastreceivedon?: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Sensor, SensorMetaData>);
  static copyOf(source: Sensor, mutator: (draft: MutableModel<Sensor, SensorMetaData>) => MutableModel<Sensor, SensorMetaData> | void): Sensor;
}

export declare class Usermenu {
  readonly id: string;
  readonly name?: string;
  readonly menucode?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Usermenu, UsermenuMetaData>);
  static copyOf(source: Usermenu, mutator: (draft: MutableModel<Usermenu, UsermenuMetaData>) => MutableModel<Usermenu, UsermenuMetaData> | void): Usermenu;
}

export declare class User {
  readonly id: string;
  readonly firstname: string;
  readonly lastname?: string;
  readonly mobileno: string;
  readonly username?: string;
  readonly userpass?: string;
  readonly companyID?: string;
  readonly assignedmenuoptions?: (string | null)[];
  readonly menunamestring?: string;
  readonly sectionID: string;
  readonly sectionname?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class Company {
  readonly id: string;
  readonly name: string;
  readonly registeredemail?: string;
  readonly adminpass?: string;
  readonly domainname?: string;
  readonly CompanyUsers?: (User | null)[];
  readonly CompanySections?: (Section | null)[];
  readonly highsecpin?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Company, CompanyMetaData>);
  static copyOf(source: Company, mutator: (draft: MutableModel<Company, CompanyMetaData>) => MutableModel<Company, CompanyMetaData> | void): Company;
}

export declare class Section {
  readonly id: string;
  readonly name: string;
  readonly SectionRooms?: (Room | null)[];
  readonly companyID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Section, SectionMetaData>);
  static copyOf(source: Section, mutator: (draft: MutableModel<Section, SectionMetaData>) => MutableModel<Section, SectionMetaData> | void): Section;
}

export declare class Room {
  readonly id: string;
  readonly name: string;
  readonly sectionID?: string;
  readonly temperaturemin?: number;
  readonly temperaturemax?: number;
  readonly currentavgtem?: number;
  readonly numfloors?: number;
  readonly sectionname?: string;
  readonly sensors?: (string | null)[];
  readonly sensorsasstring?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Room, RoomMetaData>);
  static copyOf(source: Room, mutator: (draft: MutableModel<Room, RoomMetaData>) => MutableModel<Room, RoomMetaData> | void): Room;
}