import '@testing-library/jest-dom/extend-expect';
import Modal from '../index';
import { render, cleanup, fireEvent } from '@testing-library/react';

afterEach(cleanup);

const currentPhoto = {
    name: 'Park bench',
    category: 'landscape',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    index: 1
  };

  describe('Modal component', () => {
      it('renders', () => {
          render(<Modal />)
      })

      it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<Modal />);
        
        expect(asFragment()).toMatchSnapshot();
    })
  })

  describe('Click Event', () => {
    it('calls onClose handler', () => {
      const { getByText } = render(<Modal
        onClose={mockToggleModal}
        currentPhoto={currentPhoto}
      />);
      fireEvent.click(getByText('Close this modal'));
  
      expect(mockToggleModal).toHaveBeenCalledTimes(1);
    });
  })  