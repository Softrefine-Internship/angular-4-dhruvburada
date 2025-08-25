import { Injectable } from "@angular/core";
import { User } from "./User.model";

@Injectable()
export class UserService {
    userData!: User[];
    searchResults!: User[];
    async getUserData(): Promise<User[]> {
        const response = await fetch("https://dummyjson.com/users");
        const data = await response.json();

        this.userData = data.users.map((user: any) => ({
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            age: user.age,
            gender: user.gender,
            birthDate: user.birthDate,
            email: user.email,
            phone: user.phone,
            username: user.username,
            password: user.password
        }));

        return this.userData;
    }

    sortBy(data: User[], fieldName: keyof User): User[] {
        data.sort((a: any, b: any) => {
            const valA = a[fieldName];
            const valB = b[fieldName];

            if (typeof valA === 'string' && typeof valB === 'string') {
                return valA.localeCompare(valB);
            }

            if (typeof valA === 'number' && typeof valB === 'number') {
                return valA - valB;
            }

            return 0;
        });

        return data;
    }

    searchValue(searchTerm: string): User[] {
        if (!searchTerm.trim()) return this.userData;

        const lowerTerm = searchTerm.toLowerCase();

        return this.userData.filter((user) =>
            user.firstName.toLowerCase().includes(lowerTerm) ||
            user.lastName.toLowerCase().includes(lowerTerm) ||
            user.email.toLowerCase().includes(lowerTerm) ||
            user.username.toLowerCase().includes(lowerTerm) ||
            user.phone.toLowerCase().includes(lowerTerm)
        );
    }

}
