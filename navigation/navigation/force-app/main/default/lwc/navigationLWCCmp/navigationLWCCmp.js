import { LightningElement, api } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';
export default class NavigationLWCCmp extends NavigationMixin(LightningElement) {

    @api message;

    
    navigateToLWC(){
        var compDetails={
            componentDef:'c:navigationExample',
            attributes:{
    
            }
        }
        this[NavigationMixin.Navigate]({
            type:'standard__webPage',
            attributes:{
                url:'/one/one.app#'+btoa(JSON.stringify(compDetails))
            }
        })
    }
}