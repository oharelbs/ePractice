function addRow(tableID) {
    
    var table = document.getElementById(tableID);

    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);

    var cell1 = row.insertCell(0);
    var element1 = document.createElement("input");
    element1.type = "checkbox";
    element1.name ="chkbox[]";
    element1.className = "myCheckBox";
    cell1.appendChild(element1);

    var cell2 = row.insertCell(1);
    cell2.innerHTML = rowCount + 1;

    var cell3 = row.insertCell(2);
    var element2 = document.createElement("input");
    element2.type = "text";
    element2.name = "txtbox[]";
    element2.className = "wordText";
    element2.id = "wordTextId";

    var cell4 = row.insertCell(3);
    var element3 = document.createElement("input");
    element3.type = "text";
    element3.name = "txtbox[]";
    element3.className = "defText";
    element3.id = "defTextId";

    cell3.appendChild(element2);
    cell4.appendChild(element3);

}
function deleteRow(tableID) {
    try {
        var table = document.getElementById(tableID);
        var rowCount = table.rows.length;
        
        for(var i=2; i<rowCount; i++) {
            var row = table.rows[i];
            var chkbox = row.cells[0].childNodes[0];
            if(null != chkbox && true == chkbox.checked) {
                table.deleteRow(i);
                rowCount--;
                i--;
            }
        }
        if(document.getElementById("checkAll").checked = true) {
            document.getElementById("checkAll").checked = false;
        }
        if(document.getElementById("chk").checked = true) {
            document.getElementById("chk").checked = false;
            document.getElementById("wordTextFirst").value = "";
            document.getElementById("defTextFirst").value = "";

        }
    }catch(e) {
        console.log(e);
        alert(e);
    }
}

function checkAll(myelement){
    var boxchecked = myelement.checked;
    var x = document.getElementsByClassName("myCheckBox");
    var i;           
    for (i = 0; i < x.length; i++) {
        if(boxchecked == true) {
            x[i].checked = true;
        } else {
            x[i].checked = false;
        }
    }
}


function clearAll() {
    //clear words
    var wrdt = document.getElementsByClassName("wordText");
    var wt;
    for(wt = 0; wt < wrdt.length; wt++) {
        wrdt[wt].value = "";
    }
    //clear definitions
    var dft = document.getElementsByClassName("defText");
    var dt;
    for(dt = 0; dt < dft.length; dt++) {
        dft[dt].value = "";
    }
}