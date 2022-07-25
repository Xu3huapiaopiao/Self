import React from 'react';
// import { DataUtil } from '@syncfusion/ej2-data';
// import { useStateContext } from '../contexts/ContextProvider';
// import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

// const DialogFormTemplate = ({ icon, bgColor, color, bgHoverColor, size, text, borderRadius, width }) => {
const DialogFormTemplate = (data) => {
//   const { setIsClicked, initialState } = useStateContext();
    
  return (
    <div>
        <div className="form-row">
            <div className="form-group col-md-6">
                <div className="e-float-input e-control-wrapper">
                    <input id="nameOfOpportunity" name="nameOfOpportunity" type="text" value={data.Name} onChange={this.onChange}/>
                    <span className="e-float-line"/>
                    <label className="e-float-text e-label-top">Name Of Opportunity</label>
                </div>
            </div>
            <div className="form-group col-md-6">
                <div className="e-float-input e-control-wrapper">
                    <input id="tenderNo" name="tenderNo" type="text" value={data.Tender} onChange={this.onChange}/>
                    <span className="e-float-line"/>
                    <label className="e-float-text e-label-top">Tender Number</label>
                </div>
            </div>
        </div>
        <div className="form-row">
            <div className="form-group col-md-6">
                <DropDownListComponent id="parentAgency" value={data.ReportsTo} fields={{ text: 'Parent Agency', value: 'Parent Agency' }} placeholder="Parent Agency" popupHeight='300px' floatLabelType='Always'/>
            </div>
            <div className="form-group col-md-6">
                <DropDownListComponent id="HPSAccountLevel" value={data.HPS} fields={{ text: 'HPS', value: 'HPS' }} placeholder="HPS" popupHeight='300px' floatLabelType='Always'/>
            </div>
        </div>
    </div>
    );
};

export default DialogFormTemplate;
