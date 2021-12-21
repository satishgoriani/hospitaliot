/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateSensor: OnCreateSensorSubscription;
  onUpdateSensor: OnUpdateSensorSubscription;
  onDeleteSensor: OnDeleteSensorSubscription;
  onCreateUsermenu: OnCreateUsermenuSubscription;
  onUpdateUsermenu: OnUpdateUsermenuSubscription;
  onDeleteUsermenu: OnDeleteUsermenuSubscription;
  onCreateUser: OnCreateUserSubscription;
  onUpdateUser: OnUpdateUserSubscription;
  onDeleteUser: OnDeleteUserSubscription;
  onCreateCompany: OnCreateCompanySubscription;
  onUpdateCompany: OnUpdateCompanySubscription;
  onDeleteCompany: OnDeleteCompanySubscription;
  onCreateRoom: OnCreateRoomSubscription;
  onUpdateRoom: OnUpdateRoomSubscription;
  onDeleteRoom: OnDeleteRoomSubscription;
  onCreateSection: OnCreateSectionSubscription;
  onUpdateSection: OnUpdateSectionSubscription;
  onDeleteSection: OnDeleteSectionSubscription;
};

export type CreateSensorInput = {
  id?: string | null;
  serialnumber: string;
  remarks?: string | null;
  companyID?: string | null;
  lastreadtemp?: number | null;
  lastreceivedon?: number | null;
};

export type ModelSensorConditionInput = {
  serialnumber?: ModelStringInput | null;
  remarks?: ModelStringInput | null;
  companyID?: ModelIDInput | null;
  lastreadtemp?: ModelFloatInput | null;
  lastreceivedon?: ModelIntInput | null;
  and?: Array<ModelSensorConditionInput | null> | null;
  or?: Array<ModelSensorConditionInput | null> | null;
  not?: ModelSensorConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelFloatInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type Sensor = {
  __typename: "Sensor";
  id: string;
  serialnumber: string;
  remarks?: string | null;
  companyID?: string | null;
  lastreadtemp?: number | null;
  lastreceivedon?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateSensorInput = {
  id: string;
  serialnumber?: string | null;
  remarks?: string | null;
  companyID?: string | null;
  lastreadtemp?: number | null;
  lastreceivedon?: number | null;
};

export type DeleteSensorInput = {
  id: string;
};

export type CreateUsermenuInput = {
  id?: string | null;
  name?: string | null;
  menucode?: string | null;
};

export type ModelUsermenuConditionInput = {
  name?: ModelStringInput | null;
  menucode?: ModelStringInput | null;
  and?: Array<ModelUsermenuConditionInput | null> | null;
  or?: Array<ModelUsermenuConditionInput | null> | null;
  not?: ModelUsermenuConditionInput | null;
};

export type Usermenu = {
  __typename: "Usermenu";
  id: string;
  name?: string | null;
  menucode?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateUsermenuInput = {
  id: string;
  name?: string | null;
  menucode?: string | null;
};

export type DeleteUsermenuInput = {
  id: string;
};

export type CreateUserInput = {
  id?: string | null;
  firstname: string;
  lastname?: string | null;
  mobileno: string;
  username?: string | null;
  userpass?: string | null;
  companyID?: string | null;
  assignedmenuoptions?: Array<string | null> | null;
  menunamestring?: string | null;
  sectionID: string;
  sectionname?: string | null;
};

export type ModelUserConditionInput = {
  firstname?: ModelStringInput | null;
  lastname?: ModelStringInput | null;
  mobileno?: ModelStringInput | null;
  username?: ModelStringInput | null;
  userpass?: ModelStringInput | null;
  companyID?: ModelIDInput | null;
  assignedmenuoptions?: ModelStringInput | null;
  menunamestring?: ModelStringInput | null;
  sectionID?: ModelStringInput | null;
  sectionname?: ModelStringInput | null;
  and?: Array<ModelUserConditionInput | null> | null;
  or?: Array<ModelUserConditionInput | null> | null;
  not?: ModelUserConditionInput | null;
};

export type User = {
  __typename: "User";
  id: string;
  firstname: string;
  lastname?: string | null;
  mobileno: string;
  username?: string | null;
  userpass?: string | null;
  companyID?: string | null;
  assignedmenuoptions?: Array<string | null> | null;
  menunamestring?: string | null;
  sectionID: string;
  sectionname?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateUserInput = {
  id: string;
  firstname?: string | null;
  lastname?: string | null;
  mobileno?: string | null;
  username?: string | null;
  userpass?: string | null;
  companyID?: string | null;
  assignedmenuoptions?: Array<string | null> | null;
  menunamestring?: string | null;
  sectionID?: string | null;
  sectionname?: string | null;
};

export type DeleteUserInput = {
  id: string;
};

export type CreateCompanyInput = {
  id?: string | null;
  name: string;
  registeredemail?: string | null;
  adminpass?: string | null;
  domainname?: string | null;
  highsecpin?: string | null;
};

export type ModelCompanyConditionInput = {
  name?: ModelStringInput | null;
  registeredemail?: ModelStringInput | null;
  adminpass?: ModelStringInput | null;
  domainname?: ModelStringInput | null;
  highsecpin?: ModelStringInput | null;
  and?: Array<ModelCompanyConditionInput | null> | null;
  or?: Array<ModelCompanyConditionInput | null> | null;
  not?: ModelCompanyConditionInput | null;
};

export type Company = {
  __typename: "Company";
  id: string;
  name: string;
  registeredemail?: string | null;
  adminpass?: string | null;
  domainname?: string | null;
  CompanyUsers?: ModelUserConnection | null;
  CompanySections?: ModelSectionConnection | null;
  highsecpin?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection";
  items?: Array<User | null> | null;
  nextToken?: string | null;
};

export type ModelSectionConnection = {
  __typename: "ModelSectionConnection";
  items?: Array<Section | null> | null;
  nextToken?: string | null;
};

export type Section = {
  __typename: "Section";
  id: string;
  name: string;
  SectionRooms?: ModelRoomConnection | null;
  companyID?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ModelRoomConnection = {
  __typename: "ModelRoomConnection";
  items?: Array<Room | null> | null;
  nextToken?: string | null;
};

export type Room = {
  __typename: "Room";
  id: string;
  name: string;
  sectionID?: string | null;
  temperaturemin?: number | null;
  temperaturemax?: number | null;
  currentavgtem?: number | null;
  numfloors?: number | null;
  sectionname?: string | null;
  sensors?: Array<string | null> | null;
  sensorsasstring?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateCompanyInput = {
  id: string;
  name?: string | null;
  registeredemail?: string | null;
  adminpass?: string | null;
  domainname?: string | null;
  highsecpin?: string | null;
};

export type DeleteCompanyInput = {
  id: string;
};

export type CreateRoomInput = {
  id?: string | null;
  name: string;
  sectionID?: string | null;
  temperaturemin?: number | null;
  temperaturemax?: number | null;
  currentavgtem?: number | null;
  numfloors?: number | null;
  sectionname?: string | null;
  sensors?: Array<string | null> | null;
  sensorsasstring?: string | null;
};

export type ModelRoomConditionInput = {
  name?: ModelStringInput | null;
  sectionID?: ModelIDInput | null;
  temperaturemin?: ModelFloatInput | null;
  temperaturemax?: ModelFloatInput | null;
  currentavgtem?: ModelFloatInput | null;
  numfloors?: ModelIntInput | null;
  sectionname?: ModelStringInput | null;
  sensors?: ModelStringInput | null;
  sensorsasstring?: ModelStringInput | null;
  and?: Array<ModelRoomConditionInput | null> | null;
  or?: Array<ModelRoomConditionInput | null> | null;
  not?: ModelRoomConditionInput | null;
};

export type UpdateRoomInput = {
  id: string;
  name?: string | null;
  sectionID?: string | null;
  temperaturemin?: number | null;
  temperaturemax?: number | null;
  currentavgtem?: number | null;
  numfloors?: number | null;
  sectionname?: string | null;
  sensors?: Array<string | null> | null;
  sensorsasstring?: string | null;
};

export type DeleteRoomInput = {
  id: string;
};

export type CreateSectionInput = {
  id?: string | null;
  name: string;
  companyID?: string | null;
};

export type ModelSectionConditionInput = {
  name?: ModelStringInput | null;
  companyID?: ModelIDInput | null;
  and?: Array<ModelSectionConditionInput | null> | null;
  or?: Array<ModelSectionConditionInput | null> | null;
  not?: ModelSectionConditionInput | null;
};

export type UpdateSectionInput = {
  id: string;
  name?: string | null;
  companyID?: string | null;
};

export type DeleteSectionInput = {
  id: string;
};

export type ModelSensorFilterInput = {
  id?: ModelIDInput | null;
  serialnumber?: ModelStringInput | null;
  remarks?: ModelStringInput | null;
  companyID?: ModelIDInput | null;
  lastreadtemp?: ModelFloatInput | null;
  lastreceivedon?: ModelIntInput | null;
  and?: Array<ModelSensorFilterInput | null> | null;
  or?: Array<ModelSensorFilterInput | null> | null;
  not?: ModelSensorFilterInput | null;
};

export type ModelSensorConnection = {
  __typename: "ModelSensorConnection";
  items?: Array<Sensor | null> | null;
  nextToken?: string | null;
};

export type ModelUsermenuFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  menucode?: ModelStringInput | null;
  and?: Array<ModelUsermenuFilterInput | null> | null;
  or?: Array<ModelUsermenuFilterInput | null> | null;
  not?: ModelUsermenuFilterInput | null;
};

export type ModelUsermenuConnection = {
  __typename: "ModelUsermenuConnection";
  items?: Array<Usermenu | null> | null;
  nextToken?: string | null;
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null;
  firstname?: ModelStringInput | null;
  lastname?: ModelStringInput | null;
  mobileno?: ModelStringInput | null;
  username?: ModelStringInput | null;
  userpass?: ModelStringInput | null;
  companyID?: ModelIDInput | null;
  assignedmenuoptions?: ModelStringInput | null;
  menunamestring?: ModelStringInput | null;
  sectionID?: ModelStringInput | null;
  sectionname?: ModelStringInput | null;
  and?: Array<ModelUserFilterInput | null> | null;
  or?: Array<ModelUserFilterInput | null> | null;
  not?: ModelUserFilterInput | null;
};

export type ModelCompanyFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  registeredemail?: ModelStringInput | null;
  adminpass?: ModelStringInput | null;
  domainname?: ModelStringInput | null;
  highsecpin?: ModelStringInput | null;
  and?: Array<ModelCompanyFilterInput | null> | null;
  or?: Array<ModelCompanyFilterInput | null> | null;
  not?: ModelCompanyFilterInput | null;
};

export type ModelCompanyConnection = {
  __typename: "ModelCompanyConnection";
  items?: Array<Company | null> | null;
  nextToken?: string | null;
};

export type ModelRoomFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  sectionID?: ModelIDInput | null;
  temperaturemin?: ModelFloatInput | null;
  temperaturemax?: ModelFloatInput | null;
  currentavgtem?: ModelFloatInput | null;
  numfloors?: ModelIntInput | null;
  sectionname?: ModelStringInput | null;
  sensors?: ModelStringInput | null;
  sensorsasstring?: ModelStringInput | null;
  and?: Array<ModelRoomFilterInput | null> | null;
  or?: Array<ModelRoomFilterInput | null> | null;
  not?: ModelRoomFilterInput | null;
};

export type ModelSectionFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  companyID?: ModelIDInput | null;
  and?: Array<ModelSectionFilterInput | null> | null;
  or?: Array<ModelSectionFilterInput | null> | null;
  not?: ModelSectionFilterInput | null;
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC"
}

export type CreateSensorMutation = {
  __typename: "Sensor";
  id: string;
  serialnumber: string;
  remarks?: string | null;
  companyID?: string | null;
  lastreadtemp?: number | null;
  lastreceivedon?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateSensorMutation = {
  __typename: "Sensor";
  id: string;
  serialnumber: string;
  remarks?: string | null;
  companyID?: string | null;
  lastreadtemp?: number | null;
  lastreceivedon?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteSensorMutation = {
  __typename: "Sensor";
  id: string;
  serialnumber: string;
  remarks?: string | null;
  companyID?: string | null;
  lastreadtemp?: number | null;
  lastreceivedon?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateUsermenuMutation = {
  __typename: "Usermenu";
  id: string;
  name?: string | null;
  menucode?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateUsermenuMutation = {
  __typename: "Usermenu";
  id: string;
  name?: string | null;
  menucode?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteUsermenuMutation = {
  __typename: "Usermenu";
  id: string;
  name?: string | null;
  menucode?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateUserMutation = {
  __typename: "User";
  id: string;
  firstname: string;
  lastname?: string | null;
  mobileno: string;
  username?: string | null;
  userpass?: string | null;
  companyID?: string | null;
  assignedmenuoptions?: Array<string | null> | null;
  menunamestring?: string | null;
  sectionID: string;
  sectionname?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateUserMutation = {
  __typename: "User";
  id: string;
  firstname: string;
  lastname?: string | null;
  mobileno: string;
  username?: string | null;
  userpass?: string | null;
  companyID?: string | null;
  assignedmenuoptions?: Array<string | null> | null;
  menunamestring?: string | null;
  sectionID: string;
  sectionname?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteUserMutation = {
  __typename: "User";
  id: string;
  firstname: string;
  lastname?: string | null;
  mobileno: string;
  username?: string | null;
  userpass?: string | null;
  companyID?: string | null;
  assignedmenuoptions?: Array<string | null> | null;
  menunamestring?: string | null;
  sectionID: string;
  sectionname?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateCompanyMutation = {
  __typename: "Company";
  id: string;
  name: string;
  registeredemail?: string | null;
  adminpass?: string | null;
  domainname?: string | null;
  CompanyUsers?: {
    __typename: "ModelUserConnection";
    items?: Array<{
      __typename: "User";
      id: string;
      firstname: string;
      lastname?: string | null;
      mobileno: string;
      username?: string | null;
      userpass?: string | null;
      companyID?: string | null;
      assignedmenuoptions?: Array<string | null> | null;
      menunamestring?: string | null;
      sectionID: string;
      sectionname?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  CompanySections?: {
    __typename: "ModelSectionConnection";
    items?: Array<{
      __typename: "Section";
      id: string;
      name: string;
      companyID?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  highsecpin?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateCompanyMutation = {
  __typename: "Company";
  id: string;
  name: string;
  registeredemail?: string | null;
  adminpass?: string | null;
  domainname?: string | null;
  CompanyUsers?: {
    __typename: "ModelUserConnection";
    items?: Array<{
      __typename: "User";
      id: string;
      firstname: string;
      lastname?: string | null;
      mobileno: string;
      username?: string | null;
      userpass?: string | null;
      companyID?: string | null;
      assignedmenuoptions?: Array<string | null> | null;
      menunamestring?: string | null;
      sectionID: string;
      sectionname?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  CompanySections?: {
    __typename: "ModelSectionConnection";
    items?: Array<{
      __typename: "Section";
      id: string;
      name: string;
      companyID?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  highsecpin?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteCompanyMutation = {
  __typename: "Company";
  id: string;
  name: string;
  registeredemail?: string | null;
  adminpass?: string | null;
  domainname?: string | null;
  CompanyUsers?: {
    __typename: "ModelUserConnection";
    items?: Array<{
      __typename: "User";
      id: string;
      firstname: string;
      lastname?: string | null;
      mobileno: string;
      username?: string | null;
      userpass?: string | null;
      companyID?: string | null;
      assignedmenuoptions?: Array<string | null> | null;
      menunamestring?: string | null;
      sectionID: string;
      sectionname?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  CompanySections?: {
    __typename: "ModelSectionConnection";
    items?: Array<{
      __typename: "Section";
      id: string;
      name: string;
      companyID?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  highsecpin?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateRoomMutation = {
  __typename: "Room";
  id: string;
  name: string;
  sectionID?: string | null;
  temperaturemin?: number | null;
  temperaturemax?: number | null;
  currentavgtem?: number | null;
  numfloors?: number | null;
  sectionname?: string | null;
  sensors?: Array<string | null> | null;
  sensorsasstring?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateRoomMutation = {
  __typename: "Room";
  id: string;
  name: string;
  sectionID?: string | null;
  temperaturemin?: number | null;
  temperaturemax?: number | null;
  currentavgtem?: number | null;
  numfloors?: number | null;
  sectionname?: string | null;
  sensors?: Array<string | null> | null;
  sensorsasstring?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteRoomMutation = {
  __typename: "Room";
  id: string;
  name: string;
  sectionID?: string | null;
  temperaturemin?: number | null;
  temperaturemax?: number | null;
  currentavgtem?: number | null;
  numfloors?: number | null;
  sectionname?: string | null;
  sensors?: Array<string | null> | null;
  sensorsasstring?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateSectionMutation = {
  __typename: "Section";
  id: string;
  name: string;
  SectionRooms?: {
    __typename: "ModelRoomConnection";
    items?: Array<{
      __typename: "Room";
      id: string;
      name: string;
      sectionID?: string | null;
      temperaturemin?: number | null;
      temperaturemax?: number | null;
      currentavgtem?: number | null;
      numfloors?: number | null;
      sectionname?: string | null;
      sensors?: Array<string | null> | null;
      sensorsasstring?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  companyID?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateSectionMutation = {
  __typename: "Section";
  id: string;
  name: string;
  SectionRooms?: {
    __typename: "ModelRoomConnection";
    items?: Array<{
      __typename: "Room";
      id: string;
      name: string;
      sectionID?: string | null;
      temperaturemin?: number | null;
      temperaturemax?: number | null;
      currentavgtem?: number | null;
      numfloors?: number | null;
      sectionname?: string | null;
      sensors?: Array<string | null> | null;
      sensorsasstring?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  companyID?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteSectionMutation = {
  __typename: "Section";
  id: string;
  name: string;
  SectionRooms?: {
    __typename: "ModelRoomConnection";
    items?: Array<{
      __typename: "Room";
      id: string;
      name: string;
      sectionID?: string | null;
      temperaturemin?: number | null;
      temperaturemax?: number | null;
      currentavgtem?: number | null;
      numfloors?: number | null;
      sectionname?: string | null;
      sensors?: Array<string | null> | null;
      sensorsasstring?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  companyID?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type GetSensorQuery = {
  __typename: "Sensor";
  id: string;
  serialnumber: string;
  remarks?: string | null;
  companyID?: string | null;
  lastreadtemp?: number | null;
  lastreceivedon?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type ListSensorsQuery = {
  __typename: "ModelSensorConnection";
  items?: Array<{
    __typename: "Sensor";
    id: string;
    serialnumber: string;
    remarks?: string | null;
    companyID?: string | null;
    lastreadtemp?: number | null;
    lastreceivedon?: number | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetUsermenuQuery = {
  __typename: "Usermenu";
  id: string;
  name?: string | null;
  menucode?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListUsermenusQuery = {
  __typename: "ModelUsermenuConnection";
  items?: Array<{
    __typename: "Usermenu";
    id: string;
    name?: string | null;
    menucode?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetUserQuery = {
  __typename: "User";
  id: string;
  firstname: string;
  lastname?: string | null;
  mobileno: string;
  username?: string | null;
  userpass?: string | null;
  companyID?: string | null;
  assignedmenuoptions?: Array<string | null> | null;
  menunamestring?: string | null;
  sectionID: string;
  sectionname?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListUsersQuery = {
  __typename: "ModelUserConnection";
  items?: Array<{
    __typename: "User";
    id: string;
    firstname: string;
    lastname?: string | null;
    mobileno: string;
    username?: string | null;
    userpass?: string | null;
    companyID?: string | null;
    assignedmenuoptions?: Array<string | null> | null;
    menunamestring?: string | null;
    sectionID: string;
    sectionname?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetCompanyQuery = {
  __typename: "Company";
  id: string;
  name: string;
  registeredemail?: string | null;
  adminpass?: string | null;
  domainname?: string | null;
  CompanyUsers?: {
    __typename: "ModelUserConnection";
    items?: Array<{
      __typename: "User";
      id: string;
      firstname: string;
      lastname?: string | null;
      mobileno: string;
      username?: string | null;
      userpass?: string | null;
      companyID?: string | null;
      assignedmenuoptions?: Array<string | null> | null;
      menunamestring?: string | null;
      sectionID: string;
      sectionname?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  CompanySections?: {
    __typename: "ModelSectionConnection";
    items?: Array<{
      __typename: "Section";
      id: string;
      name: string;
      companyID?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  highsecpin?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListCompanysQuery = {
  __typename: "ModelCompanyConnection";
  items?: Array<{
    __typename: "Company";
    id: string;
    name: string;
    registeredemail?: string | null;
    adminpass?: string | null;
    domainname?: string | null;
    CompanyUsers?: {
      __typename: "ModelUserConnection";
      nextToken?: string | null;
    } | null;
    CompanySections?: {
      __typename: "ModelSectionConnection";
      nextToken?: string | null;
    } | null;
    highsecpin?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetRoomQuery = {
  __typename: "Room";
  id: string;
  name: string;
  sectionID?: string | null;
  temperaturemin?: number | null;
  temperaturemax?: number | null;
  currentavgtem?: number | null;
  numfloors?: number | null;
  sectionname?: string | null;
  sensors?: Array<string | null> | null;
  sensorsasstring?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListRoomsQuery = {
  __typename: "ModelRoomConnection";
  items?: Array<{
    __typename: "Room";
    id: string;
    name: string;
    sectionID?: string | null;
    temperaturemin?: number | null;
    temperaturemax?: number | null;
    currentavgtem?: number | null;
    numfloors?: number | null;
    sectionname?: string | null;
    sensors?: Array<string | null> | null;
    sensorsasstring?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetSectionQuery = {
  __typename: "Section";
  id: string;
  name: string;
  SectionRooms?: {
    __typename: "ModelRoomConnection";
    items?: Array<{
      __typename: "Room";
      id: string;
      name: string;
      sectionID?: string | null;
      temperaturemin?: number | null;
      temperaturemax?: number | null;
      currentavgtem?: number | null;
      numfloors?: number | null;
      sectionname?: string | null;
      sensors?: Array<string | null> | null;
      sensorsasstring?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  companyID?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListSectionsQuery = {
  __typename: "ModelSectionConnection";
  items?: Array<{
    __typename: "Section";
    id: string;
    name: string;
    SectionRooms?: {
      __typename: "ModelRoomConnection";
      nextToken?: string | null;
    } | null;
    companyID?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type CompanyByEmailQuery = {
  __typename: "ModelCompanyConnection";
  items?: Array<{
    __typename: "Company";
    id: string;
    name: string;
    registeredemail?: string | null;
    adminpass?: string | null;
    domainname?: string | null;
    CompanyUsers?: {
      __typename: "ModelUserConnection";
      nextToken?: string | null;
    } | null;
    CompanySections?: {
      __typename: "ModelSectionConnection";
      nextToken?: string | null;
    } | null;
    highsecpin?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type OnCreateSensorSubscription = {
  __typename: "Sensor";
  id: string;
  serialnumber: string;
  remarks?: string | null;
  companyID?: string | null;
  lastreadtemp?: number | null;
  lastreceivedon?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateSensorSubscription = {
  __typename: "Sensor";
  id: string;
  serialnumber: string;
  remarks?: string | null;
  companyID?: string | null;
  lastreadtemp?: number | null;
  lastreceivedon?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteSensorSubscription = {
  __typename: "Sensor";
  id: string;
  serialnumber: string;
  remarks?: string | null;
  companyID?: string | null;
  lastreadtemp?: number | null;
  lastreceivedon?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateUsermenuSubscription = {
  __typename: "Usermenu";
  id: string;
  name?: string | null;
  menucode?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateUsermenuSubscription = {
  __typename: "Usermenu";
  id: string;
  name?: string | null;
  menucode?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteUsermenuSubscription = {
  __typename: "Usermenu";
  id: string;
  name?: string | null;
  menucode?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateUserSubscription = {
  __typename: "User";
  id: string;
  firstname: string;
  lastname?: string | null;
  mobileno: string;
  username?: string | null;
  userpass?: string | null;
  companyID?: string | null;
  assignedmenuoptions?: Array<string | null> | null;
  menunamestring?: string | null;
  sectionID: string;
  sectionname?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateUserSubscription = {
  __typename: "User";
  id: string;
  firstname: string;
  lastname?: string | null;
  mobileno: string;
  username?: string | null;
  userpass?: string | null;
  companyID?: string | null;
  assignedmenuoptions?: Array<string | null> | null;
  menunamestring?: string | null;
  sectionID: string;
  sectionname?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteUserSubscription = {
  __typename: "User";
  id: string;
  firstname: string;
  lastname?: string | null;
  mobileno: string;
  username?: string | null;
  userpass?: string | null;
  companyID?: string | null;
  assignedmenuoptions?: Array<string | null> | null;
  menunamestring?: string | null;
  sectionID: string;
  sectionname?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateCompanySubscription = {
  __typename: "Company";
  id: string;
  name: string;
  registeredemail?: string | null;
  adminpass?: string | null;
  domainname?: string | null;
  CompanyUsers?: {
    __typename: "ModelUserConnection";
    items?: Array<{
      __typename: "User";
      id: string;
      firstname: string;
      lastname?: string | null;
      mobileno: string;
      username?: string | null;
      userpass?: string | null;
      companyID?: string | null;
      assignedmenuoptions?: Array<string | null> | null;
      menunamestring?: string | null;
      sectionID: string;
      sectionname?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  CompanySections?: {
    __typename: "ModelSectionConnection";
    items?: Array<{
      __typename: "Section";
      id: string;
      name: string;
      companyID?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  highsecpin?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateCompanySubscription = {
  __typename: "Company";
  id: string;
  name: string;
  registeredemail?: string | null;
  adminpass?: string | null;
  domainname?: string | null;
  CompanyUsers?: {
    __typename: "ModelUserConnection";
    items?: Array<{
      __typename: "User";
      id: string;
      firstname: string;
      lastname?: string | null;
      mobileno: string;
      username?: string | null;
      userpass?: string | null;
      companyID?: string | null;
      assignedmenuoptions?: Array<string | null> | null;
      menunamestring?: string | null;
      sectionID: string;
      sectionname?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  CompanySections?: {
    __typename: "ModelSectionConnection";
    items?: Array<{
      __typename: "Section";
      id: string;
      name: string;
      companyID?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  highsecpin?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteCompanySubscription = {
  __typename: "Company";
  id: string;
  name: string;
  registeredemail?: string | null;
  adminpass?: string | null;
  domainname?: string | null;
  CompanyUsers?: {
    __typename: "ModelUserConnection";
    items?: Array<{
      __typename: "User";
      id: string;
      firstname: string;
      lastname?: string | null;
      mobileno: string;
      username?: string | null;
      userpass?: string | null;
      companyID?: string | null;
      assignedmenuoptions?: Array<string | null> | null;
      menunamestring?: string | null;
      sectionID: string;
      sectionname?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  CompanySections?: {
    __typename: "ModelSectionConnection";
    items?: Array<{
      __typename: "Section";
      id: string;
      name: string;
      companyID?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  highsecpin?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateRoomSubscription = {
  __typename: "Room";
  id: string;
  name: string;
  sectionID?: string | null;
  temperaturemin?: number | null;
  temperaturemax?: number | null;
  currentavgtem?: number | null;
  numfloors?: number | null;
  sectionname?: string | null;
  sensors?: Array<string | null> | null;
  sensorsasstring?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateRoomSubscription = {
  __typename: "Room";
  id: string;
  name: string;
  sectionID?: string | null;
  temperaturemin?: number | null;
  temperaturemax?: number | null;
  currentavgtem?: number | null;
  numfloors?: number | null;
  sectionname?: string | null;
  sensors?: Array<string | null> | null;
  sensorsasstring?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteRoomSubscription = {
  __typename: "Room";
  id: string;
  name: string;
  sectionID?: string | null;
  temperaturemin?: number | null;
  temperaturemax?: number | null;
  currentavgtem?: number | null;
  numfloors?: number | null;
  sectionname?: string | null;
  sensors?: Array<string | null> | null;
  sensorsasstring?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateSectionSubscription = {
  __typename: "Section";
  id: string;
  name: string;
  SectionRooms?: {
    __typename: "ModelRoomConnection";
    items?: Array<{
      __typename: "Room";
      id: string;
      name: string;
      sectionID?: string | null;
      temperaturemin?: number | null;
      temperaturemax?: number | null;
      currentavgtem?: number | null;
      numfloors?: number | null;
      sectionname?: string | null;
      sensors?: Array<string | null> | null;
      sensorsasstring?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  companyID?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateSectionSubscription = {
  __typename: "Section";
  id: string;
  name: string;
  SectionRooms?: {
    __typename: "ModelRoomConnection";
    items?: Array<{
      __typename: "Room";
      id: string;
      name: string;
      sectionID?: string | null;
      temperaturemin?: number | null;
      temperaturemax?: number | null;
      currentavgtem?: number | null;
      numfloors?: number | null;
      sectionname?: string | null;
      sensors?: Array<string | null> | null;
      sensorsasstring?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  companyID?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteSectionSubscription = {
  __typename: "Section";
  id: string;
  name: string;
  SectionRooms?: {
    __typename: "ModelRoomConnection";
    items?: Array<{
      __typename: "Room";
      id: string;
      name: string;
      sectionID?: string | null;
      temperaturemin?: number | null;
      temperaturemax?: number | null;
      currentavgtem?: number | null;
      numfloors?: number | null;
      sectionname?: string | null;
      sensors?: Array<string | null> | null;
      sensorsasstring?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  companyID?: string | null;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateSensor(
    input: CreateSensorInput,
    condition?: ModelSensorConditionInput
  ): Promise<CreateSensorMutation> {
    const statement = `mutation CreateSensor($input: CreateSensorInput!, $condition: ModelSensorConditionInput) {
        createSensor(input: $input, condition: $condition) {
          __typename
          id
          serialnumber
          remarks
          companyID
          lastreadtemp
          lastreceivedon
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateSensorMutation>response.data.createSensor;
  }
  async UpdateSensor(
    input: UpdateSensorInput,
    condition?: ModelSensorConditionInput
  ): Promise<UpdateSensorMutation> {
    const statement = `mutation UpdateSensor($input: UpdateSensorInput!, $condition: ModelSensorConditionInput) {
        updateSensor(input: $input, condition: $condition) {
          __typename
          id
          serialnumber
          remarks
          companyID
          lastreadtemp
          lastreceivedon
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateSensorMutation>response.data.updateSensor;
  }
  async DeleteSensor(
    input: DeleteSensorInput,
    condition?: ModelSensorConditionInput
  ): Promise<DeleteSensorMutation> {
    const statement = `mutation DeleteSensor($input: DeleteSensorInput!, $condition: ModelSensorConditionInput) {
        deleteSensor(input: $input, condition: $condition) {
          __typename
          id
          serialnumber
          remarks
          companyID
          lastreadtemp
          lastreceivedon
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteSensorMutation>response.data.deleteSensor;
  }
  async CreateUsermenu(
    input: CreateUsermenuInput,
    condition?: ModelUsermenuConditionInput
  ): Promise<CreateUsermenuMutation> {
    const statement = `mutation CreateUsermenu($input: CreateUsermenuInput!, $condition: ModelUsermenuConditionInput) {
        createUsermenu(input: $input, condition: $condition) {
          __typename
          id
          name
          menucode
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateUsermenuMutation>response.data.createUsermenu;
  }
  async UpdateUsermenu(
    input: UpdateUsermenuInput,
    condition?: ModelUsermenuConditionInput
  ): Promise<UpdateUsermenuMutation> {
    const statement = `mutation UpdateUsermenu($input: UpdateUsermenuInput!, $condition: ModelUsermenuConditionInput) {
        updateUsermenu(input: $input, condition: $condition) {
          __typename
          id
          name
          menucode
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateUsermenuMutation>response.data.updateUsermenu;
  }
  async DeleteUsermenu(
    input: DeleteUsermenuInput,
    condition?: ModelUsermenuConditionInput
  ): Promise<DeleteUsermenuMutation> {
    const statement = `mutation DeleteUsermenu($input: DeleteUsermenuInput!, $condition: ModelUsermenuConditionInput) {
        deleteUsermenu(input: $input, condition: $condition) {
          __typename
          id
          name
          menucode
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteUsermenuMutation>response.data.deleteUsermenu;
  }
  async CreateUser(
    input: CreateUserInput,
    condition?: ModelUserConditionInput
  ): Promise<CreateUserMutation> {
    const statement = `mutation CreateUser($input: CreateUserInput!, $condition: ModelUserConditionInput) {
        createUser(input: $input, condition: $condition) {
          __typename
          id
          firstname
          lastname
          mobileno
          username
          userpass
          companyID
          assignedmenuoptions
          menunamestring
          sectionID
          sectionname
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateUserMutation>response.data.createUser;
  }
  async UpdateUser(
    input: UpdateUserInput,
    condition?: ModelUserConditionInput
  ): Promise<UpdateUserMutation> {
    const statement = `mutation UpdateUser($input: UpdateUserInput!, $condition: ModelUserConditionInput) {
        updateUser(input: $input, condition: $condition) {
          __typename
          id
          firstname
          lastname
          mobileno
          username
          userpass
          companyID
          assignedmenuoptions
          menunamestring
          sectionID
          sectionname
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateUserMutation>response.data.updateUser;
  }
  async DeleteUser(
    input: DeleteUserInput,
    condition?: ModelUserConditionInput
  ): Promise<DeleteUserMutation> {
    const statement = `mutation DeleteUser($input: DeleteUserInput!, $condition: ModelUserConditionInput) {
        deleteUser(input: $input, condition: $condition) {
          __typename
          id
          firstname
          lastname
          mobileno
          username
          userpass
          companyID
          assignedmenuoptions
          menunamestring
          sectionID
          sectionname
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteUserMutation>response.data.deleteUser;
  }
  async CreateCompany(
    input: CreateCompanyInput,
    condition?: ModelCompanyConditionInput
  ): Promise<CreateCompanyMutation> {
    const statement = `mutation CreateCompany($input: CreateCompanyInput!, $condition: ModelCompanyConditionInput) {
        createCompany(input: $input, condition: $condition) {
          __typename
          id
          name
          registeredemail
          adminpass
          domainname
          CompanyUsers {
            __typename
            items {
              __typename
              id
              firstname
              lastname
              mobileno
              username
              userpass
              companyID
              assignedmenuoptions
              menunamestring
              sectionID
              sectionname
              createdAt
              updatedAt
            }
            nextToken
          }
          CompanySections {
            __typename
            items {
              __typename
              id
              name
              companyID
              createdAt
              updatedAt
            }
            nextToken
          }
          highsecpin
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCompanyMutation>response.data.createCompany;
  }
  async UpdateCompany(
    input: UpdateCompanyInput,
    condition?: ModelCompanyConditionInput
  ): Promise<UpdateCompanyMutation> {
    const statement = `mutation UpdateCompany($input: UpdateCompanyInput!, $condition: ModelCompanyConditionInput) {
        updateCompany(input: $input, condition: $condition) {
          __typename
          id
          name
          registeredemail
          adminpass
          domainname
          CompanyUsers {
            __typename
            items {
              __typename
              id
              firstname
              lastname
              mobileno
              username
              userpass
              companyID
              assignedmenuoptions
              menunamestring
              sectionID
              sectionname
              createdAt
              updatedAt
            }
            nextToken
          }
          CompanySections {
            __typename
            items {
              __typename
              id
              name
              companyID
              createdAt
              updatedAt
            }
            nextToken
          }
          highsecpin
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCompanyMutation>response.data.updateCompany;
  }
  async DeleteCompany(
    input: DeleteCompanyInput,
    condition?: ModelCompanyConditionInput
  ): Promise<DeleteCompanyMutation> {
    const statement = `mutation DeleteCompany($input: DeleteCompanyInput!, $condition: ModelCompanyConditionInput) {
        deleteCompany(input: $input, condition: $condition) {
          __typename
          id
          name
          registeredemail
          adminpass
          domainname
          CompanyUsers {
            __typename
            items {
              __typename
              id
              firstname
              lastname
              mobileno
              username
              userpass
              companyID
              assignedmenuoptions
              menunamestring
              sectionID
              sectionname
              createdAt
              updatedAt
            }
            nextToken
          }
          CompanySections {
            __typename
            items {
              __typename
              id
              name
              companyID
              createdAt
              updatedAt
            }
            nextToken
          }
          highsecpin
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCompanyMutation>response.data.deleteCompany;
  }
  async CreateRoom(
    input: CreateRoomInput,
    condition?: ModelRoomConditionInput
  ): Promise<CreateRoomMutation> {
    const statement = `mutation CreateRoom($input: CreateRoomInput!, $condition: ModelRoomConditionInput) {
        createRoom(input: $input, condition: $condition) {
          __typename
          id
          name
          sectionID
          temperaturemin
          temperaturemax
          currentavgtem
          numfloors
          sectionname
          sensors
          sensorsasstring
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateRoomMutation>response.data.createRoom;
  }
  async UpdateRoom(
    input: UpdateRoomInput,
    condition?: ModelRoomConditionInput
  ): Promise<UpdateRoomMutation> {
    const statement = `mutation UpdateRoom($input: UpdateRoomInput!, $condition: ModelRoomConditionInput) {
        updateRoom(input: $input, condition: $condition) {
          __typename
          id
          name
          sectionID
          temperaturemin
          temperaturemax
          currentavgtem
          numfloors
          sectionname
          sensors
          sensorsasstring
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateRoomMutation>response.data.updateRoom;
  }
  async DeleteRoom(
    input: DeleteRoomInput,
    condition?: ModelRoomConditionInput
  ): Promise<DeleteRoomMutation> {
    const statement = `mutation DeleteRoom($input: DeleteRoomInput!, $condition: ModelRoomConditionInput) {
        deleteRoom(input: $input, condition: $condition) {
          __typename
          id
          name
          sectionID
          temperaturemin
          temperaturemax
          currentavgtem
          numfloors
          sectionname
          sensors
          sensorsasstring
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteRoomMutation>response.data.deleteRoom;
  }
  async CreateSection(
    input: CreateSectionInput,
    condition?: ModelSectionConditionInput
  ): Promise<CreateSectionMutation> {
    const statement = `mutation CreateSection($input: CreateSectionInput!, $condition: ModelSectionConditionInput) {
        createSection(input: $input, condition: $condition) {
          __typename
          id
          name
          SectionRooms {
            __typename
            items {
              __typename
              id
              name
              sectionID
              temperaturemin
              temperaturemax
              currentavgtem
              numfloors
              sectionname
              sensors
              sensorsasstring
              createdAt
              updatedAt
            }
            nextToken
          }
          companyID
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateSectionMutation>response.data.createSection;
  }
  async UpdateSection(
    input: UpdateSectionInput,
    condition?: ModelSectionConditionInput
  ): Promise<UpdateSectionMutation> {
    const statement = `mutation UpdateSection($input: UpdateSectionInput!, $condition: ModelSectionConditionInput) {
        updateSection(input: $input, condition: $condition) {
          __typename
          id
          name
          SectionRooms {
            __typename
            items {
              __typename
              id
              name
              sectionID
              temperaturemin
              temperaturemax
              currentavgtem
              numfloors
              sectionname
              sensors
              sensorsasstring
              createdAt
              updatedAt
            }
            nextToken
          }
          companyID
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateSectionMutation>response.data.updateSection;
  }
  async DeleteSection(
    input: DeleteSectionInput,
    condition?: ModelSectionConditionInput
  ): Promise<DeleteSectionMutation> {
    const statement = `mutation DeleteSection($input: DeleteSectionInput!, $condition: ModelSectionConditionInput) {
        deleteSection(input: $input, condition: $condition) {
          __typename
          id
          name
          SectionRooms {
            __typename
            items {
              __typename
              id
              name
              sectionID
              temperaturemin
              temperaturemax
              currentavgtem
              numfloors
              sectionname
              sensors
              sensorsasstring
              createdAt
              updatedAt
            }
            nextToken
          }
          companyID
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteSectionMutation>response.data.deleteSection;
  }
  async GetSensor(id: string): Promise<GetSensorQuery> {
    const statement = `query GetSensor($id: ID!) {
        getSensor(id: $id) {
          __typename
          id
          serialnumber
          remarks
          companyID
          lastreadtemp
          lastreceivedon
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetSensorQuery>response.data.getSensor;
  }
  async ListSensors(
    filter?: ModelSensorFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListSensorsQuery> {
    const statement = `query ListSensors($filter: ModelSensorFilterInput, $limit: Int, $nextToken: String) {
        listSensors(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            serialnumber
            remarks
            companyID
            lastreadtemp
            lastreceivedon
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListSensorsQuery>response.data.listSensors;
  }
  async GetUsermenu(id: string): Promise<GetUsermenuQuery> {
    const statement = `query GetUsermenu($id: ID!) {
        getUsermenu(id: $id) {
          __typename
          id
          name
          menucode
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetUsermenuQuery>response.data.getUsermenu;
  }
  async ListUsermenus(
    filter?: ModelUsermenuFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListUsermenusQuery> {
    const statement = `query ListUsermenus($filter: ModelUsermenuFilterInput, $limit: Int, $nextToken: String) {
        listUsermenus(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            menucode
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListUsermenusQuery>response.data.listUsermenus;
  }
  async GetUser(id: string): Promise<GetUserQuery> {
    const statement = `query GetUser($id: ID!) {
        getUser(id: $id) {
          __typename
          id
          firstname
          lastname
          mobileno
          username
          userpass
          companyID
          assignedmenuoptions
          menunamestring
          sectionID
          sectionname
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetUserQuery>response.data.getUser;
  }
  async ListUsers(
    filter?: ModelUserFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListUsersQuery> {
    const statement = `query ListUsers($filter: ModelUserFilterInput, $limit: Int, $nextToken: String) {
        listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            firstname
            lastname
            mobileno
            username
            userpass
            companyID
            assignedmenuoptions
            menunamestring
            sectionID
            sectionname
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListUsersQuery>response.data.listUsers;
  }
  async GetCompany(id: string): Promise<GetCompanyQuery> {
    const statement = `query GetCompany($id: ID!) {
        getCompany(id: $id) {
          __typename
          id
          name
          registeredemail
          adminpass
          domainname
          CompanyUsers {
            __typename
            items {
              __typename
              id
              firstname
              lastname
              mobileno
              username
              userpass
              companyID
              assignedmenuoptions
              menunamestring
              sectionID
              sectionname
              createdAt
              updatedAt
            }
            nextToken
          }
          CompanySections {
            __typename
            items {
              __typename
              id
              name
              companyID
              createdAt
              updatedAt
            }
            nextToken
          }
          highsecpin
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCompanyQuery>response.data.getCompany;
  }
  async ListCompanys(
    filter?: ModelCompanyFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCompanysQuery> {
    const statement = `query ListCompanys($filter: ModelCompanyFilterInput, $limit: Int, $nextToken: String) {
        listCompanys(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            registeredemail
            adminpass
            domainname
            CompanyUsers {
              __typename
              nextToken
            }
            CompanySections {
              __typename
              nextToken
            }
            highsecpin
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCompanysQuery>response.data.listCompanys;
  }
  async GetRoom(id: string): Promise<GetRoomQuery> {
    const statement = `query GetRoom($id: ID!) {
        getRoom(id: $id) {
          __typename
          id
          name
          sectionID
          temperaturemin
          temperaturemax
          currentavgtem
          numfloors
          sectionname
          sensors
          sensorsasstring
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetRoomQuery>response.data.getRoom;
  }
  async ListRooms(
    filter?: ModelRoomFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListRoomsQuery> {
    const statement = `query ListRooms($filter: ModelRoomFilterInput, $limit: Int, $nextToken: String) {
        listRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            sectionID
            temperaturemin
            temperaturemax
            currentavgtem
            numfloors
            sectionname
            sensors
            sensorsasstring
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListRoomsQuery>response.data.listRooms;
  }
  async GetSection(id: string): Promise<GetSectionQuery> {
    const statement = `query GetSection($id: ID!) {
        getSection(id: $id) {
          __typename
          id
          name
          SectionRooms {
            __typename
            items {
              __typename
              id
              name
              sectionID
              temperaturemin
              temperaturemax
              currentavgtem
              numfloors
              sectionname
              sensors
              sensorsasstring
              createdAt
              updatedAt
            }
            nextToken
          }
          companyID
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetSectionQuery>response.data.getSection;
  }
  async ListSections(
    filter?: ModelSectionFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListSectionsQuery> {
    const statement = `query ListSections($filter: ModelSectionFilterInput, $limit: Int, $nextToken: String) {
        listSections(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            SectionRooms {
              __typename
              nextToken
            }
            companyID
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListSectionsQuery>response.data.listSections;
  }
  async CompanyByEmail(
    registeredemail?: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelCompanyFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<CompanyByEmailQuery> {
    const statement = `query CompanyByEmail($registeredemail: String, $sortDirection: ModelSortDirection, $filter: ModelCompanyFilterInput, $limit: Int, $nextToken: String) {
        companyByEmail(registeredemail: $registeredemail, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            registeredemail
            adminpass
            domainname
            CompanyUsers {
              __typename
              nextToken
            }
            CompanySections {
              __typename
              nextToken
            }
            highsecpin
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (registeredemail) {
      gqlAPIServiceArguments.registeredemail = registeredemail;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CompanyByEmailQuery>response.data.companyByEmail;
  }
  OnCreateSensorListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateSensor">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateSensor {
        onCreateSensor {
          __typename
          id
          serialnumber
          remarks
          companyID
          lastreadtemp
          lastreceivedon
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateSensor">>
  >;

  OnUpdateSensorListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateSensor">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateSensor {
        onUpdateSensor {
          __typename
          id
          serialnumber
          remarks
          companyID
          lastreadtemp
          lastreceivedon
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateSensor">>
  >;

  OnDeleteSensorListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteSensor">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteSensor {
        onDeleteSensor {
          __typename
          id
          serialnumber
          remarks
          companyID
          lastreadtemp
          lastreceivedon
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteSensor">>
  >;

  OnCreateUsermenuListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateUsermenu">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateUsermenu {
        onCreateUsermenu {
          __typename
          id
          name
          menucode
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateUsermenu">>
  >;

  OnUpdateUsermenuListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateUsermenu">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateUsermenu {
        onUpdateUsermenu {
          __typename
          id
          name
          menucode
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateUsermenu">>
  >;

  OnDeleteUsermenuListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteUsermenu">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteUsermenu {
        onDeleteUsermenu {
          __typename
          id
          name
          menucode
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteUsermenu">>
  >;

  OnCreateUserListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateUser">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateUser {
        onCreateUser {
          __typename
          id
          firstname
          lastname
          mobileno
          username
          userpass
          companyID
          assignedmenuoptions
          menunamestring
          sectionID
          sectionname
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateUser">>
  >;

  OnUpdateUserListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateUser">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateUser {
        onUpdateUser {
          __typename
          id
          firstname
          lastname
          mobileno
          username
          userpass
          companyID
          assignedmenuoptions
          menunamestring
          sectionID
          sectionname
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateUser">>
  >;

  OnDeleteUserListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteUser">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteUser {
        onDeleteUser {
          __typename
          id
          firstname
          lastname
          mobileno
          username
          userpass
          companyID
          assignedmenuoptions
          menunamestring
          sectionID
          sectionname
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteUser">>
  >;

  OnCreateCompanyListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateCompany">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateCompany {
        onCreateCompany {
          __typename
          id
          name
          registeredemail
          adminpass
          domainname
          CompanyUsers {
            __typename
            items {
              __typename
              id
              firstname
              lastname
              mobileno
              username
              userpass
              companyID
              assignedmenuoptions
              menunamestring
              sectionID
              sectionname
              createdAt
              updatedAt
            }
            nextToken
          }
          CompanySections {
            __typename
            items {
              __typename
              id
              name
              companyID
              createdAt
              updatedAt
            }
            nextToken
          }
          highsecpin
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateCompany">>
  >;

  OnUpdateCompanyListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateCompany">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateCompany {
        onUpdateCompany {
          __typename
          id
          name
          registeredemail
          adminpass
          domainname
          CompanyUsers {
            __typename
            items {
              __typename
              id
              firstname
              lastname
              mobileno
              username
              userpass
              companyID
              assignedmenuoptions
              menunamestring
              sectionID
              sectionname
              createdAt
              updatedAt
            }
            nextToken
          }
          CompanySections {
            __typename
            items {
              __typename
              id
              name
              companyID
              createdAt
              updatedAt
            }
            nextToken
          }
          highsecpin
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateCompany">>
  >;

  OnDeleteCompanyListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteCompany">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteCompany {
        onDeleteCompany {
          __typename
          id
          name
          registeredemail
          adminpass
          domainname
          CompanyUsers {
            __typename
            items {
              __typename
              id
              firstname
              lastname
              mobileno
              username
              userpass
              companyID
              assignedmenuoptions
              menunamestring
              sectionID
              sectionname
              createdAt
              updatedAt
            }
            nextToken
          }
          CompanySections {
            __typename
            items {
              __typename
              id
              name
              companyID
              createdAt
              updatedAt
            }
            nextToken
          }
          highsecpin
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteCompany">>
  >;

  OnCreateRoomListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateRoom">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateRoom {
        onCreateRoom {
          __typename
          id
          name
          sectionID
          temperaturemin
          temperaturemax
          currentavgtem
          numfloors
          sectionname
          sensors
          sensorsasstring
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateRoom">>
  >;

  OnUpdateRoomListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateRoom">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateRoom {
        onUpdateRoom {
          __typename
          id
          name
          sectionID
          temperaturemin
          temperaturemax
          currentavgtem
          numfloors
          sectionname
          sensors
          sensorsasstring
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateRoom">>
  >;

  OnDeleteRoomListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteRoom">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteRoom {
        onDeleteRoom {
          __typename
          id
          name
          sectionID
          temperaturemin
          temperaturemax
          currentavgtem
          numfloors
          sectionname
          sensors
          sensorsasstring
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteRoom">>
  >;

  OnCreateSectionListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateSection">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateSection {
        onCreateSection {
          __typename
          id
          name
          SectionRooms {
            __typename
            items {
              __typename
              id
              name
              sectionID
              temperaturemin
              temperaturemax
              currentavgtem
              numfloors
              sectionname
              sensors
              sensorsasstring
              createdAt
              updatedAt
            }
            nextToken
          }
          companyID
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateSection">>
  >;

  OnUpdateSectionListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateSection">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateSection {
        onUpdateSection {
          __typename
          id
          name
          SectionRooms {
            __typename
            items {
              __typename
              id
              name
              sectionID
              temperaturemin
              temperaturemax
              currentavgtem
              numfloors
              sectionname
              sensors
              sensorsasstring
              createdAt
              updatedAt
            }
            nextToken
          }
          companyID
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateSection">>
  >;

  OnDeleteSectionListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteSection">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteSection {
        onDeleteSection {
          __typename
          id
          name
          SectionRooms {
            __typename
            items {
              __typename
              id
              name
              sectionID
              temperaturemin
              temperaturemax
              currentavgtem
              numfloors
              sectionname
              sensors
              sensorsasstring
              createdAt
              updatedAt
            }
            nextToken
          }
          companyID
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteSection">>
  >;
}
