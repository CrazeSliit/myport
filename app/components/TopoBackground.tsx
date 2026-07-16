const blob =
  "M0,-200 C110,-196 186,-112 178,-8 C171,90 96,178 -14,184 C-128,190 -197,96 -184,-14 C-172,-122 -110,-204 0,-200 Z";

const rings = [0.22, 0.36, 0.5, 0.64, 0.78, 0.92, 1.06, 1.2, 1.34, 1.48];

export default function TopoBackground() {
  return (
    <svg
      aria-hidden
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
    >
      <g fill="none" stroke="var(--cream-line)" strokeWidth="1.4">
        <g transform="translate(360,400)">
          {rings.map((s, i) => (
            <path key={`a-${s}`} d={blob} transform={`scale(${s}) rotate(${i * 12})`} />
          ))}
        </g>
        <g transform="translate(980,260)">
          {rings.map((s, i) => (
            <path
              key={`b-${s}`}
              d={blob}
              transform={`scale(${s * 0.85}) rotate(${-i * 15})`}
            />
          ))}
        </g>
      </g>
    </svg>
  );
}
