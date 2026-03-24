export default function Loading() {
  return (
    <div
      style={{
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1.5rem',
      }}
    >
      <div
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          border: '4px solid #f3f3f3',
          borderTop: '4px solid #FF7A7A',
          animation: 'spin 0.8s linear infinite',
        }}
      />
      <p style={{ color: '#D96C8A', fontSize: '0.95rem', letterSpacing: '0.05em' }}>
        Cargando...
      </p>
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}
