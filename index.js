const input = document.getElementById("numOfWords");
const container = document.querySelector(".container");


const generateword = (n) => {
    let text = "";
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let i = 0; i < n; i++) {
        const random = (Math.random() * letters.length - 1)
            .toFixed(0);

        text += letters[random];

    }
    return text;
}


let numofwords;


const generatepara = () => {
    numofwords = Number(input.value);

    const para = document.createElement("p");

    let data = "";

    for (let i = 0; i < numofwords; i++) {

        const randomnumber = (Math.random() * 25).toFixed(0);

        data += generateword(randomnumber);

        data += "  ";
    }
    
    para.innerText = data;

    para.setAttribute("class", "paras");

    container.append(para);
}