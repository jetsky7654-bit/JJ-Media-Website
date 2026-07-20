import * as migration_20260715_055709_initial from './20260715_055709_initial';

export const migrations = [
  {
    up: migration_20260715_055709_initial.up,
    down: migration_20260715_055709_initial.down,
    name: '20260715_055709_initial'
  },
];
