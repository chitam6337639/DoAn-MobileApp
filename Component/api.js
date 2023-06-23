const translate = require('google-translate-api');

export const translateText = async (text, targetLanguage) => {
  try {
    const translation = await translate(text, { to: targetLanguage });
    return translation.text;
  } catch (error) {
    throw new Error(error);
  }
};