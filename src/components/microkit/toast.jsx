export function Toast({ message, show }) {
  return (
    <div
      style={{
        position: 'absolute',
        left: '50%',
        transform: show
          ? 'translate(-50%, 0) scale(1)'
          : 'translate(-50%, 140%) scale(0.9)',
        opacity: show ? 1 : 0,
        transition:
          'transform .55s cubic-bezier(.18,1.25,.4,1), opacity .3s',
      }}
    >
      {message}
    </div>
  );
}