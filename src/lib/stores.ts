import { writable, derived } from 'svelte/store';
import { devices as initialDevices, challenges as initialChallenges } from './data';

export const userPoints = writable(150);
export const devices = writable(initialDevices);
export const challenges = writable(initialChallenges);
export const selectedDeviceId = writable<string | null>(null);

// Derived total or selected data rate
export const totalDataRate = derived([devices, selectedDeviceId], ([$devices, $selectedId]) => {
  if ($selectedId) {
    const device = $devices.find(d => d.id === $selectedId);
    return device && device.status === 'online' ? device.dataRate : 0;
  }
  return $devices.reduce((acc, device) => acc + (device.status === 'online' ? device.dataRate : 0), 0);
});

export const co2Equivalent = derived(totalDataRate, ($dataRate) => {
  return Math.round($dataRate * 20 * 10) / 10;
});

export const globalEcoScore = derived(co2Equivalent, ($co2) => {
  if ($co2 < 100) return 'A';
  if ($co2 < 300) return 'B';
  if ($co2 < 600) return 'C';
  if ($co2 < 1000) return 'D';
  return 'E';
});

export function completeChallenge(id: string) {
  challenges.update($challenges => {
    const challenge = $challenges.find(c => c.id === id);
    if (challenge && !challenge.completed) {
      challenge.completed = true;
      userPoints.update(p => p + challenge.points);
    }
    return [...$challenges];
  });
}

export function spendPoints(amount: number) {
  let success = false;
  userPoints.update(p => {
    if (p >= amount) {
      success = true;
      return p - amount;
    }
    return p;
  });
  return success;
}
