function changeIt(objName)
{
	//The image object accessed through its id we mentioned in the DIV block which is going to be visible currently
	var obj = document.getElementById(objName);
	
	//An array that hold the IDs of images that we mentioned in their DIV blocks
	var objId = new Array();
	
	//Storing the image IDs into the array starts here
	objId[0] = "image1";
	objId[1] = "image2";
	objId[2] = "image3";
	objId[3] = "image4";
	objId[4] = "image5";
	objId[5] = "image6";
	objId[6] = "image7";
	objId[7] = "image8";
	objId[8] = "image9";
	objId[9] = "image10";
	objId[10] = "image11";
	objId[11] = "image12";
	objId[12] = "image13";
	objId[13] = "image14";
	objId[14] = "image15";
	objId[15] = "image16";
	objId[16] = "image17";
	objId[17] = "image18";
	objId[18] = "image19";
	objId[19] = "image20";
	objId[20] = "image21";
	objId[21] = "image22";
	objId[22] = "image23";
	objId[23] = "image24";
	objId[24] = "image25";
	objId[25] = "image26";
	objId[26] = "image27";
	objId[27] = "image28";
	objId[28] = "image29";
	objId[29] = "image30";
	objId[30] = "image31";
	objId[31] = "image32";
	objId[32] = "image33";
	objId[33] = "image34";
	objId[34] = "image35";
	objId[35] = "image36";
	objId[36] = "image37";
	objId[37] = "image38";
	objId[38] = "image39";
	objId[39] = "image40";
	objId[40] = "image41";
	objId[41] = "image42";
	objId[42] = "image43";
	objId[43] = "image44";
	objId[44] = "image45";
	objId[45] = "image46";
	objId[46] = "image47";
	objId[47] = "image48";
	objId[48] = "image49";
	objId[49] = "image50";
	objId[50] = "image51";
	objId[51] = "image52";
	objId[52] = "image53";
	objId[53] = "image54";
	objId[54] = "image55";
	objId[55] = "image56";
	objId[56] = "image57";
	objId[57] = "image58";
	objId[58] = "image59";
	objId[59] = "image60";
	objId[60] = "image61";
	objId[61] = "image62";
	objId[62] = "image63";
	objId[63] = "image64";
	objId[64] = "image65";
	objId[65] = "image66";

	//Storing the image IDs into the array ends here
	
	//A counter variable going to use for iteration
	var i;
	
	//A variable that can hold all the other object references other than the object which is going to be visible
	var tempObj;
	
	//The following loop does the display of a single image based on its ID. The image whose ID we passed into this function will be the
	//only image that is displayed rest of the images will be hidden based on their IDs and that part has been handled by the else part
	//of the if statement within this loop.
	for(i=0;i<objId.length;i++)
	{
		if(objName == objId[i])
		{
			obj.style.display = "block";
		}
		else
		{
			tempObj = document.getElementById(objId[i]);
			tempObj.style.display = "none";	
		}
	}
	return;	
}