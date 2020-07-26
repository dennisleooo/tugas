let z='';
let jumlahBintang = 9

for (let i=0; i<jumlahBintang; i+=2){       
	for (let j=jumlahBintang; j>=i ;j--){
        z += ' '
    }
    for (let k=0; k<=i ;k++){
        z += ' *'
    }
    z += '\n'
}
// z='';

for (let i=0; i<jumlahBintang; i+=2){ 
	for (let j=-1; j<=i ;j++){
        z += ' '
    }
    for (let k=jumlahBintang-1; k>=i ;k--){
        z += ' *'
    }
    z += '\n'
}
    
console.log(z)

