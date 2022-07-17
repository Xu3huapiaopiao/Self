import React from "react";
import {
  FiShoppingBag,
  FiCreditCard,
  FiTag,
  FiUpload,
} from "react-icons/fi";
import {
  BsCurrencyDollar,
  BsShield,
} from "react-icons/bs";

import { BiChart } from "react-icons/bi";
import { RiUserSettingsLine } from "react-icons/ri";


export const links = [
  {
    links: [
      {
        name: "Dashboard",
        icon: <FiShoppingBag />,
      },
      {
        name: "Tag to track",
        icon: <FiTag />,
      },
      {
        name: "Data",
        icon: <BiChart />,
      },
      {
        name: "Upload",
        icon: <FiUpload />,
      },
      {
        name: "Manage User",
        icon: <RiUserSettingsLine />,
      },
    ],
  },
];

export const userProfileData = [
  {
    icon: <BsCurrencyDollar />,
    title: "My Profile",
    desc: "Account Settings",
    iconColor: "#03C9D7",
    iconBg: "#E5FAFB",
  },
  {
    icon: <BsShield />,
    title: "My Inbox",
    desc: "Messages & Emails",
    iconColor: "rgb(0, 194, 146)",
    iconBg: "rgb(235, 250, 242)",
  },
  {
    icon: <FiCreditCard />,
    title: "My Tasks",
    desc: "To-do and Daily Tasks",
    iconColor: "rgb(255, 244, 229)",
    iconBg: "rgb(254, 201, 15)",
  },
];

export const dropdownData = [
  {
    Id: "1",
    Time: "March 2021",
  },
  {
    Id: "2",
    Time: "April 2021",
  },
  {
    Id: "3",
    Time: "May 2021",
  },
];

const NameofOpportunity = (props) => (
  <div className="flex items-center gap-2">
    <p>{props.Name}</p>
  </div>
);



export const employeesGrid = [
  { headerText: 'Name Of Opportunity',
    width: '400',
    template: NameofOpportunity,
    textAlign: 'Center', 
  
  },

  { field: 'Name',
    headerText: '',
    width: '300',
    textAlign: 'Center',
  },
  { field: 'Tender',
    headerText: 'Tender No.',
    width: '300',
    textAlign: 'Center',
  },
  { headerText: 'H&PS Account Level',
    width: '300',
    textAlign: 'Center',
    field:'HPS' },

  { field: 'HireDate',
    headerText: 'Parent Agency (Ministry Level)',
    width: '300',
    format: 'yMd',
    textAlign: 'Center' },

  { field: 'ReportsTo',
    headerText: 'Agency',
    width: '300',
    textAlign: 'Center' },

  { field: 'PublishedDate',
    headerText: 'Published Date',
    width: 'a300',
    textAlign: 'Center' },

  { field: 'PlannedCloseDate',
    headerText: 'Planned Close Date',
    width: '300',
    textAlign: 'Center' },
    
  { field: 'ExtendedCloseDate',
    headerText: 'Extended Close Date',
    width: '300',
    textAlign: 'Center' },

  { field: 'Days',
    headerText: 'Offer Validity Duration (Days)',
    width: '300',
    textAlign: 'Center' },  

    { field: 'TwoEnvelopeBidding',
    headerText: ' Two Envelope Bidding',
    width: '300',
    textAlign: 'Center' },  
    
    { field: 'TenderType',
    headerText: 'Tender Type',
    width: '300',
    textAlign: 'Center' },  

    { field: 'CoveredunderWTO-GPA/FTA',
    headerText: 'Covered under WTO-GPA/FTA',
    width: '300',
    textAlign: 'Center' },  

    { field: 'ProcurementNature',
    headerText: 'Procurement Nature',
    width: '300',
    textAlign: 'Center' },  

    { field: 'ProcurementMethod',
    headerText: 'Procurement Method',
    width: '300',
    textAlign: 'Center' },  

    { field: 'Days',
    headerText: 'Offer Validity Duration (Days)',
    width: '300',
    textAlign: 'Center' },  

    { field: 'Days',
    headerText: 'Offer Validity Duration (Days)',
    width: '300',
    textAlign: 'Center' },  

    { field: 'Days',
    headerText: 'Offer Validity Duration (Days)',
    width: '300',
    textAlign: 'Center' },  

    { field: 'Days',
    headerText: 'Offer Validity Duration (Days)',
    width: '300',
    textAlign: 'Center' },  

    { field: 'Days',
    headerText: 'Offer Validity Duration (Days)',
    width: '300',
    textAlign: 'Center' },  

    { field: 'Days',
    headerText: 'Offer Validity Duration (Days)',
    width: '300',
    textAlign: 'Center' },  

    { field: 'Days',
    headerText: 'Offer Validity Duration (Days)',
    width: '300',
    textAlign: 'Center' },  

    { field: 'Days',
    headerText: 'Offer Validity Duration (Days)',
    width: '300',
    textAlign: 'Center' },  

    { field: 'Days',
    headerText: 'Offer Validity Duration (Days)',
    width: '300',
    textAlign: 'Center' },  

    { field: 'Days',
    headerText: 'Offer Validity Duration (Days)',
    width: '300',
    textAlign: 'Center' },  

    { field: 'Days',
    headerText: 'Offer Validity Duration (Days)',
    width: '300',
    textAlign: 'Center' },  

    { field: 'Days',
    headerText: 'Offer Validity Duration (Days)',
    width: '300',
    textAlign: 'Center' },  

    { field: 'Days',
    headerText: 'Offer Validity Duration (Days)',
    width: '300',
    textAlign: 'Center' },  

  
];




export const procurementData = [
  {
    PublishedDate: "9/9/2020",
    Name: 'Invitation to Tender for Application Maintenance and Support Services for the Accountant-General’s Department (AGD)',
    Tender: 'FINAGDETT20300002',
    HireDate: 'MOF',
    ReportsTo: 'Ministry Of Finance',
    HPS:'MOF',
    PlannedCloseDate: 'NaN',
    ExtendedCloseDate:'NaN',
    Days:'NaN',
    ProcurementType:'NaN'
  
  },
  {
    PublishedDate: "29/12/2020",
    Name: 'Maintenance and Enhancement of Healthcare and Medical Insurance Systems',
    Tender: 'CPF000ETT20300030',
    HireDate: 'MOM',
    HPS:'CPF',
    ReportsTo: 'Central Provident Fund Board ',
    PlannedCloseDate: 'NaN',
    ExtendedCloseDate:'NaN',
    Days:'NaN',
    ProcurementType:'NaN'
       
  },
  {
    PublishedDate: '4/1/2021',
    Name: 'Maintenance and Enhancement of Healthcare and Medical Insurance Systems',
    Tender: 'CPF000ETT20300032',
    HireDate: 'MOM',
    HPS:'CPF',
    ReportsTo: 'Central Provident Fund Board',
    PlannedCloseDate: 'NaN',
    ExtendedCloseDate:'NaN',
    Days:'NaN',
    ProcurementType:'NaN'
       
  },
  {
    PublishedDate: '4/1/2021',
    Name: 'Request for Proposal (RFP) for Online Engagement Strategy Development and Operational Support',
    Tender: 'CPF000ETT20300031',
    HireDate: 'MOM',
    HPS:'CPF',
    ReportsTo: 'Central Provident Fund Board',
    PlannedCloseDate: 'NaN',
    ExtendedCloseDate:'NaN',
    Days:'NaN',
    ProcurementType:'NaN'
       
  },
  // {
  //   EmployeeID: 5,
  //   Name: 'Omar Darobe',
  //   Title: 'HR',
  //   HireDate: '01/02/2021',
  //   Country: 'USA',
  //   ReportsTo: 'Carson',
       
  // },
  // {
  //   EmployeeID: 4,
  //   Name: 'Penjani Inyene',
  //   Title: 'Marketing Head',
  //   HireDate: '01/02/2021',
  //   Country: 'USA',
  //   ReportsTo: 'Carson',
       
  // },
  // {
  //   EmployeeID: 5,
  //   Name: 'Miron Vitold',
  //   Title: 'HR',
  //   HireDate: '01/02/2021',
  //   Country: 'USA',
  //   ReportsTo: 'Carson',
       
  // },
  // {
  //   EmployeeID: 1,
  //   Name: 'Nancy Davolio',
  //   Title: 'Sales Representative',
  //   HireDate: '01/02/2021',
  //   Country: 'USA',
  //   ReportsTo: 'Carson',
  

  // },
  // {
  //   EmployeeID: 2,
  //   Name: 'Nasimiyu Danai',
  //   Title: 'Marketing Head',
  //   HireDate: '01/02/2021',
  //   Country: 'USA',
  //   ReportsTo: 'Carson',
       
  // },
  // {
  //   EmployeeID: 3,
  //   Name: 'Iulia Albu',
  //   Title: 'HR',
  //   HireDate: '01/02/2021',
  //   Country: 'USA',
  //   ReportsTo: 'Carson',
       
  // },
  // {
  //   EmployeeID: 4,
  //   Name: 'Siegbert Gottfried',
  //   Title: 'Marketing Head',
  //   HireDate: '01/02/2021',
  //   Country: 'USA',
  //   ReportsTo: 'Carson',
       
  // },
  // {
  //   EmployeeID: 5,
  //   Name: 'Omar Darobe',
  //   Title: 'HR',
  //   HireDate: '01/02/2021',
  //   Country: 'USA',
  //   ReportsTo: 'Carson',
       
  // },
  // {
  //   EmployeeID: 4,
  //   Name: 'Penjani Inyene',
  //   Title: 'Marketing Head',
  //   HireDate: '01/02/2021',
  //   Country: 'USA',
  //   ReportsTo: 'Carson',
       
  // },
  // {
  //   EmployeeID: 5,
  //   Name: 'Miron Vitold',
  //   Title: 'HR',
  //   HireDate: '01/02/2021',
  //   Country: 'USA',
  //   ReportsTo: 'Carson',
       
  // },
  // {
  //   EmployeeID: 1,
  //   Name: 'Nancy Davolio',
  //   Title: 'Sales Representative',
  //   HireDate: '01/02/2021',
  //   Country: 'USA',
  //   ReportsTo: 'Carson',
  
  // },
  // {
  //   EmployeeID: 2,
  //   Name: 'Nasimiyu Danai',
  //   Title: 'Marketing Head',
  //   HireDate: '01/02/2021',
  //   Country: 'USA',
  //   ReportsTo: 'Carson',
       
  // },
  // {
  //   EmployeeID: 3,
  //   Name: 'Iulia Albu',
  //   Title: 'HR',
  //   HireDate: '01/02/2021',
  //   Country: 'USA',
  //   ReportsTo: 'Carson',
       
  // },
  // {
  //   EmployeeID: 4,
  //   Name: 'Siegbert Gottfried',
  //   Title: 'Marketing Head',
  //   HireDate: '01/02/2021',
  //   Country: 'USA',
  //   ReportsTo: 'Carson',
       
  // },
  // {
  //   EmployeeID: 5,
  //   Name: 'Omar Darobe',
  //   Title: 'HR',
  //   HireDate: '01/02/2021',
  //   Country: 'USA',
  //   ReportsTo: 'Carson',
       
  // },
  // {
  //   EmployeeID: 4,
  //   Name: 'Penjani Inyene',
  //   Title: 'Marketing Head',
  //   HireDate: '01/02/2021',
  //   Country: 'USA',
  //   ReportsTo: 'Carson',
       
  // },
  // {
  //   EmployeeID: 5,
  //   Name: 'Miron Vitold',
  //   Title: 'HR',
  //   HireDate: '01/02/2021',
  //   Country: 'USA',
  //   ReportsTo: 'Carson',
       
  // },
  // {
  //   EmployeeID: 1,
  //   Name: 'Nancy Davolio',
  //   Title: 'Sales Representative',
  //   HireDate: '01/02/2021',
  //   Country: 'USA',
  //   ReportsTo: 'Carson',
  

  // },
  // {
  //   EmployeeID: 2,
  //   Name: 'Nasimiyu Danai',
  //   Title: 'Marketing Head',
  //   HireDate: '01/02/2021',
  //   Country: 'USA',
  //   ReportsTo: 'Carson',
       
  // },
  // {
  //   EmployeeID: 3,
  //   Name: 'Iulia Albu',
  //   Title: 'HR',
  //   HireDate: '01/02/2021',
  //   Country: 'USA',
  //   ReportsTo: 'Carson',
       
  // },
  // {
  //   EmployeeID: 4,
  //   Name: 'Siegbert Gottfried',
  //   Title: 'Marketing Head',
  //   HireDate: '01/02/2021',
  //   Country: 'USA',
  //   ReportsTo: 'Carson',
       
  // },
  // {
  //   EmployeeID: 5,
  //   Name: 'Omar Darobe',
  //   Title: 'HR',
  //   HireDate: '01/02/2021',
  //   Country: 'USA',
  //   ReportsTo: 'Carson',
       
  // },
  // {
  //   EmployeeID: 4,
  //   Name: 'Penjani Inyene',
  //   Title: 'Marketing Head',
  //   HireDate: '01/02/2021',
  //   Country: 'USA',
  //   ReportsTo: 'Carson',
       
  // },
  // {
  //   EmployeeID: 5,
  //   Name: 'Miron Vitold',
  //   Title: 'HR',
  //   HireDate: '01/02/2021',
  //   Country: 'USA',
  //   ReportsTo: 'Carson',
       
  // },
  // {
  //   EmployeeID: 1,
  //   Name: 'Nancy Davolio',
  //   Title: 'Sales Representative',
  //   HireDate: '01/02/2021',
  //   Country: 'USA',
  //   ReportsTo: 'Carson',
  

  // },
  // {
  //   EmployeeID: 2,
  //   Name: 'Nasimiyu Danai',
  //   Title: 'Marketing Head',
  //   HireDate: '01/02/2021',
  //   Country: 'USA',
  //   ReportsTo: 'Carson',
       
  // },
  // {
  //   EmployeeID: 3,
  //   Name: 'Iulia Albu',
  //   Title: 'HR',
  //   HireDate: '01/02/2021',
  //   Country: 'USA',
  //   ReportsTo: 'Carson',
       
  // },
  // {
  //   EmployeeID: 4,
  //   Name: 'Siegbert Gottfried',
  //   Title: 'Marketing Head',
  //   HireDate: '01/02/2021',
  //   Country: 'USA',
  //   ReportsTo: 'Carson',
  
  // },
  // {
  //   EmployeeID: 5,
  //   Name: 'Omar Darobe',
  //   Title: 'HR',
  //   HireDate: '01/02/2021',
  //   Country: 'USA',
  //   ReportsTo: 'Carson',
  
  // },
  // {
  //   EmployeeID: 4,
  //   Name: 'Penjani Inyene',
  //   Title: 'Marketing Head',
  //   HireDate: '01/02/2021',
  //   Country: 'USA',
  //   ReportsTo: 'Carson',
       
  // },
  // {
  //   EmployeeID: 5,
  //   Name: 'Miron Vitold',
  //   Title: 'HR',
  //   HireDate: '01/02/2021',
  //   Country: 'USA',
  //   ReportsTo: 'Carson',
       
  // },
  // {
  //   EmployeeID: 1,
  //   Name: 'Nancy Davolio',
  //   Title: 'Sales Representative',
  //   HireDate: '01/02/2021',
  //   Country: 'USA',
  //   ReportsTo: 'Carson',
  

  // },
  // {
  //   EmployeeID: 2,
  //   Name: 'Nasimiyu Danai',
  //   Title: 'Marketing Head',
  //   HireDate: '01/02/2021',
  //   Country: 'USA',
  //   ReportsTo: 'Carson',
       
  // },
  // {
  //   EmployeeID: 3,
  //   Name: 'Iulia Albu',
  //   Title: 'HR',
  //   HireDate: '01/02/2021',
  //   Country: 'USA',
  //   ReportsTo: 'Carson',
       
  // },
  // {
  //   EmployeeID: 4,
  //   Name: 'Siegbert Gottfried',
  //   Title: 'Marketing Head',
  //   HireDate: '01/02/2021',
  //   Country: 'USA',
  //   ReportsTo: 'Carson',
       
  // },
  // {
  //   EmployeeID: 5,
  //   Name: 'Omar Darobe',
  //   Title: 'HR',
  //   HireDate: '01/02/2021',
  //   Country: 'USA',
  //   ReportsTo: 'Carson',
       
  // },
  // {
  //   EmployeeID: 4,
  //   Name: 'Penjani Inyene',
  //   Title: 'Marketing Head',
  //   HireDate: '01/02/2021',
  //   Country: 'USA',
  //   ReportsTo: 'Carson',
       
  // },
  // {
  //   EmployeeID: 5,
  //   Name: 'Miron Vitold',
  //   Title: 'HR',
  //   HireDate: '01/02/2021',
  //   Country: 'USA',
  //   ReportsTo: 'Carson',
       
  // },
  // {
  //   EmployeeID: 1,
  //   Name: 'Nancy Davolio',
  //   Title: 'Sales Representative',
  //   HireDate: '01/02/2021',
  //   Country: 'USA',
  //   ReportsTo: 'Carson',
  

  // },
  // {
  //   EmployeeID: 2,
  //   Name: 'Nasimiyu Danai',
  //   Title: 'Marketing Head',
  //   HireDate: '01/02/2021',
  //   Country: 'USA',
  //   ReportsTo: 'Carson',
       
  // },
  // {
  //   EmployeeID: 3,
  //   Name: 'Iulia Albu',
  //   Title: 'HR',
  //   HireDate: '01/02/2021',
  //   Country: 'USA',
  //   ReportsTo: 'Carson',
       
  // },
  // {
  //   EmployeeID: 4,
  //   Name: 'Siegbert Gottfried',
  //   Title: 'Marketing Head',
  //   HireDate: '01/02/2021',
  //   Country: 'USA',
  //   ReportsTo: 'Carson',
       
  // },
  // {
  //   EmployeeID: 5,
  //   Name: 'Omar Darobe',
  //   Title: 'HR',
  //   HireDate: '01/02/2021',
  //   Country: 'USA',
  //   ReportsTo: 'Carson',
       
  // },
  // {
  //   EmployeeID: 4,
  //   Name: 'Penjani Inyene',
  //   Title: 'Marketing Head',
  //   HireDate: '01/02/2021',
  //   Country: 'USA',
  //   ReportsTo: 'Carson',
       
  // },
  // {
  //   EmployeeID: 5,
  //   Name: 'Miron Vitold',
  //   Title: 'HR',
  //   HireDate: '01/02/2021',
  //   Country: 'USA',
  //   ReportsTo: 'Carson',
       
  // },
  // {
  //   EmployeeID: 1,
  //   Name: 'Nancy Davolio',
  //   Title: 'Sales Representative',
  //   HireDate: '01/02/2021',
  //   Country: 'USA',
  //   ReportsTo: 'Carson',
  

  // },
  // {
  //   EmployeeID: 2,
  //   Name: 'Nasimiyu Danai',
  //   Title: 'Marketing Head',
  //   HireDate: '01/02/2021',
  //   Country: 'USA',
  //   ReportsTo: 'Carson',
       
  // },
  // {
  //   EmployeeID: 3,
  //   Name: 'Iulia Albu',
  //   Title: 'HR',
  //   HireDate: '01/02/2021',
  //   Country: 'USA',
  //   ReportsTo: 'Carson',
       
  // },
  // {
  //   EmployeeID: 4,
  //   Name: 'Siegbert Gottfried',
  //   Title: 'Marketing Head',
  //   HireDate: '01/02/2021',
  //   Country: 'USA',
  //   ReportsTo: 'Carson',
       
  // },
  // {
  //   EmployeeID: 5,
  //   Name: 'Omar Darobe',
  //   Title: 'HR',
  //   HireDate: '01/02/2021',
  //   Country: 'USA',
  //   ReportsTo: 'Carson',
       
  // },
  // {
  //   EmployeeID: 4,
  //   Name: 'Penjani Inyene',
  //   Title: 'Marketing Head',
  //   HireDate: '01/02/2021',
  //   Country: 'USA',
  //   ReportsTo: 'Carson',
       
  // },
  // {
  //   EmployeeID: 5,
  //   Name: 'Miron Vitold',
  //   Title: 'HR',
  //   HireDate: '01/02/2021',
  //   Country: 'USA',
  //   ReportsTo: 'Carson',
       
  // },
  // {
  //   EmployeeID: 1,
  //   Name: 'Nancy Davolio',
  //   Title: 'Sales Representative',
  //   HireDate: '01/02/2021',
  //   Country: 'USA',
  //   ReportsTo: 'Carson',
  

  // },
  // {
  //   EmployeeID: 2,
  //   Name: 'Nasimiyu Danai',
  //   Title: 'Marketing Head',
  //   HireDate: '01/02/2021',
  //   Country: 'USA',
  //   ReportsTo: 'Carson',
       
  // },
  // {
  //   EmployeeID: 3,
  //   Name: 'Iulia Albu',
  //   Title: 'HR',
  //   HireDate: '01/02/2021',
  //   Country: 'USA',
  //   ReportsTo: 'Carson',
       
  // },
  // {
  //   EmployeeID: 4,
  //   Name: 'Siegbert Gottfried',
  //   Title: 'Marketing Head',
  //   HireDate: '01/02/2021',
  //   Country: 'USA',
  //   ReportsTo: 'Carson',
       
  // },
  // {
  //   EmployeeID: 5,
  //   Name: 'Omar Darobe',
  //   Title: 'HR',
  //   HireDate: '01/02/2021',
  //   Country: 'USA',
  //   ReportsTo: 'Carson',
       
  // },
  // {
  //   EmployeeID: 4,
  //   Name: 'Penjani Inyene',
  //   Title: 'Marketing Head',
  //   HireDate: '01/02/2021',
  //   Country: 'USA',
  //   ReportsTo: 'Carson',
       
  // },
  // {
  //   EmployeeID: 5,
  //   Name: 'Miron Vitold',
  //   Title: 'HR',
  //   HireDate: '01/02/2021',
  //   Country: 'USA',
  //   ReportsTo: 'Carson',
       
  // },
];

