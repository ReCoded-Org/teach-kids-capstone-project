import React from "react";
import renderer from "react-test-renderer";
import VolunteerProfile from "./VolunteerProfile";
import { MemoryRouter } from "react-router-dom";

it("renders correctly", () => {
    const test = renderer
        .create(
            <MemoryRouter>
                <VolunteerProfile />
            </MemoryRouter>
        )
        .toJSON();
    expect(test).toMatchSnapshot();
});
