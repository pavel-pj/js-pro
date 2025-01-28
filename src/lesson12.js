export const getSortedNames = (data) =>
{
    const users = [];
    for (const item of data) {
        let {name} = item
        users.push(name);

    }
    users.sort();
    return users;

}

