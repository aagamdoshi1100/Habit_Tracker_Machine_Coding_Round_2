import { AiOutlinePlus } from "react-icons/ai";
import "bootstrap/dist/css/bootstrap.css";
import { useHabitContext } from "./HabitTrackerContext";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { BiArchiveIn } from "react-icons/bi";
import { NavLink } from "react-router-dom";

export default function Listing() {
  const { habits, habitsDispacher } = useHabitContext();
  return (
    <div className="">
      <div className="header">
        <h1>Habit Tracker</h1>
        <NavLink to="/ArchivePage">Archive</NavLink>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() =>
            habitsDispacher({ type: "ADD_HABIT", payload: habits.showMenuForm })
          }
        >
          <AiOutlinePlus />
          Add a new habit
        </button>
      </div>
      {habits.showMenuForm ? (
        <div className="container mt-2">
          <div className="row m-3">
            <label htmlFor="habit">NAME</label>
            <input
              type="text"
              className="form-control"
              id="habit"
              placeholder="Enter habit..."
              onChange={(e) =>
                habitsDispacher({
                  type: "CREATE_HABIT",
                  payload: { name: e.target.value }
                })
              }
            />
          </div>

          <div className="row">
            <div className="col m-3">
              <label htmlFor="Repeat">REPEAT</label>
              <select
                id="Repeat"
                className="form-control"
                onChange={(e) =>
                  habitsDispacher({
                    type: "CREATE_HABIT",
                    payload: { repeat: e.target.value }
                  })
                }
              >
                <option value="" selected>
                  Choose...
                </option>
                <option value="Daily">Daily</option>
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
              </select>
            </div>
            <div className="col m-3">
              <label htmlFor="Goal">GOAL</label>
              <select
                id="Goal"
                className="form-control"
                onChange={(e) =>
                  habitsDispacher({
                    type: "CREATE_HABIT",
                    payload: { goal: e.target.value }
                  })
                }
              >
                <option value="" selected>
                  Choose...
                </option>
                <option value="1 Time">1 Time</option>
                <option value="2 Time">2 Time</option>
                <option value="3 Time">3 Time</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="col m-3">
              <label htmlFor="TIME">TIME OF DAY</label>
              <select
                id="TIME"
                className="form-control"
                onChange={(e) =>
                  habitsDispacher({
                    type: "CREATE_HABIT",
                    payload: { timeOfDay: e.target.value }
                  })
                }
              >
                <option value="" selected>
                  Choose...
                </option>
                <option value="Anytime">Anytime</option>
                <option value="6AM">6AM</option>
                <option value="6PM">6PM</option>
              </select>
            </div>
            <div className="col m-3">
              <label htmlFor="START">START DATE</label>
              <select
                id="START"
                className="form-control"
                onChange={(e) =>
                  habitsDispacher({
                    type: "CREATE_HABIT",
                    payload: { startDate: e.target.value }
                  })
                }
              >
                <option value="" selected>
                  Choose...
                </option>
                <option value="Today">Today</option>
                <option value="Tomorrow">Tomorrow</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-primary m-3"
            onClick={() =>
              habitsDispacher({ type: "SUBMIT", payload: habits.create })
            }
          >
            Save
          </button>
          <button
            type="discard"
            className="btn btn-light m-3"
            onClick={() =>
              habitsDispacher({
                type: "ADD_HABIT",
                payload: habits.showMenuForm
              })
            }
          >
            Discard
          </button>
        </div>
      ) : null}

      {habits.habitsArr.map((item) => {
        const { id, name } = item;
        return (
          <div className="card" key={id}>
            <h4>{name}</h4>{" "}
            <FiEdit
              size="1.8em"
              color="black"
              onClick={() =>
                habitsDispacher({ type: "EDIT", payload: habits.editMenuForm })
              }
            />
            <MdDelete
              size="1.8em"
              color="red"
              onClick={() =>
                habitsDispacher({
                  type: "DELETE",
                  payload: id
                })
              }
            />
            <BiArchiveIn
              size="1.8em"
              color="green"
              onClick={() =>
                habitsDispacher({
                  type: "ARCHIVE",
                  payload: { dataId: id, data: item }
                })
              }
            />
          </div>
        );
      })}

      {habits.editMenuForm ? (
        <div className="container mt-2">
          <div className="row m-3">
            <h3>Edit habit</h3>
            <label htmlFor="habit">NAME</label>
            <input
              type="text"
              className="form-control"
              id="habit"
              placeholder="Enter habit..."
              onChange={(e) =>
                habitsDispacher({
                  type: "CREATE_HABIT",
                  payload: { name: e.target.value }
                })
              }
            />
          </div>

          <div className="row">
            <div className="col m-3">
              <label htmlFor="Repeat">REPEAT</label>
              <select
                id="Repeat"
                className="form-control"
                onChange={(e) =>
                  habitsDispacher({
                    type: "CREATE_HABIT",
                    payload: { repeat: e.target.value }
                  })
                }
              >
                <option value="" selected>
                  Choose...
                </option>
                <option value="Daily">Daily</option>
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
              </select>
            </div>
            <div className="col m-3">
              <label htmlFor="Goal">GOAL</label>
              <select
                id="Goal"
                className="form-control"
                onChange={(e) =>
                  habitsDispacher({
                    type: "CREATE_HABIT",
                    payload: { goal: e.target.value }
                  })
                }
              >
                <option value="" selected>
                  Choose...
                </option>
                <option value="1 Time">1 Time</option>
                <option value="2 Time">2 Time</option>
                <option value="3 Time">3 Time</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="col m-3">
              <label htmlFor="TIME">TIME OF DAY</label>
              <select
                id="TIME"
                className="form-control"
                onChange={(e) =>
                  habitsDispacher({
                    type: "CREATE_HABIT",
                    payload: { timeOfDay: e.target.value }
                  })
                }
              >
                <option value="" selected>
                  Choose...
                </option>
                <option value="Anytime">Anytime</option>
                <option value="6AM">6AM</option>
                <option value="6PM">6PM</option>
              </select>
            </div>
            <div className="col m-3">
              <label htmlFor="START">START DATE</label>
              <select
                id="START"
                className="form-control"
                onChange={(e) =>
                  habitsDispacher({
                    type: "CREATE_HABIT",
                    payload: { startDate: e.target.value }
                  })
                }
              >
                <option value="" selected>
                  Choose...
                </option>
                <option value="Today">Today</option>
                <option value="Tomorrow">Tomorrow</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-primary m-3"
            onClick={() =>
              habitsDispacher({ type: "SUBMIT", payload: habits.create })
            }
          >
            Save
          </button>
          <button
            type="discard"
            className="btn btn-light m-3"
            onClick={() =>
              habitsDispacher({
                type: "EDIT_HABIT",
                payload: habits.editMenuForm
              })
            }
          >
            Discard
          </button>
        </div>
      ) : null}
    </div>
  );
}
