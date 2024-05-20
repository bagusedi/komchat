export const generateUsername = (maxLength = 8) => {
    // Daftar karakter yang dapat digunakan dalam username
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    const usernameLength = maxLength; // Panjang username yang diinginkan

    let username = '';

    // Mengambil karakter acak dari daftar karakter dan menggabungkannya menjadi username
    for (let i = 0; i < usernameLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        username += characters[randomIndex];
    }

    return username;
}

export const  generateInvalidUsername= (maxLength = 8) => {
    const characters = 'abcde0123456789!@#$%';
    const usernameLength = maxLength; // Panjang username yang diinginkan

    let username = '';

    // Mengambil karakter acak dari daftar karakter dan menggabungkannya menjadi username
    for (let i = 0; i < usernameLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        username += characters[randomIndex];
    }

    return username;
}

export const generateEmail = (maxLength = 8) => {
    // const domains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'aol.com'];
    const domains = ['yopmail.com'];
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const emailLength = maxLength; // Panjang bagian depan email (sebelum simbol @)

    let email = '';

    // Membangun bagian depan email
    for (let i = 0; i < emailLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        email += characters[randomIndex];
    }

    // Memilih domain secara acak dari daftar domain
    const randomDomainIndex = Math.floor(Math.random() * domains.length);
    const domain = domains[randomDomainIndex];

    // Menggabungkan bagian depan email dengan domain
    email += '@' + domain;

    return email;
}

export const generatePhoneNumber = (maxLength = 9) => {
    const phoneNumberLength = maxLength; // Panjang nomor telepon yang diinginkan

    let phoneNumber = '8';

    // Membangun bagian nomor telepon
    for (let i = 0; i < phoneNumberLength; i++) {
        const digit = Math.floor(Math.random() * 10); // Generate digit acak dari 0 hingga 9
        phoneNumber += digit;
    }

    return phoneNumber;
}

export const generateRandomString = (maxLength = 8) => {
    const characters = 'abcde0123456789!@#$%';
    const usernameLength = maxLength; // Panjang username yang diinginkan

    let username = '';

    // Mengambil karakter acak dari daftar karakter dan menggabungkannya menjadi username
    for (let i = 0; i < usernameLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        username += characters[randomIndex];
    }

    return username;
}
 
export function generateRandomUserData() {
    const userDataArray = [
        {
            email: 'sqa100@komerce.my.id',
           // password: '12345678a',
        },
        {
            email: 'sqa200@komerce.my.id',
           // password: '12345678a',
        },
    ];

    if (userDataArray.length === 0) {
        return null;
    }

    const randomIndex = Math.floor(Math.random() * userDataArray.length);
    return userDataArray[randomIndex];
}