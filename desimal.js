function angka(angka){
        let hexa = angka.toString(16)
        let binary = angka.toString(2)
        let output = 'hexa = ' + hexa + '\nbinary = ' + binary
        return output
        
}
console.log(angka(15))