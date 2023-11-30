const localeToCurrency = {
  fr: 'EUR',
  'en-US': 'USD',
};

export function formatPrice(value: number, locale = 'fr') {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: localeToCurrency[locale as keyof typeof localeToCurrency],
  }).format(value);
}
