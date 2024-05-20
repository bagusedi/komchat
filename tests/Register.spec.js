import { test, expect } from '@playwright/test';
import { generateUsername, generateEmail, generatePhoneNumber, generateRandomString, generateInvalidUsername, generateRandomUserData} from '../helper/generator';
import { 
    INVALID_EMAIL_ADDRESS_EMPTY, 
    INVALID_EMAIL_ADDRESS_FORMAT, 
    INVALID_MAX_50_CHARACTER, 
    INVALID_MAX_40_CHARACTER, 
    INVALID_USERNAME,
    INVALID_MIN_8_NUMBER,
    INVALID_MAX_12_NUMBER,
    INVALID_MIN_8_CHARACTER,
    INVALID_MAX_20_CHARACTER,
    INVALID_PASSWORD_MIN_8_CHARACTER,
    INVALID_PASSWORD_MAX_20_CHARACTER,
    INVALID_PASS_EMPTY,
    INVALID_CONFIRMATION_PASSWORD_EMPTY,
    INVALID_CONFIRMATION_PASSWORD_NOT_MATCH,
} from '../constant/error';

import config from '../playwright.config';

test('[REGISTER] user global', async ({ page }) => {
  await page.goto(config.use.baseURL);
  await page.getByRole('button', { name: 'Daftar Sekarang', exact: true }).click();
  await page.getByPlaceholder('Masukkan email').click();
  await page.getByPlaceholder('Masukkan email').fill(generateEmail());
  await page.getByPlaceholder('Masukkan nama').click();
  await page.getByPlaceholder('Masukkan nama').fill(generateUsername());
  await page.getByPlaceholder('Masukkan nomor whatsapp').click();
  await page.getByPlaceholder('Masukkan nomor whatsapp').fill(generatePhoneNumber(10));

  let password = generateRandomString();

  await page.getByPlaceholder('Password').first().click();
  await page.getByPlaceholder('Password').first().fill(password);
  await page.getByPlaceholder('Password').nth(1).click();
  await page.getByPlaceholder('Password').nth(1).fill(password);

});

test('[REGISTER] - Invalid Email Format', async ({ page }) => {
    const email = generateUsername();

    await page.goto(config.use.baseURL);
    await page.getByRole('button', { name: 'Daftar Sekarang', exact: true }).click();
    await page.getByPlaceholder('Masukkan email').click();
    await page.getByPlaceholder('Masukkan email').fill(email);

    await expect(page.getByText('Email harus')).toHaveText(INVALID_EMAIL_ADDRESS_FORMAT);
});

test('[REGISTER] - Invalid Email Empty', async ({ page }) => {
    const email = generateEmail();

    await page.goto(config.use.baseURL);
    await page.getByRole('button', { name: 'Daftar Sekarang', exact: true }).click();
    await page.getByPlaceholder('Masukkan email').click();
    await page.getByPlaceholder('Masukkan email').fill(email);

    await page.getByPlaceholder('Masukkan email').fill('')

    await expect(page.getByText('Email harus')).toHaveText(INVALID_EMAIL_ADDRESS_EMPTY);
});

test('[REGISTER] - Invalid Email Max Length Char', async ({ page }) => {
    const email = generateEmail(50);

    await page.goto(config.use.baseURL);
    await page.getByRole('button', { name: 'Daftar Sekarang', exact: true }).click();
    await page.getByPlaceholder('Masukkan email').click();
    await page.getByPlaceholder('Masukkan email').fill(email);

    await expect(page.getByText('Maksimal')).toHaveText(INVALID_MAX_50_CHARACTER);
});

test('[REGISTER] - Invalid Username Max 40 char', async ({ page }) => {
    const username = generateUsername(42);

    await page.goto(config.use.baseURL);
    await page.getByRole('button', { name: 'Daftar Sekarang', exact: true }).click();
    await page.getByPlaceholder('Masukkan nama').click();
    await page.getByPlaceholder('Masukkan nama').fill(username);

    await expect(page.getByText('Maksimal')).toHaveText(INVALID_MAX_40_CHARACTER);
});

test('[REGISTER] - Invalid Username ', async ({ page }) => {
    const username = generateInvalidUsername();

    await page.goto(config.use.baseURL);
    await page.getByRole('button', { name: 'Daftar Sekarang', exact: true }).click();
    await page.getByPlaceholder('Masukkan nama').click();
    await page.getByPlaceholder('Masukkan nama').fill(username);

    await expect(page.getByText('Tidak boleh')).toHaveText(INVALID_USERNAME);
});

test('[REGISTER] - Invalid Phone Number Min Char ', async ({ page }) => {
    const phoneNumber = generatePhoneNumber(6);

    await page.goto(config.use.baseURL);
    await page.getByRole('button', { name: 'Daftar Sekarang', exact: true }).click();
    await page.getByPlaceholder('Masukkan nomor').click();
    await page.getByPlaceholder('Masukkan nomor').fill(phoneNumber);

    await expect(page.getByText('Minimal')).toHaveText(INVALID_MIN_8_NUMBER);
});

test('[REGISTER] - Invalid Phone Number Max Char ', async ({ page }) => {
    const phoneNumber = generatePhoneNumber(13);

    await page.goto(config.use.baseURL);
    await page.getByRole('button', { name: 'Daftar Sekarang', exact: true }).click();
    await page.getByPlaceholder('Masukkan nomor').click();
    await page.getByPlaceholder('Masukkan nomor').fill(phoneNumber);

    await expect(page.getByText('Maksimal')).toHaveText(INVALID_MAX_12_NUMBER);
});

test('[REGISTER] - Invalid Password 1 min char', async ({ page }) => {
    const password = generateRandomString(7);

    await page.goto(config.use.baseURL);
    await page.getByRole('button', { name: 'Daftar Sekarang', exact: true }).click();
    await page.getByPlaceholder('Password').first().click();
    await page.getByPlaceholder('Password').first().fill(password);

    await expect(page.getByText('*Minimal')).toHaveText(INVALID_PASSWORD_MIN_8_CHARACTER);
});

test('[REGISTER] - Invalid Password 1 max char', async ({ page }) => {
    const password = generateRandomString(21);

    await page.goto(config.use.baseURL);
    await page.getByRole('button', { name: 'Daftar Sekarang', exact: true }).click();
    await page.getByPlaceholder('Password').first().click();
    await page.getByPlaceholder('Password').first().fill(password);

    await expect(page.getByText('*Maksimal')).toHaveText(INVALID_PASSWORD_MAX_20_CHARACTER);
});

test('[REGISTER] - Invalid Password 1 empty', async ({ page }) => {
    const password = generateRandomString(8);

    await page.goto(config.use.baseURL);
    await page.getByRole('button', { name: 'Daftar Sekarang', exact: true }).click();
    await page.getByPlaceholder('Password').first().click();
    await page.getByPlaceholder('Password').first().fill(password);

    await page.getByPlaceholder('Password').first().fill('');

    await expect(page.getByText('Password harus')).toHaveText(INVALID_PASS_EMPTY);
});

test('[REGISTER] - Invalid Password 2 min char', async ({ page }) => {
    const password = generateRandomString(7);

    await page.goto(config.use.baseURL);
    await page.getByRole('button', { name: 'Daftar Sekarang', exact: true }).click();
    await page.getByPlaceholder('Password').nth(1).click();
    await page.getByPlaceholder('Password').nth(1).fill(password);

    await expect(page.getByText('Minimal')).toHaveText(INVALID_MIN_8_CHARACTER);
});

test('[REGISTER] - Invalid Password 2 max char', async ({ page }) => {
    const password = generateRandomString(21);

    await page.goto(config.use.baseURL);
    await page.getByRole('button', { name: 'Daftar Sekarang', exact: true }).click();
    await page.getByPlaceholder('Password').nth(1).click();
    await page.getByPlaceholder('Password').nth(1).fill(password);

    await expect(page.getByText('Maksimal')).toHaveText(INVALID_MAX_20_CHARACTER);
});

test('[REGISTER] - Invalid Password 2 empty', async ({ page }) => { 
    const password = generateRandomString(8);

    await page.goto(config.use.baseURL);
    await page.getByRole('button', { name: 'Daftar Sekarang', exact: true }).click();
    await page.getByPlaceholder('Password').nth(1).click();
    await page.getByPlaceholder('Password').nth(1).fill(password);

    await page.getByPlaceholder('Password').nth(1).fill('');

    await expect(page.getByText('Konfirmasi Password harus')).toHaveText(INVALID_CONFIRMATION_PASSWORD_EMPTY);
});

test('[REGISTER] - Invalid Password 2 not match', async ({ page }) => {
    const password = generateRandomString(8);
    const passwordConfirmation = generateRandomString(8);

    await page.goto(config.use.baseURL);
    await page.getByRole('button', { name: 'Daftar Sekarang', exact: true }).click();
    await page.getByPlaceholder('Password').first().click();
    await page.getByPlaceholder('Password').first().fill(password);

    await page.getByPlaceholder('Password').nth(1).click();
    await page.getByPlaceholder('Password').nth(1).fill(passwordConfirmation);

    await expect(page.getByText('*Pastikan konfirmasi')).toHaveText(INVALID_CONFIRMATION_PASSWORD_NOT_MATCH);
});

test('[REGISTER] - Invalid All Empty Field', async ({ page }) => {
    const password = generateRandomString(8);
    const passwordConfirmation = generateRandomString(8);

    await page.goto(config.use.baseURL);
    await page.getByRole('button', { name: 'Daftar Sekarang', exact: true }).click();

    const button = page.locator('button');
    await expect(button).toBeDisabled();
});

test('[REGISTER] - Invalid with empty field', async ({ page }) => {
    await page.goto(config.use.baseURL);
    await page.getByRole('button', { name: 'Daftar Sekarang', exact: true }).click();
    await page.getByPlaceholder('Masukkan email').click();
    await page.getByPlaceholder('Masukkan email').fill(generateEmail());
    await page.getByPlaceholder('Masukkan nomor whatsapp').click();
    await page.getByPlaceholder('Masukkan nomor whatsapp').fill(generatePhoneNumber(10));
  
    let password = generateRandomString();
  
    await page.getByPlaceholder('Password').first().click();
    await page.getByPlaceholder('Password').first().fill(password);
    await page.getByPlaceholder('Password').nth(1).click();
    await page.getByPlaceholder('Password').nth(1).fill(password);
  
    const button = page.locator('button');
    await expect(button).toBeDisabled();
  });
