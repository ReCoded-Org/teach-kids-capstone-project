import React from "react";
import renderer from "react-test-renderer";
import Footer from './Footer';
import { MemoryRouter } from "react-router-dom";

it("renders correctly", () => {
  const test = renderer
      .create(
          <MemoryRouter>
              <Footer />
          </MemoryRouter>
      )
      .toJSON();
  expect(test).toMatchSnapshot();
});


