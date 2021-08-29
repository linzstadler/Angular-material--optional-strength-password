interface Constants {
  readonly DIGIT_REGEX: RegExp;
  readonly LOWER_CHAR_REGEX: RegExp;
  readonly UPPERCASE_CHAR_REGEX: RegExp;
  readonly SYMBOL_REGEX: RegExp;
}

export const CONSTANTS: Constants = {
  DIGIT_REGEX: /[0-9]/,
  LOWER_CHAR_REGEX: /[a-z]/,
  UPPERCASE_CHAR_REGEX: /[A-Z]/,
  SYMBOL_REGEX: /[-+_!@#$%^&*,.?]/,

};
