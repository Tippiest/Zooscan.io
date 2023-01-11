
//Initialize the Image Classifier method with MobileNet
const  classifier = ml5.imageclassifier('MobileNet', modelLoaded);

//When the model is loaded
function modelLoaded() {
    console.log('Model Loaded!');
}

//Make a prediction with a selected image
classifier.classify(document.getElementById('image'), (err, results) => {
    console.log(results);
})