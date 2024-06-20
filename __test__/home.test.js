// import React from 'react';
// import { render, screen, waitFor } from '@testing-library/react';
// import { act } from 'react-dom/test-utils';
// import { MemoryRouter } from 'react-router-dom';

// import Home from '../components/Home';

// describe('renders landing page', () => {
//   it('shows warning if there is no data', () => {
//     const { getByText } = render(<Home />);
//     const element = getByText('loading...');

//     expect(element).toBeInTheDocument();
//   });

//   it('should renders the elements', async () => {
//     act(() => jest.advanceTimersByTime(1000));
//     render(
//       <MemoryRouter>
//         <Home />
//       </MemoryRouter>
//     );

//     const element = await waitFor(() => screen.getByTestId(''));
//     expect(element).toBeInTheDocument();
//   });
// });
