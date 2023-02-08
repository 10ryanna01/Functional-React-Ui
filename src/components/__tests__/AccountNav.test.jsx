import { render, screen, cleanup} from "@testing-library/react";
import renderer from  "react-test-renderer";
import '@testing-library/jest-dom/extend-expect';
import AccountNav from "../AccountNav";

afterEach(() =>{
    cleanup();
});
 

    test("displays signup nav items", () => {
        
        render(<AccountNav  />);
        const accNavElement = screen.queryByTestId  ("AccNavtestA");
        const accNavElementB = screen.queryByTestId  ("AccNavtestB");
        const accNavElementC = screen.queryByTestId  ("AccNavtestC");
        expect(accNavElement).toBeInTheDocument();
        expect(accNavElementB).toHaveTextContent("sign in");
        expect(accNavElementC).toHaveTextContent("sign up");
        expect(accNavElementC).not.toContainHTML("<h1>");
    }) ;

    test("matches snapshot", () => {
    const snapShotTestAccountNav = renderer.create(<AccountNav />).toJSON();
    console.log(snapShotTestAccountNav);
    expect(snapShotTestAccountNav).toMatchSnapshot();
    }) ;