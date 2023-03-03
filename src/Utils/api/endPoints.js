export const Path ={
// RegisterPage
    // get
        BatchList : 'Batch',
        RollNumber : 'Batch/GetRollNumberByBatch?batch=',
        Country : 'CommonType/GetByCountry',
        State : 'CommonType/GetByState?CountryId=',
        City : 'CommonType/GetByCity?StateId=',

    // put
        Register : 'Account/PutRegister',


// Login Page

    // post
        UserLogin : 'Account',


// Dashboard
    // get
        userMoreDetail : 'User/EditUserMoreDetails/1006',
        companyList : 'Company',
        userProfile : 'User/UserProfile/1006',
 
    // put
        userEditDetail : 'User/PutUserMoreDetails?userId=1006',

    // post
        addCompany : 'Company',
        professionalInfo : 'User/AddProfessionalInfo'
} 
