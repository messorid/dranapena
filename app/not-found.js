import Link from 'next/link'

export const metadata = {
  title: 'Página no encontrada | Dra. Ana María Peña',
  description: 'La página que buscas no existe.',
}

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '2rem',
        gap: '1.5rem',
      }}
    >
      <p
        style={{
          fontSize: '7rem',
          fontWeight: '800',
          lineHeight: 1,
          background: 'linear-gradient(135deg, #FF7A7A, #D96C8A)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        404
      </p>

      <h1 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#1a1a1a' }}>
        Página no encontrada
      </h1>

      <p style={{ color: '#6b7280', maxWidth: '360px', lineHeight: '1.6' }}>
        Lo sentimos, la página que buscas no existe o fue movida.
      </p>

      <Link
        href="/"
        style={{
          marginTop: '0.5rem',
          padding: '0.75rem 2rem',
          background: 'linear-gradient(135deg, #FF7A7A, #D96C8A)',
          color: '#fff',
          borderRadius: '9999px',
          fontWeight: '600',
          textDecoration: 'none',
          fontSize: '0.95rem',
          transition: 'opacity 0.2s',
        }}
      >
        Volver al inicio
      </Link>
    </div>
  )
}
