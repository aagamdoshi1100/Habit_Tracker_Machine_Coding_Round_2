import { createContext, useContext, useReducer } from "react";
import { useNavigate } from "react-router";
import HabitTrackerReducer, {
  InitialValueHabitContext
} from "./HabitTrackerReducer";

const Habitcontext = createContext();

export default function HabitcontextProvider({ children }) {
  const [habits, habitsDispacher] = useReducer(
    HabitTrackerReducer,
    InitialValueHabitContext
  );
  console.log(habits);
  // const navigate = useNavigate();
  return (
    <Habitcontext.Provider value={{ habits, habitsDispacher }}>
      {children}
    </Habitcontext.Provider>
  );
}

export const useHabitContext = () => useContext(Habitcontext);
