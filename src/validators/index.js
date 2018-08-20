export const required = value => value ? undefined : 'Required';
export const numeric = value => value && isNaN(value) ? 'Must be a number' : undefined;
export const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        'Invalid email address' : undefined
export const password = value =>
    value && !/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[A-Za-z0-9]{6,}$/.test(value) ?
        'Must be at least 6 characters long and contain at least a lowercase letter, an uppercase letter and a number' : undefined;
export const age = value =>
    value && value < 17 ? 'Must be at least 17' : undefined;