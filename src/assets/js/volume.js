export function getVolume(volArrays) {
    let categoryData = [];
    let values = []
    for (let i = 0; i < volArrays.length; i++) {
        categoryData.push(rawData[i].splice(0, 1)[0]);
        values.push(rawData[i])
    }
    return {
        categoryData: categoryData,
        values: values
    };

}

export let dataTrade = getVolume([
    
])