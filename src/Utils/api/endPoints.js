export const Path ={
    // get
        BatchList : 'http://192.168.29.113/ISTCOSA.API/Batch',
        RollNumber : 'http://192.168.29.113/ISTCOSA.API/RollNumber/GetAllRollNoByBatch?BatchId=',
        Country : 'http://192.168.29.113/ISTCOSA.API/CommonType/GetByCountry',
        State : 'http://192.168.29.113/ISTCOSA.API/CommonType/GetByState?CountryId=',
        City : 'http://192.168.29.113/ISTCOSA.API/CommonType/GetByCity?StateId=',

    // put
        Register : 'http://192.168.29.113/ISTCOSA.API/Account/PutRegister',

} 