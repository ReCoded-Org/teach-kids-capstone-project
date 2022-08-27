import React from "react";
import renderer from "react-test-renderer";
import OurBackendTeam from "./OurBackendTeam";
import { MemoryRouter } from "react-router-dom";

it("renders correctly", () => {
    const test = renderer
        .create(
            <MemoryRouter>
                <OurBackendTeam />
            </MemoryRouter>
        )
        .toJSON();
    expect(test).toMatchSnapshot();
});