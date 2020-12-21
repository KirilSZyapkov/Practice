function refactorVolumeOfPyramid(input) {
    let Length = Number(input.shift());
    let Width = Number(input.shift());
    let Height = Number(input.shift());
    let Volume = (Length*Width*Height)/3;
    console.log(`Length: Width: Height: Pyramid Volume: ${Volume.toFixed(2)}`);
}

refactorVolumeOfPyramid(['3', '3', '3'])