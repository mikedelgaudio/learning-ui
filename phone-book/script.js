const table = document.getElementById("myTable");

table.querySelectorAll("th").forEach((header, colIndex) => {
  header.addEventListener("click", (e) => {
    sorter(colIndex, e);
  });
});

const sorter = (colIndex, e) => {
  const tData = table2Data(table.rows);
  console.log(tData);
  tData.sort((a, b) => {
    if (a[colIndex] > b[colIndex]) return 1;
    return -1;
  });

  const element = e.target;
  if (element.classList.contains("up")) {
    element.classList.toggle("down");
    tData.reverse();
  } else {
    element.classList.toggle("up");
    tData.reverse();
  }

  data2Table(tData);
};

const table2Data = (tableRows) => {
  const tableArray = [];

  for (let i = 1; i < tableRows.length; i++) {
    const rowData = [];
    tableRows[i].querySelectorAll("td").forEach((cell) => {
      rowData.push(cell.textContent);
    });
    tableArray.push(rowData);
  }

  return tableArray;
};

const data2Table = (tData) => {
  for (let i = 0; i < table.rows.length - 1; i++) {
    const newRowData = tData[i];

    table.rows[i + 1].querySelectorAll("td").forEach((cell, j) => {
      cell.textContent = newRowData[j];
    });

    //tData.push(newRowData);
  }
};
