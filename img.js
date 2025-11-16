const extractText=()=>{

    const fileInput=document.getElementById("imageInput");
    const outputDiv=document.getElementById("output");


    const imageFile=fileInput.files[0];

    if(!imageFile){
        outputDiv.textContent="plase select an image.";
        return;
    }


    Tesseract.recognize(
    imageFile,
    "eng"
).then(({data})=>{
    outputDiv.textContent=data.text;
})
}


