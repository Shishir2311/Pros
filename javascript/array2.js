
    var names = ["Shishir", "john", "en", "Jason", "paul", "Frank", "Larry", "Paula", "Jim"];
    for (var i = 0; i < names.length; i++)
     {
        var firstLetter = names[i].charAt(0).toLowerCase();
        
        if (firstLetter === 'j') 
        	{
          console.log("bye " + names[i]);
        	} 
        else
        	 {
        	 console.log ("Hello " + names[i]);
            
        	}
    }
