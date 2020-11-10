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
    get f_name() {return this._fName;}
    set f_name(fName){
        
        this._fName=fName;
    }
    get l_name() {return this._lName;}
    set l_name(lName){
        
        this._lName=lName;
    }
    get address(){
        return this._address;
    }
    set address(address){
        this._address = address;
    }

    get city(){
        return this._city;
    }
    set city(city){
        this._city = city;
    }

    get state(){
        return this._state;
    }
    set state(state){
        this._state = state;
    }

    get zip(){
        return this._zip;
    }
    set zip(zip){
        this._zip = zip;
    }

    get ph_no(){
        return this._phNo;
    }
    set ph_no(phNo){
        this._phNo = phNo
    }

    get email(){
        return this._email
    }
    set email(email){
        this._email = email
    }

    //method
    toString(){
        return "FirstName = " + this.fName + ", LastName = " + this.lName + ", Address = " + this.address + ", City = " + this.city + ", State = " + this.state + ", Zipcode = " + this.zip + ", PhoneNo = " + this.phNo + ", Email = " + this.email
    }
}
let addressBookData = new AddressBookData("abc", "def", "1234 street", "City1", "State1", "121331", "9999999999", "abc@gmail.com")
console.log(addressBookData.toString())