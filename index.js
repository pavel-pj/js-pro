import { cloneShallow } from './src/lesson8.js';


const data = {
    Mama: 'Denia',
    name: 'adress 100',
    key2: {
        key: 'innerValue',
        innerKey: {
            anotherKey: 'anotherValue',
            someAnyKey: {
                thisNewObj:'adress204',
                nothingTo: '5500'
            }
        },
    },
};

const result = cloneShallow(data);
console.log( JSON.stringify(result))

