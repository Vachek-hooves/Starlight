export const Starlight = [
  {
    name: 'Ursa Major',
    id: 's1',
    position: [
      {
        id: 1,
        ...constrainPosition(centerX - scaleX * 0.3, centerY - scaleY * 0.3),
        isConstellation: true,
      },
      {
        id: 2,
        ...constrainPosition(centerX - scaleX * 0.1, centerY - scaleY * 0.1),
        isConstellation: true,
      },
      {
        id: 3,
        ...constrainPosition(centerX + scaleX * 0.1, centerY + scaleY * 0.1),
        isConstellation: true,
      },
      {
        id: 4,
        ...constrainPosition(centerX + scaleX * 0.3, centerY + scaleY * 0.3),
        isConstellation: true,
      },
      {
        id: 5,
        ...constrainPosition(centerX + scaleX * 0.5, centerY + scaleY * 0.2),
        isConstellation: true,
      },
      {
        id: 6,
        ...constrainPosition(centerX + scaleX * 0.6, centerY),
        isConstellation: true,
      },
      {
        id: 7,
        ...constrainPosition(centerX + scaleX * 0.7, centerY - scaleY * 0.2),
        isConstellation: true,
      },
    ],
  },
  {name: 'Lyra', id: 's2', position: []},
  {name: 'Gemini', id: 's3', position: []},
  {name: 'Libra', id: 's4', position: []},
  {name: 'Scorpius', id: 's5', position: []},
  {name: 'Aries', id: 's6', position: []},
  {name: 'Cancer', id: 's7', position: []},
  {name: 'Lion', id: 's8', position: []},
  {name: 'Orion', id: 's9', position: []},
  {name: 'Pisces', id: 's10', position: []},
];
