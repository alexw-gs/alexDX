global class AdvancedDataManipulator implements Schedulable {

    Integer AccountCount = 0;
    Integer CaseCount = 0;
    Integer ContactCount = 0;
    Integer LeadCount = 0;
    Integer OpportunityCount = 0;
    
    private void GetGlobalDataSetCounts() {
        AccountCount = [SELECT COUNT() FROM Account];
        CaseCount = [SELECT COUNT() FROM Case];
        ContactCount = [SELECT COUNT() FROM Contact];
        LeadCount = [SELECT COUNT() FROM Lead];
        OpportunityCount = [SELECT COUNT() FROM Opportunity];
    }

    private Integer GetRandomNumber(Integer multiplier) {
        return Integer.valueof(Math.random() * multiplier);
    }

    private String GenerateRandomFullName() {
        Integer randomInitialIndex = GetRandomNumber(Names.Initials.size() - 1);
        String randomFullName = GenerateRandomFirstName() + ' ' + Names.Initials[randomInitialIndex] + '. ' + GenerateRandomLastName();
        return randomFullName;
    }

    private String GenerateRandomFirstName() {
        Integer randomFirstNameIndex = GetRandomNumber(Names.FirstNames.size() - 1);
        return Names.FirstNames[randomFirstNameIndex];
    }
    
    private String GenerateRandomLastName() {
        Integer randomLastNameIndex = GetRandomNumber(Names.LastNames.size() - 1);
        return Names.LastNames[randomLastNameIndex];
    }
    
    private String GenerateRandomPhone() {
        String randomAreaCode = String.valueOf(GetRandomNumber(1000));
        String randomMiddleBit = String.valueOf(GetRandomNumber(1000));
        String randomLastBit = String.valueOf(GetRandomNumber(100000));
        return '(' + randomAreaCode + ') ' + randomMiddleBit + ' ' + randomLastBit;
    }

    private Boolean GenerateRandomBool() {
        Integer oneOrZero = GetRandomNumber(2);
        return oneOrZero == 1;
    }
    
    private String GenerateRandomCompany() {
        Integer randomSuffixIndex = GetRandomNumber(Names.CompanySuffixes.size() - 1);
        String randomSuffix = Names.CompanySuffixes[randomSuffixIndex];
        return GenerateRandomLastName() + randomSuffix;
    }
    
    private String GenerateRandomString(Integer stringLength) {
        String randomString = '';

        for (Integer i = 0; i < stringLength; i++) {
            Integer randomInitialIndex = GetRandomNumber(Names.Initials.size() - 1);
            randomString += Names.Initials[randomInitialIndex];
        }

        return randomString;
    }

    private void CreateRandomAccount() {
        Account newAccount = new Account();
        newAccount.Name = GenerateRandomFullName();
        newAccount.Phone = GenerateRandomPhone();
        insert newAccount;
        AccountCount = AccountCount + 1;
    }
    
    private Account GetRandomAccount(){
        Integer accountsCount = AccountCount;
        Integer randomAccountIndex = Math.floor(Math.random() * accountsCount).intValue();
        return [SELECT Name FROM Account LIMIT 1 OFFSET :randomAccountIndex];
    }
    
    private void DeleteRandomAccount() {
        Account accountToDelete = GetRandomAccount();
        delete accountToDelete;
        AccountCount = AccountCount - 1;
    }
    
    private void EditRandomAccount() {
        Account accountToEdit = GetRandomAccount();
        accountToEdit.Name = GenerateRandomFullName();
        accountToEdit.Phone = GenerateRandomPhone();
        update accountToEdit;
    }
    
    private void CreateRandomCase() {
        Case newCase = new Case();
        newCase.IsEscalated = GenerateRandomBool();
        newCase.Reason = GenerateRandomString(GetRandomNumber(10));
        insert newCase;
        CaseCount = CaseCount + 1;
    }
    
    private Case GetRandomCase() {
        Integer casesCount = CaseCount;
        Integer randomCaseIndex = Math.floor(Math.random() * casesCount).intValue();
        return [SELECT IsEscalated, Reason FROM Case LIMIT 1 OFFSET :randomCaseIndex];
    }
    
    private void DeleteRandomCase() {
        Case caseToDelete = GetRandomCase();
        delete caseToDelete;
        CaseCount = CaseCount - 1;
    }
    
    private void EditRandomCase() {
        Case caseToEdit = GetRandomCase();
        caseToEdit.IsEscalated = !caseToEdit.IsEscalated;
        caseToEdit.Reason = GenerateRandomString(GetRandomNumber(10));
        update caseToEdit;
    }
    
    private void CreateRandomContact() {
        Contact newContact = new Contact();
        newContact.FirstName = GenerateRandomFirstName();
        newContact.LastName = GenerateRandomLastName();
        newContact.Description = GenerateRandomString(GetRandomNumber(20));
        insert newContact;
        ContactCount = ContactCount + 1;
    }
    
    private Contact GetRandomContact(){
        Integer contactsCount = ContactCount;
        Integer randomContactIndex = Math.floor(Math.random() * contactsCount).intValue();
        return [SELECT FirstName, LastName, Description FROM Contact LIMIT 1 OFFSET :randomContactIndex];
    }
    
    private void DeleteRandomContact() {
        Contact contactToDelete = GetRandomContact();
        delete contactToDelete;
        ContactCount = ContactCount - 1;
    }
    
    private void EditRandomContact() {
        Contact contactToEdit = GetRandomContact();
        contactToEdit.FirstName = GenerateRandomFirstName();
        contactToEdit.LastName = GenerateRandomLastName();
        contactToEdit.Description = GenerateRandomString(GetRandomNumber(20));
        update contactToEdit;
    }
    
    private void CreateRandomLead() {
        Lead newLead = new Lead();
        newLead.LastName = GenerateRandomLastName();
        newLead.Company = GenerateRandomCompany();
        newLead.Phone = GenerateRandomPhone();
        insert newLead;
        LeadCount = LeadCount + 1;
    }
    
    private Lead GetRandomLead(){
        Integer leadsCount = LeadCount;
        Integer randomLeadIndex = Math.floor(Math.random() * leadsCount).intValue();
        return [SELECT Company, Phone FROM Lead LIMIT 1 OFFSET :randomLeadIndex];
    }
    
    private void DeleteRandomLead() {
        Lead leadToDelete = GetRandomLead();
        delete leadToDelete;
        LeadCount = LeadCount + 1;
    }
    
    private void EditRandomLead() {
        Lead leadToEdit = GetRandomLead();
        leadToEdit.Company = GenerateRandomCompany();
        leadToEdit.Phone = GenerateRandomPhone();
        update leadToEdit;
    }
    
    private void CreateRandomOpportunity() {
        Opportunity newOpportunity = new Opportunity();
        newOpportunity.Description =  GenerateRandomString(GetRandomNumber(20)); 
        newOpportunity.Name = GenerateRandomCompany();
        newOpportunity.StageName = 'Stage1';
        newOpportunity.CloseDate =  date.newInstance(2020, 5, 1);
        insert newOpportunity;
        OpportunityCount = OpportunityCount + 1;
    }
    
    private Opportunity GetRandomOpportunity(){
        Integer opportunitiesCount = OpportunityCount;
        Integer randomOpportunityIndex = Math.floor(Math.random() * opportunitiesCount).intValue();
        return [SELECT NextStep, Description FROM Opportunity LIMIT 1 OFFSET :randomOpportunityIndex];
    }
    
    private void DeleteRandomOpportunity() {
        Opportunity opportunityToDelete = GetRandomOpportunity();
        delete opportunityToDelete;
        OpportunityCount = OpportunityCount - 1;
    }
    
    private void EditRandomOpportunity() {
        Opportunity opportunityToEdit = GetRandomOpportunity();
        opportunityToEdit.NextStep = GenerateRandomString(GetRandomNumber(5));
        opportunityToEdit.Description = GenerateRandomString(GetRandomNumber(10));
        update opportunityToEdit;
    }
    
    private void DoAccountAction() {
        try {
            Integer actionIndex =  GetRandomNumber(3);
            
            switch on actionIndex {
                 when 0 {
                     CreateRandomAccount();
                 }
                 when 1 {
                    DeleteRandomAccount();
                 }
                 when 2 {
                     EditRandomAccount();
                 }
                 when else {
                     System.debug('default');
                 }
            }
        }
        catch (DmlException e) {
            System.debug('DmlException exception caught ' + e.getMessage());
        }
        catch (SObjectException e) {
            System.debug('SObject exception caught ' + e.getMessage());
        }
        catch (System.QueryException e) {
            System.debug('QueryException exception caught ' + e.getMessage());
        }
        catch (Exception e) {
            System.debug('Generic exception caught ' + e.getMessage());
        }
    }
    
    private void DoCaseAction() {
        try {
            Integer actionIndex =  GetRandomNumber(3);
    
            switch on actionIndex {
                when 0 {
                    CreateRandomCase();
                }
                when 1 {
                    DeleteRandomCase();
                }
                when 2 {
                    EditRandomCase();
                }
                when else {
                    System.debug('default');
                }
            }
        }
        catch (DmlException e) {
            System.debug(e.getMessage());
        }
        catch (SObjectException e) {
            System.debug('SObject exception caught ' + e.getMessage());
        }
        catch (System.QueryException e) {
            System.debug('QueryException exception caught ' + e.getMessage());
        }
        catch (Exception e) {
            System.debug('Generic exception caught ' + e.getMessage());
        }
    }
    
    private void DoContactAction() {
        try {
            Integer actionIndex =  GetRandomNumber(3);
    
            switch on actionIndex {
                when 0 {
                    CreateRandomContact();
                }
                when 1 {
                    DeleteRandomContact();
                }
                when 2 {
                    EditRandomContact();
                }
                when else {
                    System.debug('default');
                }
            }
        }
        catch (DmlException e) {
            System.debug(e.getMessage());
        }
        catch (SObjectException e) {
            System.debug('SObject exception caught ' + e.getMessage());
        }
        catch (System.QueryException e) {
            System.debug('QueryException exception caught ' + e.getMessage());
        }
        catch (Exception e) {
            System.debug('Generic exception caught ' + e.getMessage());
        }
    }

    private void DoLeadAction() {
        try {
            Integer actionIndex =  GetRandomNumber(3);
    
            switch on actionIndex {
                when 0 {
                    CreateRandomLead();
                }
                when 1 {
                    DeleteRandomLead();
                }
                when 2 {
                    EditRandomLead();
                }
                when else {
                    System.debug('default');
                }
            }
        }
        catch (DmlException e) {
            System.debug(e.getMessage());
        }
        catch (SObjectException e) {
            System.debug('SObject exception caught ' + e.getMessage());
        }
        catch (System.QueryException e) {
            System.debug('QueryException exception caught ' + e.getMessage());
        }
        catch (Exception e) {
            System.debug('Generic exception caught ' + e.getMessage());
        }
    }

    private void DoOpportunityAction() {
        try {
            Integer actionIndex =  GetRandomNumber(3);
    
            switch on actionIndex {
                when 0 {
                    CreateRandomOpportunity();
                }
                when 1 {
                    DeleteRandomOpportunity();
                }
                when 2 {
                    EditRandomOpportunity();
                }
                when else {
                    System.debug('default');
                }
            }
        }
        catch (DmlException e) {
            System.debug(e.getMessage());
        }
        catch (SObjectException e) {
            System.debug('SObject exception caught ' + e.getMessage());
        }
        catch (System.QueryException e) {
            System.debug('QueryException exception caught ' + e.getMessage());
        }
        catch (Exception e) {
            System.debug('Generic exception caught ' + e.getMessage());
        }
    }
    
    global void execute(SchedulableContext ctx) {
        
        GetGlobalDataSetCounts();
        
        for (Integer i = 0; i < 15; i++) {
            DoAccountAction();
            DoCaseAction();
            DoContactAction();
            DoLeadAction();
            DoOpportunityAction();
        }
        
        String now = Datetime.now().format();
        System.debug('Data munger ran @ ' + now);
   }   
}