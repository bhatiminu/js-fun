// global scop k polution ko htane k liye iife ka use krte hai immidately invoke function

(function coffee(){
    console.log("DB conected");
    
})();

((name) => {
      console.log(`DB conected 2 ${name}`); 
})('Minu')