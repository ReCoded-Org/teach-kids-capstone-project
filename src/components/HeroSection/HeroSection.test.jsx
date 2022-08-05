import React from "react";
import renderer from "react-test-renderer";
import HeroSection from "./HeroSection";
import { MemoryRouter } from "react-router-dom";

it("renders correctly", () => {
    const test = renderer
        .create(
            <MemoryRouter>
                <HeroSection />
            </MemoryRouter>
        )
        .toJSON();
    expect(test).toMatchSnapshot();
});
