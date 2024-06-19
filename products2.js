let totalAmount = 0;
function addToCart(button) {
  let stCart = localStorage.getItem('cart') || [];

  if (stCart.length != 0) {
    stCart = JSON.parse(stCart);
  }

  const item = button.parentElement;
  const price = parseInt(item.getAttribute('data-price'));
  const itemName = item.querySelector('p').textContent;

  let cartItems = document.getElementById('cartItems');
  const listItem = document.createElement('li');
  listItem.textContent = itemName;
  // cartItems.appendChild(listItem);

  const newItem = { title: itemName.split('-')[0], value: price };

  stCart.push(newItem);
  console.log(stCart);
  //   cartItems = [{ title: 'kk', value: itemName }];
  localStorage.setItem('cart', JSON.stringify(stCart));

  totalAmount += price;
  // document.getElementById('totalAmount').textContent = totalAmount;
}
