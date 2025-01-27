export const make = (name, obj = null) =>
{
    const createdAt = Date.now();
    const state = 'moderating'

   return const obj2 = {
        name,
        state,
        createdAt,
        ...obj
    }
 

}
