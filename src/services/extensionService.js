
const fetchData = async () => { 
    const res = await fetch('data.json');
    const data = await res.json();
    return data;
 }

 export default fetchData;