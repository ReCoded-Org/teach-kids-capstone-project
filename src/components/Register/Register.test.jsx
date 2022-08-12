import React from "react";
import renderer from "react-test-renderer";
import Register from "./Register";
import { MemoryRouter } from "react-router-dom";

it("renders correctly", () => {
    const test = renderer
        .create(
            <MemoryRouter>
                <Register />
            </MemoryRouter>
        )
        .toJSON();
    expect(test).toMatchSnapshot();
});