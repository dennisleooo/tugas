class Todo{
    constructor(n,u,g,p){
        this.nama=n
        this.usia=u
        this.gender=g
        this.pekerjaan=p
    }
}

var datamanusia=[
    new Todo('jamal','20','Pria','tidur'),
    new Todo('dobleh','30','wanita','makan'),
]

var tampilanawal=()=>{
    var tampilan=datamanusia.map((val,index)=>{
        return `<tr>
                    <td>${index+1}</td>
                    <td>${val.nama}</td>
                    <td>${val.usia}</td>
                    <td>${val.gender}</td>
                    <td>${val.pekerjaan}</td>
                </tr>`
    })
    console.log(tampilan)
    document.getElementById('manusia').innerHTML = tampilan.join('')
}


const onsubmitClick=()=>{
    var nama=document.getElementById('nama').value
    var usia=document.getElementById('usia').value
    var gender=''
    if (document.getElementById('pria').checked){
        gender=document.getElementById('pria').value
    }else {
        gender=document.getElementById('wanita').value
    }
    var pekerjaan=document.getElementById('pekerjaan').value
    datamanusia.push(new Todo(nama,usia,gender,pekerjaan))
    tampilanawal()
}

const onnamaClick=()=>{
    datamanusia.sort(function(a, b){
        var x = a.nama.toLowerCase();
        var y = b.nama.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
      });
      tampilanawal();
}

const onusiaClick=()=>{
    datamanusia.sort(function(a, b){return a.usia - b.usia});
    tampilanawal();
}

const ongenderClick=()=>{
    datamanusia.sort(function(a, b){
        var x = a.gender.toLowerCase();
        var y = b.gender.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
      });
      tampilanawal();
}

const onpekerjaanClick=()=>{
    datamanusia.sort(function(a, b){
        var x = a.pekerjaan.toLowerCase();
        var y = b.pekerjaan.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
      });
      tampilanawal();
}


tampilanawal()