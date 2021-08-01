import { render, cleanup, getByTestId } from '@testing-library/react';
import Contact from '../index';
import '@testing-library/jest-dom/extend-expect';



afterEach(cleanup);

describe('contact form renders', () => {
    it('renders', () => {
        render(<Contact />);
    })

    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<Contact />);
        
        expect(asFragment()).toMatchSnapshot();
    })

    // it('matches "Contact Me" on h1 tag', () => {
    //     const wrapper = mount(<h1 data-testid='Contact Me' />);

    //     expect(data-testid.value)
    // })
})