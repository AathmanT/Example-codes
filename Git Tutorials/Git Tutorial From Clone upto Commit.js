/*******************************************************************************
 * Copyright (c) 2018 Aathman Tharmasanthiran and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:
 *     Aathman Tharmasanthiran - initial API and implementation
 * <keyword1>: 
 * <keyword2>: <data>
 *******************************************************************************/

loadModule('/System/UI');
loadModule('/System/Git');
loadModule('/System/Resources');

z = showInputDialog("Enter values","remote git address,where to save,(optional)username,(optional)password,(optional)branch","Clone remote repository");

if(z!=null){
	input = z.split(",");
	var y=clone(input[0],input[1],input[2],input[3],input[4]);
}

var file = createFile(input[1]+"/Test file.txt");

var fileHandle = writeLine(input[1]+"/Test file.txt", "This is the new file added to test commit.");

commit(input[1],"Added a test file","AathmanT aathmant@gmail.com");
//getStatus(input[1]);

push(input[1]);

/*projectName = showInputDialog("Please provide the name of the project to create", "Sample Project", "Create Project");

if (projectName != null) {
	createProject(projectName);
	
	copyFile("Hi.txt","workspace://" + projectName);
}

*/
