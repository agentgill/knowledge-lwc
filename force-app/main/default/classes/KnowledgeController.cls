public with sharing class KnowledgeController {
   
    @AuraEnabled(cacheable=true)
   public static Knowledge__kav getSingleKnowledgeRecord(){
       return [
           SELECT Id, Title FROM Knowledge__kav
           LIMIT 1
       ];
   }
}

 
