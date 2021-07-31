import { render, cleanup } from '@testing-library/react';
import About from '../../About';

afterEach(cleanup);

describe('About component', () => {
    // First test
    it('renders', () => {
        render(<About />);
    })
    // second test
    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<About />);
        
        expect(asFragment()).toMatchSnapshot();
    })
})