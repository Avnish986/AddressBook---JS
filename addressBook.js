class AddressBookData{

    //constructor
    constructor(...params){
        this.fName=params[0];
        this.lName=params[1];
        this.address=params[2];
        this.city=params[3];
        this.state=params[4];
        this.zip=params[5];
        this.phNo=params[6];
        this.email=params[7];

    }

    //getter and setter method
    get fName() {return this._fName;}
    set fName(fName){
        const regexFName = RegExp("^[A-Z]{1}[a-z]{2,}$");
        if(regexFName.test(fName)){
            this._fName=fName;
        }
        else
            throw "Invalid First Name";
    }
    get lName() {return this._lName;}
    set lName(lName){
        const regexLName = RegExp("^[A-Z]{1}[a-z]{2,}$");
        if(regexLName.test(lName))
            this._lName=lName;
        else
            throw "Invalid Last Name";    
    }
    get address(){
        return this._address;
    }
    set address(address){
        const regexAddress = RegExp("^[A-Z]{1}[a-z]{3,}$");
        if(regexAddress.test(address)){
           this._address = address;
        }
        else
            throw "Invalid Address";    
    }

    get city(){
        return this._city;
    }
    set city(city){
        const regexCity = RegExp("^[A-Z]{1}[a-z]{3,}$");
        if(regexCity.test(city))
            this._city = city;
        else
            throw "Invalid City";
    }

    get state(){
        return this._state;
    }
    set state(state){
        const regexState = RegExp("^[A-Z]{1}[a-z]{3,}$");
        if(regexState.test(state))
            this._state = state;
        else
            throw "Invalid State";
    }
    
    get zip(){
        return this._zip;
    }
    set zip(zip){
        const regexZip = RegExp("^[0-9]{3}\\s{0,1}[0-9]{3}$");
        if(regexZip.test(zip))
            this._zip = zip;
        else
            throw "Invalid ZipCode";    
    }
    
    get phNo(){
        return this._phNo;
    }
    set phNo(phNo){
        const regexPhNo = RegExp("^[0-9]{2}[ ]{1}[0-9]{10}$");
        if(regexPhNo.test(phNo))
            this._phNo = phNo
        else
            throw "Invalid Phone No";    
    }

    get email(){
        return this._email
    }
    set email(email){
        const regexEmail = RegExp("^([a-z]){1,}[a-z0-9]*([.+_-]){0,1}[0-9a-z]+(@){1}([0-9a-z]+)(\\.([a-z]){2,}){1}(\\.[a-z]{2,})?$")
        if(regexEmail.test(email))
            this._email = email;
        else
            throw "Invalid Email";    

    }

    //method
    toString(){
        return "FirstName = " + this.fName + ", LastName = " + this.lName + ", Address = " + this.address + ", City = " + this.city + ", State = " + this.state + ", Zipcode = " + this.zip + ", PhoneNo = " + this.phNo + ", Email = " + this.email
    }
}
let addressBookArray = new Array()
try{
let addressBookData = new AddressBookData("Avnish", "Gupta", "Streetabc", "Bathinda", "Punjab", "151001", "91 9999999999", "avnish@gmail.com");
let addressBookData1 = new AddressBookData("Test", "Test", "Streetabc", "Testcity", "Testsate", "151001", "91 9999999998", "test@gmail.com");
addressBookArray.push(addressBookData)
addressBookArray.push(addressBookData1)
}
catch(e){
    console.log(e);
}
console.log(addressBookArray)
