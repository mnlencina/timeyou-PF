export const getCartItemsCount = () => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      const cart = JSON.parse(storedCart);
      return cart.items.length;
    }
    return 0;
  };