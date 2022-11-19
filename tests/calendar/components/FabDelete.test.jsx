import { fireEvent, render, screen } from '@testing-library/react';
import { FabDelete } from '../../../src/calendar/components/FabDelete';
import { useCalendarStore } from '../../../src/hooks';

jest.mock('../../../src/hooks/useCalendarStore');

describe('prueba en <FabDelete />', () => {
  const mockStartDeleteEvent = jest.fn();
  beforeEach(() => jest.clearAllMocks());

  test('Debe de mostrar el componente correctamente', () => {
    // jest.fn().mockReturnValue
    useCalendarStore.mockReturnValue({
      hasEventSelected: false,
    });

    render(<FabDelete />);

    const btn = screen.getByLabelText('btn-delete');
    // console.log(btn.classList.toString())
    expect(btn.classList).toContain('btn');
    expect(btn.classList).toContain('btn-danger');
    expect(btn.classList).toContain('fab-danger');
    expect(btn.style.display).toBe('none');
  });

  test('Debe de mostrar el btn si hay un evento activo', () => {
    useCalendarStore.mockReturnValue({
      hasEventSelected: true,
    });

    render(<FabDelete />);

    const btn = screen.getByLabelText('btn-delete');
    expect(btn.style.display).toBe('');
  });

  test('Debe llamar startDeleteEvent si hay evento activo', () => {
    useCalendarStore.mockReturnValue({
      hasEventSelected: true,
      startDeleteEvent: mockStartDeleteEvent,
    });

    render(<FabDelete />);

    const btn = screen.getByLabelText('btn-delete');
    fireEvent.click(btn);

    expect(mockStartDeleteEvent).toHaveBeenCalled();
  });
});
