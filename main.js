function startDetection()
{
    navigator.mediaDevices.getUserMedia({ audio: true})
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/0bd8EZJDX/model.json',modelReady);

}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults()
{
    
}