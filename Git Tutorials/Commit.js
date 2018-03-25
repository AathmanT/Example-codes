loadModule('/System/Git');
loadModule('/System/UI');

z=showInputDialog("Enter values","file path,message,author name,amend(true/false)","Commit changes");

if(z!=null){
	input = z.split(",");
	y=(input[3]=="true");
	
	//commit(Object repository, String message, String author, boolean amend) : RevCommit;
	commit(input[0],input[1],input[2],y);
}
