export  const sayPrimeOrNot = (num) =>
{

    if(isEven(num)) {
        console.log('yes');
    }
    else {
        console.log('no')
    }

}

const isEven = (num) =>
{
    if (num === 0 || num ===1) return false;

    let countDevs =0;

    const figures =[2,3,5,7]



    for (const dev of figures)
    {

        if (num % dev === 0 && !figures.includes(num)) {
            return false;
        }

    }
    return true;


}

export default sayPrimeOrNot;