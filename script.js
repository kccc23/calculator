const cal = (value) => {
    const equation = document.getElementById("display");
    const lastChar = equation.value.slice(-1);
    if (lastChar === "." && isNaN(value)) {
        return
    }
    equation.value += value;
}

const clr = () => {
    document.getElementById("display").value = "";
}

const del = () => {
    let x = document.getElementById("display").value;
    let y = x.slice(0, -1);
    document.getElementById("display").value = y;
}

const result = () => {
    let x = document.getElementById("display").value;
    let y = eval(x);
    document.getElementById("display").value = y;
}
