loadModule('/System/UI');
loadModule('/System/Git');


z = showInputDialog("Enter values","remote git address,where to save,username,password","Clone remote repository","branch");

if(z!=null){
	input = z.split(",");
	var y=clone(input[0],input[1],input[2],input[3],input[4]);
}
