import Button from "./Button"; // Asegúrate de ajustar la ruta si tu carpeta es diferente

export default function App() {
  return (
    <div style={{ padding: '20px', display: 'flex', gap: '10px', flexDirection: 'column', alignItems: 'flex-start' }}>
      <h1>Prueba de Componente Button</h1>
      
      {/* Caso 1: Botón normal (rounded por defecto es false) */}
      <div>
        <p>Botón normal (Por defecto):</p>
        <Button>
          Descargar archivo
        </Button>
      </div>

      {/* Caso 2: Botón completamente redondeado (rounded={true}) */}
      <div>
        <p>Botón con propiedad rounded activa:</p>
        <Button rounded={true}>
          Descargar archivo
        </Button>
      </div>
    </div>
  );
}