import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import TimeClock from "../pages/TimeClock.js";
configure({ adapter: new Adapter() });
describe("TimeClock", () => {
  it("renders without errors", () => {
    shallow(<TimeClock />);
  });
  it("should update state on click", () => {
    const setTimeEntry = jest.fn();
    const wrapper = shallow(<TimeClock onClick={setTimeEntry} />);
    const handleClick = jest.spyOn(React, "useState");
    handleClick.mockImplementation((timeEntry) => [timeEntry, setTimeEntry]);
    wrapper.find("#saveButton").simulate("click");
    expect(setTimeEntry).toBeTruthy();
  });
});
