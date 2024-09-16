export const Starlight = [
  {
    name: 'Ursa Major',
    id: 's1',
    position: [
      {id: 1, xFactor: -0.8, yFactor: -0.9},
      {id: 2, xFactor: -0.6, yFactor: -0.4},
      {id: 3, xFactor: -0.4, yFactor: 0.1},
      {id: 4, xFactor: 0, yFactor: 0.1},
      {id: 5, xFactor: 0.3, yFactor: 0.4},
      {id: 6, xFactor: 0.6, yFactor: -0.1},
      {id: 7, xFactor: 0.3, yFactor: -0.4},
    ],
    connections: [
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 6],
      [6, 7],
    ],
  },
  {
    name: 'Lyra',
    id: 's2',
    position: [
      {id: 1, xFactor: -0.6, yFactor: 0}, // Vega (brightest star)
      {id: 2, xFactor: -0.6, yFactor: 0.9}, // Sheliak
      {id: 3, xFactor: -0.1, yFactor: 0.9}, // Sulafat
      {id: 4, xFactor: 0.35, yFactor: -0.7}, // Delta Lyrae
      {id: 5, xFactor: -0.2, yFactor: -0.3}, // Zeta1 Lyrae
    ],
    connections: [
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 6],
    ],
  },
  {
    name: 'Gemini',
    id: 's3',
    position: [
      {id: 1, xFactor: -0.4, yFactor: -1.4}, // Top left
      {id: 2, xFactor: -0.2, yFactor: -1.2}, // Top right
      {id: 3, xFactor: -0.1, yFactor: -0.8}, // Middle left
      {id: 4, xFactor: 0.3, yFactor: -0.9}, // Middle right
      {id: 5, xFactor: 0.6, yFactor: -1.5}, // Bottom left
      {id: 6, xFactor: 0.7, yFactor: -0.1}, // Bottom right
      {id: 7, xFactor: -0.6, yFactor: -0.6}, // Extended top left
      {id: 8, xFactor: -0.8, yFactor: -0.4},
      {id: 9, xFactor: -0.6, yFactor: 0.2},
    ],
    connections: [
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 6],
      [6, 7],
      [7, 8],
      [8, 9],
      [9, 10],
    ],
  },
  {
    name: 'Libra',
    id: 's4',
    position: [
      {id: 1, xFactor: -0.9, yFactor: -0.4}, // Top left
      {id: 2, xFactor: -0.6, yFactor: -0.3}, // Top right
      {id: 3, xFactor: -0.2, yFactor: -0.6}, // Middle left
      {id: 4, xFactor: 0.1, yFactor: -1.2}, // Middle right
      {id: 5, xFactor: 0.8, yFactor: -0.9}, // Bottom left
      {id: 6, xFactor: 0.7, yFactor: -0.1}, // Bottom right
      {id: 7, xFactor: 0.2, yFactor: 0.2}, // Extended top left
      {id: 8, xFactor: 0.3, yFactor: 0.4}, // Extended top right
    ],
    connections: [
      [1, 2],
      [1, 3],
      [2, 4],
      [3, 5],
      [4, 6],
      [5, 6],
      [1, 7],
      [2, 8],
    ],
  },
  {
    name: 'Scorpius',
    id: 's5',
    position: [
      {id: 1, xFactor: 0.5, yFactor: -1.4},
      {id: 2, xFactor: 0.8, yFactor: -1.0},
      {id: 3, xFactor: 0.6, yFactor: -0.6},
      {id: 4, xFactor: 0.1, yFactor: -0.9},
      {id: 5, xFactor: -0.2, yFactor: -0.6},
      {id: 6, xFactor: -0.4, yFactor: -0.2},
      {id: 7, xFactor: -0.5, yFactor: 0.2},
      {id: 8, xFactor: -0.7, yFactor: 0.2},
      {id: 9, xFactor: -0.8, yFactor: -0.1},
    ],
  },
  {name: 'Aries', id: 's6', position: []},
  {name: 'Cancer', id: 's7', position: []},
  {name: 'Lion', id: 's8', position: []},
  {name: 'Orion', id: 's9', position: []},
  {name: 'Pisces', id: 's10', position: []},
];
