function getName (firstName : string, lastName : string): string {
    return ` hello ${firstName} ${lastName}`;
}

getName('Miron' , 'shukurov')

const checkAdult = (age: number): boolean => {
    if (age >= 18) {
        return true;
    }
    return false;
}

// any xohlagan tipda malumot qabul qilishi mumkin