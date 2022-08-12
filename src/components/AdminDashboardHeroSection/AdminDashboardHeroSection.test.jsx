import React from "react";
import renderer from "react-test-renderer";
import AdminDashboardHeroSection from "./AdminDashboardHeroSection";
import { MemoryRouter } from "react-router-dom";

it("renders correctly", () => {
    const test = renderer
        .create(
            <MemoryRouter>
                <AdminDashboardHeroSection />
            </MemoryRouter>
        )
        .toJSON();
    expect(test).toMatchSnapshot();
});
