function highlight(table) {
  // ваш код...
  let ageNum = table.cells[1];
  if (ageNum < 18) {
    table.rows.style = "text-decoration: line-through";
  }

}
