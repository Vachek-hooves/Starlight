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
      {id: 1, xFactor: -0.6, yFactor: 0},
      {id: 2, xFactor: -0.6, yFactor: 0.9},
      {id: 3, xFactor: -0.1, yFactor: 0.9},
      {id: 4, xFactor: -0.2, yFactor: -0.3},
      {id: 5, xFactor: 0.35, yFactor: -0.7},
    ],
    connections: [
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [1, 4],
    ],
  },
  {
    name: 'Gemini',
    id: 's3',
    position: [
      {id: 1, xFactor: -0.4, yFactor: -1.4},
      {id: 2, xFactor: -0.2, yFactor: -1.2},
      {id: 3, xFactor: -0.1, yFactor: -0.8},
      {id: 4, xFactor: 0.3, yFactor: -0.9},
      {id: 5, xFactor: 0.6, yFactor: -1.5},
      {id: 6, xFactor: 0.7, yFactor: -0.1},
      {id: 7, xFactor: -0.6, yFactor: -0.6},
      {id: 8, xFactor: -0.8, yFactor: -0.4},
      {id: 9, xFactor: -0.6, yFactor: 0.2},
    ],
    connections: [
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [4, 6],
      [3, 7],
      [7, 8],
      [8, 9],
    ],
  },
  {
    name: 'Libra',
    id: 's4',
    position: [
      {id: 1, xFactor: -0.9, yFactor: -0.8},
      {id: 2, xFactor: -0.7, yFactor: -0.6},
      {id: 3, xFactor: -0.3, yFactor: -0.8},
      {id: 4, xFactor: 0.2, yFactor: -1.3},
      {id: 5, xFactor: 0.7, yFactor: -1.2},
      {id: 6, xFactor: 0.6, yFactor: -0.4},
      {id: 7, xFactor: 0.1, yFactor: 0.1},
      {id: 8, xFactor: 0.2, yFactor: 0.4},
    ],
    connections: [
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [4, 6],
      [5, 6],
      [6, 7],
      [7, 8],
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
    connections: [
      [1, 2],
      [2, 3],
      [2, 4],
      [4, 5],
      [5, 6],
      [6, 7],
      [7, 8],
      [8, 9],
    ],
  },
  {
    name: 'Aries',
    id: 's6',
    position: [
      {id: 1, xFactor: -0.7, yFactor: -1},
      {id: 2, xFactor: -0.1, yFactor: -0.9},
      {id: 3, xFactor: 0.4, yFactor: -0.6},
      {id: 4, xFactor: 0.45, yFactor: 0},
    ],
    connections: [
      [1, 2],
      [2, 3],
      [3, 4],
    ],
  },
  {
    name: 'Cancer',
    id: 's7',
    position: [
      {id: 1, xFactor: -0.6, yFactor: -1.4},
      {id: 2, xFactor: -0.2, yFactor: -0.5},
      {id: 3, xFactor: -0.1, yFactor: -0.2},
      {id: 4, xFactor: 0, yFactor: 0.6},
      {id: 5, xFactor: 0.8, yFactor: 0.3},
    ],
    connections: [
      [1, 2],
      [2, 3],
      [3, 4],
      [3, 5],
    ],
  },
  {
    name: 'Lion',
    id: 's8',
    position: [
      {id: 1, xFactor: 0.6, yFactor: -1},
      {id: 2, xFactor: 0.4, yFactor: -1.2},
      {id: 3, xFactor: 0.1, yFactor: -0.8},
      {id: 4, xFactor: 0.15, yFactor: -0.5},
      {id: 5, xFactor: 0.4, yFactor: -0.2},
      {id: 6, xFactor: 0.5, yFactor: 0.2},
      {id: 7, xFactor: -0.4, yFactor: 0.25},
      {id: 8, xFactor: -0.8, yFactor: 0.35},
      {id: 9, xFactor: -0.5, yFactor: -0.15},
    ],
    connections: [
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [4, 9],
      [5, 6],
      [6, 7],
      [7, 8],
      [8, 9],
    ],
  },
  {
    name: 'Orion',
    id: 's9',
    position: [
      {id: 1, xFactor: 0.4, yFactor: -1.4},
      {id: 2, xFactor: 0.6, yFactor: -1.0},
      {id: 3, xFactor: 0.5, yFactor: -0.4},
      {id: 4, xFactor: 0.3, yFactor: -0.2},
      {id: 5, xFactor: -0.1, yFactor: -0.9},
      {id: 6, xFactor: -0.3, yFactor: -1.3},
      {id: 7, xFactor: -0.3, yFactor: -0.6},
      {id: 8, xFactor: -0.5, yFactor: -1},
      {id: 9, xFactor: -0.1, yFactor: 0.4},
      {id: 10, xFactor: -0.6, yFactor: 0.4},
    ],
    connections: [
      [1, 2],
      [2, 3],
      [2, 5],
      [3, 4],
      [5, 6],
      [5, 7],
      [7, 8],
      [7, 9],
      [7, 10],
      [9, 10],
    ],
  },
  {name: 'Pisces', id: 's10', position: []},
];
