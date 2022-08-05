// Requirements:
// "Write code for creating a new sorted array from two sorted arrays in O(n+m) time complexity where
// n,m are the size of the unsorted arrays"




// while (i<s1 && j<s2) {
//     if (arr1[i] < arr2[j]) {
//         res[k] = arr1[i];
//         i++; k++;
//     } 
//     else {
//         res[k] = arr2[j];
//         j++; k++;
//     }
// }

// while (i <s1)
//     res[k++] = arr1[i++];
// while(j < s2)
//     res[k++] = arr2[j++];     



	function mergeArrays(arr1, arr2 , n1 , n2, res) {
		var i = 0, j = 0, k = 0;
		while (i < n1 && j < n2) {
					if (arr1[i] < arr2[j])
				res[k++] = arr1[i++];
			else
				res[k++] = arr2[j++];
		}		
		while (i < n1)
			res[k++] = arr1[i++];	
		while (j < n2)
			res[k++] = arr2[j++];
	}	
		var arr1 = [ 9, 11, 13, 15];
		var n1 = arr1.length;
		var arr2 = [6, 8, 10, 12, 14];
		var n2 = arr2.length;
		var res = Array(n1 + n2).fill(0);
		mergeArrays(arr1, arr2, n1, n2, res);
		console.log("Array after merging");
		for (i = 0; i < n1 + n2; i++)
			console.log(res[i] + " ");


