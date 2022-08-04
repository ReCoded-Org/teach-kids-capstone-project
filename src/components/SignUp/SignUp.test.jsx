import React from "react";
import renderer from "react-test-renderer";
import SignUp from "./SignUp";
import { MemoryRouter } from "react-router-dom";

it("renders correctly", () => {
    const test = renderer
        .create(
            <MemoryRouter>
                <SignUp />
            </MemoryRouter>
        )
        .toJSON();
    expect(test).toMatchSnapshot();
});

