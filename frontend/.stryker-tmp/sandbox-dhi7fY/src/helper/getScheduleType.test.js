// @ts-nocheck
import { getScheduleType } from './getScheduleType';
import {
  FULL,
  GROUP,
  TEACHER,
  DEPARTMENT
} from '../constants/scheduleTypes';

describe('getScheduleType', () => {

  test('returns FULL when values is null', () => {
    expect(getScheduleType(null)).toBe(FULL);
  });

  test('returns FULL when values is undefined', () => {
    expect(getScheduleType(undefined)).toBe(FULL);
  });

  test('returns GROUP when group exists', () => {
    expect(getScheduleType({ group: { id: 1 } })).toBe(GROUP);
  });

  test('returns TEACHER when teacher exists', () => {
    expect(getScheduleType({ teacher: { id: 1 } })).toBe(TEACHER);
  });

  test('returns DEPARTMENT when department exists', () => {
    expect(getScheduleType({ department: { id: 1 } })).toBe(DEPARTMENT);
  });

  test('returns FULL for empty object', () => {
    expect(getScheduleType({})).toBe(FULL);
  });

  test('returns FULL when no id fields exist', () => {
    expect(getScheduleType({
      group: {},
      teacher: {},
      department: {}
    })).toBe(FULL);
  });

  test('GROUP priority over teacher', () => {
    expect(getScheduleType({
      group: { id: 1 },
      teacher: { id: 2 }
    })).toBe(GROUP);
  });

  test('TEACHER priority over department', () => {
    expect(getScheduleType({
      teacher: { id: 1 },
      department: { id: 2 }
    })).toBe(TEACHER);
  });

  test('ignores falsy id values', () => {
    expect(getScheduleType({
      group: { id: 0 }
    })).toBe(FULL);
  });

});