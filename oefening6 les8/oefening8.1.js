

    var characters   = ['ABC','DEF','GHI','JKL','MNO','PQR','ST','UV','WX','YZ','arf','uo', 'op', 'hsy', 'ui', 'fsd', 'tra', 'fdg', 'NO','PQR','ST','UV','eX','YtZ','af', 'bal']
 
    var charactersLength = characters.length;
 
    for ( var i = 0; i < length; i++ ) {
 
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
 
    }
 
    return result;
 
 }
 
  


