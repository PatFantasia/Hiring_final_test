// ********* algo tri par sélection**********

// const array = [20,2,80,8585,789,7,89];
const tri = (array) => {
    for (let i = 0; i < array.length - 1; i++) {
        let temp_min = i;
        for( let j = i + 1; j < array.length; j++){
            if(array[j] < array[temp_min]) {
                temp_min = j;
            }
        }
      [array[i], array[temp_min]] = [array[temp_min], array[i]];
    }
    return array;
}
// console.log('Trace algoTri', tri(array));



// *************Extraire des valeurs d’un tableau*************
        // Choix d'une fonction recursive pour extraire une donnée d'un tableau : recherche binaire
        // La recherche binaire ne fonctionne que sur des tableaux triés. 


const search = (array, target) => {
    tab = tri(array);
    let start = 0;
    let end = array.length - 1;

    // Renvoie l'indice de l'élément recherché
    return binarySearch (start, end, tab, target);
}

const binarySearch = (start, end, tab, target) => {
    const mid = start + Math.floor((start + end ) / 2);
    if(start > end){
        return null;
    }
    if(target === tab[mid]) {
        return mid
    }else if (target < tab[mid] ) {
        return binarySearch(start, mid - 1, tab, target);
    }else {
        return binarySearch(mid + 1, end, tab, target)
    }
}

// console.log('trace algo search', search(array, 7))



// ********************* Factarielle de n! ********************

const factorielle = (chiffre) => {
    let result= 1;
    if(chiffre === 0 ) {
         result = 1;
    } else if( chiffre < 0) {
        console.log('Veuillez renseigner un chiffre positif');
    }else{
        for (let i = 1; i <= chiffre; i++) {
            let temp =  i;
                result = result * temp;
        }
    }
    return result;
}

// console.log('Trace factorielle  : ', factorielle(5));


//   ***************** Arithmetic && Geometric Progression  ************************

const checkTypeProgression = (a, b, c) => {
    let result = 0   ;
    // arithmetic progression
    let r1 = c - b;
    let r2 = b - c;
    // Geometric Progression
    let q1 = c / b;
    let q2 = b / a;
  
    if(r1 === r2) {
        result = c + r1;
        return (console.log('AP ', result));
    }else if(q1 === q2) {
        result = c * q1;
        return (console.log('GP ', result));
    }else if(a === b === c) {
      
      return null;
    }
  
  }
//   console.log(checkTypeProgression(4,7,10))

