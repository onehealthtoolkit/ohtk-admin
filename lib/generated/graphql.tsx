import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  GenericScalar: any;
  GeoJSON: any;
  JSONString: any;
  UUID: any;
  Upload: any;
};

/** An enumeration. */
export enum AccountsAuthorityUserRoleChoices {
  /** Admin */
  Adm = "ADM",
  /** Officer */
  Ofc = "OFC",
  /** Reporter */
  Rep = "REP",
}

export type AdminAuthorityCreateMutation = {
  __typename?: "AdminAuthorityCreateMutation";
  result?: Maybe<AdminAuthorityCreateResult>;
};

export type AdminAuthorityCreateProblem = {
  __typename?: "AdminAuthorityCreateProblem";
  fields?: Maybe<Array<AdminFieldValidationProblem>>;
  message?: Maybe<Scalars["String"]>;
};

export type AdminAuthorityCreateResult =
  | AdminAuthorityCreateProblem
  | AdminAuthorityCreateSuccess;

export type AdminAuthorityCreateSuccess = {
  __typename?: "AdminAuthorityCreateSuccess";
  area?: Maybe<Scalars["GeoJSON"]>;
  authorityInherits: Array<AdminAuthorityCreateSuccess>;
  authoritynotificationSet: Array<AdminAuthorityNotificationUpsertSuccess>;
  cases: Array<CaseType>;
  code: Scalars["String"];
  createdAt: Scalars["DateTime"];
  deletedAt?: Maybe<Scalars["DateTime"]>;
  id: Scalars["ID"];
  incidents: Array<IncidentReportType>;
  inherits: Array<AdminAuthorityCreateSuccess>;
  invitations: Array<AdminInvitationCodeCreateSuccess>;
  name: Scalars["String"];
  places: Array<AdminPlaceUpdateSuccess>;
  reportTypes: Array<AdminReportTypeCreateSuccess>;
  updatedAt: Scalars["DateTime"];
  users: Array<AdminAuthorityUserCreateSuccess>;
};

export type AdminAuthorityDeleteMutation = {
  __typename?: "AdminAuthorityDeleteMutation";
  success?: Maybe<Scalars["Boolean"]>;
};

export type AdminAuthorityInheritLookupType = {
  __typename?: "AdminAuthorityInheritLookupType";
  code: Scalars["String"];
  id: Scalars["ID"];
  name: Scalars["String"];
};

export type AdminAuthorityInheritLookupTypeNodeConnection = {
  __typename?: "AdminAuthorityInheritLookupTypeNodeConnection";
  /** Pagination data for this connection. */
  pageInfo: PageInfoExtra;
  /** Contains the nodes in this connection. */
  results: Array<Maybe<AdminAuthorityInheritLookupType>>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type AdminAuthorityNotificationDeleteMutation = {
  __typename?: "AdminAuthorityNotificationDeleteMutation";
  success?: Maybe<Scalars["Boolean"]>;
};

export type AdminAuthorityNotificationUpsertMutation = {
  __typename?: "AdminAuthorityNotificationUpsertMutation";
  result?: Maybe<AdminAuthorityNotificationUpsertResult>;
};

export type AdminAuthorityNotificationUpsertProblem = {
  __typename?: "AdminAuthorityNotificationUpsertProblem";
  fields?: Maybe<Array<AdminFieldValidationProblem>>;
  message?: Maybe<Scalars["String"]>;
};

export type AdminAuthorityNotificationUpsertResult =
  | AdminAuthorityNotificationUpsertProblem
  | AdminAuthorityNotificationUpsertSuccess;

export type AdminAuthorityNotificationUpsertSuccess = {
  __typename?: "AdminAuthorityNotificationUpsertSuccess";
  authority: AdminAuthorityCreateSuccess;
  createdAt: Scalars["DateTime"];
  deletedAt?: Maybe<Scalars["DateTime"]>;
  id: Scalars["ID"];
  template: AdminNotificationTemplateCreateSuccess;
  to: Scalars["String"];
  updatedAt: Scalars["DateTime"];
};

export type AdminAuthorityQueryType = {
  __typename?: "AdminAuthorityQueryType";
  code: Scalars["String"];
  id: Scalars["ID"];
  name: Scalars["String"];
};

export type AdminAuthorityQueryTypeNodeConnection = {
  __typename?: "AdminAuthorityQueryTypeNodeConnection";
  /** Pagination data for this connection. */
  pageInfo: PageInfoExtra;
  /** Contains the nodes in this connection. */
  results: Array<Maybe<AdminAuthorityQueryType>>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type AdminAuthorityUpdateMutation = {
  __typename?: "AdminAuthorityUpdateMutation";
  result?: Maybe<AdminAuthorityUpdateResult>;
};

export type AdminAuthorityUpdateProblem = {
  __typename?: "AdminAuthorityUpdateProblem";
  fields?: Maybe<Array<AdminFieldValidationProblem>>;
  message?: Maybe<Scalars["String"]>;
};

export type AdminAuthorityUpdateResult =
  | AdminAuthorityUpdateProblem
  | AdminAuthorityUpdateSuccess;

export type AdminAuthorityUpdateSuccess = {
  __typename?: "AdminAuthorityUpdateSuccess";
  authority?: Maybe<AuthorityType>;
};

export type AdminAuthorityUserCreateMutation = {
  __typename?: "AdminAuthorityUserCreateMutation";
  result?: Maybe<AdminAuthorityUserCreateResult>;
};

export type AdminAuthorityUserCreateProblem = {
  __typename?: "AdminAuthorityUserCreateProblem";
  fields?: Maybe<Array<AdminFieldValidationProblem>>;
  message?: Maybe<Scalars["String"]>;
};

export type AdminAuthorityUserCreateResult =
  | AdminAuthorityUserCreateProblem
  | AdminAuthorityUserCreateSuccess;

export type AdminAuthorityUserCreateSuccess = {
  __typename?: "AdminAuthorityUserCreateSuccess";
  authority: AdminAuthorityCreateSuccess;
  avatar?: Maybe<Scalars["String"]>;
  avatarUrl?: Maybe<Scalars["String"]>;
  consent: Scalars["Boolean"];
  dateJoined: Scalars["DateTime"];
  email: Scalars["String"];
  fcmToken: Scalars["String"];
  firstName: Scalars["String"];
  id: Scalars["ID"];
  /** Designates whether this user should be treated as active. Unselect this instead of deleting accounts. */
  isActive: Scalars["Boolean"];
  /** Designates whether the user can log into this admin site. */
  isStaff: Scalars["Boolean"];
  /** Designates that this user has all permissions without explicitly assigning them. */
  isSuperuser: Scalars["Boolean"];
  lastLogin?: Maybe<Scalars["DateTime"]>;
  lastName: Scalars["String"];
  password: Scalars["String"];
  role?: Maybe<AccountsAuthorityUserRoleChoices>;
  telephone?: Maybe<Scalars["String"]>;
  thumbnailAvatarUrl?: Maybe<Scalars["String"]>;
  userPtr: UserType;
  /** Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. */
  username: Scalars["String"];
};

export type AdminAuthorityUserDeleteMutation = {
  __typename?: "AdminAuthorityUserDeleteMutation";
  success?: Maybe<Scalars["Boolean"]>;
};

export type AdminAuthorityUserQueryType = {
  __typename?: "AdminAuthorityUserQueryType";
  email: Scalars["String"];
  firstName: Scalars["String"];
  id: Scalars["ID"];
  lastName: Scalars["String"];
  role?: Maybe<AccountsAuthorityUserRoleChoices>;
  /** Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. */
  username: Scalars["String"];
};

export type AdminAuthorityUserQueryTypeNodeConnection = {
  __typename?: "AdminAuthorityUserQueryTypeNodeConnection";
  /** Pagination data for this connection. */
  pageInfo: PageInfoExtra;
  /** Contains the nodes in this connection. */
  results: Array<Maybe<AdminAuthorityUserQueryType>>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type AdminAuthorityUserUpdateMutation = {
  __typename?: "AdminAuthorityUserUpdateMutation";
  result?: Maybe<AdminAuthorityUserUpdateResult>;
};

export type AdminAuthorityUserUpdatePasswordMutation = {
  __typename?: "AdminAuthorityUserUpdatePasswordMutation";
  result?: Maybe<AdminAuthorityUserUpdateResult>;
};

export type AdminAuthorityUserUpdateProblem = {
  __typename?: "AdminAuthorityUserUpdateProblem";
  fields?: Maybe<Array<AdminFieldValidationProblem>>;
  message?: Maybe<Scalars["String"]>;
};

export type AdminAuthorityUserUpdateResult =
  | AdminAuthorityUserUpdateProblem
  | AdminAuthorityUserUpdateSuccess;

export type AdminAuthorityUserUpdateSuccess = {
  __typename?: "AdminAuthorityUserUpdateSuccess";
  authorityUser?: Maybe<AuthorityUserType>;
};

export type AdminCaseDefinitionCreateMutation = {
  __typename?: "AdminCaseDefinitionCreateMutation";
  result?: Maybe<AdminCaseDefinitionCreateResult>;
};

export type AdminCaseDefinitionCreateProblem = {
  __typename?: "AdminCaseDefinitionCreateProblem";
  fields?: Maybe<Array<AdminFieldValidationProblem>>;
  message?: Maybe<Scalars["String"]>;
};

export type AdminCaseDefinitionCreateResult =
  | AdminCaseDefinitionCreateProblem
  | AdminCaseDefinitionCreateSuccess;

export type AdminCaseDefinitionCreateSuccess = {
  __typename?: "AdminCaseDefinitionCreateSuccess";
  condition: Scalars["String"];
  createdAt: Scalars["DateTime"];
  deletedAt?: Maybe<Scalars["DateTime"]>;
  description: Scalars["String"];
  id: Scalars["ID"];
  isActive: Scalars["Boolean"];
  reportType: AdminReportTypeCreateSuccess;
  updatedAt: Scalars["DateTime"];
};

export type AdminCaseDefinitionDeleteMutation = {
  __typename?: "AdminCaseDefinitionDeleteMutation";
  success?: Maybe<Scalars["Boolean"]>;
};

export type AdminCaseDefinitionQueryType = {
  __typename?: "AdminCaseDefinitionQueryType";
  condition: Scalars["String"];
  description: Scalars["String"];
  id: Scalars["ID"];
  reportType: AdminReportTypeCreateSuccess;
};

export type AdminCaseDefinitionQueryTypeNodeConnection = {
  __typename?: "AdminCaseDefinitionQueryTypeNodeConnection";
  /** Pagination data for this connection. */
  pageInfo: PageInfoExtra;
  /** Contains the nodes in this connection. */
  results: Array<Maybe<AdminCaseDefinitionQueryType>>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type AdminCaseDefinitionUpdateMutation = {
  __typename?: "AdminCaseDefinitionUpdateMutation";
  result?: Maybe<AdminCaseDefinitionUpdateResult>;
};

export type AdminCaseDefinitionUpdateProblem = {
  __typename?: "AdminCaseDefinitionUpdateProblem";
  fields?: Maybe<Array<AdminFieldValidationProblem>>;
  message?: Maybe<Scalars["String"]>;
};

export type AdminCaseDefinitionUpdateResult =
  | AdminCaseDefinitionUpdateProblem
  | AdminCaseDefinitionUpdateSuccess;

export type AdminCaseDefinitionUpdateSuccess = {
  __typename?: "AdminCaseDefinitionUpdateSuccess";
  caseDefinition?: Maybe<CaseDefinitionType>;
};

export type AdminCategoryCreateMutation = {
  __typename?: "AdminCategoryCreateMutation";
  result?: Maybe<AdminCategoryCreateResult>;
};

export type AdminCategoryCreateProblem = {
  __typename?: "AdminCategoryCreateProblem";
  fields?: Maybe<Array<AdminFieldValidationProblem>>;
  message?: Maybe<Scalars["String"]>;
};

export type AdminCategoryCreateResult =
  | AdminCategoryCreateProblem
  | AdminCategoryCreateSuccess;

export type AdminCategoryCreateSuccess = {
  __typename?: "AdminCategoryCreateSuccess";
  createdAt: Scalars["DateTime"];
  deletedAt?: Maybe<Scalars["DateTime"]>;
  icon?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  name: Scalars["String"];
  ordering: Scalars["Int"];
  reporttypeSet: Array<AdminReportTypeCreateSuccess>;
  updatedAt: Scalars["DateTime"];
};

export type AdminCategoryDeleteMutation = {
  __typename?: "AdminCategoryDeleteMutation";
  success?: Maybe<Scalars["Boolean"]>;
};

export type AdminCategoryQueryType = {
  __typename?: "AdminCategoryQueryType";
  icon?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  name: Scalars["String"];
  ordering: Scalars["Int"];
};

export type AdminCategoryQueryTypeNodeConnection = {
  __typename?: "AdminCategoryQueryTypeNodeConnection";
  /** Pagination data for this connection. */
  pageInfo: PageInfoExtra;
  /** Contains the nodes in this connection. */
  results: Array<Maybe<AdminCategoryQueryType>>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type AdminCategoryUpdateMutation = {
  __typename?: "AdminCategoryUpdateMutation";
  result?: Maybe<AdminCategoryUpdateResult>;
};

export type AdminCategoryUpdateProblem = {
  __typename?: "AdminCategoryUpdateProblem";
  fields?: Maybe<Array<AdminFieldValidationProblem>>;
  message?: Maybe<Scalars["String"]>;
};

export type AdminCategoryUpdateResult =
  | AdminCategoryUpdateProblem
  | AdminCategoryUpdateSuccess;

export type AdminCategoryUpdateSuccess = {
  __typename?: "AdminCategoryUpdateSuccess";
  category?: Maybe<CategoryType>;
};

export type AdminClientCreateMutation = {
  __typename?: "AdminClientCreateMutation";
  result?: Maybe<AdminClientCreateResult>;
};

export type AdminClientCreateProblem = {
  __typename?: "AdminClientCreateProblem";
  fields?: Maybe<Array<AdminFieldValidationProblem>>;
  message?: Maybe<Scalars["String"]>;
};

export type AdminClientCreateResult =
  | AdminClientCreateProblem
  | AdminClientCreateSuccess;

export type AdminClientCreateSuccess = {
  __typename?: "AdminClientCreateSuccess";
  createdAt: Scalars["DateTime"];
  deletedAt?: Maybe<Scalars["DateTime"]>;
  domains: Array<AdminDomainUpdateSuccess>;
  id: Scalars["ID"];
  name: Scalars["String"];
  schemaName: Scalars["String"];
  updatedAt: Scalars["DateTime"];
};

export type AdminClientQueryType = {
  __typename?: "AdminClientQueryType";
  id: Scalars["ID"];
  name: Scalars["String"];
  schemaName: Scalars["String"];
};

export type AdminClientQueryTypeNodeConnection = {
  __typename?: "AdminClientQueryTypeNodeConnection";
  /** Pagination data for this connection. */
  pageInfo: PageInfoExtra;
  /** Contains the nodes in this connection. */
  results: Array<Maybe<AdminClientQueryType>>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type AdminClientUpdateMutation = {
  __typename?: "AdminClientUpdateMutation";
  result?: Maybe<AdminClientUpdateResult>;
};

export type AdminClientUpdateProblem = {
  __typename?: "AdminClientUpdateProblem";
  fields?: Maybe<Array<AdminFieldValidationProblem>>;
  message?: Maybe<Scalars["String"]>;
};

export type AdminClientUpdateResult =
  | AdminClientUpdateProblem
  | AdminClientUpdateSuccess;

export type AdminClientUpdateSuccess = {
  __typename?: "AdminClientUpdateSuccess";
  createdAt: Scalars["DateTime"];
  deletedAt?: Maybe<Scalars["DateTime"]>;
  domains: Array<AdminDomainUpdateSuccess>;
  id: Scalars["ID"];
  name: Scalars["String"];
  schemaName: Scalars["String"];
  updatedAt: Scalars["DateTime"];
};

export type AdminConfigurationCreateMutation = {
  __typename?: "AdminConfigurationCreateMutation";
  result?: Maybe<AdminConfigurationCreateResult>;
};

export type AdminConfigurationCreateProblem = {
  __typename?: "AdminConfigurationCreateProblem";
  fields?: Maybe<Array<AdminFieldValidationProblem>>;
  message?: Maybe<Scalars["String"]>;
};

export type AdminConfigurationCreateResult =
  | AdminConfigurationCreateProblem
  | AdminConfigurationCreateSuccess;

export type AdminConfigurationCreateSuccess = {
  __typename?: "AdminConfigurationCreateSuccess";
  createdAt: Scalars["DateTime"];
  deletedAt?: Maybe<Scalars["DateTime"]>;
  key: Scalars["String"];
  updatedAt: Scalars["DateTime"];
  value: Scalars["String"];
};

export type AdminConfigurationDeleteMutation = {
  __typename?: "AdminConfigurationDeleteMutation";
  success?: Maybe<Scalars["Boolean"]>;
};

export type AdminConfigurationQueryType = {
  __typename?: "AdminConfigurationQueryType";
  key: Scalars["String"];
  value: Scalars["String"];
};

export type AdminConfigurationQueryTypeNodeConnection = {
  __typename?: "AdminConfigurationQueryTypeNodeConnection";
  /** Pagination data for this connection. */
  pageInfo: PageInfoExtra;
  /** Contains the nodes in this connection. */
  results: Array<Maybe<AdminConfigurationQueryType>>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type AdminConfigurationUpdateMutation = {
  __typename?: "AdminConfigurationUpdateMutation";
  result?: Maybe<AdminConfigurationUpdateResult>;
};

export type AdminConfigurationUpdateProblem = {
  __typename?: "AdminConfigurationUpdateProblem";
  fields?: Maybe<Array<AdminFieldValidationProblem>>;
  message?: Maybe<Scalars["String"]>;
};

export type AdminConfigurationUpdateResult =
  | AdminConfigurationUpdateProblem
  | AdminConfigurationUpdateSuccess;

export type AdminConfigurationUpdateSuccess = {
  __typename?: "AdminConfigurationUpdateSuccess";
  createdAt: Scalars["DateTime"];
  deletedAt?: Maybe<Scalars["DateTime"]>;
  key: Scalars["String"];
  updatedAt: Scalars["DateTime"];
  value: Scalars["String"];
};

export type AdminDefinitionQueryType = {
  __typename?: "AdminDefinitionQueryType";
  description?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  isActive: Scalars["Boolean"];
  monitoringDefinitions?: Maybe<Array<Maybe<AdminMonitoringDefinitionType>>>;
  name: Scalars["String"];
  registerFormDefinition: Scalars["JSONString"];
};

export type AdminDefinitionQueryTypeNodeConnection = {
  __typename?: "AdminDefinitionQueryTypeNodeConnection";
  /** Pagination data for this connection. */
  pageInfo: PageInfoExtra;
  /** Contains the nodes in this connection. */
  results: Array<Maybe<AdminDefinitionQueryType>>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type AdminDomainCreateMutation = {
  __typename?: "AdminDomainCreateMutation";
  result?: Maybe<AdminDomainCreateResult>;
};

export type AdminDomainCreateProblem = {
  __typename?: "AdminDomainCreateProblem";
  fields?: Maybe<Array<AdminFieldValidationProblem>>;
  message?: Maybe<Scalars["String"]>;
};

export type AdminDomainCreateResult =
  | AdminDomainCreateProblem
  | AdminDomainCreateSuccess;

export type AdminDomainCreateSuccess = {
  __typename?: "AdminDomainCreateSuccess";
  domain: Scalars["String"];
  id: Scalars["ID"];
  isPrimary: Scalars["Boolean"];
  tenant: AdminClientUpdateSuccess;
};

export type AdminDomainDeleteMutation = {
  __typename?: "AdminDomainDeleteMutation";
  success?: Maybe<Scalars["Boolean"]>;
};

export type AdminDomainUpdateMutation = {
  __typename?: "AdminDomainUpdateMutation";
  result?: Maybe<AdminDomainUpdateResult>;
};

export type AdminDomainUpdateProblem = {
  __typename?: "AdminDomainUpdateProblem";
  fields?: Maybe<Array<AdminFieldValidationProblem>>;
  message?: Maybe<Scalars["String"]>;
};

export type AdminDomainUpdateResult =
  | AdminDomainUpdateProblem
  | AdminDomainUpdateSuccess;

export type AdminDomainUpdateSuccess = {
  __typename?: "AdminDomainUpdateSuccess";
  domain: Scalars["String"];
  id: Scalars["ID"];
  isPrimary: Scalars["Boolean"];
  tenant: AdminClientUpdateSuccess;
};

export type AdminFieldValidationProblem = {
  __typename?: "AdminFieldValidationProblem";
  message: Scalars["String"];
  name: Scalars["String"];
};

export type AdminInvitationCodeCreateMutation = {
  __typename?: "AdminInvitationCodeCreateMutation";
  result?: Maybe<AdminInvitationCodeCreateResult>;
};

export type AdminInvitationCodeCreateProblem = {
  __typename?: "AdminInvitationCodeCreateProblem";
  fields?: Maybe<Array<AdminFieldValidationProblem>>;
  message?: Maybe<Scalars["String"]>;
};

export type AdminInvitationCodeCreateResult =
  | AdminInvitationCodeCreateProblem
  | AdminInvitationCodeCreateSuccess;

export type AdminInvitationCodeCreateSuccess = {
  __typename?: "AdminInvitationCodeCreateSuccess";
  authority: AdminAuthorityCreateSuccess;
  code: Scalars["String"];
  createdAt: Scalars["DateTime"];
  deletedAt?: Maybe<Scalars["DateTime"]>;
  fromDate: Scalars["DateTime"];
  id: Scalars["ID"];
  role: Scalars["String"];
  throughDate: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
};

export type AdminInvitationCodeDeleteMutation = {
  __typename?: "AdminInvitationCodeDeleteMutation";
  success?: Maybe<Scalars["Boolean"]>;
};

export type AdminInvitationCodeQueryType = {
  __typename?: "AdminInvitationCodeQueryType";
  authority: AdminAuthorityCreateSuccess;
  code: Scalars["String"];
  fromDate: Scalars["DateTime"];
  id: Scalars["ID"];
  role: Scalars["String"];
  throughDate: Scalars["DateTime"];
};

export type AdminInvitationCodeQueryTypeNodeConnection = {
  __typename?: "AdminInvitationCodeQueryTypeNodeConnection";
  /** Pagination data for this connection. */
  pageInfo: PageInfoExtra;
  /** Contains the nodes in this connection. */
  results: Array<Maybe<AdminInvitationCodeQueryType>>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type AdminInvitationCodeUpdateMutation = {
  __typename?: "AdminInvitationCodeUpdateMutation";
  result?: Maybe<AdminInvitationCodeUpdateResult>;
};

export type AdminInvitationCodeUpdateProblem = {
  __typename?: "AdminInvitationCodeUpdateProblem";
  fields?: Maybe<Array<AdminFieldValidationProblem>>;
  message?: Maybe<Scalars["String"]>;
};

export type AdminInvitationCodeUpdateResult =
  | AdminInvitationCodeUpdateProblem
  | AdminInvitationCodeUpdateSuccess;

export type AdminInvitationCodeUpdateSuccess = {
  __typename?: "AdminInvitationCodeUpdateSuccess";
  invitationCode?: Maybe<InvitationCodeType>;
};

export type AdminMonitoringDefinitionQueryType = {
  __typename?: "AdminMonitoringDefinitionQueryType";
  description?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  isActive: Scalars["Boolean"];
  name: Scalars["String"];
};

export type AdminMonitoringDefinitionType = {
  __typename?: "AdminMonitoringDefinitionType";
  description?: Maybe<Scalars["String"]>;
  formDefinition: Scalars["JSONString"];
  id: Scalars["ID"];
  isActive: Scalars["Boolean"];
  name: Scalars["String"];
};

export type AdminNotificationTemplateAuthorityType = {
  __typename?: "AdminNotificationTemplateAuthorityType";
  notificationId?: Maybe<Scalars["Int"]>;
  notificationTemplateId: Scalars["ID"];
  notificationTemplateName: Scalars["String"];
  to?: Maybe<Scalars["String"]>;
};

export type AdminNotificationTemplateCreateMutation = {
  __typename?: "AdminNotificationTemplateCreateMutation";
  result?: Maybe<AdminNotificationTemplateCreateResult>;
};

export type AdminNotificationTemplateCreateProblem = {
  __typename?: "AdminNotificationTemplateCreateProblem";
  fields?: Maybe<Array<AdminFieldValidationProblem>>;
  message?: Maybe<Scalars["String"]>;
};

export type AdminNotificationTemplateCreateResult =
  | AdminNotificationTemplateCreateProblem
  | AdminNotificationTemplateCreateSuccess;

export type AdminNotificationTemplateCreateSuccess = {
  __typename?: "AdminNotificationTemplateCreateSuccess";
  authoritynotificationSet: Array<AdminAuthorityNotificationUpsertSuccess>;
  bodyTemplate: Scalars["String"];
  condition?: Maybe<Scalars["String"]>;
  createdAt: Scalars["DateTime"];
  deletedAt?: Maybe<Scalars["DateTime"]>;
  id: Scalars["ID"];
  name: Scalars["String"];
  reportType: AdminReportTypeCreateSuccess;
  stateTransition?: Maybe<DeepStateTransitionType>;
  titleTemplate: Scalars["String"];
  type: CasesNotificationTemplateTypeChoices;
  updatedAt: Scalars["DateTime"];
};

export type AdminNotificationTemplateDeleteMutation = {
  __typename?: "AdminNotificationTemplateDeleteMutation";
  success?: Maybe<Scalars["Boolean"]>;
};

export type AdminNotificationTemplateQueryType = {
  __typename?: "AdminNotificationTemplateQueryType";
  id: Scalars["ID"];
  name: Scalars["String"];
  reportType: AdminReportTypeCreateSuccess;
};

export type AdminNotificationTemplateQueryTypeNodeConnection = {
  __typename?: "AdminNotificationTemplateQueryTypeNodeConnection";
  /** Pagination data for this connection. */
  pageInfo: PageInfoExtra;
  /** Contains the nodes in this connection. */
  results: Array<Maybe<AdminNotificationTemplateQueryType>>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type AdminNotificationTemplateUpdateMutation = {
  __typename?: "AdminNotificationTemplateUpdateMutation";
  result?: Maybe<AdminNotificationTemplateUpdateResult>;
};

export type AdminNotificationTemplateUpdateProblem = {
  __typename?: "AdminNotificationTemplateUpdateProblem";
  fields?: Maybe<Array<AdminFieldValidationProblem>>;
  message?: Maybe<Scalars["String"]>;
};

export type AdminNotificationTemplateUpdateResult =
  | AdminNotificationTemplateUpdateProblem
  | AdminNotificationTemplateUpdateSuccess;

export type AdminNotificationTemplateUpdateSuccess = {
  __typename?: "AdminNotificationTemplateUpdateSuccess";
  notificationTemplate?: Maybe<NotificationTemplateType>;
};

/** use to create a new observation definition */
export type AdminObservationDefinitionCreateMutation = {
  __typename?: "AdminObservationDefinitionCreateMutation";
  result?: Maybe<AdminObservationDefinitionCreateResult>;
};

export type AdminObservationDefinitionCreateProblem = {
  __typename?: "AdminObservationDefinitionCreateProblem";
  fields?: Maybe<Array<AdminFieldValidationProblem>>;
  message?: Maybe<Scalars["String"]>;
};

export type AdminObservationDefinitionCreateResult =
  | AdminObservationDefinitionCreateProblem
  | AdminObservationDefinitionCreateSuccess;

export type AdminObservationDefinitionCreateSuccess = {
  __typename?: "AdminObservationDefinitionCreateSuccess";
  createdAt: Scalars["DateTime"];
  deletedAt?: Maybe<Scalars["DateTime"]>;
  description?: Maybe<Scalars["String"]>;
  descriptionTemplate: Scalars["String"];
  id: Scalars["ID"];
  identityTemplate: Scalars["String"];
  isActive: Scalars["Boolean"];
  monitoringdefinitionSet: Array<AdminObservationMonitoringDefinitionCreateSuccess>;
  name: Scalars["String"];
  registerFormDefinition: Scalars["JSONString"];
  subjectSet: Array<ObservationSubjectType>;
  titleTemplate: Scalars["String"];
  updatedAt: Scalars["DateTime"];
};

export type AdminObservationDefinitionDeleteMutation = {
  __typename?: "AdminObservationDefinitionDeleteMutation";
  success?: Maybe<Scalars["Boolean"]>;
};

export type AdminObservationDefinitionUpdateMutation = {
  __typename?: "AdminObservationDefinitionUpdateMutation";
  result?: Maybe<AdminObservationDefinitionUpdateResult>;
};

export type AdminObservationDefinitionUpdateProblem = {
  __typename?: "AdminObservationDefinitionUpdateProblem";
  fields?: Maybe<Array<AdminFieldValidationProblem>>;
  message?: Maybe<Scalars["String"]>;
};

export type AdminObservationDefinitionUpdateResult =
  | AdminObservationDefinitionUpdateProblem
  | AdminObservationDefinitionUpdateSuccess;

export type AdminObservationDefinitionUpdateSuccess = {
  __typename?: "AdminObservationDefinitionUpdateSuccess";
  definition?: Maybe<ObservationDefinitionType>;
};

export type AdminObservationMonitoringDefinitionCreateMutation = {
  __typename?: "AdminObservationMonitoringDefinitionCreateMutation";
  result?: Maybe<AdminObservationMonitoringDefinitionCreateResult>;
};

export type AdminObservationMonitoringDefinitionCreateProblem = {
  __typename?: "AdminObservationMonitoringDefinitionCreateProblem";
  fields?: Maybe<Array<AdminFieldValidationProblem>>;
  message?: Maybe<Scalars["String"]>;
};

export type AdminObservationMonitoringDefinitionCreateResult =
  | AdminObservationMonitoringDefinitionCreateProblem
  | AdminObservationMonitoringDefinitionCreateSuccess;

export type AdminObservationMonitoringDefinitionCreateSuccess = {
  __typename?: "AdminObservationMonitoringDefinitionCreateSuccess";
  createdAt: Scalars["DateTime"];
  definition: AdminObservationDefinitionCreateSuccess;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  description?: Maybe<Scalars["String"]>;
  descriptionTemplate: Scalars["String"];
  formDefinition: Scalars["JSONString"];
  id: Scalars["ID"];
  isActive: Scalars["Boolean"];
  name: Scalars["String"];
  subjectmonitoringrecordSet: Array<ObservationSubjectMonitoringRecordType>;
  titleTemplate: Scalars["String"];
  updatedAt: Scalars["DateTime"];
};

export type AdminObservationMonitoringDefinitionDeleteMutation = {
  __typename?: "AdminObservationMonitoringDefinitionDeleteMutation";
  success?: Maybe<Scalars["Boolean"]>;
};

export type AdminObservationMonitoringDefinitionUpdateMutation = {
  __typename?: "AdminObservationMonitoringDefinitionUpdateMutation";
  result?: Maybe<AdminObservationMonitoringDefinitionUpdateResult>;
};

export type AdminObservationMonitoringDefinitionUpdateProblem = {
  __typename?: "AdminObservationMonitoringDefinitionUpdateProblem";
  fields?: Maybe<Array<AdminFieldValidationProblem>>;
  message?: Maybe<Scalars["String"]>;
};

export type AdminObservationMonitoringDefinitionUpdateResult =
  | AdminObservationMonitoringDefinitionUpdateProblem
  | AdminObservationMonitoringDefinitionUpdateSuccess;

export type AdminObservationMonitoringDefinitionUpdateSuccess = {
  __typename?: "AdminObservationMonitoringDefinitionUpdateSuccess";
  monitoringDefinition?: Maybe<ObservationMonitoringDefinitionDefinitionType>;
};

export type AdminOutbreakPlanCreateMutation = {
  __typename?: "AdminOutbreakPlanCreateMutation";
  result?: Maybe<AdminOutbreakPlanCreateResult>;
};

export type AdminOutbreakPlanCreateProblem = {
  __typename?: "AdminOutbreakPlanCreateProblem";
  fields?: Maybe<Array<AdminFieldValidationProblem>>;
  message?: Maybe<Scalars["String"]>;
};

export type AdminOutbreakPlanCreateResult =
  | AdminOutbreakPlanCreateProblem
  | AdminOutbreakPlanCreateSuccess;

export type AdminOutbreakPlanCreateSuccess = {
  __typename?: "AdminOutbreakPlanCreateSuccess";
  createdAt: Scalars["DateTime"];
  deletedAt?: Maybe<Scalars["DateTime"]>;
  description: Scalars["String"];
  id: Scalars["ID"];
  name: Scalars["String"];
  places: Array<OutbreakPlaceType>;
  reportType: AdminReportTypeCreateSuccess;
  stateStep: DeepStateStepType;
  updatedAt: Scalars["DateTime"];
  zone1Color: Scalars["String"];
  zone1MessageBody: Scalars["String"];
  zone1MessageTitle: Scalars["String"];
  zone1Radius?: Maybe<Scalars["Float"]>;
  zone2Color: Scalars["String"];
  zone2MessageBody: Scalars["String"];
  zone2MessageTitle: Scalars["String"];
  zone2Radius?: Maybe<Scalars["Float"]>;
  zone3Color: Scalars["String"];
  zone3MessageBody: Scalars["String"];
  zone3MessageTitle: Scalars["String"];
  zone3Radius?: Maybe<Scalars["Float"]>;
};

export type AdminOutbreakPlanDeleteMutation = {
  __typename?: "AdminOutbreakPlanDeleteMutation";
  success?: Maybe<Scalars["Boolean"]>;
};

export type AdminOutbreakPlanQueryType = {
  __typename?: "AdminOutbreakPlanQueryType";
  description: Scalars["String"];
  id: Scalars["ID"];
  name: Scalars["String"];
  reportType: AdminReportTypeCreateSuccess;
};

export type AdminOutbreakPlanQueryTypeNodeConnection = {
  __typename?: "AdminOutbreakPlanQueryTypeNodeConnection";
  /** Pagination data for this connection. */
  pageInfo: PageInfoExtra;
  /** Contains the nodes in this connection. */
  results: Array<Maybe<AdminOutbreakPlanQueryType>>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type AdminOutbreakPlanUpdateMutation = {
  __typename?: "AdminOutbreakPlanUpdateMutation";
  result?: Maybe<AdminOutbreakPlanUpdateResult>;
};

export type AdminOutbreakPlanUpdateProblem = {
  __typename?: "AdminOutbreakPlanUpdateProblem";
  fields?: Maybe<Array<AdminFieldValidationProblem>>;
  message?: Maybe<Scalars["String"]>;
};

export type AdminOutbreakPlanUpdateResult =
  | AdminOutbreakPlanUpdateProblem
  | AdminOutbreakPlanUpdateSuccess;

export type AdminOutbreakPlanUpdateSuccess = {
  __typename?: "AdminOutbreakPlanUpdateSuccess";
  createdAt: Scalars["DateTime"];
  deletedAt?: Maybe<Scalars["DateTime"]>;
  description: Scalars["String"];
  id: Scalars["ID"];
  name: Scalars["String"];
  places: Array<OutbreakPlaceType>;
  reportType: AdminReportTypeCreateSuccess;
  stateStep: DeepStateStepType;
  updatedAt: Scalars["DateTime"];
  zone1Color: Scalars["String"];
  zone1MessageBody: Scalars["String"];
  zone1MessageTitle: Scalars["String"];
  zone1Radius?: Maybe<Scalars["Float"]>;
  zone2Color: Scalars["String"];
  zone2MessageBody: Scalars["String"];
  zone2MessageTitle: Scalars["String"];
  zone2Radius?: Maybe<Scalars["Float"]>;
  zone3Color: Scalars["String"];
  zone3MessageBody: Scalars["String"];
  zone3MessageTitle: Scalars["String"];
  zone3Radius?: Maybe<Scalars["Float"]>;
};

export type AdminPlaceCreateMutation = {
  __typename?: "AdminPlaceCreateMutation";
  result?: Maybe<AdminPlaceCreateResult>;
};

export type AdminPlaceCreateProblem = {
  __typename?: "AdminPlaceCreateProblem";
  fields?: Maybe<Array<AdminFieldValidationProblem>>;
  message?: Maybe<Scalars["String"]>;
};

export type AdminPlaceCreateResult =
  | AdminPlaceCreateProblem
  | AdminPlaceCreateSuccess;

export type AdminPlaceCreateSuccess = {
  __typename?: "AdminPlaceCreateSuccess";
  authority: AdminAuthorityCreateSuccess;
  createdAt: Scalars["DateTime"];
  deletedAt?: Maybe<Scalars["DateTime"]>;
  id: Scalars["ID"];
  location?: Maybe<Scalars["GeoJSON"]>;
  name: Scalars["String"];
  notificationTo: Scalars["String"];
  outbreakPlaces: Array<OutbreakPlaceType>;
  updatedAt: Scalars["DateTime"];
};

export type AdminPlaceDeleteMutation = {
  __typename?: "AdminPlaceDeleteMutation";
  success?: Maybe<Scalars["Boolean"]>;
};

export type AdminPlaceQueryType = {
  __typename?: "AdminPlaceQueryType";
  authority: AdminAuthorityCreateSuccess;
  id: Scalars["ID"];
  name: Scalars["String"];
  notificationTo: Scalars["String"];
};

export type AdminPlaceQueryTypeNodeConnection = {
  __typename?: "AdminPlaceQueryTypeNodeConnection";
  /** Pagination data for this connection. */
  pageInfo: PageInfoExtra;
  /** Contains the nodes in this connection. */
  results: Array<Maybe<AdminPlaceQueryType>>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type AdminPlaceUpdateMutation = {
  __typename?: "AdminPlaceUpdateMutation";
  result?: Maybe<AdminPlaceUpdateResult>;
};

export type AdminPlaceUpdateProblem = {
  __typename?: "AdminPlaceUpdateProblem";
  fields?: Maybe<Array<AdminFieldValidationProblem>>;
  message?: Maybe<Scalars["String"]>;
};

export type AdminPlaceUpdateResult =
  | AdminPlaceUpdateProblem
  | AdminPlaceUpdateSuccess;

export type AdminPlaceUpdateSuccess = {
  __typename?: "AdminPlaceUpdateSuccess";
  authority: AdminAuthorityCreateSuccess;
  createdAt: Scalars["DateTime"];
  deletedAt?: Maybe<Scalars["DateTime"]>;
  id: Scalars["ID"];
  latitude?: Maybe<Scalars["Float"]>;
  location?: Maybe<Scalars["GeoJSON"]>;
  longitude?: Maybe<Scalars["Float"]>;
  name: Scalars["String"];
  notificationTo: Scalars["String"];
  outbreakPlaces: Array<OutbreakPlaceType>;
  updatedAt: Scalars["DateTime"];
};

export type AdminReportTypeCreateMutation = {
  __typename?: "AdminReportTypeCreateMutation";
  result?: Maybe<AdminReportTypeCreateResult>;
};

export type AdminReportTypeCreateProblem = {
  __typename?: "AdminReportTypeCreateProblem";
  fields?: Maybe<Array<AdminFieldValidationProblem>>;
  message?: Maybe<Scalars["String"]>;
};

export type AdminReportTypeCreateResult =
  | AdminReportTypeCreateProblem
  | AdminReportTypeCreateSuccess;

export type AdminReportTypeCreateSuccess = {
  __typename?: "AdminReportTypeCreateSuccess";
  authorities: Array<AdminAuthorityCreateSuccess>;
  casedefinitionSet: Array<AdminCaseDefinitionCreateSuccess>;
  category: AdminCategoryCreateSuccess;
  createdAt: Scalars["DateTime"];
  definition: Scalars["JSONString"];
  deletedAt?: Maybe<Scalars["DateTime"]>;
  followupDefinition?: Maybe<Scalars["JSONString"]>;
  followupreports: Array<FollowupReportType>;
  id: Scalars["UUID"];
  incidentreports: Array<IncidentReportType>;
  name: Scalars["String"];
  notificationtemplateSet: Array<AdminNotificationTemplateCreateSuccess>;
  ordering: Scalars["Int"];
  planSet: Array<AdminOutbreakPlanUpdateSuccess>;
  rendererDataTemplate?: Maybe<Scalars["String"]>;
  rendererFollowupDataTemplate?: Maybe<Scalars["String"]>;
  reporternotificationSet: Array<AdminReporterNotificationCreateSuccess>;
  stateDefinition?: Maybe<DeepStateDefinitionType>;
  updatedAt: Scalars["DateTime"];
};

export type AdminReportTypeDeleteMutation = {
  __typename?: "AdminReportTypeDeleteMutation";
  success?: Maybe<Scalars["Boolean"]>;
};

export type AdminReportTypeQueryType = {
  __typename?: "AdminReportTypeQueryType";
  authorities: Array<AdminAuthorityCreateSuccess>;
  category: AdminCategoryCreateSuccess;
  definition: Scalars["JSONString"];
  id: Scalars["UUID"];
  name: Scalars["String"];
  ordering: Scalars["Int"];
  rendererDataTemplate?: Maybe<Scalars["String"]>;
};

export type AdminReportTypeQueryTypeNodeConnection = {
  __typename?: "AdminReportTypeQueryTypeNodeConnection";
  /** Pagination data for this connection. */
  pageInfo: PageInfoExtra;
  /** Contains the nodes in this connection. */
  results: Array<Maybe<AdminReportTypeQueryType>>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type AdminReportTypeUpdateMutation = {
  __typename?: "AdminReportTypeUpdateMutation";
  result?: Maybe<AdminReportTypeUpdateResult>;
};

export type AdminReportTypeUpdateProblem = {
  __typename?: "AdminReportTypeUpdateProblem";
  fields?: Maybe<Array<AdminFieldValidationProblem>>;
  message?: Maybe<Scalars["String"]>;
};

export type AdminReportTypeUpdateResult =
  | AdminReportTypeUpdateProblem
  | AdminReportTypeUpdateSuccess;

export type AdminReportTypeUpdateSuccess = {
  __typename?: "AdminReportTypeUpdateSuccess";
  reportType?: Maybe<ReportTypeType>;
};

export type AdminReporterNotificationCreateMutation = {
  __typename?: "AdminReporterNotificationCreateMutation";
  result?: Maybe<AdminReporterNotificationCreateResult>;
};

export type AdminReporterNotificationCreateProblem = {
  __typename?: "AdminReporterNotificationCreateProblem";
  fields?: Maybe<Array<AdminFieldValidationProblem>>;
  message?: Maybe<Scalars["String"]>;
};

export type AdminReporterNotificationCreateResult =
  | AdminReporterNotificationCreateProblem
  | AdminReporterNotificationCreateSuccess;

export type AdminReporterNotificationCreateSuccess = {
  __typename?: "AdminReporterNotificationCreateSuccess";
  condition: Scalars["String"];
  createdAt: Scalars["DateTime"];
  deletedAt?: Maybe<Scalars["DateTime"]>;
  description: Scalars["String"];
  id: Scalars["ID"];
  isActive: Scalars["Boolean"];
  reportType?: Maybe<AdminReportTypeCreateSuccess>;
  template: Scalars["String"];
  titleTemplate: Scalars["String"];
  updatedAt: Scalars["DateTime"];
};

export type AdminReporterNotificationDeleteMutation = {
  __typename?: "AdminReporterNotificationDeleteMutation";
  success?: Maybe<Scalars["Boolean"]>;
};

export type AdminReporterNotificationQueryType = {
  __typename?: "AdminReporterNotificationQueryType";
  condition: Scalars["String"];
  description: Scalars["String"];
  id: Scalars["ID"];
  reportType?: Maybe<ReportTypeType>;
  template: Scalars["String"];
  titleTemplate: Scalars["String"];
};

export type AdminReporterNotificationQueryTypeNodeConnection = {
  __typename?: "AdminReporterNotificationQueryTypeNodeConnection";
  /** Pagination data for this connection. */
  pageInfo: PageInfoExtra;
  /** Contains the nodes in this connection. */
  results: Array<Maybe<AdminReporterNotificationQueryType>>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type AdminReporterNotificationUpdateMutation = {
  __typename?: "AdminReporterNotificationUpdateMutation";
  result?: Maybe<AdminReporterNotificationUpdateResult>;
};

export type AdminReporterNotificationUpdateProblem = {
  __typename?: "AdminReporterNotificationUpdateProblem";
  fields?: Maybe<Array<AdminFieldValidationProblem>>;
  message?: Maybe<Scalars["String"]>;
};

export type AdminReporterNotificationUpdateResult =
  | AdminReporterNotificationUpdateProblem
  | AdminReporterNotificationUpdateSuccess;

export type AdminReporterNotificationUpdateSuccess = {
  __typename?: "AdminReporterNotificationUpdateSuccess";
  reporterNotification?: Maybe<ReporterNotificationType>;
};

export type AdminStateDefinitionCreateMutation = {
  __typename?: "AdminStateDefinitionCreateMutation";
  result?: Maybe<AdminStateDefinitionCreateResult>;
};

export type AdminStateDefinitionCreateProblem = {
  __typename?: "AdminStateDefinitionCreateProblem";
  fields?: Maybe<Array<AdminFieldValidationProblem>>;
  message?: Maybe<Scalars["String"]>;
};

export type AdminStateDefinitionCreateResult =
  | AdminStateDefinitionCreateProblem
  | AdminStateDefinitionCreateSuccess;

export type AdminStateDefinitionCreateSuccess = {
  __typename?: "AdminStateDefinitionCreateSuccess";
  caseSet: Array<CaseType>;
  createdAt: Scalars["DateTime"];
  deletedAt?: Maybe<Scalars["DateTime"]>;
  id: Scalars["ID"];
  isDefault: Scalars["Boolean"];
  name: Scalars["String"];
  reporttypeSet: Array<AdminReportTypeCreateSuccess>;
  statestepSet: Array<DeepStateStepType>;
  updatedAt: Scalars["DateTime"];
};

export type AdminStateDefinitionDeleteMutation = {
  __typename?: "AdminStateDefinitionDeleteMutation";
  success?: Maybe<Scalars["Boolean"]>;
};

export type AdminStateDefinitionQueryType = {
  __typename?: "AdminStateDefinitionQueryType";
  id: Scalars["ID"];
  isDefault: Scalars["Boolean"];
  name: Scalars["String"];
};

export type AdminStateDefinitionQueryTypeNodeConnection = {
  __typename?: "AdminStateDefinitionQueryTypeNodeConnection";
  /** Pagination data for this connection. */
  pageInfo: PageInfoExtra;
  /** Contains the nodes in this connection. */
  results: Array<Maybe<AdminStateDefinitionQueryType>>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type AdminStateDefinitionUpdateMutation = {
  __typename?: "AdminStateDefinitionUpdateMutation";
  result?: Maybe<AdminStateDefinitionUpdateResult>;
};

export type AdminStateDefinitionUpdateProblem = {
  __typename?: "AdminStateDefinitionUpdateProblem";
  fields?: Maybe<Array<AdminFieldValidationProblem>>;
  message?: Maybe<Scalars["String"]>;
};

export type AdminStateDefinitionUpdateResult =
  | AdminStateDefinitionUpdateProblem
  | AdminStateDefinitionUpdateSuccess;

export type AdminStateDefinitionUpdateSuccess = {
  __typename?: "AdminStateDefinitionUpdateSuccess";
  stateDefinition?: Maybe<StateDefinitionType>;
};

export type AdminStateStepCreateMutation = {
  __typename?: "AdminStateStepCreateMutation";
  result?: Maybe<AdminStateStepCreateResult>;
};

export type AdminStateStepCreateProblem = {
  __typename?: "AdminStateStepCreateProblem";
  fields?: Maybe<Array<AdminFieldValidationProblem>>;
  message?: Maybe<Scalars["String"]>;
};

export type AdminStateStepCreateResult =
  | AdminStateStepCreateProblem
  | AdminStateStepCreateSuccess;

export type AdminStateStepCreateSuccess = {
  __typename?: "AdminStateStepCreateSuccess";
  casestateSet: Array<CaseStateType>;
  createdAt: Scalars["DateTime"];
  deletedAt?: Maybe<Scalars["DateTime"]>;
  fromTransitions: Array<DeepStateTransitionType>;
  id: Scalars["ID"];
  isStartState: Scalars["Boolean"];
  isStopState: Scalars["Boolean"];
  name: Scalars["String"];
  planSet: Array<AdminOutbreakPlanUpdateSuccess>;
  stateDefinition: DeepStateDefinitionType;
  toTransitions: Array<DeepStateTransitionType>;
  updatedAt: Scalars["DateTime"];
};

export type AdminStateStepDeleteMutation = {
  __typename?: "AdminStateStepDeleteMutation";
  success?: Maybe<Scalars["Boolean"]>;
};

export type AdminStateStepUpdateMutation = {
  __typename?: "AdminStateStepUpdateMutation";
  result?: Maybe<AdminStateStepUpdateResult>;
};

export type AdminStateStepUpdateProblem = {
  __typename?: "AdminStateStepUpdateProblem";
  fields?: Maybe<Array<AdminFieldValidationProblem>>;
  message?: Maybe<Scalars["String"]>;
};

export type AdminStateStepUpdateResult =
  | AdminStateStepUpdateProblem
  | AdminStateStepUpdateSuccess;

export type AdminStateStepUpdateSuccess = {
  __typename?: "AdminStateStepUpdateSuccess";
  stateStep?: Maybe<StateStepType>;
};

export type AdminStateTransitionCreateMutation = {
  __typename?: "AdminStateTransitionCreateMutation";
  result?: Maybe<AdminStateTransitionCreateResult>;
};

export type AdminStateTransitionCreateProblem = {
  __typename?: "AdminStateTransitionCreateProblem";
  fields?: Maybe<Array<AdminFieldValidationProblem>>;
  message?: Maybe<Scalars["String"]>;
};

export type AdminStateTransitionCreateResult =
  | AdminStateTransitionCreateProblem
  | AdminStateTransitionCreateSuccess;

export type AdminStateTransitionCreateSuccess = {
  __typename?: "AdminStateTransitionCreateSuccess";
  casestatetransitionSet: Array<CaseStateTransitionType>;
  createdAt: Scalars["DateTime"];
  deletedAt?: Maybe<Scalars["DateTime"]>;
  formDefinition?: Maybe<Scalars["JSONString"]>;
  fromStep: DeepStateStepType;
  id: Scalars["ID"];
  notificationtemplateSet: Array<AdminNotificationTemplateCreateSuccess>;
  toStep: DeepStateStepType;
  updatedAt: Scalars["DateTime"];
};

export type AdminStateTransitionDeleteMutation = {
  __typename?: "AdminStateTransitionDeleteMutation";
  success?: Maybe<Scalars["Boolean"]>;
};

export type AdminStateTransitionUpdateMutation = {
  __typename?: "AdminStateTransitionUpdateMutation";
  result?: Maybe<AdminStateTransitionUpdateResult>;
};

export type AdminStateTransitionUpdateProblem = {
  __typename?: "AdminStateTransitionUpdateProblem";
  fields?: Maybe<Array<AdminFieldValidationProblem>>;
  message?: Maybe<Scalars["String"]>;
};

export type AdminStateTransitionUpdateResult =
  | AdminStateTransitionUpdateProblem
  | AdminStateTransitionUpdateSuccess;

export type AdminStateTransitionUpdateSuccess = {
  __typename?: "AdminStateTransitionUpdateSuccess";
  stateTransition?: Maybe<StateTransitionType>;
};

export type AdminUserChangePasswordMutation = {
  __typename?: "AdminUserChangePasswordMutation";
  success?: Maybe<Scalars["Boolean"]>;
};

export type AdminUserUpdateProfileMutation = {
  __typename?: "AdminUserUpdateProfileMutation";
  success?: Maybe<Scalars["Boolean"]>;
};

export type AdminUserUploadAvatarMutation = {
  __typename?: "AdminUserUploadAvatarMutation";
  avatarUrl?: Maybe<Scalars["String"]>;
  success?: Maybe<Scalars["Boolean"]>;
};

export type AuthorityInheritType = {
  __typename?: "AuthorityInheritType";
  code: Scalars["String"];
  id: Scalars["ID"];
  name: Scalars["String"];
};

export type AuthorityType = {
  __typename?: "AuthorityType";
  area?: Maybe<Scalars["GeoJSON"]>;
  code: Scalars["String"];
  id: Scalars["ID"];
  inherits: Array<Maybe<AuthorityInheritType>>;
  name: Scalars["String"];
};

export type AuthorityTypeNodeConnection = {
  __typename?: "AuthorityTypeNodeConnection";
  /** Pagination data for this connection. */
  pageInfo: PageInfoExtra;
  /** Contains the nodes in this connection. */
  results: Array<Maybe<AuthorityType>>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type AuthorityUserRegisterMutation = {
  __typename?: "AuthorityUserRegisterMutation";
  me?: Maybe<UserProfileType>;
  refreshToken?: Maybe<Scalars["String"]>;
  token?: Maybe<Scalars["String"]>;
};

export type AuthorityUserType = {
  __typename?: "AuthorityUserType";
  authority: AdminAuthorityCreateSuccess;
  email: Scalars["String"];
  firstName: Scalars["String"];
  id: Scalars["ID"];
  lastName: Scalars["String"];
  role?: Maybe<AccountsAuthorityUserRoleChoices>;
  telephone?: Maybe<Scalars["String"]>;
  /** Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. */
  username: Scalars["String"];
};

export type CaseDefinitionType = {
  __typename?: "CaseDefinitionType";
  condition: Scalars["String"];
  description: Scalars["String"];
  id: Scalars["ID"];
  isActive: Scalars["Boolean"];
  reportType: AdminReportTypeCreateSuccess;
};

export type CaseStateTransitionType = {
  __typename?: "CaseStateTransitionType";
  createdAt: Scalars["DateTime"];
  createdBy: UserType;
  formData?: Maybe<Scalars["JSONString"]>;
  id: Scalars["ID"];
  transition: StateTransitionType;
};

export type CaseStateType = {
  __typename?: "CaseStateType";
  id: Scalars["ID"];
  state: DeepStateStepType;
  transition?: Maybe<CaseStateTransitionType>;
};

export type CaseType = {
  __typename?: "CaseType";
  authorities?: Maybe<Array<Maybe<AuthorityType>>>;
  description: Scalars["String"];
  id: Scalars["UUID"];
  isFinished: Scalars["Boolean"];
  outbreakPlanInfo?: Maybe<Scalars["JSONString"]>;
  report?: Maybe<IncidentReportType>;
  stateDefinition?: Maybe<DeepStateDefinitionType>;
  states?: Maybe<Array<Maybe<CaseStateType>>>;
  threadId?: Maybe<Scalars["Int"]>;
};

export type CaseTypeNodeConnection = {
  __typename?: "CaseTypeNodeConnection";
  /** Pagination data for this connection. */
  pageInfo: PageInfoExtra;
  /** Contains the nodes in this connection. */
  results: Array<Maybe<CaseType>>;
  totalCount?: Maybe<Scalars["Int"]>;
};

/** An enumeration. */
export enum CasesNotificationTemplateTypeChoices {
  /** Case transition */
  Cas = "CAS",
  /** Promote to case */
  Ptc = "PTC",
  /** Report */
  Rep = "REP",
}

export type CategoryType = {
  __typename?: "CategoryType";
  icon?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  name: Scalars["String"];
  ordering: Scalars["Int"];
};

export type CheckInvitationCodeType = {
  __typename?: "CheckInvitationCodeType";
  authority: AdminAuthorityCreateSuccess;
  code: Scalars["String"];
};

export type ClientType = {
  __typename?: "ClientType";
  domains?: Maybe<Array<Maybe<DomainType>>>;
  id: Scalars["ID"];
  name: Scalars["String"];
  schemaName: Scalars["String"];
};

export type CommentAttachmentType = {
  __typename?: "CommentAttachmentType";
  comment: CommentUpdateSuccess;
  createdAt: Scalars["DateTime"];
  deletedAt?: Maybe<Scalars["DateTime"]>;
  file?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  thumbnail?: Maybe<Scalars["String"]>;
  updatedAt: Scalars["DateTime"];
};

export type CommentCreateMutation = {
  __typename?: "CommentCreateMutation";
  result?: Maybe<CommentCreateResult>;
};

export type CommentCreateProblem = {
  __typename?: "CommentCreateProblem";
  fields?: Maybe<Array<AdminFieldValidationProblem>>;
  message?: Maybe<Scalars["String"]>;
};

export type CommentCreateResult = CommentCreateProblem | CommentCreateSuccess;

export type CommentCreateSuccess = {
  __typename?: "CommentCreateSuccess";
  attachments?: Maybe<Array<Maybe<CommentAttachmentType>>>;
  body: Scalars["String"];
  createdAt: Scalars["DateTime"];
  createdBy: UserType;
  id: Scalars["ID"];
  threadId?: Maybe<Scalars["Int"]>;
};

export type CommentDeleteMutation = {
  __typename?: "CommentDeleteMutation";
  success?: Maybe<Scalars["Boolean"]>;
};

export type CommentType = {
  __typename?: "CommentType";
  attachments?: Maybe<Array<Maybe<CommentAttachmentType>>>;
  body: Scalars["String"];
  createdAt: Scalars["DateTime"];
  createdBy: UserType;
  id: Scalars["ID"];
  threadId?: Maybe<Scalars["Int"]>;
};

export type CommentUpdateMutation = {
  __typename?: "CommentUpdateMutation";
  result?: Maybe<CommentUpdateResult>;
};

export type CommentUpdateProblem = {
  __typename?: "CommentUpdateProblem";
  fields?: Maybe<Array<AdminFieldValidationProblem>>;
  message?: Maybe<Scalars["String"]>;
};

export type CommentUpdateResult = CommentUpdateProblem | CommentUpdateSuccess;

export type CommentUpdateSuccess = {
  __typename?: "CommentUpdateSuccess";
  attachments?: Maybe<Array<Maybe<CommentAttachmentType>>>;
  body: Scalars["String"];
  createdAt: Scalars["DateTime"];
  createdBy: UserType;
  id: Scalars["ID"];
  threadId?: Maybe<Scalars["Int"]>;
};

export type ConfigurationType = {
  __typename?: "ConfigurationType";
  createdAt: Scalars["DateTime"];
  deletedAt?: Maybe<Scalars["DateTime"]>;
  key: Scalars["String"];
  updatedAt: Scalars["DateTime"];
  value: Scalars["String"];
};

export type ConfirmConsentMutation = {
  __typename?: "ConfirmConsentMutation";
  ok?: Maybe<Scalars["Boolean"]>;
};

export type DeepStateDefinitionType = {
  __typename?: "DeepStateDefinitionType";
  id: Scalars["ID"];
  isDefault: Scalars["Boolean"];
  name: Scalars["String"];
  statestepSet?: Maybe<Array<Maybe<DeepStateStepType>>>;
};

export type DeepStateStepType = {
  __typename?: "DeepStateStepType";
  id: Scalars["ID"];
  isStartState: Scalars["Boolean"];
  isStopState: Scalars["Boolean"];
  name: Scalars["String"];
  toTransitions?: Maybe<Array<Maybe<DeepStateTransitionType>>>;
};

export type DeepStateTransitionType = {
  __typename?: "DeepStateTransitionType";
  formDefinition?: Maybe<Scalars["JSONString"]>;
  fromStep?: Maybe<StateStepType>;
  id: Scalars["ID"];
  toStep?: Maybe<StateStepType>;
};

export type DeleteJsonWebTokenCookie = {
  __typename?: "DeleteJSONWebTokenCookie";
  deleted: Scalars["Boolean"];
};

export type DeleteRefreshTokenCookie = {
  __typename?: "DeleteRefreshTokenCookie";
  deleted: Scalars["Boolean"];
};

export type DomainType = {
  __typename?: "DomainType";
  domain: Scalars["String"];
  id: Scalars["ID"];
  isPrimary: Scalars["Boolean"];
};

export type EventType = {
  __typename?: "EventType";
  cases?: Maybe<Array<Maybe<CaseType>>>;
  reports?: Maybe<Array<Maybe<IncidentReportType>>>;
};

export type FeatureType = {
  __typename?: "FeatureType";
  createdAt: Scalars["DateTime"];
  deletedAt?: Maybe<Scalars["DateTime"]>;
  key: Scalars["String"];
  updatedAt: Scalars["DateTime"];
  value: Scalars["String"];
};

export type FollowupReportType = {
  __typename?: "FollowupReportType";
  createdAt: Scalars["DateTime"];
  data?: Maybe<Scalars["GenericScalar"]>;
  gpsLocation?: Maybe<Scalars["String"]>;
  id: Scalars["UUID"];
  images?: Maybe<Array<Maybe<ImageType>>>;
  incident?: Maybe<IncidentReportType>;
  rendererData: Scalars["String"];
  reportType?: Maybe<ReportTypeType>;
  reportedBy?: Maybe<UserType>;
  testFlag: Scalars["Boolean"];
};

export type FollowupType = {
  __typename?: "FollowupType";
  createdAt: Scalars["DateTime"];
  data?: Maybe<Scalars["GenericScalar"]>;
  id: Scalars["UUID"];
  rendererData: Scalars["String"];
  reportType?: Maybe<ReportTypeType>;
  reportedBy?: Maybe<UserType>;
  testFlag: Scalars["Boolean"];
};

export type ForwardStateMutation = {
  __typename?: "ForwardStateMutation";
  result?: Maybe<CaseStateType>;
};

export type ImageType = {
  __typename?: "ImageType";
  createdAt: Scalars["DateTime"];
  deletedAt?: Maybe<Scalars["DateTime"]>;
  file: Scalars["String"];
  followupreportSet: Array<FollowupReportType>;
  id: Scalars["UUID"];
  imageUrl?: Maybe<Scalars["String"]>;
  incidentreportSet: Array<IncidentReportType>;
  reportId: Scalars["UUID"];
  thumbnail?: Maybe<Scalars["String"]>;
  updatedAt: Scalars["DateTime"];
};

export type IncidentReportType = {
  __typename?: "IncidentReportType";
  authorities?: Maybe<Array<Maybe<AuthorityType>>>;
  caseId?: Maybe<Scalars["UUID"]>;
  coverImage?: Maybe<ImageType>;
  createdAt: Scalars["DateTime"];
  data?: Maybe<Scalars["GenericScalar"]>;
  followups?: Maybe<Array<Maybe<FollowupType>>>;
  gpsLocation?: Maybe<Scalars["String"]>;
  id: Scalars["UUID"];
  images?: Maybe<Array<Maybe<ImageType>>>;
  incidentDate: Scalars["Date"];
  originalData?: Maybe<Scalars["GenericScalar"]>;
  platform?: Maybe<Scalars["String"]>;
  relevantAuthorities: Array<AdminAuthorityCreateSuccess>;
  relevantAuthorityResolved: Scalars["Boolean"];
  rendererData: Scalars["String"];
  reportType?: Maybe<ReportTypeType>;
  reportedBy?: Maybe<UserType>;
  testFlag: Scalars["Boolean"];
  threadId?: Maybe<Scalars["Int"]>;
  updatedAt: Scalars["DateTime"];
};

export type IncidentReportTypeNodeConnection = {
  __typename?: "IncidentReportTypeNodeConnection";
  /** Pagination data for this connection. */
  pageInfo: PageInfoExtra;
  /** Contains the nodes in this connection. */
  results: Array<Maybe<IncidentReportType>>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type InvitationCodeType = {
  __typename?: "InvitationCodeType";
  authority: AdminAuthorityCreateSuccess;
  code: Scalars["String"];
  fromDate: Scalars["DateTime"];
  id: Scalars["ID"];
  role: Scalars["String"];
  throughDate: Scalars["DateTime"];
};

export type LoginQrTokenType = {
  __typename?: "LoginQrTokenType";
  token: Scalars["String"];
};

export type MessageType = {
  __typename?: "MessageType";
  body: Scalars["String"];
  id: Scalars["ID"];
  image: Scalars["String"];
  title: Scalars["String"];
};

export type Mutation = {
  __typename?: "Mutation";
  adminAuthorityCreate?: Maybe<AdminAuthorityCreateMutation>;
  adminAuthorityDelete?: Maybe<AdminAuthorityDeleteMutation>;
  adminAuthorityNotificationDelete?: Maybe<AdminAuthorityNotificationDeleteMutation>;
  adminAuthorityNotificationUpsert?: Maybe<AdminAuthorityNotificationUpsertMutation>;
  adminAuthorityUpdate?: Maybe<AdminAuthorityUpdateMutation>;
  adminAuthorityUserCreate?: Maybe<AdminAuthorityUserCreateMutation>;
  adminAuthorityUserDelete?: Maybe<AdminAuthorityUserDeleteMutation>;
  adminAuthorityUserUpdate?: Maybe<AdminAuthorityUserUpdateMutation>;
  adminAuthorityUserUpdatePassword?: Maybe<AdminAuthorityUserUpdatePasswordMutation>;
  adminCaseDefinitionCreate?: Maybe<AdminCaseDefinitionCreateMutation>;
  adminCaseDefinitionDelete?: Maybe<AdminCaseDefinitionDeleteMutation>;
  adminCaseDefinitionUpdate?: Maybe<AdminCaseDefinitionUpdateMutation>;
  adminCategoryCreate?: Maybe<AdminCategoryCreateMutation>;
  adminCategoryDelete?: Maybe<AdminCategoryDeleteMutation>;
  adminCategoryUpdate?: Maybe<AdminCategoryUpdateMutation>;
  adminClientCreate?: Maybe<AdminClientCreateMutation>;
  adminClientUpdate?: Maybe<AdminClientUpdateMutation>;
  adminConfigurationCreate?: Maybe<AdminConfigurationCreateMutation>;
  adminConfigurationDelete?: Maybe<AdminConfigurationDeleteMutation>;
  adminConfigurationUpdate?: Maybe<AdminConfigurationUpdateMutation>;
  adminDomainCreate?: Maybe<AdminDomainCreateMutation>;
  adminDomainDelete?: Maybe<AdminDomainDeleteMutation>;
  adminDomainUpdate?: Maybe<AdminDomainUpdateMutation>;
  adminInvitationCodeCreate?: Maybe<AdminInvitationCodeCreateMutation>;
  adminInvitationCodeDelete?: Maybe<AdminInvitationCodeDeleteMutation>;
  adminInvitationCodeUpdate?: Maybe<AdminInvitationCodeUpdateMutation>;
  adminNotificationTemplateCreate?: Maybe<AdminNotificationTemplateCreateMutation>;
  adminNotificationTemplateDelete?: Maybe<AdminNotificationTemplateDeleteMutation>;
  adminNotificationTemplateUpdate?: Maybe<AdminNotificationTemplateUpdateMutation>;
  /** use to create a new observation definition */
  adminObservationDefinitionCreate?: Maybe<AdminObservationDefinitionCreateMutation>;
  adminObservationDefinitionDelete?: Maybe<AdminObservationDefinitionDeleteMutation>;
  adminObservationDefinitionUpdate?: Maybe<AdminObservationDefinitionUpdateMutation>;
  adminObservationMonitoringDefinitionCreate?: Maybe<AdminObservationMonitoringDefinitionCreateMutation>;
  adminObservationMonitoringDefinitionDelete?: Maybe<AdminObservationMonitoringDefinitionDeleteMutation>;
  adminObservationMonitoringDefinitionUpdate?: Maybe<AdminObservationMonitoringDefinitionUpdateMutation>;
  adminOutbreakPlanCreate?: Maybe<AdminOutbreakPlanCreateMutation>;
  adminOutbreakPlanDelete?: Maybe<AdminOutbreakPlanDeleteMutation>;
  adminOutbreakPlanUpdate?: Maybe<AdminOutbreakPlanUpdateMutation>;
  adminPlaceCreate?: Maybe<AdminPlaceCreateMutation>;
  adminPlaceDelete?: Maybe<AdminPlaceDeleteMutation>;
  adminPlaceUpdate?: Maybe<AdminPlaceUpdateMutation>;
  adminReportTypeCreate?: Maybe<AdminReportTypeCreateMutation>;
  adminReportTypeDelete?: Maybe<AdminReportTypeDeleteMutation>;
  adminReportTypeUpdate?: Maybe<AdminReportTypeUpdateMutation>;
  adminReporterNotificationCreate?: Maybe<AdminReporterNotificationCreateMutation>;
  adminReporterNotificationDelete?: Maybe<AdminReporterNotificationDeleteMutation>;
  adminReporterNotificationUpdate?: Maybe<AdminReporterNotificationUpdateMutation>;
  adminStateDefinitionCreate?: Maybe<AdminStateDefinitionCreateMutation>;
  adminStateDefinitionDelete?: Maybe<AdminStateDefinitionDeleteMutation>;
  adminStateDefinitionUpdate?: Maybe<AdminStateDefinitionUpdateMutation>;
  adminStateStepCreate?: Maybe<AdminStateStepCreateMutation>;
  adminStateStepDelete?: Maybe<AdminStateStepDeleteMutation>;
  adminStateStepUpdate?: Maybe<AdminStateStepUpdateMutation>;
  adminStateTransitionCreate?: Maybe<AdminStateTransitionCreateMutation>;
  adminStateTransitionDelete?: Maybe<AdminStateTransitionDeleteMutation>;
  adminStateTransitionUpdate?: Maybe<AdminStateTransitionUpdateMutation>;
  adminUserChangePassword?: Maybe<AdminUserChangePasswordMutation>;
  adminUserUpdateProfile?: Maybe<AdminUserUpdateProfileMutation>;
  adminUserUploadAvatar?: Maybe<AdminUserUploadAvatarMutation>;
  authorityUserRegister?: Maybe<AuthorityUserRegisterMutation>;
  commentCreate?: Maybe<CommentCreateMutation>;
  commentDelete?: Maybe<CommentDeleteMutation>;
  commentUpdate?: Maybe<CommentUpdateMutation>;
  confirmConsent?: Maybe<ConfirmConsentMutation>;
  deleteRefreshTokenCookie?: Maybe<DeleteRefreshTokenCookie>;
  deleteTokenCookie?: Maybe<DeleteJsonWebTokenCookie>;
  forwardState?: Maybe<ForwardStateMutation>;
  promoteToCase?: Maybe<PromoteToCaseMutation>;
  refreshToken?: Maybe<Refresh>;
  registerFcmToken?: Maybe<RegisterFcmTokenMutation>;
  resetPassword?: Maybe<ResetPasswordMutation>;
  resetPasswordRequest?: Maybe<ResetPasswordRequestMutation>;
  revokeToken?: Maybe<Revoke>;
  submitFollowupReport?: Maybe<SubmitFollowupReport>;
  submitImage?: Maybe<SubmitImage>;
  submitIncidentReport?: Maybe<SubmitIncidentReport>;
  submitObservationSubject?: Maybe<SubmitObservationSubject>;
  submitZeroReport?: Maybe<SubmitZeroReportMutation>;
  /** Obtain JSON Web Token mutation */
  tokenAuth?: Maybe<ObtainJsonWebToken>;
  verifyLoginQrToken?: Maybe<VerifyLoginQrTokenMutation>;
  verifyToken?: Maybe<Verify>;
};

export type MutationAdminAuthorityCreateArgs = {
  area?: InputMaybe<Scalars["String"]>;
  code: Scalars["String"];
  inherits?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  name: Scalars["String"];
};

export type MutationAdminAuthorityDeleteArgs = {
  id: Scalars["ID"];
};

export type MutationAdminAuthorityNotificationDeleteArgs = {
  id: Scalars["ID"];
};

export type MutationAdminAuthorityNotificationUpsertArgs = {
  notificationTemplateId: Scalars["Int"];
  to: Scalars["String"];
};

export type MutationAdminAuthorityUpdateArgs = {
  area?: InputMaybe<Scalars["String"]>;
  code: Scalars["String"];
  id: Scalars["ID"];
  inherits?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  name: Scalars["String"];
};

export type MutationAdminAuthorityUserCreateArgs = {
  authorityId?: InputMaybe<Scalars["Int"]>;
  email: Scalars["String"];
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  password: Scalars["String"];
  role?: InputMaybe<Scalars["String"]>;
  telephone?: InputMaybe<Scalars["String"]>;
  username: Scalars["String"];
};

export type MutationAdminAuthorityUserDeleteArgs = {
  id: Scalars["ID"];
};

export type MutationAdminAuthorityUserUpdateArgs = {
  authorityId?: InputMaybe<Scalars["Int"]>;
  email: Scalars["String"];
  firstName: Scalars["String"];
  id: Scalars["ID"];
  lastName: Scalars["String"];
  role?: InputMaybe<Scalars["String"]>;
  telephone?: InputMaybe<Scalars["String"]>;
  username: Scalars["String"];
};

export type MutationAdminAuthorityUserUpdatePasswordArgs = {
  id: Scalars["ID"];
  password: Scalars["String"];
};

export type MutationAdminCaseDefinitionCreateArgs = {
  condition: Scalars["String"];
  description: Scalars["String"];
  isActive?: InputMaybe<Scalars["Boolean"]>;
  reportTypeId: Scalars["UUID"];
};

export type MutationAdminCaseDefinitionDeleteArgs = {
  id: Scalars["ID"];
};

export type MutationAdminCaseDefinitionUpdateArgs = {
  condition: Scalars["String"];
  description: Scalars["String"];
  id: Scalars["ID"];
  isActive?: InputMaybe<Scalars["Boolean"]>;
  reportTypeId: Scalars["UUID"];
};

export type MutationAdminCategoryCreateArgs = {
  icon?: InputMaybe<Scalars["Upload"]>;
  name: Scalars["String"];
  ordering: Scalars["Int"];
};

export type MutationAdminCategoryDeleteArgs = {
  id: Scalars["ID"];
};

export type MutationAdminCategoryUpdateArgs = {
  clearIcon?: InputMaybe<Scalars["Boolean"]>;
  icon?: InputMaybe<Scalars["Upload"]>;
  id: Scalars["ID"];
  name: Scalars["String"];
  ordering: Scalars["Int"];
};

export type MutationAdminClientCreateArgs = {
  name: Scalars["String"];
  schemaName: Scalars["String"];
};

export type MutationAdminClientUpdateArgs = {
  id: Scalars["ID"];
  name: Scalars["String"];
};

export type MutationAdminConfigurationCreateArgs = {
  key: Scalars["String"];
  value: Scalars["String"];
};

export type MutationAdminConfigurationDeleteArgs = {
  id: Scalars["String"];
};

export type MutationAdminConfigurationUpdateArgs = {
  id: Scalars["String"];
  key: Scalars["String"];
  value: Scalars["String"];
};

export type MutationAdminDomainCreateArgs = {
  clientId: Scalars["ID"];
  domain: Scalars["String"];
  isPrimary: Scalars["Boolean"];
};

export type MutationAdminDomainDeleteArgs = {
  id: Scalars["ID"];
};

export type MutationAdminDomainUpdateArgs = {
  domain: Scalars["String"];
  id: Scalars["ID"];
  isPrimary: Scalars["Boolean"];
};

export type MutationAdminInvitationCodeCreateArgs = {
  authorityId: Scalars["Int"];
  code: Scalars["String"];
  fromDate: Scalars["DateTime"];
  inherits?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  role?: InputMaybe<Scalars["String"]>;
  throughDate: Scalars["DateTime"];
};

export type MutationAdminInvitationCodeDeleteArgs = {
  id: Scalars["ID"];
};

export type MutationAdminInvitationCodeUpdateArgs = {
  authorityId?: InputMaybe<Scalars["Int"]>;
  code: Scalars["String"];
  fromDate?: InputMaybe<Scalars["DateTime"]>;
  id: Scalars["ID"];
  role?: InputMaybe<Scalars["String"]>;
  throughDate?: InputMaybe<Scalars["DateTime"]>;
};

export type MutationAdminNotificationTemplateCreateArgs = {
  bodyTemplate: Scalars["String"];
  condition?: InputMaybe<Scalars["String"]>;
  name: Scalars["String"];
  reportTypeId: Scalars["UUID"];
  stateTransitionId?: InputMaybe<Scalars["Int"]>;
  titleTemplate: Scalars["String"];
  type: Scalars["String"];
};

export type MutationAdminNotificationTemplateDeleteArgs = {
  id: Scalars["ID"];
};

export type MutationAdminNotificationTemplateUpdateArgs = {
  bodyTemplate: Scalars["String"];
  condition?: InputMaybe<Scalars["String"]>;
  id: Scalars["ID"];
  name: Scalars["String"];
  reportTypeId: Scalars["UUID"];
  stateTransitionId?: InputMaybe<Scalars["Int"]>;
  titleTemplate: Scalars["String"];
  type: Scalars["String"];
};

export type MutationAdminObservationDefinitionCreateArgs = {
  description?: InputMaybe<Scalars["String"]>;
  descriptionTemplate: Scalars["String"];
  identityTemplate: Scalars["String"];
  name: Scalars["String"];
  registerFormDefinition: Scalars["JSONString"];
  titleTemplate: Scalars["String"];
};

export type MutationAdminObservationDefinitionDeleteArgs = {
  id: Scalars["ID"];
};

export type MutationAdminObservationDefinitionUpdateArgs = {
  description?: InputMaybe<Scalars["String"]>;
  descriptionTemplate: Scalars["String"];
  id: Scalars["ID"];
  identityTemplate: Scalars["String"];
  name: Scalars["String"];
  registerFormDefinition: Scalars["JSONString"];
  titleTemplate: Scalars["String"];
};

export type MutationAdminObservationMonitoringDefinitionCreateArgs = {
  definitionId: Scalars["ID"];
  description: Scalars["String"];
  descriptionTemplate: Scalars["String"];
  formDefinition: Scalars["JSONString"];
  name: Scalars["String"];
  titleTemplate: Scalars["String"];
};

export type MutationAdminObservationMonitoringDefinitionDeleteArgs = {
  id: Scalars["ID"];
};

export type MutationAdminObservationMonitoringDefinitionUpdateArgs = {
  definitionId: Scalars["ID"];
  description: Scalars["String"];
  descriptionTemplate: Scalars["String"];
  formDefinition: Scalars["JSONString"];
  id: Scalars["ID"];
  name: Scalars["String"];
  titleTemplate: Scalars["String"];
};

export type MutationAdminOutbreakPlanCreateArgs = {
  description: Scalars["String"];
  name: Scalars["String"];
  reportTypeId: Scalars["UUID"];
  stateStepId: Scalars["Int"];
  zone1Color?: InputMaybe<Scalars["String"]>;
  zone1MessageBody?: InputMaybe<Scalars["String"]>;
  zone1MessageTitle?: InputMaybe<Scalars["String"]>;
  zone1Radius?: InputMaybe<Scalars["Float"]>;
  zone2Color?: InputMaybe<Scalars["String"]>;
  zone2MessageBody?: InputMaybe<Scalars["String"]>;
  zone2MessageTitle?: InputMaybe<Scalars["String"]>;
  zone2Radius?: InputMaybe<Scalars["Float"]>;
  zone3Color?: InputMaybe<Scalars["String"]>;
  zone3MessageBody?: InputMaybe<Scalars["String"]>;
  zone3MessageTitle?: InputMaybe<Scalars["String"]>;
  zone3Radius?: InputMaybe<Scalars["Float"]>;
};

export type MutationAdminOutbreakPlanDeleteArgs = {
  id: Scalars["Int"];
};

export type MutationAdminOutbreakPlanUpdateArgs = {
  description: Scalars["String"];
  id: Scalars["Int"];
  name: Scalars["String"];
  reportTypeId: Scalars["UUID"];
  stateStepId: Scalars["Int"];
  zone1Color?: InputMaybe<Scalars["String"]>;
  zone1MessageBody?: InputMaybe<Scalars["String"]>;
  zone1MessageTitle?: InputMaybe<Scalars["String"]>;
  zone1Radius?: InputMaybe<Scalars["Float"]>;
  zone2Color?: InputMaybe<Scalars["String"]>;
  zone2MessageBody?: InputMaybe<Scalars["String"]>;
  zone2MessageTitle?: InputMaybe<Scalars["String"]>;
  zone2Radius?: InputMaybe<Scalars["Float"]>;
  zone3Color?: InputMaybe<Scalars["String"]>;
  zone3MessageBody?: InputMaybe<Scalars["String"]>;
  zone3MessageTitle?: InputMaybe<Scalars["String"]>;
  zone3Radius?: InputMaybe<Scalars["Float"]>;
};

export type MutationAdminPlaceCreateArgs = {
  authorityId: Scalars["Int"];
  latitude: Scalars["Float"];
  longitude: Scalars["Float"];
  name: Scalars["String"];
  notificationTo?: InputMaybe<Scalars["String"]>;
};

export type MutationAdminPlaceDeleteArgs = {
  id: Scalars["Int"];
};

export type MutationAdminPlaceUpdateArgs = {
  authorityId: Scalars["Int"];
  id: Scalars["Int"];
  latitude: Scalars["Float"];
  longitude: Scalars["Float"];
  name: Scalars["String"];
  notificationTo?: InputMaybe<Scalars["String"]>;
};

export type MutationAdminReportTypeCreateArgs = {
  categoryId: Scalars["Int"];
  definition: Scalars["String"];
  followupDefinition?: InputMaybe<Scalars["String"]>;
  name: Scalars["String"];
  ordering: Scalars["Int"];
  rendererDataTemplate?: InputMaybe<Scalars["String"]>;
  rendererFollowupDataTemplate?: InputMaybe<Scalars["String"]>;
  stateDefinitionId?: InputMaybe<Scalars["Int"]>;
};

export type MutationAdminReportTypeDeleteArgs = {
  id: Scalars["ID"];
};

export type MutationAdminReportTypeUpdateArgs = {
  categoryId: Scalars["Int"];
  definition: Scalars["String"];
  followupDefinition?: InputMaybe<Scalars["String"]>;
  id: Scalars["ID"];
  name: Scalars["String"];
  ordering: Scalars["Int"];
  rendererDataTemplate?: InputMaybe<Scalars["String"]>;
  rendererFollowupDataTemplate?: InputMaybe<Scalars["String"]>;
  stateDefinitionId?: InputMaybe<Scalars["Int"]>;
};

export type MutationAdminReporterNotificationCreateArgs = {
  condition: Scalars["String"];
  description: Scalars["String"];
  isActive?: InputMaybe<Scalars["Boolean"]>;
  reportTypeId: Scalars["UUID"];
  template: Scalars["String"];
  titleTemplate: Scalars["String"];
};

export type MutationAdminReporterNotificationDeleteArgs = {
  id: Scalars["ID"];
};

export type MutationAdminReporterNotificationUpdateArgs = {
  condition: Scalars["String"];
  description: Scalars["String"];
  id: Scalars["ID"];
  isActive?: InputMaybe<Scalars["Boolean"]>;
  reportTypeId: Scalars["UUID"];
  template: Scalars["String"];
  titleTemplate: Scalars["String"];
};

export type MutationAdminStateDefinitionCreateArgs = {
  isDefault?: InputMaybe<Scalars["Boolean"]>;
  name: Scalars["String"];
};

export type MutationAdminStateDefinitionDeleteArgs = {
  id: Scalars["ID"];
};

export type MutationAdminStateDefinitionUpdateArgs = {
  id: Scalars["ID"];
  isDefault?: InputMaybe<Scalars["Boolean"]>;
  name: Scalars["String"];
};

export type MutationAdminStateStepCreateArgs = {
  isStartState?: InputMaybe<Scalars["Boolean"]>;
  isStopState?: InputMaybe<Scalars["Boolean"]>;
  name: Scalars["String"];
  stateDefinitionId: Scalars["ID"];
};

export type MutationAdminStateStepDeleteArgs = {
  id: Scalars["ID"];
};

export type MutationAdminStateStepUpdateArgs = {
  id: Scalars["ID"];
  isStartState?: InputMaybe<Scalars["Boolean"]>;
  isStopState?: InputMaybe<Scalars["Boolean"]>;
  name: Scalars["String"];
  stateDefinitionId: Scalars["ID"];
};

export type MutationAdminStateTransitionCreateArgs = {
  formDefinition: Scalars["String"];
  fromStepId: Scalars["ID"];
  toStepId: Scalars["ID"];
};

export type MutationAdminStateTransitionDeleteArgs = {
  id: Scalars["ID"];
};

export type MutationAdminStateTransitionUpdateArgs = {
  formDefinition: Scalars["String"];
  fromStepId: Scalars["ID"];
  id: Scalars["ID"];
  toStepId: Scalars["ID"];
};

export type MutationAdminUserChangePasswordArgs = {
  newPassword: Scalars["String"];
};

export type MutationAdminUserUpdateProfileArgs = {
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  telephone?: InputMaybe<Scalars["String"]>;
};

export type MutationAdminUserUploadAvatarArgs = {
  image?: InputMaybe<Scalars["Upload"]>;
};

export type MutationAuthorityUserRegisterArgs = {
  email: Scalars["String"];
  firstName: Scalars["String"];
  invitationCode: Scalars["String"];
  lastName: Scalars["String"];
  telephone?: InputMaybe<Scalars["String"]>;
  username: Scalars["String"];
};

export type MutationCommentCreateArgs = {
  body: Scalars["String"];
  files?: InputMaybe<Array<InputMaybe<Scalars["Upload"]>>>;
  threadId: Scalars["Int"];
};

export type MutationCommentDeleteArgs = {
  id: Scalars["ID"];
};

export type MutationCommentUpdateArgs = {
  body: Scalars["String"];
  commentId: Scalars["Int"];
};

export type MutationForwardStateArgs = {
  caseId: Scalars["ID"];
  formData?: InputMaybe<Scalars["GenericScalar"]>;
  transitionId: Scalars["ID"];
};

export type MutationPromoteToCaseArgs = {
  reportId: Scalars["UUID"];
};

export type MutationRefreshTokenArgs = {
  refreshToken?: InputMaybe<Scalars["String"]>;
};

export type MutationRegisterFcmTokenArgs = {
  token: Scalars["String"];
  userId: Scalars["String"];
};

export type MutationResetPasswordArgs = {
  password: Scalars["String"];
  token: Scalars["String"];
};

export type MutationResetPasswordRequestArgs = {
  email: Scalars["String"];
};

export type MutationRevokeTokenArgs = {
  refreshToken?: InputMaybe<Scalars["String"]>;
};

export type MutationSubmitFollowupReportArgs = {
  data: Scalars["GenericScalar"];
  followupId?: InputMaybe<Scalars["UUID"]>;
  incidentId: Scalars["UUID"];
};

export type MutationSubmitImageArgs = {
  image: Scalars["Upload"];
  imageId?: InputMaybe<Scalars["UUID"]>;
  isCover?: InputMaybe<Scalars["Boolean"]>;
  reportId: Scalars["UUID"];
};

export type MutationSubmitIncidentReportArgs = {
  data: Scalars["GenericScalar"];
  gpsLocation?: InputMaybe<Scalars["String"]>;
  incidentDate: Scalars["Date"];
  incidentInAuthority?: InputMaybe<Scalars["Boolean"]>;
  reportId?: InputMaybe<Scalars["UUID"]>;
  reportTypeId: Scalars["UUID"];
};

export type MutationSubmitObservationSubjectArgs = {
  data: Scalars["GenericScalar"];
  definitionId: Scalars["Int"];
  gpsLocation?: InputMaybe<Scalars["String"]>;
};

export type MutationTokenAuthArgs = {
  password: Scalars["String"];
  username: Scalars["String"];
};

export type MutationVerifyLoginQrTokenArgs = {
  token: Scalars["String"];
};

export type MutationVerifyTokenArgs = {
  token?: InputMaybe<Scalars["String"]>;
};

export type NotificationTemplateType = {
  __typename?: "NotificationTemplateType";
  authoritynotificationSet: Array<AdminAuthorityNotificationUpsertSuccess>;
  bodyTemplate: Scalars["String"];
  condition?: Maybe<Scalars["String"]>;
  createdAt: Scalars["DateTime"];
  deletedAt?: Maybe<Scalars["DateTime"]>;
  id: Scalars["ID"];
  name: Scalars["String"];
  reportType: AdminReportTypeCreateSuccess;
  stateDefinition?: Maybe<StateDefinitionType>;
  stateTransition?: Maybe<DeepStateTransitionType>;
  titleTemplate: Scalars["String"];
  type: CasesNotificationTemplateTypeChoices;
  updatedAt: Scalars["DateTime"];
};

export type ObservationDefinitionType = {
  __typename?: "ObservationDefinitionType";
  createdAt: Scalars["DateTime"];
  deletedAt?: Maybe<Scalars["DateTime"]>;
  description?: Maybe<Scalars["String"]>;
  descriptionTemplate: Scalars["String"];
  id: Scalars["ID"];
  identityTemplate: Scalars["String"];
  isActive: Scalars["Boolean"];
  monitoringdefinitionSet: Array<AdminObservationMonitoringDefinitionCreateSuccess>;
  name: Scalars["String"];
  registerFormDefinition: Scalars["JSONString"];
  subjectSet: Array<ObservationSubjectType>;
  titleTemplate: Scalars["String"];
  updatedAt: Scalars["DateTime"];
};

export type ObservationMonitoringDefinitionDefinitionType = {
  __typename?: "ObservationMonitoringDefinitionDefinitionType";
  createdAt: Scalars["DateTime"];
  definition: AdminObservationDefinitionCreateSuccess;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  description?: Maybe<Scalars["String"]>;
  descriptionTemplate: Scalars["String"];
  formDefinition: Scalars["JSONString"];
  id: Scalars["ID"];
  isActive: Scalars["Boolean"];
  name: Scalars["String"];
  subjectmonitoringrecordSet: Array<ObservationSubjectMonitoringRecordType>;
  titleTemplate: Scalars["String"];
  updatedAt: Scalars["DateTime"];
};

export type ObservationSubjectMonitoringRecordType = {
  __typename?: "ObservationSubjectMonitoringRecordType";
  createdAt: Scalars["DateTime"];
  deletedAt?: Maybe<Scalars["DateTime"]>;
  description: Scalars["String"];
  formData: Scalars["JSONString"];
  id: Scalars["ID"];
  isActive: Scalars["Boolean"];
  monitoringDefinition: AdminObservationMonitoringDefinitionCreateSuccess;
  subject: ObservationSubjectType;
  title: Scalars["String"];
  updatedAt: Scalars["DateTime"];
};

export type ObservationSubjectType = {
  __typename?: "ObservationSubjectType";
  definitionId?: Maybe<Scalars["Int"]>;
  description: Scalars["String"];
  formData?: Maybe<Scalars["GenericScalar"]>;
  id: Scalars["ID"];
  identity: Scalars["String"];
  isActive: Scalars["Boolean"];
  monitoringRecords?: Maybe<
    Array<Maybe<ObservationSubjectMonitoringRecordType>>
  >;
  title: Scalars["String"];
};

export type ObservationSubjectTypeNodeConnection = {
  __typename?: "ObservationSubjectTypeNodeConnection";
  /** Pagination data for this connection. */
  pageInfo: PageInfoExtra;
  /** Contains the nodes in this connection. */
  results: Array<Maybe<ObservationSubjectType>>;
  totalCount?: Maybe<Scalars["Int"]>;
};

/** Obtain JSON Web Token mutation */
export type ObtainJsonWebToken = {
  __typename?: "ObtainJSONWebToken";
  payload: Scalars["GenericScalar"];
  refreshExpiresIn: Scalars["Int"];
  refreshToken: Scalars["String"];
  token: Scalars["String"];
};

export type OutbreakPlaceType = {
  __typename?: "OutbreakPlaceType";
  case: CaseType;
  color: Scalars["String"];
  createdAt: Scalars["DateTime"];
  deletedAt?: Maybe<Scalars["DateTime"]>;
  id: Scalars["ID"];
  place?: Maybe<PlaceType>;
  plan: AdminOutbreakPlanUpdateSuccess;
  updatedAt: Scalars["DateTime"];
  zone?: Maybe<Scalars["Int"]>;
};

export type OutbreakPlanType = {
  __typename?: "OutbreakPlanType";
  createdAt: Scalars["DateTime"];
  deletedAt?: Maybe<Scalars["DateTime"]>;
  description: Scalars["String"];
  id: Scalars["ID"];
  name: Scalars["String"];
  places: Array<OutbreakPlaceType>;
  reportType: AdminReportTypeCreateSuccess;
  stateStep: DeepStateStepType;
  updatedAt: Scalars["DateTime"];
  zone1Color: Scalars["String"];
  zone1MessageBody: Scalars["String"];
  zone1MessageTitle: Scalars["String"];
  zone1Radius?: Maybe<Scalars["Float"]>;
  zone2Color: Scalars["String"];
  zone2MessageBody: Scalars["String"];
  zone2MessageTitle: Scalars["String"];
  zone2Radius?: Maybe<Scalars["Float"]>;
  zone3Color: Scalars["String"];
  zone3MessageBody: Scalars["String"];
  zone3MessageTitle: Scalars["String"];
  zone3Radius?: Maybe<Scalars["Float"]>;
};

export type PageInfoExtra = {
  __typename?: "PageInfoExtra";
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars["Boolean"];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars["Boolean"];
};

export type PlaceType = {
  __typename?: "PlaceType";
  authority: AdminAuthorityCreateSuccess;
  id: Scalars["ID"];
  latitude?: Maybe<Scalars["Float"]>;
  location?: Maybe<Scalars["GeoJSON"]>;
  longitude?: Maybe<Scalars["Float"]>;
  name: Scalars["String"];
  notificationTo: Scalars["String"];
};

export type PromoteToCaseMutation = {
  __typename?: "PromoteToCaseMutation";
  case?: Maybe<CaseType>;
  report?: Maybe<IncidentReportType>;
};

export type Query = {
  __typename?: "Query";
  adminAuthorityGet?: Maybe<AdminAuthorityQueryType>;
  adminAuthorityInheritLookup?: Maybe<AdminAuthorityInheritLookupTypeNodeConnection>;
  adminAuthorityQuery?: Maybe<AdminAuthorityQueryTypeNodeConnection>;
  adminAuthorityUserQuery?: Maybe<AdminAuthorityUserQueryTypeNodeConnection>;
  adminCaseDefinitionQuery?: Maybe<AdminCaseDefinitionQueryTypeNodeConnection>;
  adminCategoryQuery?: Maybe<AdminCategoryQueryTypeNodeConnection>;
  adminClientGet?: Maybe<ClientType>;
  adminClientQuery?: Maybe<AdminClientQueryTypeNodeConnection>;
  adminConfigurationQuery?: Maybe<AdminConfigurationQueryTypeNodeConnection>;
  adminDomainGet?: Maybe<DomainType>;
  adminInvitationCodeQuery?: Maybe<AdminInvitationCodeQueryTypeNodeConnection>;
  adminNotificationTemplateAuthorityQuery?: Maybe<
    Array<Maybe<AdminNotificationTemplateAuthorityType>>
  >;
  adminNotificationTemplateQuery?: Maybe<AdminNotificationTemplateQueryTypeNodeConnection>;
  adminObservationDefinitionQuery?: Maybe<AdminDefinitionQueryTypeNodeConnection>;
  adminObservationMonitoringDefinitionQuery?: Maybe<
    Array<Maybe<AdminMonitoringDefinitionQueryType>>
  >;
  adminOutbreakPlanQuery?: Maybe<AdminOutbreakPlanQueryTypeNodeConnection>;
  adminPlaceQuery?: Maybe<AdminPlaceQueryTypeNodeConnection>;
  adminReportTypeQuery?: Maybe<AdminReportTypeQueryTypeNodeConnection>;
  adminReporterNotificationQuery?: Maybe<AdminReporterNotificationQueryTypeNodeConnection>;
  adminStateDefinitionQuery?: Maybe<AdminStateDefinitionQueryTypeNodeConnection>;
  adminStateStepQuery?: Maybe<Array<Maybe<StateStepType>>>;
  adminStateTransitionQuery?: Maybe<Array<Maybe<StateTransitionType>>>;
  authorities?: Maybe<AuthorityTypeNodeConnection>;
  authority?: Maybe<AuthorityType>;
  authorityInheritsDown?: Maybe<Array<AuthorityType>>;
  authorityInheritsDownShallow?: Maybe<Array<AuthorityType>>;
  authorityUser?: Maybe<AuthorityUserType>;
  caseDefinitionGet?: Maybe<CaseDefinitionType>;
  caseGet?: Maybe<CaseType>;
  casesQuery?: Maybe<CaseTypeNodeConnection>;
  category?: Maybe<CategoryType>;
  checkInvitationCode?: Maybe<CheckInvitationCodeType>;
  comments?: Maybe<Array<Maybe<CommentType>>>;
  configurationGet?: Maybe<ConfigurationType>;
  configurations?: Maybe<Array<Maybe<ConfigurationType>>>;
  deepStateDefinitionGet?: Maybe<DeepStateDefinitionType>;
  eventsQuery?: Maybe<EventType>;
  features?: Maybe<Array<Maybe<FeatureType>>>;
  followupReport?: Maybe<FollowupReportType>;
  followups?: Maybe<Array<Maybe<FollowupReportType>>>;
  getLoginQrToken?: Maybe<LoginQrTokenType>;
  healthCheck?: Maybe<Scalars["String"]>;
  incidentReport?: Maybe<IncidentReportType>;
  incidentReports?: Maybe<IncidentReportTypeNodeConnection>;
  invitationCode?: Maybe<InvitationCodeType>;
  me?: Maybe<UserProfileType>;
  myIncidentReports?: Maybe<IncidentReportTypeNodeConnection>;
  myMessage?: Maybe<UserMessageType>;
  myMessages?: Maybe<UserMessageTypeNodeConnection>;
  myReportTypes?: Maybe<Array<Maybe<ReportTypeType>>>;
  notificationTemplateGet?: Maybe<NotificationTemplateType>;
  observationDefinitionGet?: Maybe<ObservationDefinitionType>;
  observationMonitoringDefinitionGet?: Maybe<ObservationMonitoringDefinitionDefinitionType>;
  observationSubject?: Maybe<ObservationSubjectType>;
  observationSubjects?: Maybe<ObservationSubjectTypeNodeConnection>;
  outbreakPlaces?: Maybe<Array<Maybe<OutbreakPlaceType>>>;
  outbreakPlanGet?: Maybe<OutbreakPlanType>;
  placeGet?: Maybe<PlaceType>;
  reportType?: Maybe<ReportTypeType>;
  reporterNotification?: Maybe<ReporterNotificationType>;
  statQuery?: Maybe<StatType>;
  stateDefinitionGet?: Maybe<StateDefinitionType>;
  stateStepGet?: Maybe<StateStepType>;
  stateStepListByReportType?: Maybe<Array<StateStepType>>;
  stateTransitionGet?: Maybe<StateTransitionType>;
  summaryCaseByCategoryQuery?: Maybe<Array<SummaryByCategoryType>>;
  summaryContributionQuery?: Maybe<Array<SummaryContributionType>>;
  summaryReportByCategoryQuery?: Maybe<Array<SummaryByCategoryType>>;
  syncReportTypes?: Maybe<ReportTypeSyncOutputType>;
  transitionListByReportType?: Maybe<Array<StateTransitionType>>;
};

export type QueryAdminAuthorityGetArgs = {
  id: Scalars["ID"];
};

export type QueryAdminAuthorityInheritLookupArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  ordering?: InputMaybe<Scalars["String"]>;
  q?: InputMaybe<Scalars["String"]>;
};

export type QueryAdminAuthorityQueryArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  ordering?: InputMaybe<Scalars["String"]>;
  q?: InputMaybe<Scalars["String"]>;
};

export type QueryAdminAuthorityUserQueryArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  ordering?: InputMaybe<Scalars["String"]>;
  q?: InputMaybe<Scalars["String"]>;
};

export type QueryAdminCaseDefinitionQueryArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  description?: InputMaybe<Scalars["String"]>;
  description_Contains?: InputMaybe<Scalars["String"]>;
  description_Istartswith?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  ordering?: InputMaybe<Scalars["String"]>;
};

export type QueryAdminCategoryQueryArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  name?: InputMaybe<Scalars["String"]>;
  name_Contains?: InputMaybe<Scalars["String"]>;
  name_Istartswith?: InputMaybe<Scalars["String"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  ordering?: InputMaybe<Scalars["String"]>;
};

export type QueryAdminClientGetArgs = {
  id: Scalars["ID"];
};

export type QueryAdminClientQueryArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  ordering?: InputMaybe<Scalars["String"]>;
  q?: InputMaybe<Scalars["String"]>;
};

export type QueryAdminConfigurationQueryArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  ordering?: InputMaybe<Scalars["String"]>;
  q?: InputMaybe<Scalars["String"]>;
};

export type QueryAdminDomainGetArgs = {
  id: Scalars["ID"];
};

export type QueryAdminInvitationCodeQueryArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  ordering?: InputMaybe<Scalars["String"]>;
  role?: InputMaybe<Scalars["String"]>;
  role_Contains?: InputMaybe<Scalars["String"]>;
  role_Istartswith?: InputMaybe<Scalars["String"]>;
};

export type QueryAdminNotificationTemplateAuthorityQueryArgs = {
  reportTypeId: Scalars["ID"];
};

export type QueryAdminNotificationTemplateQueryArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  ordering?: InputMaybe<Scalars["String"]>;
  q?: InputMaybe<Scalars["String"]>;
};

export type QueryAdminObservationDefinitionQueryArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  ordering?: InputMaybe<Scalars["String"]>;
  q?: InputMaybe<Scalars["String"]>;
};

export type QueryAdminObservationMonitoringDefinitionQueryArgs = {
  definitionId: Scalars["ID"];
};

export type QueryAdminOutbreakPlanQueryArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  ordering?: InputMaybe<Scalars["String"]>;
  q?: InputMaybe<Scalars["String"]>;
};

export type QueryAdminPlaceQueryArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  ordering?: InputMaybe<Scalars["String"]>;
  q?: InputMaybe<Scalars["String"]>;
};

export type QueryAdminReportTypeQueryArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  ordering?: InputMaybe<Scalars["String"]>;
  q?: InputMaybe<Scalars["String"]>;
};

export type QueryAdminReporterNotificationQueryArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  description?: InputMaybe<Scalars["String"]>;
  description_Contains?: InputMaybe<Scalars["String"]>;
  description_Istartswith?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  ordering?: InputMaybe<Scalars["String"]>;
};

export type QueryAdminStateDefinitionQueryArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  name?: InputMaybe<Scalars["String"]>;
  name_Contains?: InputMaybe<Scalars["String"]>;
  name_Istartswith?: InputMaybe<Scalars["String"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  ordering?: InputMaybe<Scalars["String"]>;
};

export type QueryAdminStateStepQueryArgs = {
  definitionId: Scalars["ID"];
};

export type QueryAdminStateTransitionQueryArgs = {
  definitionId: Scalars["ID"];
};

export type QueryAuthoritiesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  name?: InputMaybe<Scalars["String"]>;
  name_Istartswith?: InputMaybe<Scalars["String"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  ordering?: InputMaybe<Scalars["String"]>;
};

export type QueryAuthorityArgs = {
  id: Scalars["ID"];
};

export type QueryAuthorityInheritsDownArgs = {
  authorityId: Scalars["ID"];
};

export type QueryAuthorityInheritsDownShallowArgs = {
  authorityId: Scalars["ID"];
};

export type QueryAuthorityUserArgs = {
  id: Scalars["ID"];
};

export type QueryCaseDefinitionGetArgs = {
  id: Scalars["ID"];
};

export type QueryCaseGetArgs = {
  id: Scalars["UUID"];
};

export type QueryCasesQueryArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  ordering?: InputMaybe<Scalars["String"]>;
  report_CreatedAt_Gte?: InputMaybe<Scalars["DateTime"]>;
  report_CreatedAt_Lte?: InputMaybe<Scalars["DateTime"]>;
  report_RelevantAuthorities_Id_In?: InputMaybe<
    Array<InputMaybe<Scalars["String"]>>
  >;
  report_ReportType_Id_In?: InputMaybe<Array<InputMaybe<Scalars["UUID"]>>>;
};

export type QueryCategoryArgs = {
  id: Scalars["ID"];
};

export type QueryCheckInvitationCodeArgs = {
  code: Scalars["String"];
};

export type QueryCommentsArgs = {
  threadId: Scalars["ID"];
};

export type QueryConfigurationGetArgs = {
  key: Scalars["String"];
};

export type QueryDeepStateDefinitionGetArgs = {
  id: Scalars["ID"];
};

export type QueryEventsQueryArgs = {
  authorityId: Scalars["Int"];
};

export type QueryFollowupReportArgs = {
  id: Scalars["ID"];
};

export type QueryFollowupsArgs = {
  incidentId: Scalars["ID"];
};

export type QueryGetLoginQrTokenArgs = {
  userId: Scalars["ID"];
};

export type QueryIncidentReportArgs = {
  id: Scalars["ID"];
};

export type QueryIncidentReportsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  createdAt_Gte?: InputMaybe<Scalars["DateTime"]>;
  createdAt_Lte?: InputMaybe<Scalars["DateTime"]>;
  first?: InputMaybe<Scalars["Int"]>;
  incidentDate_Gte?: InputMaybe<Scalars["Date"]>;
  incidentDate_Lte?: InputMaybe<Scalars["Date"]>;
  last?: InputMaybe<Scalars["Int"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  ordering?: InputMaybe<Scalars["String"]>;
  relevantAuthorities_Id_In?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  relevantAuthorities_Name?: InputMaybe<Scalars["String"]>;
  relevantAuthorities_Name_Istartswith?: InputMaybe<Scalars["String"]>;
  reportType_Id_In?: InputMaybe<Array<InputMaybe<Scalars["UUID"]>>>;
};

export type QueryInvitationCodeArgs = {
  id: Scalars["ID"];
};

export type QueryMyIncidentReportsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  createdAt_Gte?: InputMaybe<Scalars["DateTime"]>;
  createdAt_Lte?: InputMaybe<Scalars["DateTime"]>;
  first?: InputMaybe<Scalars["Int"]>;
  incidentDate_Gte?: InputMaybe<Scalars["Date"]>;
  incidentDate_Lte?: InputMaybe<Scalars["Date"]>;
  last?: InputMaybe<Scalars["Int"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  ordering?: InputMaybe<Scalars["String"]>;
  relevantAuthorities_Id_In?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  relevantAuthorities_Name?: InputMaybe<Scalars["String"]>;
  relevantAuthorities_Name_Istartswith?: InputMaybe<Scalars["String"]>;
  reportType_Id_In?: InputMaybe<Array<InputMaybe<Scalars["UUID"]>>>;
};

export type QueryMyMessageArgs = {
  id: Scalars["String"];
};

export type QueryMyMessagesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  ordering?: InputMaybe<Scalars["String"]>;
};

export type QueryNotificationTemplateGetArgs = {
  id: Scalars["ID"];
};

export type QueryObservationDefinitionGetArgs = {
  id: Scalars["ID"];
};

export type QueryObservationMonitoringDefinitionGetArgs = {
  id: Scalars["ID"];
};

export type QueryObservationSubjectArgs = {
  id: Scalars["ID"];
};

export type QueryObservationSubjectsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  createdAt_Gte?: InputMaybe<Scalars["DateTime"]>;
  createdAt_Lte?: InputMaybe<Scalars["DateTime"]>;
  definition_Id_In?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  ordering?: InputMaybe<Scalars["String"]>;
};

export type QueryOutbreakPlacesArgs = {
  caseId: Scalars["UUID"];
};

export type QueryOutbreakPlanGetArgs = {
  id: Scalars["Int"];
};

export type QueryPlaceGetArgs = {
  id: Scalars["Int"];
};

export type QueryReportTypeArgs = {
  id: Scalars["ID"];
};

export type QueryReporterNotificationArgs = {
  id: Scalars["ID"];
};

export type QueryStatQueryArgs = {
  authorityId: Scalars["Int"];
};

export type QueryStateDefinitionGetArgs = {
  id: Scalars["ID"];
};

export type QueryStateStepGetArgs = {
  id: Scalars["ID"];
};

export type QueryStateStepListByReportTypeArgs = {
  reportTypeId: Scalars["ID"];
};

export type QueryStateTransitionGetArgs = {
  id: Scalars["ID"];
};

export type QuerySummaryCaseByCategoryQueryArgs = {
  authorityId: Scalars["Int"];
  fromDate?: InputMaybe<Scalars["DateTime"]>;
  toDate?: InputMaybe<Scalars["DateTime"]>;
};

export type QuerySummaryContributionQueryArgs = {
  fromDate?: InputMaybe<Scalars["DateTime"]>;
  toDate?: InputMaybe<Scalars["DateTime"]>;
  userId: Scalars["Int"];
};

export type QuerySummaryReportByCategoryQueryArgs = {
  authorityId: Scalars["Int"];
  fromDate?: InputMaybe<Scalars["DateTime"]>;
  toDate?: InputMaybe<Scalars["DateTime"]>;
};

export type QuerySyncReportTypesArgs = {
  data: Array<ReportTypeSyncInputType>;
};

export type QueryTransitionListByReportTypeArgs = {
  reportTypeId: Scalars["ID"];
};

export type Refresh = {
  __typename?: "Refresh";
  payload: Scalars["GenericScalar"];
  refreshExpiresIn: Scalars["Int"];
  refreshToken: Scalars["String"];
  token: Scalars["String"];
};

export type RegisterFcmTokenMutation = {
  __typename?: "RegisterFcmTokenMutation";
  success?: Maybe<Scalars["Boolean"]>;
};

export type ReportTypeSyncInputType = {
  id: Scalars["UUID"];
  updatedAt: Scalars["DateTime"];
};

export type ReportTypeSyncOutputType = {
  __typename?: "ReportTypeSyncOutputType";
  categoryList?: Maybe<Array<Maybe<CategoryType>>>;
  removedList: Array<Maybe<ReportTypeType>>;
  updatedList: Array<Maybe<ReportTypeType>>;
};

export type ReportTypeType = {
  __typename?: "ReportTypeType";
  authorities: Array<AdminAuthorityCreateSuccess>;
  casedefinitionSet: Array<AdminCaseDefinitionCreateSuccess>;
  category?: Maybe<CategoryType>;
  createdAt: Scalars["DateTime"];
  definition?: Maybe<Scalars["GenericScalar"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  followupDefinition?: Maybe<Scalars["GenericScalar"]>;
  followupreports: Array<FollowupReportType>;
  id: Scalars["UUID"];
  incidentreports: Array<IncidentReportType>;
  name: Scalars["String"];
  notificationtemplateSet: Array<AdminNotificationTemplateCreateSuccess>;
  ordering: Scalars["Int"];
  planSet: Array<AdminOutbreakPlanUpdateSuccess>;
  rendererDataTemplate?: Maybe<Scalars["String"]>;
  rendererFollowupDataTemplate?: Maybe<Scalars["String"]>;
  reporternotificationSet: Array<AdminReporterNotificationCreateSuccess>;
  stateDefinition?: Maybe<DeepStateDefinitionType>;
  updatedAt: Scalars["DateTime"];
};

export type ReporterNotificationType = {
  __typename?: "ReporterNotificationType";
  condition: Scalars["String"];
  createdAt: Scalars["DateTime"];
  deletedAt?: Maybe<Scalars["DateTime"]>;
  description: Scalars["String"];
  id: Scalars["ID"];
  isActive: Scalars["Boolean"];
  reportType?: Maybe<AdminReportTypeCreateSuccess>;
  template: Scalars["String"];
  titleTemplate: Scalars["String"];
  updatedAt: Scalars["DateTime"];
};

export type ResetPasswordMutation = {
  __typename?: "ResetPasswordMutation";
  success?: Maybe<Scalars["Boolean"]>;
};

export type ResetPasswordRequestMutation = {
  __typename?: "ResetPasswordRequestMutation";
  success?: Maybe<Scalars["Boolean"]>;
};

export type Revoke = {
  __typename?: "Revoke";
  revoked: Scalars["Int"];
};

export type StatType = {
  __typename?: "StatType";
  officialCount?: Maybe<Scalars["Int"]>;
  openCaseCount?: Maybe<Scalars["Int"]>;
  reporterCount?: Maybe<Scalars["Int"]>;
};

export type StateDefinitionType = {
  __typename?: "StateDefinitionType";
  id: Scalars["ID"];
  isDefault: Scalars["Boolean"];
  name: Scalars["String"];
};

export type StateStepType = {
  __typename?: "StateStepType";
  id: Scalars["ID"];
  isStartState: Scalars["Boolean"];
  isStopState: Scalars["Boolean"];
  name: Scalars["String"];
  stateDefinition?: Maybe<StateDefinitionType>;
};

export type StateTransitionType = {
  __typename?: "StateTransitionType";
  casestatetransitionSet: Array<CaseStateTransitionType>;
  createdAt: Scalars["DateTime"];
  deletedAt?: Maybe<Scalars["DateTime"]>;
  formDefinition?: Maybe<Scalars["GenericScalar"]>;
  fromStep: DeepStateStepType;
  id: Scalars["ID"];
  notificationtemplateSet: Array<AdminNotificationTemplateCreateSuccess>;
  toStep: DeepStateStepType;
  updatedAt: Scalars["DateTime"];
};

export type SubmitFollowupReport = {
  __typename?: "SubmitFollowupReport";
  result?: Maybe<FollowupReportType>;
};

export type SubmitImage = {
  __typename?: "SubmitImage";
  file?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["UUID"]>;
  imageUrl?: Maybe<Scalars["String"]>;
  thumbnail?: Maybe<Scalars["String"]>;
};

export type SubmitIncidentReport = {
  __typename?: "SubmitIncidentReport";
  result?: Maybe<IncidentReportType>;
};

export type SubmitObservationSubject = {
  __typename?: "SubmitObservationSubject";
  result?: Maybe<ObservationSubjectType>;
};

export type SubmitZeroReportMutation = {
  __typename?: "SubmitZeroReportMutation";
  id?: Maybe<Scalars["UUID"]>;
};

export type SummaryByCategoryType = {
  __typename?: "SummaryByCategoryType";
  category: Scalars["String"];
  day: Scalars["Date"];
  ordering?: Maybe<Scalars["Int"]>;
  total: Scalars["Int"];
};

export type SummaryContributionType = {
  __typename?: "SummaryContributionType";
  day: Scalars["Date"];
  total: Scalars["Int"];
};

export type UserMessageType = {
  __typename?: "UserMessageType";
  createdAt: Scalars["DateTime"];
  id: Scalars["ID"];
  isSeen: Scalars["Boolean"];
  message?: Maybe<MessageType>;
  user?: Maybe<UserType>;
};

export type UserMessageTypeNodeConnection = {
  __typename?: "UserMessageTypeNodeConnection";
  /** Pagination data for this connection. */
  pageInfo: PageInfoExtra;
  /** Contains the nodes in this connection. */
  results: Array<Maybe<UserMessageType>>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type UserProfileType = {
  __typename?: "UserProfileType";
  authorityId?: Maybe<Scalars["Int"]>;
  authorityName?: Maybe<Scalars["String"]>;
  avatarUrl?: Maybe<Scalars["String"]>;
  consent?: Maybe<Scalars["Boolean"]>;
  email?: Maybe<Scalars["String"]>;
  firstName: Scalars["String"];
  id: Scalars["Int"];
  isStaff?: Maybe<Scalars["Boolean"]>;
  isSuperuser?: Maybe<Scalars["Boolean"]>;
  lastName: Scalars["String"];
  role?: Maybe<Scalars["String"]>;
  telephone?: Maybe<Scalars["String"]>;
  username: Scalars["String"];
};

export type UserType = {
  __typename?: "UserType";
  avatarUrl?: Maybe<Scalars["String"]>;
  firstName: Scalars["String"];
  id: Scalars["ID"];
  lastName: Scalars["String"];
  telephone?: Maybe<Scalars["String"]>;
  /** Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. */
  username: Scalars["String"];
};

export type Verify = {
  __typename?: "Verify";
  payload: Scalars["GenericScalar"];
};

export type VerifyLoginQrTokenMutation = {
  __typename?: "VerifyLoginQRTokenMutation";
  me?: Maybe<UserProfileType>;
  refreshToken?: Maybe<Scalars["String"]>;
  token?: Maybe<Scalars["String"]>;
};

export type DeleteTokenCookieMutationVariables = Exact<{
  [key: string]: never;
}>;

export type DeleteTokenCookieMutation = {
  __typename?: "Mutation";
  deleteTokenCookie?: {
    __typename?: "DeleteJSONWebTokenCookie";
    deleted: boolean;
  } | null;
  deleteRefreshTokenCookie?: {
    __typename?: "DeleteRefreshTokenCookie";
    deleted: boolean;
  } | null;
};

export type RefreshTokenMutationVariables = Exact<{
  refreshToken?: InputMaybe<Scalars["String"]>;
}>;

export type RefreshTokenMutation = {
  __typename?: "Mutation";
  refreshToken?: { __typename?: "Refresh"; token: string; payload: any } | null;
};

export type TokenAuthMutationVariables = Exact<{
  username: Scalars["String"];
  password: Scalars["String"];
}>;

export type TokenAuthMutation = {
  __typename?: "Mutation";
  tokenAuth?: {
    __typename?: "ObtainJSONWebToken";
    refreshExpiresIn: number;
    token: string;
  } | null;
};

export type ClientsQueryVariables = Exact<{
  limit: Scalars["Int"];
  offset: Scalars["Int"];
  q?: InputMaybe<Scalars["String"]>;
  ordering?: InputMaybe<Scalars["String"]>;
}>;

export type ClientsQuery = {
  __typename?: "Query";
  adminClientQuery?: {
    __typename?: "AdminClientQueryTypeNodeConnection";
    totalCount?: number | null;
    results: Array<{
      __typename?: "AdminClientQueryType";
      id: string;
      name: string;
      schemaName: string;
    } | null>;
  } | null;
};

export type ClientCreateMutationVariables = Exact<{
  name: Scalars["String"];
  schemaName: Scalars["String"];
}>;

export type ClientCreateMutation = {
  __typename?: "Mutation";
  adminClientCreate?: {
    __typename?: "AdminClientCreateMutation";
    result?:
      | {
          __typename: "AdminClientCreateProblem";
          message?: string | null;
          fields?: Array<{
            __typename?: "AdminFieldValidationProblem";
            name: string;
            message: string;
          }> | null;
        }
      | {
          __typename: "AdminClientCreateSuccess";
          id: string;
          name: string;
          schemaName: string;
        }
      | null;
  } | null;
};

export type ClientUpdateMutationVariables = Exact<{
  id: Scalars["ID"];
  name: Scalars["String"];
}>;

export type ClientUpdateMutation = {
  __typename?: "Mutation";
  adminClientUpdate?: {
    __typename?: "AdminClientUpdateMutation";
    result?:
      | {
          __typename: "AdminClientUpdateProblem";
          message?: string | null;
          fields?: Array<{
            __typename?: "AdminFieldValidationProblem";
            name: string;
            message: string;
          }> | null;
        }
      | {
          __typename: "AdminClientUpdateSuccess";
          id: string;
          name: string;
          schemaName: string;
        }
      | null;
  } | null;
};

export type GetClientQueryVariables = Exact<{
  id: Scalars["ID"];
}>;

export type GetClientQuery = {
  __typename?: "Query";
  adminClientGet?: {
    __typename?: "ClientType";
    id: string;
    name: string;
    schemaName: string;
    domains?: Array<{
      __typename?: "DomainType";
      id: string;
      domain: string;
      isPrimary: boolean;
    } | null> | null;
  } | null;
};

export type DomainCreateMutationVariables = Exact<{
  clientId: Scalars["ID"];
  domain: Scalars["String"];
  isPrimary: Scalars["Boolean"];
}>;

export type DomainCreateMutation = {
  __typename?: "Mutation";
  adminDomainCreate?: {
    __typename?: "AdminDomainCreateMutation";
    result?:
      | {
          __typename: "AdminDomainCreateProblem";
          message?: string | null;
          fields?: Array<{
            __typename?: "AdminFieldValidationProblem";
            name: string;
            message: string;
          }> | null;
        }
      | {
          __typename: "AdminDomainCreateSuccess";
          id: string;
          domain: string;
          isPrimary: boolean;
        }
      | null;
  } | null;
};

export type DomainUpdateMutationVariables = Exact<{
  id: Scalars["ID"];
  domain: Scalars["String"];
  isPrimary: Scalars["Boolean"];
}>;

export type DomainUpdateMutation = {
  __typename?: "Mutation";
  adminDomainUpdate?: {
    __typename?: "AdminDomainUpdateMutation";
    result?:
      | {
          __typename: "AdminDomainUpdateProblem";
          message?: string | null;
          fields?: Array<{
            __typename?: "AdminFieldValidationProblem";
            name: string;
            message: string;
          }> | null;
        }
      | {
          __typename: "AdminDomainUpdateSuccess";
          id: string;
          domain: string;
          isPrimary: boolean;
        }
      | null;
  } | null;
};

export type DomainDeleteMutationVariables = Exact<{
  id: Scalars["ID"];
}>;

export type DomainDeleteMutation = {
  __typename?: "Mutation";
  adminDomainDelete?: {
    __typename?: "AdminDomainDeleteMutation";
    success?: boolean | null;
  } | null;
};

export type GetDomainQueryVariables = Exact<{
  id: Scalars["ID"];
}>;

export type GetDomainQuery = {
  __typename?: "Query";
  adminDomainGet?: {
    __typename?: "DomainType";
    id: string;
    domain: string;
    isPrimary: boolean;
  } | null;
};

export type MeQueryVariables = Exact<{ [key: string]: never }>;

export type MeQuery = {
  __typename?: "Query";
  me?: {
    __typename?: "UserProfileType";
    id: number;
    username: string;
    firstName: string;
    lastName: string;
    authorityId?: number | null;
    authorityName?: string | null;
    avatarUrl?: string | null;
    isSuperuser?: boolean | null;
    isStaff?: boolean | null;
    role?: string | null;
    email?: string | null;
    telephone?: string | null;
  } | null;
};

export type UserChangePasswordMutationVariables = Exact<{
  newPassword: Scalars["String"];
}>;

export type UserChangePasswordMutation = {
  __typename?: "Mutation";
  adminUserChangePassword?: {
    __typename?: "AdminUserChangePasswordMutation";
    success?: boolean | null;
  } | null;
};

export type UserUpdateProfileMutationVariables = Exact<{
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  telephone?: InputMaybe<Scalars["String"]>;
}>;

export type UserUpdateProfileMutation = {
  __typename?: "Mutation";
  adminUserUpdateProfile?: {
    __typename?: "AdminUserUpdateProfileMutation";
    success?: boolean | null;
  } | null;
};

export type UserUploadAvatarMutationVariables = Exact<{
  image: Scalars["Upload"];
}>;

export type UserUploadAvatarMutation = {
  __typename?: "Mutation";
  adminUserUploadAvatar?: {
    __typename?: "AdminUserUploadAvatarMutation";
    success?: boolean | null;
    avatarUrl?: string | null;
  } | null;
};

export const DeleteTokenCookieDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "DeleteTokenCookie" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "deleteTokenCookie" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "deleted" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "deleteRefreshTokenCookie" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "deleted" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DeleteTokenCookieMutation,
  DeleteTokenCookieMutationVariables
>;
export const RefreshTokenDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "RefreshToken" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "refreshToken" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "refreshToken" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "refreshToken" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "refreshToken" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "token" } },
                { kind: "Field", name: { kind: "Name", value: "payload" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  RefreshTokenMutation,
  RefreshTokenMutationVariables
>;
export const TokenAuthDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "TokenAuth" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "username" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "password" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "tokenAuth" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "username" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "username" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "password" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "password" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "refreshExpiresIn" },
                },
                { kind: "Field", name: { kind: "Name", value: "token" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<TokenAuthMutation, TokenAuthMutationVariables>;
export const ClientsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "Clients" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "limit" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "offset" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "q" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "ordering" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "adminClientQuery" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "limit" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "limit" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "offset" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "offset" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "q" },
                value: { kind: "Variable", name: { kind: "Name", value: "q" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "ordering" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "ordering" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "totalCount" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "results" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "schemaName" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ClientsQuery, ClientsQueryVariables>;
export const ClientCreateDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "ClientCreate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "name" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "schemaName" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "adminClientCreate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "name" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "name" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "schemaName" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "schemaName" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "result" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "__typename" },
                      },
                      {
                        kind: "InlineFragment",
                        typeCondition: {
                          kind: "NamedType",
                          name: {
                            kind: "Name",
                            value: "AdminClientCreateSuccess",
                          },
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "schemaName" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "InlineFragment",
                        typeCondition: {
                          kind: "NamedType",
                          name: {
                            kind: "Name",
                            value: "AdminClientCreateProblem",
                          },
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "fields" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "name" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "message" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "message" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  ClientCreateMutation,
  ClientCreateMutationVariables
>;
export const ClientUpdateDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "ClientUpdate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "name" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "adminClientUpdate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "name" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "name" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "result" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "__typename" },
                      },
                      {
                        kind: "InlineFragment",
                        typeCondition: {
                          kind: "NamedType",
                          name: {
                            kind: "Name",
                            value: "AdminClientUpdateSuccess",
                          },
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "schemaName" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "InlineFragment",
                        typeCondition: {
                          kind: "NamedType",
                          name: {
                            kind: "Name",
                            value: "AdminClientUpdateProblem",
                          },
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "fields" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "name" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "message" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "message" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  ClientUpdateMutation,
  ClientUpdateMutationVariables
>;
export const GetClientDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetClient" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "adminClientGet" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "schemaName" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "domains" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "domain" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "isPrimary" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetClientQuery, GetClientQueryVariables>;
export const DomainCreateDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "DomainCreate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "clientId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "domain" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "isPrimary" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "Boolean" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "adminDomainCreate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "clientId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "clientId" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "domain" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "domain" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "isPrimary" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "isPrimary" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "result" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "__typename" },
                      },
                      {
                        kind: "InlineFragment",
                        typeCondition: {
                          kind: "NamedType",
                          name: {
                            kind: "Name",
                            value: "AdminDomainCreateSuccess",
                          },
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "domain" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "isPrimary" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "InlineFragment",
                        typeCondition: {
                          kind: "NamedType",
                          name: {
                            kind: "Name",
                            value: "AdminDomainCreateProblem",
                          },
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "fields" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "name" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "message" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "message" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DomainCreateMutation,
  DomainCreateMutationVariables
>;
export const DomainUpdateDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "DomainUpdate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "domain" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "isPrimary" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "Boolean" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "adminDomainUpdate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "domain" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "domain" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "isPrimary" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "isPrimary" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "result" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "__typename" },
                      },
                      {
                        kind: "InlineFragment",
                        typeCondition: {
                          kind: "NamedType",
                          name: {
                            kind: "Name",
                            value: "AdminDomainUpdateSuccess",
                          },
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "domain" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "isPrimary" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "InlineFragment",
                        typeCondition: {
                          kind: "NamedType",
                          name: {
                            kind: "Name",
                            value: "AdminDomainUpdateProblem",
                          },
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "fields" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "name" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "message" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "message" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DomainUpdateMutation,
  DomainUpdateMutationVariables
>;
export const DomainDeleteDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "DomainDelete" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "adminDomainDelete" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "success" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DomainDeleteMutation,
  DomainDeleteMutationVariables
>;
export const GetDomainDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetDomain" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "adminDomainGet" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "domain" } },
                { kind: "Field", name: { kind: "Name", value: "isPrimary" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetDomainQuery, GetDomainQueryVariables>;
export const MeDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "me" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "me" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "username" } },
                { kind: "Field", name: { kind: "Name", value: "firstName" } },
                { kind: "Field", name: { kind: "Name", value: "lastName" } },
                { kind: "Field", name: { kind: "Name", value: "authorityId" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "authorityName" },
                },
                { kind: "Field", name: { kind: "Name", value: "avatarUrl" } },
                { kind: "Field", name: { kind: "Name", value: "isSuperuser" } },
                { kind: "Field", name: { kind: "Name", value: "isStaff" } },
                { kind: "Field", name: { kind: "Name", value: "role" } },
                { kind: "Field", name: { kind: "Name", value: "email" } },
                { kind: "Field", name: { kind: "Name", value: "telephone" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<MeQuery, MeQueryVariables>;
export const UserChangePasswordDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "userChangePassword" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "newPassword" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "adminUserChangePassword" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "newPassword" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "newPassword" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "success" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UserChangePasswordMutation,
  UserChangePasswordMutationVariables
>;
export const UserUpdateProfileDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "userUpdateProfile" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "firstName" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "lastName" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "telephone" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "adminUserUpdateProfile" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "firstName" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "firstName" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "lastName" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "lastName" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "telephone" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "telephone" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "success" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UserUpdateProfileMutation,
  UserUpdateProfileMutationVariables
>;
export const UserUploadAvatarDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "userUploadAvatar" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "image" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "Upload" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "adminUserUploadAvatar" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "image" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "image" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "success" } },
                { kind: "Field", name: { kind: "Name", value: "avatarUrl" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UserUploadAvatarMutation,
  UserUploadAvatarMutationVariables
>;
