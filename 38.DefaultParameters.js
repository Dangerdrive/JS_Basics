//Javascript is the default parameter
function writeCode(language = 'Javascript') {
	console.log(`Write code in ${language}`);
}

writeCode('C#');
writeCode();// the parameter will not be undefined. It will turn to default
