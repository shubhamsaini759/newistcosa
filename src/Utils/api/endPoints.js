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

    // put
        userEditDetail : 'User/PutUserMoreDetails?userId=1009',

    // post
        addCompany : 'Company'
} 