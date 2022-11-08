const btnAction = '<button id="btn-action">Ação</button>';
const addItem = (desc, ValueA, valueB) => {

    //Criação da tabela e inserção de linhas
    var tb = document.getElementById('tb');
    var qtdRows = tb.rows.length;
    var row = tb.insertRow(qtdRows);
    
    //Criação das colunas
    var cellCodigo = row.insertCell(0);
    var cellDesc = row.insertCell(1);
    var cellValueA = row.insertCell(2);
    var cellValueB = row.insertCell(3);
    var cellActionBtn = row.insertCell(4)
    
    //Adição dos conteudos nas colunas
    cellCodigo.innerHTML = qtdRows;
    cellDesc.innerHTML = desc;
    cellValueA.innerHTML = ValueA;
    cellValueB.innerHTML = valueB;
    cellActionBtn.innerHTML = btnAction;
}