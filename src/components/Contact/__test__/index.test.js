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

    it('renders', () => {
        const { getByTestId } = render(<Contact />)
        expect(getByTestId('h1tag')).toHaveTextContent('Contact me')
      })
       
      it('renders', () => {
        const { getByTestId } = render(<Contact />)
        expect(getByTestId('button')).toHaveTextContent('Submit')
      })
})