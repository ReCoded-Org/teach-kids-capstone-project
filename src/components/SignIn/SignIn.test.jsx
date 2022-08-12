import React from "react";
import renderer from "react-test-renderer";
import SignIn from "./SignIn";
import { MemoryRouter } from "react-router-dom";

it("renders correctly", () => {
    const test = renderer
        .create(
            <MemoryRouter>
                <SignIn />
            </MemoryRouter>
        )
        .toJSON();
    expect(test).toMatchSnapshot();
});
