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
        userMoreDetail : 'User/EditUserMoreDetails/1009',
        companyList : 'Company',
        userProfile : 'User/UserProfile/6301',
 
    // put
        userEditDetail : 'User/PutUserMoreDetails?userId=6301',

    // post
        addCompany : 'Company'
} 
