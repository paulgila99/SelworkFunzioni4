function controlString(stringa) {
    stringa = stringa.replace(/\W/g, "")

    let reversed = stringa.split('').reverse().join('')

   

    if (stringa == reversed) {
        return true 
    }else{
        return false
    }
    

}

 console.log(controlString('ciao a tutti'));
 console.log(controlString('i topi non avevano nipoti'));