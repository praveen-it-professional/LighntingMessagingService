import { LightningElement, wire } from 'lwc';
import {NavigationMixin, CurrentPageReference} from 'lightning/navigation';
import {encodeDefaultFieldValues} from 'lightning/pageReferenceUtils';
export default class NavigationExample extends NavigationMixin(LightningElement) {
    
    @wire(CurrentPageReference)
    pageRef

    get currentPageRef(){
        return this.pageRef?JSON.stringify(this.pageRef, null, 2):'No Page Ref Found';
    }
    
    handleNavigation(){
        
        this[NavigationMixin.Navigate]({
            type:'standard__namedPage',
            attributes:{
                pageName:'home'
            }
        })
    }

    navigateToChatter(){

        this[NavigationMixin.Navigate]({
            type:'standard__namedPage',
            attributes:{
                pageName:'chatter'
            }
        })
    }

    navigateToNewContact(){
        const defaultValue = encodeDefaultFieldValues({ 
            FirstName:'Praveen',
            LastName:'Pujar',
            LeadSource:'Other'
        }) 
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'Contact',
                actionName:'new'
            },
            state:{
                defaultFieldValues: defaultValue
            }
        })
    }
    /*recordViewMode(){ 
        this[NavigationMixin.Navigate]({ 
            type:'standard__recordPage',
            attributes:{ 
                recordId:'003N000001laB1ZIAU',
                objectApiName:'Contact',
                actionName:'view'
            }
        })
    }
    recordEditMode(){ 
        this[NavigationMixin.Navigate]({ 
            type:'standard__recordPage',
            attributes:{ 
                recordId:'003N000001laB1ZIAU',
                objectApiName:'Contact',
                actionName:'edit'
            }
        })
    }*/

    navigateToLWC(){

        var definition={
            componentDef:'c:navigationLWCCmp',
            attributes: {
                message:'You are navigated to LWC Cmp'
            }
        }
        this[NavigationMixin.Navigate]({
            type:'standard__webPage',
            attributes:{
                url:'/one/one.app#'+btoa(JSON.stringify(definition))
            }
        })
    }

    navigateToAura(){


        this[NavigationMixin.Navigate]({
            type:'standard__component',
            attributes:{
                componentName:'c__NavigateToAura'
            },
            state:{ 
                "c__id":"7876868687686"
            }
            
        })
    }

    navigateToListView(){
        const pageReference={
            type:'standard__objectPage',
            attributes:{
                objectApiName:'Contact',
                actionName:'list'
            },
            state:{
                filterName:'Recent'
            }
        }
        this[NavigationMixin.Navigate](pageReference)
    }

    navigateToFile(){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'ContentDocument',
                actionName:'home'
            }
        })
    }

    navigateTowebPage(){
        this[NavigationMixin.Navigate]({ 
            type:"standard__webPage",
            attributes:{ 
                url:"https://www.salesforcetroop.com"
            }
        })
    }

    navigateToVFPage(){ 
        this[NavigationMixin.Navigate]({ 
            type:"standard__webPage",
            attributes:{ 
                url:"/apex/navigateVfpage"
            }
        }).then(generatedUrl=>{ 
            console.log(generatedUrl)
            window.open(generatedUrl)
        })
    }

    navigateToRelatedList(){ 
        this[NavigationMixin.Navigate]({ 
            type:'standard__recordRelationshipPage',
            attributes:{ 
                recordId:'001N000001ytCVOIA2',
                objectApiName:'Account',
                relationshipApiName:'Contacts',
                actionName:'view'
            }
        })
    }

    navigateToTab(){ 
        this[NavigationMixin.Navigate]({ 
            type:'standard__navItemPage',
            attributes:{ 
                apiName:'LMS'
            }
        })
    }


}