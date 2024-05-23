const express = require('express');
const crypto = require('crypto');


const generateRandomString = () => {
  return crypto.randomBytes(64).toString('hex');
};

console.log(generateRandomString());

module.exports = { generateRandomString };

