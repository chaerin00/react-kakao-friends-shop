import { configure, shallow } from "enzyme";
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Counter from "../src/components/Counter";

configure({ adapter: new Adapter() });

describe("<Counter/>", () => {
  it("is rendered", () => {
    const wrapper = shallow(<Counter />);
    expect(wrapper).toBeTruthy();
  });
  it("click left arrow", () => {
    const wrapper = shallow(<Counter />);
    wrapper.find(".prev").simulate("click");
    expect(wrapper.find(".page").text()).toBe("-1");
  });
  it("click right arrow", () => {
    const wrapper = shallow(<Counter />);
    wrapper.find(".next").simulate("click");
    expect(wrapper.find(".page").text()).toBe("1");
  });
});
