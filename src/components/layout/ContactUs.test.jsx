import renderer from "react-test-renderer";
import ContactUs from "../layout/ContactUs";

it("renders correctly", () => {
    const tree = renderer.create(<ContactUs />).toJSON();
    expect(tree).toMatchSnapshot();
});