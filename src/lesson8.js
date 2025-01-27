import _ from "lodash"

export const cloneShallow = (obj) =>
{
      return cloneRec(obj);
}

const cloneRec = (obj) => {

    const entries  = Object.entries(obj);
    const result = {};

    for (const [key,value] of entries)
    {
        if (value instanceof Object){

            Object.defineProperty(result, key, {
                value: cloneRec(value),
                enumerable: true,
            });
        }
        else {
            Object.defineProperty(result, key, {
                value: value,
                enumerable: true,

            });
        }
    }

    return result;

}