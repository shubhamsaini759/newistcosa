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
        userMoreDetail : 'User/EditUserMoreDetails/161100',
        companyList : 'Company',
        userProfile : 'User/UserProfile/161100',
        professionalDetails : 'User/UserProfessionalEdit/161100',
        PersonalDetails : 'User/UserPersonalEdit/161100',
 
    // put
        userEditDetail : 'User/PutUserMoreDetails?userId=161100',
        ProfessionalEdit : 'User/PutProfessionalInfo/161100',
        changeImage : 'User/ChangeProfilePicture?userId=161100',


    // post
        addCompany : 'Company',
        professionalInfo : 'User/AddProfessionalInfo'
} 

