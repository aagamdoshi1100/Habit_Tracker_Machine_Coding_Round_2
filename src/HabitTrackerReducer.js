export const InitialValueHabitContext = {
  showMenuForm: false,
  habitsArr: [],
  archiveArr: [],
  create: {
    id: "",
    name: "",
    repeat: "",
    goal: "",
    startDate: "",
    timeOfDay: ""
  },
  editMenuForm: false
};

export default function HabitTrackerReducer(state, action) {
  switch (action.type) {
    case "ADD_HABIT":
      return { ...state, showMenuForm: !action.payload };
    case "EDIT_HABIT":
      return { ...state, editMenuForm: !action.payload };
    case "CREATE_HABIT":
      return {
        ...state,
        create: {
          ...state.create,
          id: state.habitsArr.length + state.archiveArr.length,
          name:
            action.payload.name === undefined
              ? state.create.name
              : action.payload.name,
          repeat:
            action.payload.repeat === undefined
              ? state.create.repeat
              : action.payload.repeat,
          goal:
            action.payload.goal === undefined
              ? state.create.goal
              : action.payload.goal,
          startDate:
            action.payload.startDate === undefined
              ? state.create.startDate
              : action.payload.startDate,
          timeOfDay:
            action.payload.timeOfDay === undefined
              ? state.create.timeOfDay
              : action.payload.timeOfDay
        }
      };
    case "SUBMIT":
      return {
        ...state,
        habitsArr: [...state.habitsArr, action.payload],
        showMenuForm: false,
        editMenuForm: false
      };
    case "EDIT":
      return { ...state, editMenuForm: !action.payload };
    case "DELETE":
      return {
        ...state,
        habitsArr: [
          ...state.habitsArr.filter(({ id }) => id !== action.payload)
        ]
      };
    case "ARCHIVE":
      console.log(action.payload.dataId, action.payload.data);
      return {
        ...state,
        archiveArr: [...state.archiveArr, action.payload.data],
        habitsArr: [
          ...state.habitsArr.filter(({ id }) => id !== action.payload.dataId)
        ]
      };
    case "ARC_DELETE":
      return {
        ...state,
        archiveArr: [
          ...state.archiveArr.filter(({ id }) => id !== action.payload)
        ]
      };
    default:
      return { ...state, editMenuForm: !action.payload };
  }
}
