import { RobotComponent } from "./RobotComponent";
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from "react-router-dom";
import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock para las funciones
vi.mock('../../actions', () => ({
  getRobotsById: vi.fn(),
}));

import { getRobotsById } from "../../actions";

describe('RobotComponent Test', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  // Asegúrate de que no tenga .skip
  test("Debe mostrar el estado de carga inicial cuando hay ID", () => {
    console.log('🔴 EJECUTANDO PRUEBA'); // Para verificar que se ejecuta
    
    // Configura el mock
    (getRobotsById as any).mockImplementation(() => new Promise(() => {}));
    
    render(
      <MemoryRouter initialEntries={['/robot-component/1']}>
        <Routes>
          <Route path="/robot-component/:id" element={<RobotComponent />} />
        </Routes>
      </MemoryRouter>
    );
    
    // Verificaciones
    expect(screen.getByText("Cargando robot...")).toBeInTheDocument();
    expect(screen.getByRole('status')).toBeInTheDocument(); // Mejor que querySelector
  });

  test("Debe mostrar robot no encontrado cuando getRobotsById retorna null", async()=> {
    //COnfigura el mock para retornar null (robot no encontrado)
    (getRobotsById as any).mockResolvedValue({ robotABuscar: null });

    render(
       <MemoryRouter initialEntries={['/robot-component/999']}>
        <Routes>
          <Route path="/robot-component/:id" element={<RobotComponent />} />
        </Routes>
      </MemoryRouter>
    );
    // Usa findByText para esperar a que se resuelva la promesa
    expect(await screen.findByText("Robot no encontrado")).toBeInTheDocument();
    expect(screen.getByText("No se pudo cargar la información del robot.")).toBeInTheDocument();
    expect(screen.getByText("Volver")).toBeInTheDocument();
  });//Fin test
  test("Debe manejar datos del robot incompletos", async () => {
  const incompleteRobot = {
    id: 1,
    name: "", // nombre vacío
    weapon: "", // arma vacía
    // otros campos faltantes
  };

  (getRobotsById as any).mockResolvedValue({ robotABuscar: incompleteRobot });
  
  render(
    <MemoryRouter initialEntries={['/robot-component/1']}>
      <Routes>
        <Route path="/robot-component/:id" element={<RobotComponent />} />
      </Routes>
    </MemoryRouter>
  )});
  
});