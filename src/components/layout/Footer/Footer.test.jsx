import {render} from '@testing-library/react';
import Footer from './Footer';

describe("Footer Component Test", () => {

  it("rendered footer", () => {

    const {getByTestId} = render(<Footer />);
    const footer = getByTestId("footer")
    expect(footer).toBeTruthy()

  });

});

