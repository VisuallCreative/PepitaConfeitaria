import test from 'node:test';
import assert from 'node:assert/strict';
import { getBakeryScheduleInfo } from './businessHours';

test('getBakeryScheduleInfo identifies closed state on Sunday', () => {
  // Sunday 2026-11-15 10:00
  const sunday = new Date('2026-11-15T10:00:00');
  const info = getBakeryScheduleInfo(sunday);
  assert.equal(info.isOpen, false);
  assert.ok(info.statusLabel.toLowerCase().includes('fechado'));
});

test('getBakeryScheduleInfo identifies open state on Wednesday 14:00', () => {
  // Wednesday 2026-11-11 14:00
  const wednesday = new Date('2026-11-11T14:00:00');
  const info = getBakeryScheduleInfo(wednesday);
  assert.equal(info.isOpen, true);
  assert.ok(info.statusLabel.toLowerCase().includes('aberto'));
});

test('getBakeryScheduleInfo identifies Saturday morning hours (08h-11h)', () => {
  // Saturday 2026-11-14 09:30 -> Open
  const satMorning = new Date('2026-11-14T09:30:00');
  const infoOpen = getBakeryScheduleInfo(satMorning);
  assert.equal(infoOpen.isOpen, true);

  // Saturday 2026-11-14 13:00 -> Closed
  const satAfternoon = new Date('2026-11-14T13:00:00');
  const infoClosed = getBakeryScheduleInfo(satAfternoon);
  assert.equal(infoClosed.isOpen, false);
});
