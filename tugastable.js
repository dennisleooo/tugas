function inputproduk(){
    let name =document.getElementById("name").value 
    let price =document.getElementById("price").value  
    var condition 
    var kond = document.getElementsByName('condition'); 
    for(i = 0; i < kond.length; i++) { 
        if(kond[i].checked){
            condition =  document.getElementsByName("condition")[i].value
        }
    } 
    let kategori =document.getElementById("category").value
    produk = [name, price, condition, kategori]
    var tablee = '<tr>'
    for(i=0;i<produk.length;i++){
        tablee +='<td>' + produk[i] + '</td>'
        if(i==produk.length-1){
            tablee += '</tr>'
        }
    }
    document.getElementById('product').innerHTML += tablee
    // var table = document.getElementById("product");
    // var row = table.insertRow();
    // var cell1 = row.insertCell(0);
    // var cell2 = row.insertCell(1);
    // var cell3 = row.insertCell(2);
    // var cell4 = row.insertCell(3);
    // cell1.innerHTML = name;
    // cell2.innerHTML = price;
    // cell3.innerHTML = condition;
    // cell4.innerHTML = category;
}

function inputhewan(){
    let name =document.getElementById("name").value 
    let price =document.getElementById("price").value  
    var sex 
    var kelamin = document.getElementsByName('sex'); 
    for(i = 0; i < kelamin.length; i++) { 
        if(kelamin[i].checked){
            sex =  document.getElementsByName("sex")[i].value
        }
    } 
    var status = document.getElementsByName('stat'); 
    for(i = 0; i < status.length; i++) { 
        if(status[i].checked){
            status =  document.getElementsByName("stat")[i].value
        }
    } 
    animal = [name, price, sex, status]
    var table = '<tr>'
    for(i=0;i<animal.length;i++){
        table +='<td>' + animal[i] + '</td>'
        if(i==animal.length-1){
            table += '</tr>'
        }
    }
    document.getElementById('animal').innerHTML += table
    // var table = document.getElementById("animal");
    // var row = table.insertRow();
    // var cell1 = row.insertCell(0);
    // var cell2 = row.insertCell(1);
    // var cell3 = row.insertCell(2);
    // var cell4 = row.insertCell(3);
    // cell1.innerHTML = name;
    // cell2.innerHTML = price;
    // cell3.innerHTML = sex;
    // cell4.innerHTML = stat;
}