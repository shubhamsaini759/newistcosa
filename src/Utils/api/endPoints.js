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
        userMoreDetail : 'User/EditUserMoreDetails/1000',
        companyList : 'Company',
        userProfile : 'User/UserProfile/1000',
        professionalDetails : 'User/UserProfessionalEdit/6301',
 
    // put
        userEditDetail : 'User/PutUserMoreDetails?userId=1000',
        ProfessionalEdit : 'User/PutProfessionalInfo/1000',
        changeImage : 'User/ChangeProfilePicture?userId=1000',


    // post
        addCompany : 'Company',
        professionalInfo : 'User/AddProfessionalInfo'
} 

