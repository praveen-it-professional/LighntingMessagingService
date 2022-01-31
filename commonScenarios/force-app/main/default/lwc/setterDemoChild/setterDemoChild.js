import { LightningElement, api } from 'lwc';

export default class SetterDemoChild extends LightningElement {
    abc

    @api
    get detail(){
        return  this.abc
    }
    set detail(data){
        let newAge = data.age*2
        this.abc = {...data, age:newAge, "location":"Melbourne"}
    }
}