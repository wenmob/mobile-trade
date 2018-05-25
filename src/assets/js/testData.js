export function splitData(rawData) {   
    let categoryData = [];
    let values = [];
    for (let i = 0; i < rawData.length; i++) {
        categoryData.push(rawData[i].splice(0, 1)[0]);
        values.push(rawData[i]);
    }
    return {
        categoryData: categoryData,
        values: values
    };
   
}
export function calculateMA(data,dayCount) {
    let result = [];
    let len = 160;
    for (let i = 0; i < len; i++) {
        if (i < dayCount) {
            result.push('-');
            continue;
        }
        let sum = 0;
        for (let j = 0; j < dayCount; j++) {
            let ss = data.values[i - j];
            if (ss instanceof Array){
                let ss1 = ss[1];
                sum += ss1*1;
            } 
        }
        result.push((sum*1 / dayCount).toFixed(2));
    }
    return result;
}
export function getNumbers(data) {
    let vol = [];
    data.forEach(element => {
        let obj = {
            value: element[4],
            open: element[0],
            close: element[1],
            itemStyle: {
                color: element[1] > element[0] ? '#fff' : '#0DB408',
                borderColor: element[1] > element[0] ? '#DF312D' : '#0DB408',
                borderWidth: 1
            }
        }
        vol.push(obj);
    });
    return vol;
}
// 数据意义：开盘(open)，收盘(close)，最低(lowest)，最高(highest),成交量(volume)
export let data0 = splitData([
    ['2013/1/24', 2320.26, 2320.26, 2287.3, 2362.94,234.78],
    ['2013/1/25', 2300, 2291.3, 2288.26, 2308.38,50.44],
    ['2013/1/28', 2295.35, 2346.5, 2295.35, 2346.92,60.48],
    ['2013/1/29', 2347.22, 2358.98, 2337.35, 2363.8,523.58],
    ['2013/1/30', 2360.75, 2382.48, 2347.89, 2383.76,423.33],
    ['2013/1/31', 2383.43, 2385.42, 2371.23, 2391.82,463.22],
    ['2013/2/1', 2377.41, 2419.02, 2369.57, 2421.15,20.23],
    ['2013/2/4', 2425.92, 2428.15, 2417.58, 2440.38,33.44],
    ['2013/2/5', 2411, 2433.13, 2403.3, 2437.42,556.35],
    ['2013/2/6', 2432.68, 2434.48, 2427.7, 2441.73,88.45],
    ['2013/2/7', 2430.69, 2418.53, 2394.22, 2433.89,98.44],
    ['2013/2/8', 2416.62, 2432.4, 2414.4, 2443.03,55.33],
    ['2013/2/18', 2441.91, 2421.56, 2415.43, 2444.8,66.33],
    ['2013/2/19', 2420.26, 2382.91, 2373.53, 2427.07,89.45],
    ['2013/2/20', 2383.49, 2397.18, 2370.61, 2397.94,66.34],
    ['2013/2/21', 2378.82, 2325.95, 2309.17, 2378.82,52.44],
    ['2013/2/22', 2322.94, 2314.16, 2308.76, 2330.88,355.44],
    ['2013/2/25', 2320.62, 2325.82, 2315.01, 2338.78,44.55],
    ['2013/2/26', 2313.74, 2293.34, 2289.89, 2340.71,55.33],
    ['2013/2/27', 2297.77, 2313.22, 2292.03, 2324.63,67.44],
    ['2013/2/28', 2322.32, 2365.59, 2308.92, 2366.16,85.44],
    ['2013/3/1', 2364.54, 2359.51, 2330.86, 2369.65,95.33],
    ['2013/3/4', 2332.08, 2273.4, 2259.25, 2333.54,75.65],
    ['2013/3/5', 2274.81, 2326.31, 2270.1, 2328.14,79.44],
    ['2013/3/6', 2333.61, 2347.18, 2321.6, 2351.44,60.44],
    ['2013/3/7', 2340.44, 2324.29, 2304.27, 2352.02,78.44],
    ['2013/3/8', 2326.42, 2318.61, 2314.59, 2333.67,55.33],
    ['2013/3/11', 2314.68, 2310.59, 2296.58, 2320.96,85.33],
    ['2013/3/12', 2309.16, 2286.6, 2264.83, 2333.29,44.33],
    ['2013/3/13', 2282.17, 2263.97, 2253.25, 2286.33,64.33],
    ['2013/3/14', 2255.77, 2270.28, 2253.31, 2276.22,68.33],
    ['2013/3/15', 2269.31, 2278.4, 2250, 2312.08,83.22],
    ['2013/3/18', 2267.29, 2240.02, 2239.21, 2276.05,96.33],
    ['2013/3/19', 2244.26, 2257.43, 2232.02, 2261.31,58.33],
    ['2013/3/20', 2257.74, 2317.37, 2257.42, 2317.86,69.34],
    ['2013/3/21', 2318.21, 2324.24, 2311.6, 2330.81,89.33],
    ['2013/3/22', 2321.4, 2328.28, 2314.97, 2332,55.65],
    ['2013/3/25', 2334.74, 2326.72, 2319.91, 2344.89,76.43],
    ['2013/3/26', 2318.58, 2297.67, 2281.12, 2319.99,64.33],
    ['2013/3/27', 2299.38, 2301.26, 2289, 2323.48,78.33],
    ['2013/3/28', 2273.55, 2236.3, 2232.91, 2273.55,89.33],
    ['2013/3/29', 2238.49, 2236.62, 2228.81, 2246.87,96.33],
    ['2013/4/1', 2229.46, 2234.4, 2227.31, 2243.95,86.32],
    ['2013/4/2', 2234.9, 2227.74, 2220.44, 2253.42,97.33],
    ['2013/4/3', 2232.69, 2225.29, 2217.25, 2241.34,98.21],
    ['2013/4/8', 2196.24, 2211.59, 2180.67, 2212.59,89.33],
    ['2013/4/9', 2215.47, 2225.77, 2215.47, 2234.73,96.32],
    ['2013/4/10', 2224.93, 2226.13, 2212.56, 2233.04,85.32],
    ['2013/4/11', 2236.98, 2219.55, 2217.26, 2242.48,88.65],
    ['2013/4/12', 2218.09, 2206.78, 2204.44, 2226.26,86.45],
    ['2013/4/15', 2199.91, 2181.94, 2177.39, 2204.99,89.43],
    ['2013/4/16', 2169.63, 2194.85, 2165.78, 2196.43,85.33],
    ['2013/4/17', 2195.03, 2193.8, 2178.47, 2197.51,86.33],
    ['2013/4/18', 2181.82, 2197.6, 2175.44, 2206.03,89.34],
    ['2013/4/19', 2201.12, 2244.64, 2200.58, 2250.11,75.44],
    ['2013/4/22', 2236.4, 2242.17, 2232.26, 2245.12,79.55],
    ['2013/4/23', 2242.62, 2184.54, 2182.81, 2242.62,73.22],
    ['2013/4/24', 2187.35, 2218.32, 2184.11, 2226.12,77.44],
    ['2013/4/25', 2213.19, 2199.31, 2191.85, 2224.63,75.33],
    ['2013/4/26', 2203.89, 2177.91, 2173.86, 2210.58,79.44],
    ['2013/5/2', 2170.78, 2174.12, 2161.14, 2179.65,66.44],
    ['2013/5/3', 2179.05, 2205.5, 2179.05, 2222.81,58.34],
    ['2013/5/6', 2212.5, 2231.17, 2212.5, 2236.07,65.33],
    ['2013/5/7', 2227.86, 2235.57, 2219.44, 2240.26,74.34],
    ['2013/5/8', 2242.39, 2246.3, 2235.42, 2255.21,86.44],
    ['2013/5/9', 2246.96, 2232.97, 2221.38, 2247.86,67.44],
    ['2013/5/10', 2228.82, 2246.83, 2225.81, 2247.67,78.33],
    ['2013/5/13', 2247.68, 2241.92, 2231.36, 2250.85,66.55],
    ['2013/5/14', 2238.9, 2217.01, 2205.87, 2239.93,66.32],
    ['2013/5/15', 2217.09, 2224.8, 2213.58, 2225.19,88.44],
    ['2013/5/16', 2221.34, 2251.81, 2210.77, 2252.87,55.44],
    ['2013/5/17', 2249.81, 2282.87, 2248.41, 2288.09,59.44],
    ['2013/5/20', 2286.33, 2299.99, 2281.9, 2309.39,90.44],
    ['2013/5/21', 2297.11, 2305.11, 2290.12, 2305.3,33.44],
    ['2013/5/22', 2303.75, 2302.4, 2292.43, 2314.18,67.77],
    ['2013/5/23', 2293.81, 2275.67, 2274.1, 2304.95,55.33],
    ['2013/5/24', 2281.45, 2288.53, 2270.25, 2292.59,33.44],
    ['2013/5/27', 2286.66, 2293.08, 2283.94, 2301.7,77.44],
    ['2013/5/28', 2293.4, 2321.32, 2281.47, 2322.1,98.44],
    ['2013/5/29', 2323.54, 2324.02, 2321.17, 2334.33,77.44],
    ['2013/5/30', 2316.25, 2317.75, 2310.49, 2325.72,65.44],
    ['2013/5/31', 2320.74, 2300.59, 2299.37, 2325.53,55.45],
    ['2013/6/3', 2300.21, 2299.25, 2294.11, 2313.43,56.33],
    ['2013/6/4', 2297.1, 2272.42, 2264.76, 2297.1,44.22],
    ['2013/6/5', 2270.71, 2270.93, 2260.87, 2276.86,54.34],
    ['2013/6/6', 2264.43, 2242.11, 2240.07, 2266.69,86.44],
    ['2013/6/7', 2242.26, 2210.9, 2205.07, 2250.63,65.44],
    ['2013/6/13', 2190.1, 2148.35, 2126.22, 2190.1,53.22]
]);