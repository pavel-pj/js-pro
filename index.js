import _ from "lodash";

console.log(_.intersection([2, 1], [2, 3])); // => [2]

const nes = () => {
  let paramas = [4, 43, 435, 1, 55];
  for (const item of paramas) {
    console.log(item);
  }
};
nes();
