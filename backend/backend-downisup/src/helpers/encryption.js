const express = require('express');
const crypto = require('crypto');
const { generateRandomString } = require('../helpers/cryptoUtils');

function encryptData(data, key) {
  const cipher = crypto.createCipher('aes192', key);
  let encrypteData = cipher.update(data, 'utf8', 'hex');
  encrypteData += cipher.final('hex');
  return encrypteData;
}

function decryptData(data, key) {
  const decipher = crypto.createDecipher('aes192', key);
  let decryptedData = decipher.update(data, 'hex', 'utf8');
  decryptedData += decipher.final('utf8');
  return decryptedData;
}

module.exports = { encryptData, decryptData };

