import React from "react";
import renderer from "react-test-renderer";
import SingleEventPageHeroSection from "./SingleEventPageHeroSection";
import { MemoryRouter } from "react-router-dom";

it("renders correctly", () => {
    const test = renderer
        .create(
            <MemoryRouter>
                <SingleEventPageHeroSection />
            </MemoryRouter>
        )
        .toJSON();
    expect(test).toMatchSnapshot();
});
