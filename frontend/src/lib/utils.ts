import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { PasswordStrength, type PasswordStrengthType } from "@/types"
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getPasswordStrength = (value: string): number => {
  // Minimum 8 characters
  const REGEX_CHARACTER = /^.{8,}$/

  // Minimum 2 uppercase,
  const REGEX_UPPERCASE = /^(.*?[A-Z]){2,}.*$/

  // Minimum 2 lowercase
  const REGEX_LOWERCASE = /^(.*?[a-z]){2,}.*$/

  // Minimum 2 number
  const REGEX_NUMBERS = /^(.*?[0-9]){2,}.*$/

  // Minimum 2 special characters
  const REGEX_SPECIAL_CHARACTER = /(?:[^`!@#$%^&*\-_=+'/.,]*[`!@#$%^&*\-_=+'/.,]){2}/

  const criteria = {
    characters: REGEX_CHARACTER.test(value),
    upperCase: REGEX_UPPERCASE.test(value),
    lowerCase: REGEX_LOWERCASE.test(value),
    specialCharacter: REGEX_SPECIAL_CHARACTER.test(value),
    numbers: REGEX_NUMBERS.test(value),
  }

  const result = Object.values(criteria)
  const total = result.length
  const passed = result.filter(Boolean).length
  const strength = Number.parseFloat((passed / total).toFixed(2))

  return strength
}