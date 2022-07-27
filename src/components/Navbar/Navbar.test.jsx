import React from "react";
import renderer from "react-test-renderer";
import Navbar from "./Navbar";
import { MemoryRouter } from "react-router-dom";

it("renders correctly", () => {
    const test = renderer
        .create(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        )
        .toJSON();
    expect(test).toMatchSnapshot();
});
