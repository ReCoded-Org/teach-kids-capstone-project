import React from "react";
import renderer from "react-test-renderer";
import NgoProfilePageHeroSection from "./NgoProfilePageHeroSection";
import { MemoryRouter } from "react-router-dom";

it("renders correctly", () => {
    const test = renderer
        .create(
            <MemoryRouter>
                <NgoProfilePageHeroSection />
            </MemoryRouter>
        )
        .toJSON();
    expect(test).toMatchSnapshot();
});
