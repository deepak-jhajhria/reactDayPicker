export const css = `
  .my-selected:not([disabled]) { 
    font-weight: bold; 
    border: 1px solid currentColor;
  }
  .my-selected:hover:not([disabled]) { 
    border-color: blue;
    color: blue;
  }
  .my-selected:hover { 
    border-color: blue;
    color: blue;
  }
  .my-today { 
    font-weight: bold;
    font-size: 100%; 
    color: red;
  }
`;