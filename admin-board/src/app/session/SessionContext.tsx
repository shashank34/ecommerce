import { createContext, useContext, useState } from "react";
import { initialSession, UserSession } from "../models/Session";

export const SessionContext = createContext<[UserSession, (session: UserSession) => void]>([initialSession, () => {}]);
export const useSessionContext = () => useContext(SessionContext);

export const SessionContextProvider: React.FC = (props) => {
  const [sessionState, setSessionState] = useState(initialSession);
  const defaultSessionContext: [UserSession, typeof setSessionState]  = [sessionState, setSessionState];

  return (
    <SessionContext.Provider value={defaultSessionContext}>
      
    </SessionContext.Provider>
  );
}