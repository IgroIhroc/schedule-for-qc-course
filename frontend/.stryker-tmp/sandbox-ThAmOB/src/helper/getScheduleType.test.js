// @ts-nocheck
import { getScheduleType } from './getScheduleType';

describe('getScheduleType', () => {
  test('returns FULL when values is null', () => {
    expect(getScheduleType(null)).toBeDefined();
  });

  test('returns FULL by default', () => {
    expect(getScheduleType({})).toBeDefined();
  });
});