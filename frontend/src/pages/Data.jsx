import React from "react";
import {
  GridComponent,
  Inject,
  ColumnsDirective,
  ColumnDirective,
  Search,
  Page,
  Toolbar,
  Sort,
  Filter,
  Edit
} from "@syncfusion/ej2-react-grids";
import { useEffect, useState } from "react";
import { procurementData, employeesGrid } from "../data/dummy";
import { Header } from "../components";
import { Link } from "react-router-dom";
import { DialogFormTemplate } from "../components";

const Data = () => {
  const [toolbarOptions, setToolBarOptions] = useState(null);
  const [editing, setEditing] = useState(null);
  const editTemplate = (props) => {
    return (<DialogFormTemplate {...props}/>);
  }

  useEffect(() => {
    setToolBarOptions(["Search", "Edit", "Add", "Delete", "Cancel", "Update"]);
    setEditing({ allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog', template: editTemplate});
  }, []);

  return (
    <div className="bg-color-own m-2 md:m-10 mt-24 p-2 md:p-10  rounded-3xl">
      <nav>
        <Link to="DataEdit">Data Edit</Link>
      </nav>
      <Header title="GeBiz Procurement" />

      <GridComponent
        dataSource={procurementData}
        width="70vw"
        allowPaging
        allowSorting
        allowFiltering = {true}
        allowEditing = {true}
        filterSettings = { {type :'Excel'}}
        pageSettings={{ pageCount: 6 }}
        editSettings={editing}
        toolbar={toolbarOptions}
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Search, Toolbar, Page, Sort, Filter, Edit]} />
      </GridComponent>
    </div>
  );
};
export default Data;
