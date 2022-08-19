import React from "react";
import renderer from "react-test-renderer";
import EditInfoForm from "../AdminDashboardHeroSection/EditInfoForm";
import { MemoryRouter } from "react-router-dom";

it("renders correctly", () => {
    const test = renderer
        .create(
            <MemoryRouter>
                <EditInfoForm />
            </MemoryRouter>
        )
        .toJSON();
    expect(test).toMatchSnapshot();
});
