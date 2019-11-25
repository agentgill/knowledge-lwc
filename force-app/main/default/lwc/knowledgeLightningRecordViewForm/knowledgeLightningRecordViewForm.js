// import { LightningElement, api, wire } from "lwc";
// import { getSObjectValue } from "@salesforce/apex";
// import getSingleKnowledgeRecord from "@salesforce/apex/KnowledgeController.getSingleKnowledgeRecord";

// import TITLE_FIELD from "@salesforce/schema/Knowledge__kav.Title";

// export default class KnowledgeLightningRecordViewForm extends LightningElement {
//   @api recordId;
//   @wire(getSingleKnowledgeRecord) Knowledge__kav;

//   get title() {
//     return this.Knowledge__kav.data
//       ? getSObjectValue(this.Knowledge__kav.data, TITLE_FIELD)
//       : "";
//   }
// }

import { LightningElement, api, wire } from "lwc";
import { getRecord, getFieldValue } from "lightning/uiRecordApi";
import TITLE_FIELD from "@salesforce/schema/Knowledge__kav.Title";
const fields = [TITLE_FIELD];

export default class KnowledgeLightningRecordViewForm extends LightningElement {
  @api recordId;

  @wire(getRecord, { recordId: "$recordId", fields })
  Knowledge__kav;

  get title() {
    return getFieldValue(this.Knowledge__kav.data, TITLE_FIELD);
  }
}
