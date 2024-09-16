export const Starlight = [
  {
    name: 'Ursa Major',
    id: 's1',
    position: [
      { id: 1, xFactor: -0.8, yFactor: -0.9 },
      { id: 2, xFactor: -0.6, yFactor: -0.4 },
      { id: 3, xFactor: -0.4, yFactor: 0.1 },
      { id: 4, xFactor: 0, yFactor: 0.1 },
      { id: 5, xFactor: 0.3, yFactor: 0.4 },
      { id: 6, xFactor: 0.6, yFactor: -0.1 },
      { id: 7, xFactor: 0.3, yFactor: -0.4 },
    ],
    connections: [[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]]
  },
  {
    name: 'Lyra',
    id: 's2',
    position: [
      { id: 1, xFactor: -0.6, yFactor: 0 },      // Vega (brightest star)
      { id: 2, xFactor: -0.6, yFactor: 0.9 },  // Sheliak
      { id: 3, xFactor: -0.1, yFactor: 0.9 },  // Sulafat
      { id: 4, xFactor: 0.35, yFactor: -0.7 }, // Delta Lyrae
      { id: 5, xFactor: -0.2, yFactor: -0.3 }, // Zeta1 Lyrae
    ],
    connections: [[1, 2], [2, 3], [3, 4], [4, 5], [5, 1]]
  },
  {name: 'Gemini', id: 's3', position: []},
  {name: 'Libra', id: 's4', position: []},
  {name: 'Scorpius', id: 's5', position: []},
  {name: 'Aries', id: 's6', position: []},
  {name: 'Cancer', id: 's7', position: []},
  {name: 'Lion', id: 's8', position: []},
  {name: 'Orion', id: 's9', position: []},
  {name: 'Pisces', id: 's10', position: []},
];
