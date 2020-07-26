// // segitiga keatas
// let z='';
// let jumlahBintang = 5

// for (let i=0; i<jumlahBintang; i++){       
// 	for (let j=jumlahBintang; j>=i ;j--){
//         z += ' '
//     }
//     for (let k=0; k<=i ;k++){
//         z += ' *'
//     }
//     z += '\n'
// }

// console.log(z)


// segitiga kebawah
let z='';
let jumlahBintang = 19

for (let i=0; i<jumlahBintang; i+=2){ 
	for (let j=0; j<=i ;j++){
        z += ' '
    }
    for (let k=jumlahBintang-1; k>=i ;k--){
        z += ' *'
    }
    z += '\n'
}
    
console.log(z)

