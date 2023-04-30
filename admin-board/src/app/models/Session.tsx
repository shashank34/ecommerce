export interface UserSession  {
    isAuthenticated?: boolean;
    redirectPath: string;
}

export const initialSession: UserSession = {
    redirectPath: ''
};