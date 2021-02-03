function checkText(inputText) {
    console.log("::: Running checkText :::", inputText);

    if (typeof inputText !== 'string') {
        throw new Error('Input is not a string');
    }
}

export { checkText }
