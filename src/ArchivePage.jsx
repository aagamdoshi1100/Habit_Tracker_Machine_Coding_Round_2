import { useHabitContext } from "./HabitTrackerContext";
import { MdDelete } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

export default function ArchivePage() {
  const { habits, habitsDispacher } = useHabitContext();
  return (
    <div>
      <div className="header">
        <h1>Archive Page</h1>
        <NavLink to="/">
          <BiArrowBack size="1.7em" /> Home
        </NavLink>
      </div>
      {habits?.archiveArr?.map((item) => {
        const { id, name } = item;
        return (
          <div className="card" key={id}>
            <h4>{name}</h4>
            <MdDelete
              color="red"
              size="1.8em"
              onClick={() =>
                habitsDispacher({
                  type: "ARC_DELETE",
                  payload: id
                })
              }
            />
          </div>
        );
      })}
    </div>
  );
}
