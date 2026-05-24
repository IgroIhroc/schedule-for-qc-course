import { get } from 'lodash';
import { FULL, GROUP, TEACHER, DEPARTMENT } from '../constants/scheduleTypes';

export const getScheduleType = (values) => {
    if (!values) return FULL;

    const group = get(values, 'group');
    const teacher = get(values, 'teacher');
    const department = get(values, 'department');

    if (get(group, 'id')) {
        return GROUP;
    }

    if (get(teacher, 'id')) {
        return TEACHER;
    }

    if (get(department, 'id')) {
        return DEPARTMENT;
    }

    return FULL;
};