// User account model. Three account types share fields, role determines extras.

export type AccountType = "individual" | "employer" | "admin";

export interface UserBase {
  id: string;
  email: string;
  fullName: string;
  accountType: AccountType;
  emailVerifiedAt: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface IndividualUser extends UserBase {
  accountType: "individual";
  phone: string | null;
  nationality: string | null;
  passportNumber: string | null;
  emiratesId: string | null;
  uaePassLinked: boolean;
}

export interface EmployerUser extends UserBase {
  accountType: "employer";
  companyName: string;
  tradeLicense: string | null;
  contactPerson: string;
  phone: string | null;
}

export interface AdminUser extends UserBase {
  accountType: "admin";
  role: "super_admin" | "case_officer" | "qa_reviewer";
}

export type User = IndividualUser | EmployerUser | AdminUser;

export interface AuthSession {
  user: User;
  accessToken: string;
  refreshToken: string;
  expiresAt: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface IndividualRegistration {
  email: string;
  password: string;
  fullName: string;
  phone?: string;
  nationality?: string;
}

export interface EmployerRegistration {
  email: string;
  password: string;
  companyName: string;
  contactPerson: string;
  tradeLicense?: string;
  phone?: string;
}
