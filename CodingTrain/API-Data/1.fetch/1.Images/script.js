const ImageFiles = [
    'img/1.jpg',
    'img/2.jpg',
    'img/3.jpg'
];

catchImages()
    .then(res => console.log(res))
    .catch(err => console.error(err));


async function catchImages(){
    for(let file of ImageFiles){
        const response = await fetch(file);
        const blob = await response.blob();
        const img = document.createElement('img');
        img.src = URL.createObjectURL(blob);
        img.style.width = '400px'
        document.body.append(img);
    }

    return "Image Catched"
}
