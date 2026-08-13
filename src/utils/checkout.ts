import { CHECKOUT_URL } from '../config';

/**
 * Retorna a URL do checkout preservando e repassando todos os parâmetros da URL atual
 * (como UTMs, src, sck, fbclid, gclid, etc.) além dos parâmetros padrão do checkout.
 */
export function getCheckoutUrl(): string {
  if (typeof window === 'undefined') {
    return CHECKOUT_URL;
  }

  try {
    const currentParams = new URLSearchParams(window.location.search);
    const checkoutObj = new URL(CHECKOUT_URL);

    // Repassa cada parâmetro presente na URL atual para a URL do checkout se existir valor
    currentParams.forEach((value, key) => {
      if (value) {
        checkoutObj.searchParams.set(key, value);
      }
    });

    return checkoutObj.toString();
  } catch {
    return CHECKOUT_URL;
  }
}
