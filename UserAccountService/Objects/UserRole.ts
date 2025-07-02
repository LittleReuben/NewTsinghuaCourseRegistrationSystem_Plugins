export enum UserRole {
    superAdmin = 'admin',
    teacher = 'teacher',
    student = 'student'
}

export const userRoleList = Object.values(UserRole)

export function getUserRole(newType: string): UserRole {
    return userRoleList.filter(t => t === newType)[0]
}
