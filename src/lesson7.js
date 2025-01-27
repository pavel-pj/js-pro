import _ from "lodash"

export const fill = (company, params, data ) =>
{
    if (params.length > 0) {
        Object.assign(company, _.pick(data, params));
    }
    else Object.assign(company, data );

    console.log(company);



}
