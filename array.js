const a = Array.of(1, 2, 3);

for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
}

const b = Array(4).fill(1);
let i;
for(i = 0; i < b.length; i++) {
    let j = 1;
    b[i] = j++;

    
}
console.log(b[i]);