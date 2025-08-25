export interface User {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    gender: 'Male' | 'Female' | 'Other'; // Adjust based on your data
    birthDate: string; // Use Date if you'll parse it: Date instead of string
    email: string;
    phone: string;
    username: string;
    password: string;
}
