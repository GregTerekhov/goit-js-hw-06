const itemOFCategoriesEl = document.querySelectorAll('.item');
console.log('Number of categories: ', itemOFCategoriesEl.length);

itemOFCategoriesEl.forEach((item) => 
console.log('Category: ', item.firstElementChild.textContent, 
'Elements: ', item.lastElementChild.children.length));