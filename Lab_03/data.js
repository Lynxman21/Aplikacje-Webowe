const finder = document.getElementById('find');
const order = document.getElementById('sort');

finder.addEventListener('keyup',getData);
order.addEventListener('change',getData);

function compareIn(a,b) {
    if (a.title < b.title) {
        return -1;
    }
    else if (a.title > b.title) {
        return 1;
    }
    return 0;
}

function compareDe(a,b) {
    return compareIn(a,b) * (-1);
}

async function getData() {
    const url = "https://dummyjson.com/products";
    let result;
    try {
        const response = await fetch(url);
        const type = order.selectedIndex;
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
      
        let json = await response.json();

        if (finder.value.trim() != "") {
            result = json.products.filter((word) => word.title.toLowerCase().includes(finder.value.toLowerCase())); 
        }
        else {
            result = json.products;
        }

        if (type==1) {
            result = result.sort(compareIn);
        }
        else if (type==2) {
            result = result.sort(compareDe);
        }

        const con = document.getElementById('container');
        con.innerHTML = '';
        for (let i=0;i<30;i++) {
            const element = result[i];
            const ans = document.createElement('div');

            ans.innerHTML = `<b>${element.title}</b> : ${element.description} <img src="${element.thumbnail}" alt="${element.title}">`;
            con.appendChild(ans);
        }
    } catch (error) {
        console.error(error.message);
    }
}

document.addEventListener('DOMContentLoaded',getData);
