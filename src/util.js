export function getRedirectPath({type}){
   console.log("type",type) 
   var url = type == "genius"?"geniusinfo":"bossinfo"

   

   return url 
}
