import React from "react";
import renderer from "react-test-renderer";
import OurFrontendTeam from "./OurFrontendTeam";
import { MemoryRouter } from "react-router-dom";

it("renders correctly", () => {
    const test = renderer
        .create(
            <MemoryRouter>
                <OurFrontendTeam />
            </MemoryRouter>
        )
        .toJSON();
    expect(test).toMatchSnapshot();
});